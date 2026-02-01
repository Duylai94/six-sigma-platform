# Tasks - Version 0.3: Quiz Architecture Refactor

- [x] **Phase 1: Foundation & Data Types**
    - [x] Create `src/types/quiz.types.ts` <!-- id: 200 -->
    - [x] Create `src/data/quizzes/` directory structure <!-- id: 201 -->

- [x] **Phase 2: Data Migration (The 360)**
    - [x] Extract Define Phase (60 Qs) <!-- id: 202 --> (Missing source, used placeholder)
    - [x] Extract Measure Phase (70 Qs) <!-- id: 203 --> (Missing M11-M20)
    - [x] Extract Analyze Phase (80 Qs) <!-- id: 204 -->
    - [x] Extract Improve Phase (45 Qs) <!-- id: 205 --> (Missing source, used placeholder)
    - [x] Extract Control Phase (70 Qs) <!-- id: 206 -->
    - [x] Extract General Knowledge (35 Qs) <!-- id: 207 --> (Missing source, used placeholder)

- [x] **Phase 3: Logic Engine**
    - [x] Implement `useQuizRandomizer` hook <!-- id: 208 -->
    - [x] Implement `useMockExamGenerator` logic <!-- id: 209 -->
    - [x] Implement `useQuizState` (Progress/Resume) <!-- id: 210 -->

- [x] **Phase 7: Data Migration (The 600)**
    - [x] Analyze `Complete_600_Question_Bank.md` structure <!-- id: 224 -->
    - [x] **Scripting**: Created `scripts/migrate_600_quiz.js` <!-- id: 233 -->
    - [x] **Data Wipe & Populate**: Migrated all 6 source files (600 Qs total) <!-- id: 225 -->
    - [x] **Refinement**: Improve Topic Parsing & Explicit Mapping <!-- id: 234 -->
    - [x] **Populate General Knowledge** (G1-G50) <!-- id: 226 -->
    - [x] **Populate Define Phase** (D1-D75) <!-- id: 227 -->
    - [x] **Populate Measure Phase** (M1-M125) <!-- id: 228 -->
    - [x] **Populate Analyze Phase** (A1-A150) <!-- id: 229 -->
    - [x] **Populate Improve Phase** (I1-I75) <!-- id: 230 -->
    - [x] **Populate Control Phase** (C1-C125) <!-- id: 231 -->
    - [x] **Verify Migration**: Build and test "Mock Exam" randomizer <!-- id: 232 -->
- [x] **Phase 4: UI Components**
    - [x] Build reusable `ChapterQuiz.tsx` <!-- id: 211 -->
    - [x] Build `MockExamComponent.tsx` <!-- id: 212 -->
    - [x] Build `QuizResults.tsx` with detailed breakdown <!-- id: 213 --> (Integrated into components)

- [x] **Phase 5: Integration**
    - [x] Replace Chapter 1-2 Quizzes <!-- id: 214 -->
    - [x] Replace Chapter 3-5 Quizzes <!-- id: 215 -->
    - [x] Replace Chapter 6-8 Quizzes <!-- id: 216 -->
    - [x] Deploy Mock Exam to Dashboard <!-- id: 217 -->
- [x] **Phase 6: Quality Control**
    - [x] Fix syntax error in `measure-phase-quizzes.ts` <!-- id: 218 -->
    - [x] Resolve `tsconfig` conflicts with legacy folders <!-- id: 219 -->
    - [x] Standardize `QuizQuestion` types for backward compatibility <!-- id: 220 -->
    - [x] Verify production build (`npm run build`) <!-- id: 221 -->
    - [x] **Data Patch**: Added placeholder for "Basics of Six Sigma" to `define-phase-quizzes.ts` <!-- id: 223 -->

- [/] **Phase 8: Intelligent Quiz Mapping**
    - [x] **Plan**: Create `quiz_mapping_strategy.md` with rules <!-- id: 235 -->
    - [x] **Analysis**: Extract concepts from Chapter 1-6 <!-- id: 236 -->
    - [x] **Mapping**: Generate Lesson -> Quiz ID map <!-- id: 237 -->
    - [x] **Execution**: Update variables in `quiz-mapping.ts` <!-- id: 238 -->
    - [x] **Verification**: Audit gaps and complexity levels <!-- id: 239 -->

- [x] **Phase 9: Chapter-Level Quiz Pools**
    - [x] **Extraction**: Extract aggregated topics from Ch1-Ch8 <!-- id: 240 -->
    - [x] **Scanning**: Identify broad question blocks per chapter <!-- id: 241 -->
    - [x] **Master Doc**: Create `chapter_quiz_pools.md` with coverage analysis <!-- id: 242 -->
    - [x] **Implementation**: Refactor `quiz-mapping.ts` for chapter pools <!-- id: 243 -->

