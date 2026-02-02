# PROJECT BIBLE
## Rules & Constraints
1. **Source of Truth**: This file, LOGIC_MAP.md, and PROJECT_STATE.md are the absolute sources of truth.
2. **Tech Stack**:
    - Frontend: Next.js 14+ (React)
    - Backend: FastAPI (Python)
    - Database: PostgreSQL (Supabase/local) + Prisma
    - AI: Google Studio API (Gemini)
    - Python Execution: Pyodide (Browser) + Optional Backend Sandbox
3. **Language**:
    - Code: TypeScript (Frontend), Python (Backend)
    - Content: English (Primary), Vietnamese (Explanations/Support)
4. **Design**:
    - "Rich Aesthetics": Vibrant, dark mode, glassmorphism.
    - No placeholders for images (use generate_image).
5. **Code Quality**:
    - Strict typing (TypeScript).
    - Error handling (try/catch) is mandatory.
    - No hardcoded secrets (use .env).
6. **Documentation**:
    - Update LOGIC_MAP.md with every feature.
    - Update PROJECT_STATE.md at session start/end.
