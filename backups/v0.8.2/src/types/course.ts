export type PythonCodeBlock = {
  id: string;
  title_en: string;
  title_vi?: string;
  context_en?: string;             // The situation/math context in English
  description_vi: string;
  code_template: string;          // Pre-filled code for user to run
  expected_output_en: string;     // What they should see conceptually
  expected_output_vi?: string;
  datasets_used: string[];        // CSV filenames to load
  learning_points_en: string[];   // What this code teaches
  difficulty_en: "Beginner" | "Intermediate" | "Advanced";

  // NEW: Enhanced Learning Fields (v0.7.0)
  concept_explanation_en?: string;   // Detailed concept explanation in English
  concept_explanation_vi?: string;   // Detailed concept explanation in Vietnamese
  step_by_step_en?: string[];        // Step-by-step breakdown of what the code does
  step_by_step_vi?: string[];        // Vietnamese step-by-step
  formula_breakdown?: {              // Math formula explanation
    formula: string;                 // e.g., "ROI = (Benefits - Cost) / Cost × 100%"
    variables: {
      name: string;
      description_en: string;
      description_vi?: string;
      example_value?: string;
    }[];
  };
  ai_tutor_prompts?: string[];       // Suggested questions for AI tutor
  challenges?: {                     // Interactive challenges
    id: string;
    prompt_en: string;
    prompt_vi?: string;
    hint_en?: string;
    hint_vi?: string;
    solution_code?: string;
  }[];
};

export type AITutorContext = {
  enabled: boolean;
  system_prompt_en: string;
  suggested_questions: { question_en: string; question_vi: string }[];  // Bilingual suggestions
  hint_levels: string[];          // e.g. ["basic", "intermediate", "expert"]
  max_hints_per_question: number;
};

export type Reference = {
  source_type: "cheatsheet" | "book" | "pdf" | "standard" | "article" | "template";
  label_en: string;           // e.g. "Advanced GB Cheat Sheet – MSA section"
  location_hint_en: string;   // e.g. "cheatsheet:measure_msa_01"
};

export type Flashcard = {
  id: string;
  question_en: string;
  answer_vi: string;
  answer_en?: string;
  tags_en: string[];
  difficulty_en: "Easy" | "Medium" | "Hard";
  ai_tutor_available: boolean;
};

export type QuizQuestion = {
  id: string;
  stem_en: string;               // exam-style question
  options_en: string[];
  correct_index: number;
  explanation_vi: string;        // why correct, why others wrong
  iassc_mapping_en: string[];    // e.g. ["Measure > MSA > Gage R&R"]
  has_code_component: boolean;
  code_template?: string;         // if user needs to write/inspect code
  difficulty_en?: "Exam-level" | "Above-exam-level";
  hint_available?: boolean;
  hint_levels?: {
    basic: string;               // hint in Vietnamese
    intermediate: string;
    expert: string;
  };
};

export type FAQItem = {
  question_en: string;
  answer_vi: string;
  ai_tutor_reference: boolean;  // true if AI can elaborate
};

export type MiniProject = {
  title_en: string;
  scenario_vi: string;
  scenario_en?: string; // [NEW] English Scenario
  tasks_en: string[];
  datasets: string[];
  code_skeleton: string;
  evaluation_criteria_vi: string;
  evaluation_criteria_en?: string; // [NEW] English Evaluation Criteria
  ai_code_review_available: boolean;
};

export type Module = {
  id: string;
  order: number;
  title_en: string;
  summary_vi: string;
  summary_en: string; // [NEW] English Summary
  key_metrics_en: string[];
  key_points_en: string[];
  explanation_vi: string;
  explanation_en: string; // [NEW] English Detailed Explanation
  recommended_tools_en: string[];
  python_focus_en: string[];

  code_blocks: PythonCodeBlock[];
  ai_tutor_context: AITutorContext;

  references_en: Reference[];
  flashcards: Flashcard[];
  quiz?: {
    difficulty_en: "Exam-level" | "Above-exam-level";
    questions: QuizQuestion[];
  };
  faq: FAQItem[];

  mini_project?: MiniProject;

  mastery_threshold: number;       // % correct to unlock next module
  estimated_time_minutes: number;
  prerequisites_ids: string[];     // module IDs that should be completed first
};

export type Chapter = {
  id: string;
  order: number;
  title_en: string;
  goal_vi: string;
  goal_en: string; // [NEW] English Goal
  iassc_topics_en: string[];
  modules: Module[];
};

export type CourseDataset = {
  name: string;
  csv_url: string;
  description_en: string;
  use_in_modules: string[];
};

export type Course = {
  id: string;
  title_en: string;
  description_vi: string;
  description_en: string; // [NEW] English Description
  target_exam_en: string;
  difficulty_en: "Beginner" | "Intermediate" | "Advanced";
  estimated_hours: number;
  chapters: Chapter[];

  ai_config: {
    google_studio_api_key_env: string;  // "GOOGLE_STUDIO_API_KEY"
    model_name: string;
    system_prompt_vi: string;
    rate_limit_per_minute: number;
    enabled_globally: boolean;
  };

  python_config: {
    execution_engine: "pyodide" | "backend";
    backend_url?: string;
    timeout_seconds: number;
    available_libraries: string[];
    max_file_upload_mb: number;
    sandbox_memory_mb: number;
  };

  datasets: CourseDataset[];
};