- [x] **Phase 10: Chapter Quiz Consolidation**
    - [x] **Type Update**: Make `Module.quiz` optional <!-- id: 244 -->
    - [x] **Refactor Ch1**: Remove quizzes, add `mod_foundations_quiz` <!-- id: 245 -->
    - [x] **Refactor Ch2**: Remove quizzes, add `mod_define_quiz` <!-- id: 246 -->
    - [x] **Refactor Ch3-Ch8**: Apply same pattern <!-- id: 247 -->
        - [x] Ch3 (Measure)
        - [x] Ch4 (Analyze Patterns)
        - [x] Ch5 (Analyze Hypothesis)
        - [x] Ch6 (Improve)
        - [x] Ch7 (Improve DOE)
        - [x] Ch8 (Control)

- [x] **Phase 11: Content Gap Analysis (Reverse Engineering)**
    - [x] **Plan**: Create `gap_analysis.md` template <!-- id: 248 -->
    - [x] **Analysis Ch1**: General/Foundations <!-- id: 249 -->
    - [x] **Analysis Ch2**: Define Phase <!-- id: 250 -->
    - [x] **Analysis Ch3**: Measure Phase <!-- id: 251 -->
    - [x] **Analysis Ch4-5**: Analyze Phase <!-- id: 252 -->
    - [x] **Analysis Ch6-7**: Improve Phase <!-- id: 253 -->
    - [x] **Analysis Ch8**: Control Phase <!-- id: 254 -->
    - [x] **Verification**: Review and finalize gap report <!-- id: 255 -->

- [x] **Phase 12: Theory Content Updates (Closing Gaps)**
    - [x] **Define Updates**: Add Yield & Time Metrics (FTY, Cycle Time) <!-- id: 256 -->
    - [x] **Measure Updates**: Add Capability/Sigma conversions <!-- id: 257 -->
    - [x] **Analyze/Improve Updates**: Add Multiple Regression & VIF (CRITICAL) <!-- id: 258 -->
    - [x] **Improve Updates**: Add DOE Screening/Confounding details <!-- id: 259 -->
    - [x] **Control Updates**: Add Western Electric Rules (Rule of 9, etc) <!-- id: 260 -->

- [x] **Phase 13: Deployment Preparation (Vercel)**
    - [x] **Audit**: Check for "localhost" hardcoded URLs.
    - [x] **Build**: Run local production build to catch TypeScript errors.
    - [x] **Environment**: Set up `GOOGLE_STUDIO_API_KEY` for Vercel.
    - [x] **Deploy**: Push to GitHub and trigger Vercel deployment.
    - [x] **Verify**: Confirm live URL functionality. Push Error (Force Push) <!-- id: 264 -->

- [x] **Phase 14: Documentation & Backup (V0.3.1)**
    - [x] Update `MASTER_CONTEXT` to V0.3.1. <!-- id: 270 -->
    - [x] Update `PROJECT_STATE`. <!-- id: 271 -->
    - [x] Create `TASK_LOG.md` archive. <!-- id: 272 -->
    - [x] Create `MEMORY_CHECKPOINT.md`. <!-- id: 273 -->
    - [x] Create **Backups/Version 0.3.1**. <!-- id: 274 -->

- [x] **Phase 15: Multilingual Support (V0.3.2)**
    - [x] **Architecture**: Implemented `LanguageContext` & Toggle. <!-- id: 300 -->
    - [x] **UI**: Added Toggle to Navbar & Module Header. <!-- id: 304 -->
    - [x] **Content Batch 1**: Chapters 1-2 (Foundation/Define). <!-- id: 306 -->
    - [x] **Content Batch 2**: Chapters 3-5 (Measure/Analyze). <!-- id: 310 -->
    - [x] **Content Batch 3**: Chapters 6-8 (Improve/Control). <!-- id: 313 -->
    - [x] **Content Batch 4**: Chapters 9-10 (Capstone/Exam). <!-- id: 315 -->

- [x] **Phase 16: UI Polish & Release (V0.4.0)**
    - [x] **Fix**: Refactored Learn Tabs (Flex layout) to fix bilingual overflow. <!-- id: 320 -->
    - [x] **Docs**: Updated `CHANGELOG`, `PROJECT_STATE`, `LOGIC_MAP`. <!-- id: 321 -->
    - [x] **Master Context**: Created `MASTER_CONTEXT_V0.4.md`. <!-- id: 322 -->
    - [x] **Backup**: Created `Backups/Version 0.4`. <!-- id: 323 -->
