# MASTER CONTEXT: Six Sigma Learning Platform (v0.8.0)
**Last Updated**: 2026-02-01
**Version**: 0.8.0 (Capstone Project Edition)

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

### **v0.7: Lesson Details & AI-Enhanced Python Sandbox**
- **AI-Enhanced Python Sandbox**: 6-section interactive tab.
- **Contextual AI Tutor**: Clickable badges in "Details" tab.
- **NotebookLM Integration**: AI-assisted content validation.

### **v0.8: The Capstone Project (Current)**
- **Titan Casting Case Study**: A full end-to-end DMAIC project simulation.
- **Phase 1 (Define)**: Baseline Calculation (2.5 Sigma), Project Charter, Financial Impact ($2.7M loss).
- **Phase 2 (Measure)**: Data Health Check (Normality Test).
- **Phase 3 (Analyze)**: Root Cause Analysis (Correlation, Hypothesis Testing) identifying **Melt Temperature** as the "Smoking Gun".
- **Phase 4 (Improve)**: Regression Optimization (Target 750°C).
- **Phase 5 (Control)**: Xbar-R Control Charts and Reaction Plans to sustain gains (4.5 Sigma).
- **Complete Course Structure**: All 9 Chapters are now structurally complete with the Capstone serving as the practical integration.

---

## 3. Technology Stack (v0.8)

### Frontend
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4 + Shadcn/UI.
- **Components**: `FormattedText` (Markdown Tables), `PythonEditor` (Pyodide), `AITutor` (DeepSeek/Gemini).

### Data Architecture
- **Content**: Static TypeScript files (`src/data/chapters/*.ts`) for speed and versioning.
- **User Data**: Supabase `user_progress` table (JSONB).
- **Sync Strategy**: Cloud-First reading, Debounced writing.

### AI & Backend
- **API**: `/api/ai/chat` (Next.js Route Handler).
- **Model**: Perplexity Sonar-Pro (via OpenRouter) / Gemini Flash.
- **Database**: Supabase (PostgreSQL) + Row Level Security (RLS).

---

## 4. Chapter Content Status (v0.8)

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

## 5. Directory Structure (Key Paths)
- `src/data/chapters/`: The source of truth for course content.
- `src/components/`: UI Library (Atomic Design).
- `docs/ai_context/`: Living documentation for Agentic workflows.
