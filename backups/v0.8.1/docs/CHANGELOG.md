# Changelog

## [0.8.0] - 2026-02-01
### 🎨 UI/UX Pro Max Complete
- **Dashboard Cards**: Aligned "Start Learning" buttons using CSS Grid `auto-rows-fr` + `CardFooter`.
- **Sidebar**: Added `mt-4` spacing between Dashboard and Curriculum sections.
- **Design System**: Teal (#0D9488) / Orange (#F97316) palette + Fira fonts.
- **Mobile Layout**: TabsList scrollable, content padding `px-4`.
- **Card Fixes**: `p-0 overflow-hidden` on AITutor, PythonEditor, Flashcard.
- **Agent Skills**: Added `ui-ux-pro-max` skill for design pattern audits.

## [0.7.7] - 2026-02-01
### 🎨 UI/UX Pro Max Audit & Fixes
- **Design System**: Injected Pro Max Teal (#0D9488) / Orange (#F97316) palette and premium shadows into `globals.css`.
- **Typography**: Upgraded to Fira Sans (Body) and Fira Code (Headings) via Google Fonts.
- **AI Tutor Fixes**:
    - Made chat width responsive (`w-[90vw]` on mobile).
    - Fixed scroll bleeding with `overscroll-contain`.
    - Fixed header gap with `p-0 overflow-hidden` on Card.
- **Mobile Layout Fixes**:
    - TabsList now scrollable on mobile (`overflow-x-auto flex-nowrap`).
    - Increased content padding from `px-2` to `px-4` for mobile.
    - All tabs (Theory, Python, Flashcards) now accessible on 375px screens.
- **Card Padding Fixes**:
    - `PythonEditor.tsx`: Added `p-0` to eliminate py-6 gap.
    - `Flashcard.tsx`: Added `p-0 overflow-hidden` to both faces.
- **Agent Skills**: Added `ui-ux-pro-max` skill with CSV databases for design patterns, UX guidelines, and component libraries.

## [0.7.6] - 2026-01-31
### 🤖 AI Tutor Language Synchronization
- **Feature**: "Ask AI Tutor" suggestions now respect the global Language Toggle.
	- Clicking an English suggestion sends the English text to the AI, ensuring an English response.
	- Clicking a Vietnamese suggestion sends the Vietnamese text.
- **Content**: Translated all AI suggestions for Chapter 1 (Foundations) and Chapter 2 (Define).
- **Fixes**:
	- **Scroll Chaining**: AI Tutor chat no longer scrolls the background page (Fixed `overscroll-behavior`).
	- **Table Rendering**: Improved `FormattedText` to handle complex/messy Markdown tables.
	- **Syntax**: Fixed double-nested array error in data files.

## [0.7.5] - 2026-01-31
### 🧠 Lesson Review & Contextual AI
- **Details Tab**: Added "Ask AI Tutor" section.
    - Badges (e.g., "Explain Cost Avoidance") trigger the global AI Tutor with specific context.
- **Flashcards Tab**: Replaced "Project" tab with a fully interactive Flashcards system.
    - **Bilingual**: Primary in Vietnamese, question in English.
    - **AI Link**: "Explain Concept" button triggers AI for deep dives.
- **Content Updates**:
    - **Chapter 1 & 2**: Populated all 7 modules with Flashcards and AI Prompts.
    - **Enhancements**: Added critical content for Financial Metrics (ROI, NPV) and Kano Model nuances.
- **Technical**:
    - **Build**: Successfully built with updated `Flashcard` type definitions.
    - **Types**: Added optional `answer_en` to support future bilingual requirements.

## [0.7.1] - 2026-01-31
### 🐛 Stability & AI Tutor Fixes
- **Global AI Tutor**: Moved `AITutor` to `layout.tsx` (available on all pages).
- **Persistent Chat**: Implemented `AITutorContext` to save chat history across page navigation.
- **Interactive Badges**: Added click handlers to AI generated questions to auto-ask the tutor.
- **Dev Experience**: Fixed "Rules of Hooks" violation in `ModulePage` (useEffect order).
- **Docs**: Cleaned up outdated `MASTER_CONTEXT` versions.

## [0.7.0] - 2026-01-31
### 📚 Lesson Details & AI-Enhanced Python Sandbox
- **AI-Enhanced Python Sandbox**: Redesigned Python Focus tab with interactive learning features:
    - 📚 Concept Overview panel (bilingual explanations with exam tips)
    - 📐 Formula Breakdown display (visual formula with variable descriptions)
    - 📋 Step-by-Step Walkthrough (numbered code explanation)
    - 🤖 AI Tutor Prompts (suggested questions for deeper learning)
    - 🎯 Interactive Challenges (exercises with expandable hints)
- **Schema Extension**: Added new fields to `PythonCodeBlock` type:
    - `concept_explanation_en/vi`, `step_by_step_en/vi`
    - `formula_breakdown` (formula + variables array)
    - `ai_tutor_prompts`, `challenges` (with hints and solutions)
- **Module 2.1 Content**: Rich Python example with ROI/Payback Period calculation including full bilingual content.
- **Chapter 1 Formatting**: Standardized all Foundation modules (1.1-1.5) with bold headers, `━━━` separators.
- **Chapter 2 Content**: Updated Module 2.1 with COQ vs COPQ, Iceberg Analogy, PPI, financial metrics.
- **FormattedText Enhancement**: Added markdown table parsing with styled HTML rendering.
- **NotebookLM Integration**: Configured MCP server for AI-assisted content validation.

### 🛠️ Infrastructure
- **Backup System**: Created `Backups/Version 0.7.0/` snapshot before major content changes.
- **Documentation**: Updated `MASTER_CONTEXT_V0.7.md` with content formatting standards and chapter status.

## [0.6.0] - 2026-01-29
### ✨ Assessment Enhancements (Phase 2)
- **Welcome Screen**: Animated Landing Page (`/`) with version badge and author tagline (Shadcn UI).
- **AI Intelligence**: Migrated AI Tutor to Perplexity API (`sonar-pro`) for current-events aware answers.
- **Learning Analytics**: Added `AnalyticsCard` to dashboard.
    - **Visuals**: Displays mastery per DMAIC phase with color-coded progress.
    - **UX**: Collapsible and non-sticky design for better space management.
- **Quiz System**:
    - **Flagging**: Added "Flag for Review" button to quiz interface.
    - **Persistence**: Enhanced `ProgressContext` to store and track scores by Topic/Category.
    - **Review**: Flagged questions are visually highlighted in the results review.
- **Sidebar**: Improved readability by allowing multi-line wrapping for long module/chapter titles.
- **Stability**: Fixed hydration errors in `RootLayout`.
### 🐛 Hotfixes
- **Typos**: Corrected Vietnamese description in `course_content.ts`.
- **Navigation**: Linked "FULL MOCK EXAM" module directly to `/mock-exam` route.

## [0.6.1] - 2026-01-30
### 🛡️ Sync & Stability
- **Sync Diagnostics**: Added detailed error reporting to the Sidebar Cloud Icon.
    - If sync fails, users now see the exact Supabase error (e.g., "Policy Violation") instead of a generic failed state.
- **Quality Control**: Fixed recursive build errors in `CourseSidebar` component.
    - Resolved TypeScript Enum mismatches (`saved` vs `synced`).
    - Added missing `lastSyncError` propagation in `ProgressContext`.


## [0.5.0] - 2026-01-29
### 📚 Content Gap Closure (Tier 2/3 Priorities)
- **FMEA (Define Phase)**: Added Module 2.5 with RPN logic (Severity * Occurrence * Detection) and Action Thresholds.
- **COPQ (Define Phase)**: Expanded Module 2.1 with "1-10-100 Rule", 4 Cost Categories, and ROI formulas.
- **Normality Testing (Measure Phase)**: Integrated Anderson-Darling & P-value rules (< 0.05 Not Normal) into Module 3.2.
- **Regression Assumptions (Analyze Phase)**: Added the "5 Big Assumptions" check (Linearity, Normality of Residuals, Homoscedasticity, Independence, VIF) to Module 4.3.
- **Effect Size (Analyze Phase)**: Introduced Cohen's d and "Statistical vs Practical Significance" to Module 5.1.
### 🚑 Hotfixes
- **UI**: Restricted "Quiz" tab visibility. Now only appears for modules with a defined quiz (e.g., Chapter Quizzes), preventing empty 25-question placeholders on lesson modules.
- **Structure**: Refined Chapter 1 (Foundations) module numbering (1.1 to 1.5) and removed duplicate "Exam Strategy" module.
- **UI**: Fixed Mobile Dashboard Header alignment/overflow (Added responsive wrapping, padding, and prevented toggle button squashing).

## [0.4.1] - 2026-01-29
### 🚑 Hotfixes & Content
- **Build Fix**: Resolved `goal_en` build error in Chapter 1.
- **Types**: Added missing bilingual fields (`scenario_en`, `evaluation_criteria_en`) to `MiniProject` type.
- **Content**: Enriched Chapter 10 "Exam Tips" with detailed strategies (Time Management, Traps, etc.).

## [0.4.0] - 2026-01-29
### ✨ Features (Multilingual & Polish)
- **Full Bilingual Support**: All 10 Chapters + UI available in Vietnamese and English.
- **Language Toggle**: Global toggle with persistence (LocalStorage).
- **UI Polish**: Refactored Flexible Tabs in Module Player to prevent overflow.
- **Exam Readiness**: Dedicated "Exam Prep" chapter with 100-question simulation.

## [0.3.0] - 2026-01-29
### ✨ Features (Quiz System Overhaul)
- **Architecture**: Separated Logic (`useQuizState`), Data (`src/data/quizzes`), and UI (`ChapterQuiz`).
- **Mock Exam**: Added full 100-question IASSC Simulation (3-hour timer, Phase distribution).
- **Randomization**: Module quizzes now serve 5 random questions (cached).
- **Persistence**: Quiz progress is saved automatically; resume where you left off.
- **Dashboard**: Added "Take Mock Exam" banner.

### 🚜 Refactor
- Migrated hardcoded quizzes to `src/data/quizzes/*.ts`.
- Replaced `QuizRunner` with `ChapterQuiz` in learning modules.

### 🐛 Fixed
- **Quiz Question Count**: Fixed hardcoded limit of 5 matching the UI claim of 25.
- **Radio Selection Persistence**: Fixed bug where radio selection persisted between questions by keying the component.
- **Mock Exam Layout**: Fixed overflow issue in the 100-question navigation grid.

### 🚀 Deployment
- Implemented `useMockExamGenerator` with IASSC logic.
- Deployed "Mock Exam" feature to Dashboard (~3 Hour Simulation).
- **Deployed to Vercel**: Successfully deployed full application to production.

### ⚠️ Known Issues
- Missing data for Define, Improve, and General phases (Placeholders used).
- NOTE: Define, Improve, and General questions are placeholders.
- **Vercel Build**: Requires strict TypeScript compliance (fixed `mastery_threshold` issues).

## [0.2.0] - 2026-01-29
### Added
- ✅ **Deep Content Enrichment**: Added detailed formulas, analogies, and deep explanations to Chapters 3, 4, 5, 6, 8, & 9.
- ✅ **Rich Text UI**: Implemented `FormattedText` component to render Bold, Lists, and Headers properly in module descriptions.
- ✅ **Math Formulas**: Added explicit math formulas (LaTeX-style text) for Process Capability, T-tests, and SPC.

### Fixed
- 🐛 **Quiz Completion**: Fixed "Finish Quiz" button not showing results. Now displays a dedicated Score Card + Restart option.
- 🐛 **Syntax Errors**: Fixed `Unterminated template literal` errors caused by unescaped backticks in content files.
- 🐛 **Import Error**: Fixed `ReferenceError: FormattedText is not defined` by correcting import placement.

## [0.1.0] - 2026-01-28
### Added
- ✅ **Course Content**: Complete 10-chapter IASSC Green Belt curriculum (JSON/TypeScript).
- ✅ **App Scaffold**: Initialized Next.js 15 project with Tailwind v4.
- ✅ **UI Library**: Integrated `shadcn/ui` with core components (Button, Card, Badge, etc.).
- ✅ **Python Engine**: `PythonEditor` component powered by Pyodide for in-browser execution.
- ✅ **Assessment System**: `QuizRunner` component with interactive states and scoring.
- ✅ **AI Tutor**: `AITutor` component connected to Google Gemini API (`/api/ai/chat`).
- ✅ **Pages**: Dashboard (`/dashboard`) and Dynamic Learning Player (`/learn/[moduleId]`).
