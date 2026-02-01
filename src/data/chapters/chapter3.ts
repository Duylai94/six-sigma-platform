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
            title_en: "Measure Phase: Process Definition & Filtering",
            summary_vi: "Xác lập sự hiểu biết chi tiết về quy trình 'As-Is' bằng bản đồ quy trình, ưu tiên đầu vào bằng Ma trận C&E, và đánh giá rủi ro bằng FMEA.",
            summary_en: "Establishing a detailed understanding of the 'As-Is' process using Process Maps, prioritizing inputs using the C&E Matrix, and assessing risk using FMEA.",
            key_metrics_en: ["C&E Matrix", "RPN", "Value-Added Time"],
            key_points_en: [
                "Process Maps: Visualizes tasks. Swimlanes show 'who', Spaghetti shows 'motion', VSM shows 'flow'.",
                "C&E Matrix (X-Y Diagram): Prioritizes Inputs (X) based on impact to Customer Outputs (Y).",
                "FMEA: Proactive risk assessment (Severity x Occurrence x Detection).",
                "FMEA Rule: High Severity (9-10) is always priority #1."
            ],
            explanation_vi: `
**1. Bản Đồ Quy Trình (Process Maps & Flowcharts)**
Để đo lường một quy trình, bạn phải xác định điểm Bắt đầu, Kết thúc và các Bước.
- **Process Map (Flowchart):** Hình chữ nhật (Bước), Hình thoi (Quyết định), Hình "D" (Chờ đợi/Lãng phí).
- **Swimlane Map (Sơ đồ bơi):** Phân chia bước theo Phòng ban/Người. *Tốt nhất để tìm lỗ hổng trách nhiệm và chuyển giao (hand-offs).*
- **Spaghetti Diagram:** Vẽ lại đường đi vật lý của người/vật liệu. *Tuyệt vời để tìm lãng phí Di chuyển (Motion).*
- **Value Stream Map (VSM):** Bản đồ dòng giá trị. Chỉ ra cả dòng chảy vật liệu VÀ thông tin. Phân biệt thời gian Có giá trị (VA) và Không giá trị (NVA).

━━━━━━

**2. Ma Trận Nguyên Nhân & Kết Quả (C&E Matrix / X-Y Diagram)**
Sau khi vẽ bản đồ, bạn có rất nhiều Đầu vào (X). Cái nào quan trọng?
- **Mục đích:** Ưu tiên các Input (X) dựa trên tác động của chúng tới Output của khách hàng (Y).
- **Phương pháp:**
  1. Liệt kê Key Outputs (Y's) và trọng số (1-10).
  2. Liệt kê Key Inputs (X's) từ bản đồ quy trình.
  3. Chấm điểm tương quan (Correlation) của mỗi X với mỗi Y (0, 1, 3, 9).
  4. Tính tổng điểm. Những X điểm cao sẽ được đưa vào FMEA.

━━━━━━

**3. FMEA (Failure Mode & Effects Analysis)**
Công cụ đánh giá rủi ro chủ động.
- **Scoring (Thang 1-10):**
  - **Severity (S):** Hậu quả. (10 = An toàn/Chết người).
  - **Occurrence (O):** Tần suất. (10 = Ngày nào cũng bị).
  - **Detection (D):** Khả năng phát hiện. (10 = Không có kiểm soát / Không thể phát hiện).
- **RPN = S x O x D**.
- **Quy tắc ưu tiên:**
  1. **High Severity (9-10)** phải xử lý đầu tiên, bất kể RPN.
  2. RPN cao xử lý tiếp theo.
- **Hành động khắc phục:** Tốt nhất là giảm O (Ngăn chặn), sau đó là cải thiện D (Phát hiện). Rất khó giảm S (Phải thiết kế lại).
            `,
            explanation_en: `
**1. Process Maps & Flowcharts**
To measure a process, you must define its start, stop, and steps.
- **Process Map:** Visualizes task sequence. Remember: Diamonds = Decisions, 'D' = Delay.
- **Swimlane Map:** Separates steps by Department/Role. *Best for identifying unclear hand-offs.*
- **Spaghetti Diagram:** Traces physical movement. *Best for Motion and Transportation waste.*
- **Value Stream Map (VSM):** Lean tool showing Material AND Information flow. Distinguishes Value-Added vs Non-Value-Added time.

━━━━━━

**2. Cause & Effect Matrix (C&E / X-Y Diagram)**
After mapping, you have many inputs (X's). Which ones matter?
- **Purpose:** Prioritize Inputs (X's) based on impact on Customer Outputs (Y's).
- **Method:**
  1. List Output Y's & Weight them (1-10).
  2. List Input X's.
  3. Rate Correlation (0, 1, 3, 9).
  4. Calculate Score. High scoring X's -> Move to FMEA.

━━━━━━

**3. FMEA (Risk Assessment)**
Proactive tool to find failures *before* they happen.
- **Scoring (1-10):**
  - **Severity (S):** Impact. (10 = Hazardous).
  - **Occurrence (O):** Frequency. (10 = Inevitable).
  - **Detection (D):** Visibility. (**10 = Cannot Detect/No Controls**).
- **RPN = S x O x D**.
- **Priority:** Safety first (High S), then High RPN.
- **Strategy:** Reduce Occurrence (Prevention) > Improve Detection (Final Inspection).
            `,
            recommended_tools_en: ["C&E Matrix", "Swimlane Map", "VSM"],
            python_focus_en: ["Matrix Calculation"],
            code_blocks: [
                {
                    id: "code_measure_ce_matrix",
                    title_en: "Cause & Effect (C&E) Matrix Calculator",
                    title_vi: "Máy tính Ma trận Nguyên nhân & Kết quả",
                    description_vi: "Tính điểm ưu tiên cho các đầu vào (X) dựa trên trọng số đầu ra (Y).",
                    concept_explanation_en: `The **C&E Matrix** creates a weighted score for each Input.
Score = $\\sum (XY\_Correlation \\times Y\_Importance)$

High scoring inputs are the "Vital Few" variables you should focus on in Analyze phase.`,
                    concept_explanation_vi: `**Ma trận C&E** tính điểm trọng số cho từng Đầu vào.
Điểm = $\\sum (Tương\_quan\_XY \\times Độ\_quan\_trọng\_Y)$

Đầu vào điểm cao là những biến số "Vital Few" bạn cần tập trung trong pha Phân tích.`,
                    code_template: `import pandas as pd
import numpy as np

# 1. Define Outputs (Y) and their Importance (1-10)
outputs = ['Safety', 'Customer Sat', 'Cost']
weights = np.array([10, 9, 5])

# 2. Define Inputs (X) from Process Map
inputs = ['Temperature', 'Pressure', 'Raw Material']

# 3. Define Correlations (0, 1, 3, 9)
# Row = Input X, Col = Output Y
# Shape: (3 inputs, 3 outputs)
correlations = np.array([
    [9, 3, 1],  # Temperature affects Safety(9), Sat(3), Cost(1)
    [3, 9, 3],  # Pressure affects Safety(3), Sat(9), Cost(3)
    [1, 3, 9]   # Material affects Safety(1), Sat(3), Cost(9)
])

# 4. Calculate Weighted Scores
# Matrix Multiplication: (3x3) dot (3x1)
scores = np.dot(correlations, weights)

# Display Results
df = pd.DataFrame({
    'Input (X)': inputs,
    'Score': scores
})

print("--- C&E Matrix Prioritization ---")
print(df.sort_values(by='Score', ascending=False))`,
                    expected_output_en: "Ranked list of inputs based on weighted scores.",
                    expected_output_vi: "Danh sách xếp hạng đầu vào dựa trên điểm trọng số.",
                    datasets_used: [],
                    learning_points_en: ["Weighted Scoring", "Matrix Multiplication"],
                    difficulty_en: "Intermediate",
                    ai_tutor_prompts: ["Why use 0, 1, 3, 9 scale?", "What if all X's have high scores?"],
                    challenges: [
                        {
                            id: "ch_ce_01",
                            prompt_en: "Add a new Input 'Operator Skill' with correlations [9, 9, 3].",
                            hint_en: "Update inputs list and add a row to correlations array.",
                            solution_code: "inputs.append('Operator Skill')\nnew_row = [9, 9, 3]\ncorrelations = np.vstack([correlations, new_row])"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain C&E Matrix and FMEA connection.",
                suggested_questions: [
                    { question_vi: "Khi nào dùng Swimlane map?", question_en: "When to use a Swimlane map?" },
                    { question_vi: "C&E Matrix giúp gì cho FMEA?", question_en: "How does C&E Matrix help FMEA?" },
                    { question_vi: "Tại sao điểm Detection 10 lại xấu?", question_en: "Why is Detection score 10 bad?" }
                ],
                hint_levels: ["Clarify responsibilities", "Filter inputs", "Visibility of defects"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 6", location_hint_en: "C&E Matrix" }
            ],
            flashcards: [
                {
                    id: "fc_measure_01_01",
                    question_en: "Which mapping tool is best for identifying physical motion waste?",
                    answer_vi: "Spaghetti Diagram.",
                    tags_en: ["Process Map", "Waste"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_01_02",
                    question_en: "What is the primary purpose of the Cause & Effect (C&E) Matrix?",
                    answer_vi: "To prioritize Inputs (X's) based on their impact on Customer Outputs (Y's).",
                    tags_en: ["C&E Matrix", "Prioritization"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_01_03",
                    question_en: "In FMEA, if you cannot detect a defect at all (no controls), what is the Detection score?",
                    answer_vi: "10 (Bad/Absolute Uncertainty).",
                    tags_en: ["FMEA", "Scoring"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_01_04",
                    question_en: "What specific risk must act on immediately regardless of the RPN score?",
                    answer_vi: "High Severity (9 or 10) - Safety/Hazardous issues.",
                    tags_en: ["FMEA", "Rules"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_01_05",
                    question_en: "Should you map the 'As-Is' or 'To-Be' process in the Measure Phase?",
                    answer_vi: "As-Is (Current State). You must measure reality, not the ideal.",
                    tags_en: ["Process Map", "Phases"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_define_fmea"]
        },
        {
            id: "mod_measure_02",
            order: 2,
            title_en: "Six Sigma Statistics & Normality Testing",
            summary_vi: "Hiểu về loại dữ liệu, thống kê mô tả và kiểm định chuẩn (P-value).",
            summary_en: "Understanding Data Types, Descriptive Statistics, and validating Normal Distribution.",
            key_metrics_en: ["Mean vs Median", "Standard Deviation", "P-value", "Skewness"],
            key_points_en: [
                "Data Types: Continuous (Rich info) vs Discrete (Nominal/Ordinal).",
                "Central Tendency: Mean (Sensitive to outliers) vs Median (Robust).",
                "Normality Rule: 'If P is low, the Null must go'. (P < 0.05 = Not Normal).",
                "Visual Check: Histogram (Bell Curve) & P-Plot (Fat Pencil Test).",
                "Central Limit Theorem: n > 30 tends to normalize averages."
            ],
            explanation_vi: `
**1. Các Loại Dữ Liệu (Data Types)**
Phân loại đúng là bước đầu tiên để chọn phương pháp kiểm định.
- **Continuous (Biến đổi/Liên tục):** Đo trên thang liên tục. Có số thập phân.
  - *Ví dụ:* Thời gian, Cân nặng, Áp suất, Tiền. -> *Giàu thông tin nhất.*
- **Discrete (Thuộc tính/Rời rạc):** Đếm hoặc phân loại.
  - *Nominal (Danh nghĩa):* Nhãn không có thứ tự logic (Đạt/Hỏng, Xanh/Đỏ, Tên phòng ban).
  - *Ordinal (Thứ bậc):* Có thứ tự xếp hạng (Hài lòng 1-5, Tốt/Khá/TB). Khoảng cách không đều.
  - *Discrete Counts:* Số nguyên đếm được (Số lỗi, Số nhân viên).

━━━━━━

**2. Thống Kê Mô Tả (Descriptive Statistics)**
- **Đo lường Xu hướng tập trung:**
  - **Mean (μ):** Trung bình cộng. *Nhạy cảm với giá trị ngoại lai (Outliers).*
  - **Median (x̃):** Giá trị ở giữa. *Kháng nhiễu tốt (Dùng cho dữ liệu lệch).*
  - **Mode:** Giá trị xuất hiện nhiều nhất.
- **Đo lường Độ phân tán:**
  - **Range:** Max - Min.
  - **Standard Deviation (σ):** Khoảng cách trung bình từ các điểm dữ liệu đến Mean.
  - **Variance (σ²):** Bình phương độ lệch chuẩn (Dùng trong ANOVA).

━━━━━━

**3. Kiểm Định Chuẩn (Normality Testing)**
Hầu hết các kiểm định (T-test, Capability) giả định dữ liệu phân phối chuẩn (Hình chuông).
- **Kiểm định:** Anderson-Darling (Chuẩn) hoặc Shapiro-Wilk.
  - *H0 (Null):* Dữ liệu LÀ Chuẩn.
  - *Ha (Alternate):* Dữ liệu KHÔNG Chuẩn.
- **Quy tắc P-value (Quy tắc Vàng):**
  - **P-value < 0.05:** Bác bỏ H0. -> Dữ liệu **KHÔNG CHUẨN**. (Phải dùng Non-Parametric hoặc Box-Cox).
  - **P-value ≥ 0.05:** Chấp nhận H0. -> Dữ liệu **LÀ CHUẨN**.
- **Kiểm tra bằng mắt:**
  - *Histogram:* Hình chuông đối xứng.
  - *Probability Plot (P-Plot):* "Fat Pencil Test" - Các điểm dữ liệu phải nằm dọc theo đường chéo đậm.
            `,
            explanation_en: `
**1. Data Types**
Classifying data determines which statistical test you can use.
- **Continuous / Variable:** Measured on continuous scale. Infinite divisibility.
  - *Ex:* Time, Weight, Height. *Exam Tip: Continuous data is "richer" than attribute data.*
- **Discrete / Attribute:** Counted or categorized.
  - *Nominal:* Names/Labels with NO logical order (Pass/Fail, Red/Blue).
  - *Ordinal:* Categories WITH logical order (Likert 1-5, S/M/L) but unequal distance.
  - *Discrete Counts:* Integers only (Defect counts).

━━━━━━

**2. Descriptive Statistics**
- **Measures of Central Tendency:**
  - **Mean (μ):** Arithmetic average. *Sensitive to outliers.*
  - **Median (x̃):** Middle value. *Robust to outliers (Best for skewed data).*
  - **Mode:** Most frequent value.
- **Measures of Dispersion:**
  - **Range:** Max - Min.
  - **Standard Deviation (σ):** Average distance of data points from Mean.
  - **Variance (σ²):** Std Dev squared (Used in ANOVA).

━━━━━━

**3. Normality Testing**
Parametric tests (T-test, ANOVA) assume data follows Normal Distribution (Bell Curve).
- **Test:** Anderson-Darling or Shapiro-Wilk.
  - *H0 (Null):* Data is Normal.
  - *Ha (Alternate):* Data is NOT Normal.
- **The P-value Rule (Golden Rule):**
  - **P-value < 0.05:** Reject H0. Data is **NOT Normal**. -> Action: Box-Cox or Non-Parametric.
  - **P-value ≥ 0.05:** Fail to reject H0. Data **IS Normal**.
- **Visual Check:**
  - *Histogram:* Look for Bell Shape.
  - *Probability Plot:* "Fat Pencil Test" — data falls within thick diagonal lines.
            `,
            recommended_tools_en: ["Minitab", "Python (Scipy)"],
            python_focus_en: ["Descriptive Stats", "Normality Test"],
            code_blocks: [
                {
                    id: "code_measure_stats",
                    title_en: "Normality Test (Shapiro-Wilk)",
                    title_vi: "Kiểm định chuẩn Shapiro-Wilk",
                    description_vi: "Đoạn code kiểm tra xem dữ liệu có phân phối chuẩn không.\n\n- Nếu P-value > 0.05: Dữ liệu chuẩn (Tốt).\n- Nếu P-value < 0.05: Dữ liệu bị méo (Skewed) -> Cẩn thận!",
                    concept_explanation_en: "Goal: Check if our cycle time data is Normal before running a T-test.",
                    concept_explanation_vi: "Mục tiêu: Kiểm tra xem dữ liệu thời gian chu kỳ có Chuẩn không trước khi chạy T-test.",
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
fig = plt.figure()
ax = fig.add_subplot(111)
stats.probplot(normal_data, dist="norm", plot=ax)
plt.title("Q-Q Plot (Normal Data)")
plt.show()`,
                    expected_output_en: "P-value analysis -> Pass/Fail.",
                    expected_output_vi: "Kết quả phân tích P-value -> Đạt/Không đạt.",
                    datasets_used: [],
                    learning_points_en: ["Shapiro-Wilk syntax", "Interpreting P-values"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain why Normality matters.",
                suggested_questions: [
                    { question_vi: "Nếu dữ liệu không chuẩn thì sao?", question_en: "What if the data is not Normal?" },
                    { question_vi: "Nominal khác Ordinal chỗ nào?", question_en: "What is the difference between Nominal and Ordinal?" }
                ],
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
    ** 1. Tại sao cần MSA ?**
        Trước khi tin vào dữ liệu, phải tin vào thước đo.

** 2. Các thành phần sai số **
- ** Accuracy(Độ chính xác):** Bias, Linearity, Stability.
- ** Precision(Độ chụm):** Repeatability + Reproducibility.

** 3. Gage R & R Study(Tiêu chuẩn) **
- ** Thiết kế chuẩn:** 10 mẫu x 3 người đo x 3 lần lặp = 90 dữ liệu.
- ** Repeatability(Equipment):** Do thiết bị.Khắc phục: Sửa máy, kẹp chặt hơn.
- ** Reproducibility(Appraiser):** Do con người.Khắc phục: Đào tạo(SOP), dùng dưỡng đo.

** 4. Acceptance Criteria(Tiêu chuẩn Chấp nhận) - Thuộc lòng! **
- ** <10%:** Hệ thống tuyệt vời(Excellent). -> ** Dùng ngay.**
- ** 10 % - 30 %:** Tạm chấp nhận(Marginal). -> ** Dùng có điều kiện ** (tùy vào chi phí sửa chữa).
- **> 30 %:** Không chấp nhận(Unacceptable). -> ** DỪNG LẠI **.Phải sửa hệ thống đo trước khi làm tiếp.
            `,
            explanation_en: `
    ** 1. Why MSA ?**
        validate the measurement system before collecting project data.

** 2. Precision Components **
- ** Repeatability(EV):** Equipment Variation.Same operator, same part.
- ** Reproducibility(AV):** Appraiser Variation.Different operators, same part.

** 3. Standard Study Design **
    - 10 Parts(representing process range)
        - 3 Operators
            - 3 Trials(Blind measurement)
                - Total: 90 Data points.

** 4. Acceptance Criteria(MEMORIZE THIS) **
- **% GR & R < 10 %:** Excellent.System is capable.
- **% GR & R 10 % - 30 %:** Marginal.Acceptable depending on application / cost.
- **% GR & R > 30 %:** ** FAIL.** System needs improvement.Do NOT proceed to Analyze phase.
            `,
            recommended_tools_en: ["Gage R&R Crossed", "Calibration"],
            python_focus_en: ["ANOVA Logic"],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Repeatability vs Reproducibility.",
                suggested_questions: [
                    { question_vi: "Nếu Repeatability kém thì sửa cái gì?", question_en: "What to fix if Repeatability is poor?" },
                    { question_vi: "Gage R&R > 30% có dùng được không?", question_en: "Can we use Gage R&R > 30%?" }
                ],
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
    ** 1. Cp vs Cpk **
- ** Cp(Tiềm năng):** "Xe có lọt cửa không?"(Không quan tâm lệch tâm).\`Cp = (USL-LSL)/6σ\`
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
                suggested_questions: [
                    { question_vi: "Nếu Cp = 2.0 mà Cpk = 0.5 thì vấn đề là gì?", question_en: "If Cp = 2.0 but Cpk = 0.5, what is the problem?" },
                    { question_vi: "Cpk bao nhiêu thì đạt 6 Sigma?", question_en: "What Cpk value corresponds to 6 Sigma?" }
                ],
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
