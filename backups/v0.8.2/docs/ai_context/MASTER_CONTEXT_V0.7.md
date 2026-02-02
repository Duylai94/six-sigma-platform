# MASTER CONTEXT: Six Sigma Learning Platform (v0.7.0)
**Last Updated**: 2026-01-31
**Version**: 0.7.0 (Lesson Details & Content Enrichment)

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

### **v0.3: The Quiz System Overhaul**
- **Architecture Shift**: Decoupled Data, Logic, and UI.
- **Mock Exam**: Built a 3-hour, 100-question simulator with IASSC phase distribution logic.

### **v0.4: Multilingual Support**
- **Global I18n**: Implemented `LanguageContext` and migrated content to bilingual fields (`_en` / `_vi`).

### **v0.5: Content Gap Closure**
- **Deep Content**: Added FMEA (RPN), COPQ (ROI), Normality Testing, and Regression logic.
- **Audit**: Verified content against IASSC standards.

### **v0.6: User Intelligence & Cloud**
- **Cloud Persistence**: Integrated **Supabase** for user authentication (Magic Link) and Progress Sync.
- **Smart Sync**: Developed "Optimistic UI with Debounced Save" strategy.
- **AI Upgrade**: Migrated Tutor from Gemini Flash to **Perplexity (Sonar-Pro)** via OpenRouter.
- **Dashboard Analytics**: Added `AnalyticsCard` to visualize mastery by DMAIC phase.

### **v0.7: Lesson Details & AI-Enhanced Python Sandbox**
- **Goal**: Transform learning modules into comprehensive, interactive, exam-ready study materials with AI assistance.
- **Key Deliverables**:
    - **AI-Enhanced Python Sandbox**: 6-section interactive tab (Concept, Formula, Steps, AI Prompts, Challenges, Editor).
    - **Contextual AI Tutor**: [NEW] Clickable badges in "Details" tab triggering relevant AI explanations.
    - **Flashcards Tab**: [NEW] Integrated bilingual flashcard review replacing the old "Project" tab.
    - **Schema Enhancement**: Extended `PythonCodeBlock` type with new fields for rich learning content.
    - **Content Formatting**: Standardized Ch 1 & 2 with rich examples and emojis.
    - **Table Support**: Enhanced `FormattedText` to render markdown tables.
    - **NotebookLM Integration**: AI-assisted content validation against authoritative sources.

---

## 3. Technology Stack (v0.7)

### Frontend
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS v4 + Shadcn/UI.
- **State Management**: 
    - `LanguageContext`: Global I18n.
    - `ProgressContext`: Global sync state + Optimistic updates.
- **Python Runtime**: Pyodide (WebAssembly).
- **Rich Text**: `FormattedText` component with markdown table support.

### Data Architecture
- **Content**: Static TypeScript files (`src/data/chapters/*.ts`) for speed and versioning.
- **User Data**: 
    - **Primary**: Supabase `user_progress` table (JSONB).
    - **Fallback**: `localStorage` (Guest Mode).
    - **Sync Strategy**: Cloud-First reading, Debounced writing (2s delay).

### AI & Backend
- **API**: `/api/ai/chat` (Next.js Route Handler).
- **Model**: Perplexity Sonar-Pro (via OpenRouter).
- **Database**: Supabase (PostgreSQL) + Row Level Security (RLS).
- **Content Validation**: NotebookLM MCP integration with 28-source Six Sigma knowledge base.

---

## 4. Chapter Content Status (v0.7)

| Chapter | Title | Modules | Status |
|---------|-------|---------|--------|
| 1 | Foundations of Six Sigma | 5 | ✅ Complete (Formatted) |
| 2 | Define Phase | 5 | ✅ 2.1 Complete (AI-Enhanced Python), 2.2-2.5 Pending |
| 3 | Measure Phase | 5 | 📋 Content Present |
| 4 | Analyze Phase | 4 | 📋 Content Present |
| 5 | Improve Phase | 5 | 📋 Content Present |
| 6 | Control Phase | 5 | 📋 Content Present |
| 7 | Statistical Tools | 5 | 📋 Content Present |
| 8 | Lean Six Sigma Integration | 4 | 📋 Content Present |
| 9 | Advanced Topics | 3 | 📋 Content Present |
| 10 | Exam Prep & Tips | 2 | ✅ Complete |

### Content Formatting Standards (v0.7)
- **Headers**: Use `**Bold Text**` instead of `##` markdown headers.
- **Separators**: Use `━━━━━━` for visual section breaks.
- **Tips**: Use `💡` emoji prefix for exam tips.
- **Examples**: Use `📌` emoji prefix for practical examples.
- **Tables**: Use standard markdown table syntax (now supported by `FormattedText`).

---

## 5. Directory Structure (Key Paths)

```
\\wsl$\Ubuntu\home\ddust\projects\six-sigma-platform\
├── docs\                   # Project Documentation (Bible, Logic Map, Context)
├── src\
│   ├── app\
│   │   ├── dashboard\      # Main Course Map + Analytics
│   │   ├── learn\[id]\     # The Player (Tabs: Theory, Code, Quiz)
│   │   └── mock-exam\      # The 100-Q Simulator
│   ├── components\
│   │   ├── layout\         # CourseSidebar (Sync Status UI)
│   │   ├── PythonEditor    # Monaco + Pyodide
│   │   ├── FormattedText   # Rich text with table support
│   │   └── quiz\           # Assessment Engines
│   ├── contexts\           # Global State (Language, Progress, Auth)
│   ├── lib\                # Supabase Client & Pyodide Utils
│   └── data\
│       ├── chapters\       # Bilingual Content (chapter1-10.ts)
│       ├── quizzes\        # Question Pools by Phase
│       └── i18n.ts         # UI Translation Dictionary
```

---

## 6. Development Environment
- **Primary Path**: `\\wsl$\Ubuntu\home\ddust\projects\six-sigma-platform\` (WSL Ubuntu)
- **Mirror Path**: `E:\Learning Six Sigma\` (Windows - for Vercel sync)
- **Dev Server**: Run via WSL for immediate hot-reload.
- **Backups**: `Backups/Version X.X.X/` folder structure for version snapshots.

---

## 7. Deployment & Maintenance
- **Platform**: Vercel (Production) + Supabase (Backend).
- **Build**: `npm run build` (Turbopack).
- **Validation**:
    - **Sync Logic**: `lastSyncError` exposed in Sidebar for instant debugging.
    - **Env Variables**: Must set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## 8. How to Continue (Agent Guidelines)
1.  **Read `LOGIC_MAP.md`**: For detailed component interactions (especially Sync flows).
2.  **Respect the Bible**: `PROJECT_BIBLE.md` dictates strict rules (No "happy path" assumptions).
3.  **Content Standards**: Follow v0.7 formatting standards (bold headers, `━━━` separators).
4.  **Use WSL Path**: All file edits should target the WSL path for immediate syncing.
5.  **Backup Before Major Changes**: Create version backup before significant modifications.

---
*End of Master Context v0.7.0*
