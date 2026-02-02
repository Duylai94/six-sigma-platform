// Simplified Pyodide Loader using Script Tag to avoid Webpack/Next.js bundling issues
// The "npm" package often causes "expression too dynamic" or FS errors in Next.js

const PYODIDE_VERSION = "0.26.2";
const PYODIDE_BASE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyodideInstance: any = null;
let pyodideLoadingPromise: Promise<any> | null = null;

// Helper to load the script tag
function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

export async function getPyodide(): Promise<any> {
    // If already loaded and initialized, return it
    if (pyodideInstance) return pyodideInstance;

    // If currently loading, return the promise
    if (pyodideLoadingPromise) return pyodideLoadingPromise;

    pyodideLoadingPromise = (async () => {
        if (typeof window === "undefined") return null; // Server-side guard

        try {
            // 1. Load the Pyodide JS from CDN
            await loadScript(`${PYODIDE_BASE_URL}pyodide.js`);

            // 2. Wait for it to define the global function
            // @ts-ignore
            if (!window.loadPyodide) {
                throw new Error("Pyodide script loaded but window.loadPyodide is not defined");
            }

            // 3. Initialize Pyodide
            // @ts-ignore
            const pyodide = await window.loadPyodide({
                indexURL: PYODIDE_BASE_URL
            });

            // 4. Load essential scientific packages
            // Note: In browser, these are huge. We assume fast internet or cache.
            await pyodide.loadPackage(["numpy", "pandas", "micropip"]);
            // Skipping 'scipy' and 'matplotlib' initially to speed up load time 0.1, 
            // can load them on demand or keep them if intended. 
            // Let's keep basics for now. Adding matplotlib back if needed.
            await pyodide.loadPackage("matplotlib");

            pyodideInstance = pyodide;
            return pyodide;

        } catch (e) {
            console.error("Failed to load Pyodide:", e);
            pyodideLoadingPromise = null;
            throw e;
        }
    })();

    return pyodideLoadingPromise;
}

export async function runPythonCode(code: string, onStdout?: (text: string) => void) {
    const pyodide = await getPyodide();

    try {
        // Modern Pyodide Clean Capture
        pyodide.setStdout({ batched: (msg: string) => onStdout?.(msg + "\n") });
        pyodide.setStderr({ batched: (msg: string) => onStdout?.("ERR: " + msg + "\n") });

        // Inject Plotting Backend & Suppress Warnings
        const plotSetup = `
import warnings
# Filter specific pandas/pyarrow warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)
warnings.filterwarnings("ignore", category=FutureWarning)

import matplotlib
matplotlib.use('Agg') # Non-interactive backend
import matplotlib.pyplot as plt
import io
import base64
import sys

# Ensure clean state
plt.clf()

def _custom_show():
    if plt.get_fignums():
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        img_str = base64.b64encode(buf.read()).decode('utf-8')
        # Print a special marker that the frontend can parse
        sys.stdout.write(f"\\n![PLOT_B64:{img_str}]\\n")
        plt.clf()

plt.show = _custom_show
`;
        await pyodide.runPythonAsync(plotSetup);

        await pyodide.loadPackagesFromImports(code);
        const result = await pyodide.runPythonAsync(code);

        // Force a show() call if one wasn't made, to catch any lingering plots?
        // No, let's respect the user's code. If they don't call show(), maybe they don't want a plot.
        // But for convenience in notebooks, we often auto-show. Let's stick to explicit show() or last line.

        return result;

    } catch (error: any) {
        return "Runtime Error: " + error.message;
    }
}
