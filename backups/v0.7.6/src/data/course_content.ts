import { Course } from "../types/course";
import { courseDatasets } from "./datasets";
import { chapterFoundations } from "./chapters/chapter1";
import { chapterDefine } from "./chapters/chapter2";
import { chapterMeasureData } from "./chapters/chapter3";
import { chapterAnalyzePatterns } from "./chapters/chapter4";
import { chapterAnalyzeHypothesis } from "./chapters/chapter5";
import { chapterAnalyzeRootCause } from "./chapters/chapter6";
import { chapterImprove } from "./chapters/chapter7";
import { chapterControl } from "./chapters/chapter8";
import { chapterPythonTrack } from "./chapters/chapter9";
import { chapterExam } from "./chapters/chapter10";

export const iasscGreenBeltCourse: Course = {
    id: "course_iassc_gb_v2",
    title_en: "IASSC Lean Six Sigma Green Belt (Python Enhanced)",
    description_vi: "Khóa học Sigma Đai Xanh chuẩn IASSC kết hợp lập trình Python để phân tích dữ liệu.",
    description_en: "This IASSC Accredited Lean Six Sigma Green Belt course integrates Python programming for advanced data analysis.",
    target_exam_en: "IASSC Green Belt (ICGB)",
    difficulty_en: "Intermediate",
    estimated_hours: 45,
    chapters: [
        chapterFoundations,
        chapterDefine,
        chapterMeasureData,
        chapterAnalyzePatterns,
        chapterAnalyzeHypothesis,
        chapterAnalyzeRootCause,
        chapterImprove,
        chapterControl,
        chapterPythonTrack,
        chapterExam
    ],
    ai_config: {
        google_studio_api_key_env: "PERPLEXITY_API_KEY",
        model_name: "sonar-pro",
        system_prompt_vi: "Bạn là giảng viên Six Sigma Green Belt chuyên nghiệp và am hiểu Python. Nhiệm vụ của bạn là giải thích các khái niệm phức tạp một cách đơn giản, dễ hiểu bằng tiếng Việt (giữ nguyên thuật ngữ tiếng Anh quan trọng). Khi học viên hỏi về Code, hãy giải thích logic thay vì chỉ đưa đáp án. Luôn khích lệ tinh thần học viên. Phong cách: Thân thiện, Chuyên nghiệp, Thực tế.",
        rate_limit_per_minute: 10,
        enabled_globally: true
    },
    python_config: {
        execution_engine: "pyodide",
        timeout_seconds: 30,
        available_libraries: ["numpy", "pandas", "scipy", "matplotlib", "seaborn", "statsmodels", "sklearn"],
        max_file_upload_mb: 5,
        sandbox_memory_mb: 256
    },
    datasets: courseDatasets
};
