# README: Six Sigma Green Belt Learning Platform

**Version**: 0.7.0 | **Last Updated**: 2026-01-31

A professional, bilingual (English/Vietnamese) web application for IASSC Six Sigma Green Belt certification preparation.

## ✨ Key Features

- 📚 **10-Chapter Curriculum** - Complete IASSC Green Belt content
- 🐍 **AI-Enhanced Python Sandbox** - Interactive coding with formulas, step-by-step guides, and challenges
- 📝 **100-Question Mock Exam** - Real exam simulation with 3-hour timer
- 🌐 **Bilingual Support** - Full English/Vietnamese toggle
- ☁️ **Cloud Sync** - Progress saved via Supabase (or localStorage for guests)
- 🤖 **AI Tutor** - Perplexity-powered contextual help

## 🚀 Getting Started

```bash
# Development (WSL recommended)
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to start learning.

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── dashboard/    # Course overview + analytics
│   ├── learn/[id]/   # Module player (Theory, Code, Quiz)
│   └── mock-exam/    # 100-Q exam simulator
├── components/       # React components
├── contexts/         # Global state (Language, Progress)
├── data/             # Content & quiz banks
└── lib/              # Utilities (Supabase, Pyodide)
```

## 📖 Documentation

- [Master Context](docs/ai_context/MASTER_CONTEXT_V0.7.md) - Full project overview
- [Changelog](docs/CHANGELOG.md) - Version history
- [Logic Map](docs/ai_context/LOGIC_MAP.md) - Architecture reference

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS v4, Shadcn/UI
- **Python**: Pyodide (WebAssembly)
- **Backend**: Supabase, OpenRouter (Perplexity API)
- **Deploy**: Vercel

---

*Built for Six Sigma practitioners who prefer code over spreadsheets.*
