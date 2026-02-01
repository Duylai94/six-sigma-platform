import { Chapter, Module } from "../../types/course";

export const chapterMeasureData: Chapter = {
    id: "ch_measure_data",
    order: 3,
    title_en: "Measure Phase - Data & MSA",
    goal_vi: "Thu thập dữ liệu chính xác và kiểm tra độ tin cậy của hệ thống đo lường.",
    goal_en: "Collect accurate data and validate measurement system reliability.",
    iassc_topics_en: [
        "2.1 Process Definition",
        "2.2 Six Sigma Statistics",
        "2.3 Measurement System Analysis (MSA)",
        "2.4 Process Capability"
    ],
    modules: [
        {
            id: "mod_measure_01",
            order: 1,
            title_en: "Process Definition",
            summary_vi: "Sử dụng bản đồ quy trình chi tiết (Process Maps), FMEA và Ma trận X-Y.",
            summary_en: "Detailing the process using Process Maps, FMEA, and C&E Matrix.",
            key_metrics_en: ["RPN (Risk Priority Number)", "Severity", "Occurrence", "Detection"],
            key_points_en: [
                "Process Map: Visualizes the sequence of events (Flowchart).",
                "FMEA (Failure Mode & Effects Analysis): Proactive risk assessment.",
                "RPN = Severity x Occurrence x Detection.",
                "Use FMEA to prioritize which risks to fix first.",
                "Quick Wins: Low effort, high impact improvements found during mapping."
            ],
            explanation_vi: `
**1. Process Maps & Flowcharts**
Để đếm hạt gạo, bạn phải nhìn thấy chúng. Để cải tiến quy trình, bạn phải vẽ nó ra.
- **Process Map:** Chỉ ra dòng chảy vật lý.
- **Value Stream Map (VSM):** Chỉ ra cả dòng chảy thông tin và vật liệu, tập trung tìm lãng phí (Waste).

**2. FMEA (Failure Mode & Effects Analysis)**
Công cụ quan trọng nhất để phòng ngừa rủi ro. Chúng ta chấm điểm 3 yếu tố (thang 1-10):
- **Severity (S):** Hậu quả nghiêm trọng không? (10 = Chết người/Mất khách).
- **Occurrence (O):** Có hay xảy ra không? (10 = Ngày nào cũng bị).
- **Detection (D):** Có dễ phát hiện không? (10 = Không thể phát hiện cho đến khi khách nhận hàng).
**RPN = S x O x D**. RPN càng cao -> Phải xử lý gấp.
            `,
            explanation_en: `
**1. Process Maps & Flowcharts**
To fix a process, you must see it.
- **Process Map:** Shows the physical flow order.
- **Value Stream Map (VSM):** Shows material AND information flow, focused on Waste.

**2. FMEA (Failure Mode & Effects Analysis)**
A proactive tool to identify potential failures and prevent them.
Score 3 factors (1-10 scale):
- **Severity (S):** Impact of failure (10 = Hazardous/Safety).
- **Occurrence (O):** Probability of failure (10 = Frequent).
- **Detection (D):** Ability to find failure before it reaches customer (10 = Cannot detect).
**RPN = S x O x D**. High RPN -> Priority Action.
            `,
            recommended_tools_en: ["Process Cycle Efficiency", "FMEA Template"],
            python_focus_en: ["Data Structuring"],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain FMEA RPN calculation.",
                suggested_questions: ["Làm sao để làm giảm điểm RPN?", "Detection điểm cao là tốt hay xấu?"],
                hint_levels: ["Reduce Occurrence is best", "High Detection score means BAD visibility", "Safety issues always priority"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 16", location_hint_en: "FMEA" }
            ],
            flashcards: [
                {
                    id: "fc_measure_01_01",
                    question_en: "In FMEA, which strategy is most effective for reducing risk?",
                    answer_vi: "Reducing Occurrence (Giảm tần suất xảy ra).",
                    tags_en: ["FMEA", "Risk"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_01_02",
                    question_en: "Calculate RPN if Severity=8, Occurrence=5, Detection=2.",
                    answer_vi: "RPN = 8 * 5 * 2 = 80.",
                    tags_en: ["FMEA", "Calculation"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_define_04"]
        },
        {
            id: "mod_measure_02",
            order: 2,
            title_en: "Six Sigma Statistics & Normality Testing",
            summary_vi: "Thống kê mô tả, Phân loại dữ liệu và Kiểm định phân phối chuẩn.",
            summary_en: "Descriptive Statistics, Data Types, and Normality Testing.",
            key_metrics_en: ["Mean", "Standard Deviation", "P-value", "Anderson-Darling"],
            key_points_en: [
                "Mean (Average): Sensitive to outliers.",
                "Standard Deviation: Average distance from the mean.",
                "Normality Test: Essential BEFORE running any parametric test.",
                "Decision Rule: If P-value < 0.05, data is NOT Normal -> Use Non-Parametric tests."
            ],
            explanation_vi: `
**1. Các loại dữ liệu (Data Types)**
- **Continuous (Liên tục):** Đo được (Thời gian, Nhiệt độ, Tiền). -> Thông tin nhiều nhất.
- **Discrete (Rời rạc):** Đếm được (Số người, Số lỗi).
  - **Nominal:** Định danh (Nam/Nữ, Đỏ/Xanh). Không thứ tự.
  - **Ordinal:** Thứ tự (Hài lòng 1-5, Tốt/Xấu). Có xếp hạng.

**2. Kiểm định phân phối chuẩn (Normality Testing)**
Hầu hết các kiểm định mạnh (T-test, ANOVA, Cp/Cpk) đều *giả định* dữ liệu tuân theo Phân phối chuẩn (Hình chuông).
- **Cách kiểm tra:** Dùng Anderson-Darling Test (hoặc Shapiro-Wilk).
- **Quy tắc quyết định (P-value):**
  - **P < 0.05:** Dữ liệu KHÔNG chuẩn (Reject H0: Data is Normal). -> *Hành động: Phải dùng kiểm định Phi tham số hoặc chuyển đổi dữ liệu.*
  - **P >= 0.05:** Dữ liệu Chuẩn. -> *Hành động: An tâm dùng T-test.*
- **Kiểm tra bằng mắt:** Biểu đồ Histogram phải hình chuông, Q-Q Plot phải nằm trên đường chéo.
            `,
            explanation_en: `
**1. Data Types**
- **Continuous:** Measured values (Time, Weight). Rich information.
- **Discrete:** Counted values.
  - **Nominal:** Names (Male/Female). No order.
  - **Ordinal:** Ranked (Satisfaction 1-5). Order matters.

**2. Normality Testing**
Most powerful tools (T-test, ANOVA, Cpk) *assume* Normal Distribution (Bell Curve).
- **Test:** Anderson-Darling (standard) or Shapiro-Wilk (n < 50).
- **The Golden Rule:**
  - **P < 0.05:** Data is **NOT Normal**. -> *Must use Non-Parametric tests or Transform (Box-Cox).*
  - **P >= 0.05:** Data **IS Normal**. -> *Proceed with standard tests.*
- **Visual Check:** Histogram is bell-shaped; Q-Q Plot dots hug the straight line.
            `,
            recommended_tools_en: ["Anderson-Darling Test", "Q-Q Plot"],
            python_focus_en: ["scipy.stats.shapiro", "scipy.stats.probplot"],
            code_blocks: [
                {
                    id: "code_measure_stats",
                    title_en: "Normality Test (Shapiro-Wilk)",
                    context_en: "Goal: Check if our cycle time data is Normal before running a T-test.",
                    description_vi: "Đoạn code kiểm tra xem dữ liệu có phân phối chuẩn không.\n\n- Nếu P-value > 0.05: Dữ liệu chuẩn (Tốt).\n- Nếu P-value < 0.05: Dữ liệu bị méo (Skewed) -> Cẩn thận!",
                    code_template: `import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# Generate Data (Normal vs Non-Normal)
np.random.seed(42)
normal_data = np.random.normal(loc=100, scale=15, size=100)
skewed_data = np.random.exponential(scale=100, size=100)

# Check Normality (Shapiro-Wilk)
def check_normality(data, name):
    stat, p_value = stats.shapiro(data)
    print(f"--- {name} ---")
    print(f"P-value: {p_value:.5f}")
    if p_value < 0.05:
        print("-> Result: NOT Normal (Use Non-Parametric)")
    else:
        print("-> Result: Normal (Use T-test)")

check_normality(normal_data, "Dataset A")
check_normality(skewed_data, "Dataset B")

# Visual Check (Q-Q Plot)
stats.probplot(normal_data, dist="norm", plot=plt)
plt.title("Q-Q Plot (Normal Data)")
plt.show()`,
                    expected_output_en: "P-value analysis -> Pass/Fail.",
                    datasets_used: [],
                    learning_points_en: ["Shapiro-Wilk syntax", "Interpreting P-values"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain why Normality matters.",
                suggested_questions: ["Nếu dữ liệu không chuẩn thì sao?", "Nominal khác Ordinal chỗ nào?"],
                hint_levels: ["Statistical assumptions", "Parametric vs Non-Parametric", "Order matters for Ordinal"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 12", location_hint_en: "Normality Test" }
            ],
            flashcards: [
                {
                    id: "fc_measure_02",
                    question_en: "If the Anderson-Darling P-value is 0.03, is the data Normal?",
                    answer_vi: "No (P < 0.05 means Reject Normality).",
                    tags_en: ["Measure", "Statistics"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_03",
                    question_en: "Which data type is 'Customer Satisfaction Score (1-5)'?",
                    answer_vi: "Discrete -> Ordinal.",
                    tags_en: ["Measure", "Data Types"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_measure_01"]
        },
        {
            id: "mod_measure_03",
            order: 3,
            title_en: "Measurement System Analysis (MSA)",
            summary_vi: "Gage R&R: Đảm bảo dữ liệu đáng tin cậy. Các ngưỡng chấp nhận (<10%, >30%).",
            summary_en: "Gage R&R: Ensuring data reliability. Acceptance criteria (<10%, >30%).",
            key_metrics_en: ["Bias", "Linearity", "Stability", "Repeatability", "Reproducibility", "%GR&R"],
            key_points_en: [
                "Accuracy (Bias): Is the average correct? (Bullseye center).",
                "Precision (Variation): Are the shots clustered together?",
                "Repeatability: Same person, same part, same gage (Equipment variation).",
                "Reproducibility: Different people, same part, same gage (Appraiser variation).",
                "CRITICAL: %GR&R < 10% (Pass), 10-30% (Conditional), > 30% (Fail)."
            ],
            explanation_vi: `
**1. Tại sao cần MSA?**
Trước khi tin vào dữ liệu, phải tin vào thước đo.

**2. Các thành phần sai số**
- **Accuracy (Độ chính xác):** Bias, Linearity, Stability.
- **Precision (Độ chụm):** Repeatability + Reproducibility.

**3. Gage R&R Study (Tiêu chuẩn)**
- **Thiết kế chuẩn:** 10 mẫu x 3 người đo x 3 lần lặp = 90 dữ liệu.
- **Repeatability (Equipment):** Do thiết bị. Khắc phục: Sửa máy, kẹp chặt hơn.
- **Reproducibility (Appraiser):** Do con người. Khắc phục: Đào tạo (SOP), dùng dưỡng đo.

**4. Acceptance Criteria (Tiêu chuẩn Chấp nhận) - Thuộc lòng!**
- **< 10%:** Hệ thống tuyệt vời (Excellent). -> **Dùng ngay.**
- **10% - 30%:** Tạm chấp nhận (Marginal). -> **Dùng có điều kiện** (tùy vào chi phí sửa chữa).
- **> 30%:** Không chấp nhận (Unacceptable). -> **DỪNG LẠI**. Phải sửa hệ thống đo trước khi làm tiếp.
            `,
            explanation_en: `
**1. Why MSA?**
validate the measurement system before collecting project data.

**2. Precision Components**
- **Repeatability (EV):** Equipment Variation. Same operator, same part.
- **Reproducibility (AV):** Appraiser Variation. Different operators, same part.

**3. Standard Study Design**
- 10 Parts (representing process range)
- 3 Operators
- 3 Trials (Blind measurement)
- Total: 90 Data points.

**4. Acceptance Criteria (MEMORIZE THIS)**
- **%GR&R < 10%:** Excellent. System is capable.
- **%GR&R 10% - 30%:** Marginal. Acceptable depending on application/cost.
- **%GR&R > 30%:** **FAIL.** System needs improvement. Do NOT proceed to Analyze phase.
            `,
            recommended_tools_en: ["Gage R&R Crossed", "Calibration"],
            python_focus_en: ["ANOVA Logic"],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Repeatability vs Reproducibility.",
                suggested_questions: ["Nếu Repeatability kém thì sửa cái gì?", "Gage R&R > 30% có dùng được không?"],
                hint_levels: ["Equipment issue", "Training issue", "Reject measuring system"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 4", location_hint_en: "MSA & Gage R&R" }
            ],
            flashcards: [
                {
                    id: "fc_measure_03_01",
                    question_en: "Variation from different operators measuring the same part is called:",
                    answer_vi: "Reproducibility (Khả năng tái lập).",
                    tags_en: ["MSA"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_03_02",
                    question_en: "What is the verdict if Gage R&R is 35%?",
                    answer_vi: "Unacceptable. Must fix measurement system.",
                    tags_en: ["MSA", "Criteria"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_measure_02"]
        },
        {
            id: "mod_measure_04",
            order: 4,
            title_en: "Process Capability (Cp, Cpk) & Sigma Level",
            summary_vi: "Đánh giá năng lực quy trình. Bảng quy đổi DPMO và các ngưỡng quan trọng.",
            summary_en: "Assessing Process Capability. DPMO Conversion Table and critical thresholds.",
            key_metrics_en: ["Cp", "Cpk", "Sigma Level", "DPMO", "Yield"],
            key_points_en: [
                "Cp: Potential capability (Process Width vs Spec Width).",
                "Cpk: Actual capability (Accounts for Centering).",
                "Cpk < 1.0: Not Capable.",
                "Cpk 1.33: Minimum Standard.",
                "Cpk 1.67: Six Sigma Level."
            ],
            explanation_vi: `
**1. Cp vs Cpk**
- **Cp (Tiềm năng):** "Xe có lọt cửa không?" (Không quan tâm lệch tâm). \`Cp = (USL-LSL)/6σ\`
- **Cpk (Thực tế):** "Xe có đang lọt cửa không?" (Phạt nếu lệch tâm). \`Cpk = Min(Cpu, Cpl)\`

**2. Các ngưỡng đánh giá Cpk**
- **Cpk < 1.0:** Kém. Quá trình tạo ra nhiều lỗi. (> 66,807 DPMO).
- **1.0 <= Cpk < 1.33:** Tạm được (Marginal). Cần theo dõi sát.
- **Cpk >= 1.33 (4 Sigma):** Tốt. Đạt chuẩn công nghiệp.
- **Cpk >= 1.67 (5 Sigma):** Xuất sắc.
- **Cpk >= 2.0 (6 Sigma):** Đẳng cấp thế giới. (3.4 DPMO).

**3. Bảng quy đổi Sigma - DPMO (Cần nhớ)**
| Cpk | Sigma Level | DPMO (Lỗi phần triệu) | Yield (Đạt) |
|---|---|---|---|
| 0.33 | 1.0 | 690,000 | 31% |
| 0.67 | 2.0 | 308,537 | 69% |
| 1.00 | 3.0 | 66,807 | 93.3% |
| 1.33 | 4.0 | 6,210 | 99.38% |
| 1.67 | 5.0 | 233 | 99.97% |
| 2.00 | 6.0 | 3.4 | 99.99966% |
            `,
            explanation_en: `
**1. Cp vs Cpk Recap**
- **Cp:** Can we do it? (Process Spread vs Spec Spread).
- **Cpk:** Are we doing it? (Considers Shift).

**2. Interpreting Cpk Scores**
- **< 1.0:** NOT CAPABLE. High defect rate. Action Required.
- **1.0 - 1.33:** Marginal. Risky.
- **>= 1.33:** CAPABLE. The standard goal for most processes.
- **>= 2.0:** SIX SIGMA.

**3. The Magic Table (Cpk to DPMO)**
| Cpk | Sigma | DPMO | Meaning |
|---|---|---|---|
| 0.33 | 1 | 690,000 | Disaster |
| 1.00 | 3 | 66,807 | Average |
| 1.33 | 4 | 6,210 | Industry Std |
| 1.67 | 5 | 233 | World Class |
| 2.00 | 6 | 3.4 | Six Sigma |
            `,
            recommended_tools_en: ["Capability Sixpack"],
            python_focus_en: ["Calculation"],
            code_blocks: [
                {
                    id: "code_measure_cpk",
                    title_en: "Calculating Cp, Cpk & DPMO",
                    context_en: `Situation: A customer requires a shaft diameter of 10.0 ± 0.5 mm. You collected 8 samples. Goal: Determine if the process is capable (Cpk >= 1.33).`,
                    description_vi: "Hàm này tính toán năng lực quy trình:\n\n1. **Cp (Tiềm năng):** So sánh bề rộng của đường (USL-LSL) với bề rộng của xe (6 Sigma). Nếu Cp > 1, xe lọt đường.\n2. **Cpk (Thực tế):** Xem xét xe có đi lệch tâm không. Cpk luôn <= Cp.\n3. Ở ví dụ dưới, nếu Cpk < 1.33, quy trình cần cải tiến (hoặc canh giữa lại).",
                    code_template: `import numpy as np

def calculate_capability(data, usl, lsl):
    sigma = np.std(data, ddof=1)
    mean = np.mean(data)
    
    # Cp Calculation
    cp = (usl - lsl) / (6 * sigma)
    
    # Cpk Calculation
    cpu = (usl - mean) / (3 * sigma)
    cpl = (mean - lsl) / (3 * sigma)
    cpk = min(cpu, cpl)
    
    return cp, cpk

# Example Data
data = [9.8, 10.1, 9.9, 10.0, 10.2, 9.7, 10.1, 10.0]
USL = 10.5
LSL = 9.5

cp, cpk = calculate_capability(data, USL, LSL)

print(f"Cp (Potential): {cp:.2f}")
print(f"Cpk (Actual): {cpk:.2f}")

if cpk < 1.33:
    print("Process is NOT capable.")
else:
    print("Process is capable (>= 1.33).")`,
                    expected_output_en: "Cp and Cpk values with conclusion.",
                    datasets_used: [],
                    learning_points_en: ["Capability formulas", "Interpretation"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Contrast Cp and Cpk.",
                suggested_questions: ["Nếu Cp = 2.0 mà Cpk = 0.5 thì vấn đề là gì?", "Cpk bao nhiêu thì đạt 6 Sigma?"],
                hint_levels: ["Off-center process", "Cpk = 2.0 corresponds to 6 Sigma", "DPMO = 3.4"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 10", location_hint_en: "Process Capability" }
            ],
            flashcards: [
                {
                    id: "fc_measure_04_01",
                    question_en: "What DPMO corresponds to a Cpk of 1.33 (4 Sigma)?",
                    answer_vi: "~6,210 DPMO.",
                    tags_en: ["Capability", "Table"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_04_02",
                    question_en: "If Cp is high (2.0) but Cpk is low (0.5), what should you do?",
                    answer_vi: "Center the process (Adjust the mean).",
                    tags_en: ["Capability", "Strategy"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_measure_03"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_measure_quiz",
            order: 5,
            title_en: "Chapter 3 Quiz: Measure Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 3 (30 câu hỏi).",
            summary_en: "Comprehensive Chapter 3 Quiz (30 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of Statistics, MSA, and Process Capability."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp toàn bộ giai đoạn Measure, từ các loại dữ liệu, thống kê cơ bản đến phân tích hệ thống đo lường (MSA) và năng lực quy trình (Cp/Cpk).",
            explanation_en: "This quiz covers the Measure phase: Descriptive Statistics, MSA (Gage R&R), and Process Capability (Cp/Cpk).",
            recommended_tools_en: [],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: false,
                system_prompt_en: "",
                suggested_questions: [],
                hint_levels: [],
                max_hints_per_question: 0
            },
            references_en: [],
            flashcards: [],
            quiz: {
                difficulty_en: "Exam-level",
                questions: [] // Populated dynamically
            },
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 45,
            prerequisites_ids: ["mod_measure_01", "mod_measure_02", "mod_measure_03", "mod_measure_04"]
        }
    ]
};
