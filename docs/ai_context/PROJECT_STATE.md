# PROJECT STATE
### [Current Goal]
**GOAL**: [COMPLETE] Version 0.7.6: Bilingual AI Tutor Suggestions.
**STATUS**: ✅ AI Suggestions synced with language toggle. Documentation phase active.

### [Last Success]
**DATE**: 2026-01-31
**VERSION**: v0.7.6
**SUCCESS**:
- **AI Tutor Enhancements**:
    - **Bilingual Suggestions**: "Ask AI Tutor" badges now switch text (EN/VN) and prompt language dynamically.
    - **Data Logic**: Refactored `suggested_questions` in `course.ts` to `{ question_en, question_vi }`.
- **Quality Assurance**:
    - **Fixes**: Resolved scroll chaining in Chat, table rendering in Markdown, and syntax errors in data files.
    - **Content**: 100% of Module 1.1-1.5 and 2.1-2.2 suggestions translated.

## Completed Tasks (v0.7.6)
- [x] Backup `Backups/Version 0.7.0/` created
- [x] Chapter 1 formatting standardized (1.1-1.5)
- [x] Chapter 2 Module 2.1 content enriched
- [x] FormattedText table support added
- [x] `course.ts` schema extended with new PythonCodeBlock fields
- [x] `page.tsx` Python Focus tab redesigned
- [x] Module 2.1 code_blocks updated with rich content
- [x] Build verified (no TypeScript errors)

## Next Steps
- [ ] Apply AI-Enhanced Python template to other modules (2.2-2.5, etc.)
- [ ] Test Python Focus tab in browser
- [ ] Verify language toggle (VN/EN) for all new sections

## Active Dictionary
- **Pyodide**: Python in WebAssembly (Client-side execution).
- **Monaco**: VS Code-like editor component.
- **Perplexity Sonar-Pro**: AI model for context-aware answers (via OpenRouter).
- **FormattedText**: Component for rendering Markdown headers, lists, and tables.
- **ProgressContext**: Global state for User Progress and Topic Scores.
- **COQ/COPQ**: Cost of Quality / Cost of Poor Quality.
- **PPI**: Pareto Priority Index (project prioritization).
- **AI-Enhanced Python Sandbox**: Interactive code learning with concept panels, formulas, and challenges.
