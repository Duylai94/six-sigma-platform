# MASTER CONTEXT: Six Sigma Learning Platform (v0.8.2)
**Last Updated**: 2026-02-01
**Version**: 0.8.2 (Content Integration: Reverse Eng. Quizzes)

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

### **v0.8.2: Content Integration (Current)**
- **Reverse Engineering Quizzes**: Mapped 100 General Knowledge questions to Chapters.
- **Content Gap Closure**: Enriched Chapter 1 (Modules 1.1-1.5) with missing specific facts (DPMO formula, history stats, role nuances, specific tools) required to answer quizzes correctly.
- **Granular Mapping**: Updated `quiz-mapping.ts` to assign quizzes to specific modules rather than just chapter pools.

### **v0.8.1: Mobile Layout & AI Tutor Enhancements**
- **Mobile Layout Fixes**: `break-words`, `overflow-hidden` for text/bubbles. `userScalable: false` viewport.
- **AI Tutor**: 🌐 EN/VN toggle, explicit language instruction, better table rendering.

### **v0.8.0: The Capstone Project**
- **Titan Casting Case Study**: A full end-to-end DMAIC project simulation.
- **Phase 1-5**: Define to Control phases fully simulated with realistic data and tasks.

### **v0.7.7: UI/UX Pro Max Audit**
- **Design System**: Teal (#0D9488) / Orange (#F97316) palette + Fira fonts.
- **Agent Skills**: Added `ui-ux-pro-max` skill for design pattern audits.

---

## 3. Technology Stack (v0.8.2)

### Frontend
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4 + Shadcn/UI.
- **Design System**: Pro Max palette (Teal/Orange), Fira Sans/Code fonts.
- **Components**: `FormattedText` (Markdown Tables), `PythonEditor` (Pyodide), `AITutor` (Perplexity).

### Data Architecture
- **Content**: Static TypeScript files (`src/data/chapters/*.ts`) for speed and versioning.
- **Quiz Mapping**: `src/data/quiz-mapping.ts` (Central registry for Question -> Module assignment).
- **User Data**: Supabase `user_progress` table (JSONB).

### AI & Backend
- **API**: `/api/ai/chat` (Next.js Route Handler).
- **Model**: Perplexity Sonar-Pro (via OpenRouter).
- **Database**: Supabase (PostgreSQL) + Row Level Security (RLS).

---

## 4. Key Components (v0.8.2)

| Component | Purpose | v0.8.2 Updates |
|-----------|---------|----------------|
| `FormattedText.tsx` | Markdown parser | Mobile-friendly table wrapping |
| `AITutor.tsx` | Global floating chat | Mobile width fixes, Language Toggle |
| `ChapterQuiz` | Quiz Engine | Uses `quiz-mapping.ts` for granular question pools |

---

## 5. Chapter Content Status (v0.8.2)

| Chapter | Title | Modules | Status | Quiz Integration |
|---------|-------|---------|--------|------------------|
| 1 | Foundations of Six Sigma | 5 | ✅ Complete | ✅ Reverse Engineered |
| 2 | Define Phase | 5 | ✅ Complete | ⏳ Pending (Next Session) |
| 3 | Measure Phase | 5 | ✅ Complete | ⏳ Pending |
| 4 | Analyze Phase | 4 | ✅ Complete | ⏳ Pending |
| 5 | Improve Phase | 5 | ✅ Complete | ⏳ Pending |
| 6 | Control Phase | 5 | ✅ Complete | ⏳ Pending |
| 7 | Statistical Tools | 5 | ✅ Complete | ⏳ Pending |
| 8 | Lean Six Sigma Integration | 4 | ✅ Complete | ⏳ Pending |
| 9 | Capstone Project | 3 | ✅ **Titan Casting** | N/A |
| 10 | Exam Prep & Tips | 2 | ✅ Complete | N/A |

---

## 6. Directory Structure (Key Paths)
- `src/data/chapters/`: The source of truth for course content.
- `src/data/quizzes/`: Raw question banks (G1-G100, etc.).
- `src/data/quiz-mapping.ts`: Logic mapping questions to modules.
- `docs/ai_context/`: Living documentation for Agentic workflows.
- `backups/`: Version snapshots.

---

## 7. Backup History

| Version | Date | Size | Notes |
|---------|------|------|-------|
| v0.8.2 | 2026-02-01 | ~10GB | Integration of General Knowledge Quizzes into Ch1 |
| v0.8.1 | 2026-02-01 | ~10GB | Mobile layout fixes, AI language toggle |
| v0.8.0 | 2026-02-01 | ~10GB | Capstone Project complete |
