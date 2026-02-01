# LOGIC MAP
## Application Architecture
### Frontend (Next.js 15 + Tailwind v4)
- **App/Pages**:
    - `/dashboard`: Lists all 10 chapters. Tracks progress (conceptual).
    - `/learn/[moduleId]`: DYNAMIC Player.
        - **Tabs**: Theory (Content), Code (Pyodide), Flashcards (Review), Quiz (Assessment).
        - **Details Tab**: Now includes contextual "Ask AI Tutor" prompt badges at the bottom.
- **Core Components**:
    - `PythonEditor.tsx`: Monaco Editor + `src/lib/pyodide.ts` hook.
    - `QuizRunner.tsx`: Assessment logic with hints/scoring (Self-contained results screen).
    - `AITutor.tsx`: Global floating chat widget. Uses `AITutorContext` for state persistence.
    - `FormattedText.tsx`: Lightweight Markdown parser with table support.
    - `FlashcardTab.tsx` (Inline in page.tsx): Renders bilingual flashcards with "Explain Concept" AI link.
    - `AnalyticsCard.tsx`: [NEW] Collapsible dashboard widget showing DMAIC Phase retention.
    - `ui/*`: Shadcn components (Button, Card, Badge, etc.).
- **Global Context**:
    - `LanguageContext.tsx`: Provides `language` (vn/en) state.
    - `ProgressContext.tsx`: Tracks Lesson Completion AND Topic Scores (Category/Mastery).
    - `AITutorContext.tsx`: [NEW] Global AI Tutor state (isOpen, messages, pendingQuestion). Persists chat across page navigation.

### Backend (Next.js API Routes)
- **Endpoints**:
    - `/api/ai/chat`: Secure proxy to Google Gemini API. Handles system prompting.

### 3. Logic Layer (Hooks)
*   **`useChapterData`**: Fetches content for learning modules.
*   **`useQuizRandomizer`**: Fisher-Yates shuffle with fuzzy matching for module quizzes.
*   **`useMockExamGenerator`**: Generates 100-question IASSC Mock Exam (15/18/22/15/20/10 split).
*   **`useProgress`**: 
    *   **Load**: Checks Cloud first. If empty, checks Local Storage (Guest migration).
    *   **Save**: Debounced (2s) save to Supabase.
    *   **Sync Status**: Exposes `idle` | `saving` | `synced` | `error` + `lastSyncError` message.
*   **`useDeepSeek`**: Interface for AI Tutor chat (Streaming).

### 4. Data Layer (`src/data/`)
*   **`chapters/`**: Content-heavy structs (Theory, Python examples).
*   **`quizzes/`**: [NEW] Centralized Question Bank (TypeScript).
    *   `measure-phase-quizzes.ts`: M1-M70 (Data Types, MSA, Capability).
    *   `analyze-phase-quizzes.ts`: A1-A80 (Hypothesis, ANOVA, Regression).
    *   `control-phase-quizzes.ts`: C1-C70 (SPC, Control Plans).
    *   `define/improve/general`: Placeholders awaiting data.

### AI-Enhanced Python Sandbox (v0.7)
The Python Focus tab now includes 6 interactive learning sections:

**Schema (`PythonCodeBlock` in `course.ts`):**
- `concept_explanation_en/vi`: Detailed concept explanation with exam tips
- `formula_breakdown`: Visual formula with variables array (name, description, example)
- `step_by_step_en/vi`: Numbered walkthrough of code logic
- `ai_tutor_prompts`: Suggested questions for deeper learning
- `challenges[]`: Interactive exercises with hints and solution code

**UI Rendering (`page.tsx` Code Tab):**
1. 📚 **Concept Overview** (purple gradient) - Bilingual concept explanation
2. 📐 **Formula Breakdown** (amber gradient) - Formula + variable table
3. 📋 **Step-by-Step** (cyan gradient) - Code walkthrough steps
4. 🤖 **AI Tutor Prompts** (rose gradient) - Clickable question badges
5. 🎯 **Challenges** (emerald gradient) - Expandable hints with solutions
6. **Python Editor** - Monaco + Pyodide execution

---

## Logic Flows
### Progress Serialization (Sync)
1. **Trigger**: User completes lesson or finishes quiz.
2. **State Update**: React State (`progress`) updates immediately (Optimistic UI).
3. **Debounce**: `useEffect` waits 2 seconds of inactivity.
4. **Cloud Save**:
    - Calls `supabase.from('user_progress').upsert()`.
    - **On Success**: Sets status to `synced`.
    - **On Error**: Sets status to `error` and captures `error.message`.
5. **UI Feedback**: Sidebar footer displays status icon (Spinning/Green Check/Red X) and specific error text if failed.

### Python Execution
1. **User** types code in `PythonEditor`.
2. **Pyodide** (WASM) loads from CDN on first mount.
3. Code executes entirely in-browser (Client-side).
4. `stdout`/`stderr` captured and displayed in Output Console.

### AI Tutoring
1. **User** asks question in `AITutor`.
2. **Client** POSTs to `/api/ai/chat` with `message` + `context` (current module summary).
3. **Server** calls Gemini API with System Prompt (Teacher Persona).
4. **Response** returns to Client and displays in chat window.
