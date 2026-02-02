# MASTER CONTEXT: Six Sigma Learning Platform (v0.8.1)
**Last Updated**: 2026-02-01
**Version**: 0.8.1 (Mobile Layout & AI Tutor Enhancements)

## 1. Project Overview
A professional, bilingual (English/Vietnamese) learning platform for Six Sigma Green Belt certification.
It uniquely combines **Theory** (CSSC/IASSC Aligned), **Practice** (Python Coding), and **Assessment** (Simulated Exams) into a modern web application.

### Core Philosophy
1.  **Bilingual First**: Every concept, quiz, and UI element is available in both English (Global exam standard) and Vietnamese (Local understanding).
2.  **Code-Driven Quality**: We teach statistical concepts (ANOVA, DOE, SPC) using Python (`pandas`, `scipy`), replacing legacy tools like Minitab.
3.  **Exam Simulation**: The platform mimics the real 100-question IASSC exam experience.
4.  **Cloud-Sync**: Progress follows the user across devices via **Supabase**.

---

## 2. Version History & Evolution

### **v0.8.1: Mobile Layout & AI Tutor Enhancements (Current)**
- **Mobile Layout Fixes**: 
  - Fixed text wrapping in `FormattedText.tsx` with `break-words`, `overflow-wrap-anywhere`.
  - Added global `overflow-x: hidden` to `html` and `body` in `globals.css`.
  - Added `viewport` meta tag in `layout.tsx` with `userScalable: false`.
  - Fixed header truncation and mobile padding in `[moduleId]/page.tsx`.
- **AI Tutor Language Toggle**:
  - Added 🌐 EN/VN toggle button in AI Tutor header.
  - API now enforces response language via explicit system prompt instruction.
- **AI Tutor Chat Wrapping**:
  - Fixed message bubble overflow with `overflow-hidden`, `break-words`, `max-w-full`.
  - Fixed TableParser for mobile with smaller padding and text wrapping.

### **v0.8.0: The Capstone Project**
- **Titan Casting Case Study**: A full end-to-end DMAIC project simulation.
- **Phase 1 (Define)**: Baseline Calculation (2.5 Sigma), Project Charter, Financial Impact ($2.7M loss).
- **Phase 2 (Measure)**: Data Health Check (Normality Test).
- **Phase 3 (Analyze)**: Root Cause Analysis (Correlation, Hypothesis Testing) identifying **Melt Temperature** as the "Smoking Gun".
- **Phase 4 (Improve)**: Regression Optimization (Target 750°C).
- **Phase 5 (Control)**: Xbar-R Control Charts and Reaction Plans to sustain gains (4.5 Sigma).

### **v0.7.7: UI/UX Pro Max Audit**
- **Design System**: Teal (#0D9488) / Orange (#F97316) palette + Fira fonts.
- **Mobile Fixes**: TabsList scrollable, content padding increased to `px-4`.
- **Card Fixes**: `p-0 overflow-hidden` on AITutor, PythonEditor, Flashcard.
- **Agent Skills**: Added `ui-ux-pro-max` skill for design pattern audits.

### **v0.7: Lesson Details & AI-Enhanced Python Sandbox**
- **AI-Enhanced Python Sandbox**: 6-section interactive tab.
- **Contextual AI Tutor**: Clickable badges in "Details" tab.
- **NotebookLM Integration**: AI-assisted content validation.

---

## 3. Technology Stack (v0.8.1)

### Frontend
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4 + Shadcn/UI.
- **Design System**: Pro Max palette (Teal/Orange), Fira Sans/Code fonts.
- **Components**: `FormattedText` (Markdown Tables), `PythonEditor` (Pyodide), `AITutor` (Perplexity).

### Data Architecture
- **Content**: Static TypeScript files (`src/data/chapters/*.ts`) for speed and versioning.
- **User Data**: Supabase `user_progress` table (JSONB).
- **Sync Strategy**: Cloud-First reading, Debounced writing.

### AI & Backend
- **API**: `/api/ai/chat` (Next.js Route Handler).
- **Model**: Perplexity Sonar-Pro (via OpenRouter).
- **Database**: Supabase (PostgreSQL) + Row Level Security (RLS).

---

## 4. Key Components (v0.8.1)

| Component | Purpose | v0.8.1 Updates |
|-----------|---------|----------------|
| `AITutor.tsx` | Global floating chat | 🌐 EN/VN toggle, `overflow-hidden` bubbles, chat text wrapping |
| `FormattedText.tsx` | Markdown parser | `break-words`, `overflow-wrap-anywhere`, mobile-friendly tables |
| `[moduleId]/page.tsx` | Module player | Header truncation, viewport meta, mobile padding |
| `globals.css` | Global styles | `overflow-x: hidden` on html/body, `.overflow-wrap-anywhere` utility |
| `layout.tsx` | Root layout | Viewport meta with `userScalable: false` |

---

## 5. Chapter Content Status (v0.8.1)

| Chapter | Title | Modules | Status |
|---------|-------|---------|--------|
| 1 | Foundations of Six Sigma | 5 | ✅ Complete |
| 2 | Define Phase | 5 | ✅ Complete |
| 3 | Measure Phase | 5 | ✅ Complete |
| 4 | Analyze Phase | 4 | ✅ Complete |
| 5 | Improve Phase | 5 | ✅ Complete |
| 6 | Control Phase | 5 | ✅ Complete |
| 7 | Statistical Tools | 5 | ✅ Complete |
| 8 | Lean Six Sigma Integration | 4 | ✅ Complete |
| 9 | Capstone Project | 3 | ✅ **Complete (Titan Casting)** |
| 10 | Exam Prep & Tips | 2 | ✅ Complete |

---

## 6. Agent Skills

| Skill | Path | Purpose |
|-------|------|---------|
| `ui-ux-pro-max` | `.agent/skills/ui-ux-pro-max/` | Design audits, UX guidelines, component patterns |

---

## 7. Directory Structure (Key Paths)
- `src/data/chapters/`: The source of truth for course content.
- `src/components/`: UI Library (Atomic Design).
- `docs/ai_context/`: Living documentation for Agentic workflows.
- `.agent/skills/`: Agent skill modules with CSV databases.
- `backups/`: Version snapshots (excludes node_modules, .next, .git).

---

## 8. Backup History

| Version | Date | Size | Notes |
|---------|------|------|-------|
| v0.8.1 | 2026-02-01 | ~10GB | Mobile layout fixes, AI language toggle |
| v0.8.0 | 2026-02-01 | ~10GB | Capstone Project complete |
| v0.7.7 | 2026-01-31 | ~10GB | UI/UX Pro Max audit |
