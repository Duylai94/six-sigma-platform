# MASTER CONTEXT: Six Sigma Learning Platform
**Last Updated**: 2026-02-02
**Current Version**: v0.8.3 (Define Phase Expansion)

## 1. Project Overview
A professional, bilingual (English/Vietnamese) learning platform for Six Sigma Green Belt certification. It uniquely combines **Theory** (CSSC/IASSC Aligned), **Practice** (Python Coding), and **Assessment** (Simulated Exams) into a modern web application.

### Core Philosophy
1.  **Bilingual First**: Every concept available in English (Global standard) and Vietnamese (Local understanding).
2.  **Code-Driven Quality**: Teaching statistical concepts via Python (`pandas`, `scipy`) rather than legacy Minitab.
3.  **Exam Simulation**: Mimics real 100-question IASSC exam experience.
4.  **Cloud-Sync**: Progress synced via Supabase.

---

## 2. Project Evolution & Task Log (v0.1 - Current)

| Version | Phase / Focus | Key Tasks & Features | Issues / Challenges | Solution / Prevention |
| :--- | :--- | :--- | :--- | :--- |
| **v0.1** | **Inception** | • Setup Next.js 14 App Router<br>• Tailwind CSS integration<br>• Basic "Hello World" structure | • Initial routing confusion<br>• Tailwind config conflicts | • Adopted `src/app` directory strictly.<br>• Use `npx create-next-app` best practices. |
| **v0.2** | **Core Arch.** | • Chapter/Module file structure<br>• Basic Markdown rendering<br>• Sidebar navigation | • JSON data becoming unmanageable<br>• Type safety missing | • Moved to TS files for data (`src/data/`).<br>• Defined strict TypeScript interfaces early. |
| **v0.3** | **Quiz Engine** | • **Refactor**: Split quizzes into `optionsBank`<br>• `useQuizRandomizer` hook<br>• Mock Exam logic | • Legacy data format incompatibility<br>• State persistence bugs | • Created migration scripts (`migrate_600_quiz.js`).<br>• Implemented `useQuizState` hook for robustness. |
| **v0.3.1** | **Deployment** | • Vercel Deployment<br>• Environment Variable setup | • Hardcoded `localhost` URLs caused prod failures | • Audit code for env vars.<br>• **Prevention**: Use central config file for API URLs. |
| **v0.3.2** | **Bilingual** | • `LanguageContext` implementation<br>• UI Toggles (EN/VN) | • Text overflow in VN (longer words)<br>• State reset on toggle | • CSS `break-words`, proper flex layouts.<br>• Persist language pref in localStorage/Supabase. |
| **v0.4** | **UI Polish** | • "Pro Max" Design System (Teal/Orange)<br>• Fira Sans fonts<br>• Shadcn/UI integration | • Inconsistent component styling<br>• Mobile responsiveness gaps | • Created global `globals.css` tokens.<br>• Mandatory mobile audit for every new component. |
| **v0.5** | **Auth & Backend** | • Supabase Auth (Magic Link)<br>• User Progress Tracking<br>• RLS Policies | • RLS blocking valid reads<br>• Auth state sync delay | • Simplified RLS policies for dev, refined later.<br>• Use Supabase hooks for real-time state. |
| **v0.6** | **Python Sandbox** | • Pyodide Integration<br>• Interactive Code Blocks<br>• `matplotlib` plotting | • WASM loading slowness<br>• Canvas resizing artifacts | • Lazy load Pyodide.<br>• Fixed container dimensions in CSS. |
| **v0.7** | **Adv. Content** | • Added Chapters 6-8 (Control/Lean)<br>• Statistical Tools integration | • Content gaps vs IASSC BOK<br>• Missing formulas | • Performed "Reverse Engineering" gap analysis.<br>• Enriched content based on missing quiz topics. |
| **v0.8.0** | **Capstone** | • **Titan Casting** Case Study (DMAIC)<br>• End-to-end project simulation | • Complexity of tracking simulation state<br>• Data continuity | • Built `CapstoneContext` to manage project state independent of course progress. |
| **v0.8.1** | **Mobile/AI** | • Mobile layout hardening (Tables)<br>• AI Tutor (Perplexity) w/ Lang Toggle | • Horizontal scroll on tables broken<br>• AI hallucinations | • Wrapped tables in `overflow-x-auto`.<br>• Prompt engineering for AI "Context Adherence". |
| **v0.8.2** | **Gap Closure** | • Reverse Eng. Ch1 Quizzes<br>• Granular `quiz-mapping.ts`<br>• Content Enrichment | • Mapping vague questions to specific modules | • Created `quiz-mapping.ts` for precise ID-to-Module control. |
| **v0.8.3** | **Define Exp.** | • **Current**: Define Phase Quizzes (200 Qs)<br>• Migration to `optionsBank`<br>• Syntax/Corruption fixes | • Migration script injected `\n` literals<br>• Corrupted objects (D58) | • Wrote specialized Python cleaning scripts.<br>• **Prevention**: Verify migration output *before* committing. |

---

## 3. Technology Stack
- **Frontend**: Next.js 15 (Turbopack), Tailwind v4, Shadcn/UI.
- **Backend**: Supabase (PostgreSQL, Auth, RLS).
- **AI**: Perplexity Sonar-Pro (via OpenRouter).
- **Execution**: Pyodide (Python 3.11 in browser).
- **State**: React Context + Supabase Sync.

## 4. Operational Protocols
### How to Solve Issues
1.  **Isolate**: Reproduce in isolation (e.g., specific module).
2.  **Audit**: Check `TASK_LOG.md` for recent changes.
3.  **Tooling**: Use Python scripts for batch text fixes (proven faster than manual).
4.  **Verify**: Always run `npm run build` locally before deployment.

### How to Avoid Recurrence
1.  **Strict Typing**: Maintain `src/types/` as source of truth.
2.  **Migration Verification**: Dry-run migration scripts on subset of data.
3.  **Mobile First**: Design components for 320px width first, then scale up.
4.  **Living Docs**: Update this `master_context.md` after every major phase.

---

## 5. Current Status (v0.8.3)
- **Focus**: Define Phase Content & Assessment.
- **Recent Achievement**: Successfully migrated and expanded Define Phase quizzes to 200 questions, fully mapped and type-safe.
- **Next Up**: Measure Phase Quiz Migration & Content Analysis.
