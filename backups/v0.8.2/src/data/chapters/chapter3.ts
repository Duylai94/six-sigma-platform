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
            summary_vi: "Gage R&R: Đảm bảo dữ liệu đáng tin cậy. Phân tách biến thiên quy trình và biến thiên đo lường.",
            summary_en: "Gage R&R: Ensuring data reliability. Separating Process Variation from Measurement System Variation.",
            key_metrics_en: ["%Study Var (%GR&R)", "Repeatability (EV)", "Reproducibility (AV)", "ndc (>5)"],
            key_points_en: [
                "Accuracy (Bias): Is the average correct? (Bullseye center).",
                "Precision (Variation): Are shots clustered? (Gage R&R).",
                "Repeatability (EV): Same Part, Same Gage, Same Operator. -> Equipment Issue.",
                "Reproducibility (AV): Same Part, Same Gage, Different Operator. -> Training Issue.",
                "Rule: <10% (Green), 10-30% (Yellow), >30% (Red/Fail).",
                "Resolution: ndc should be >= 5."
            ],
            explanation_vi: `
**1. Hai Trụ Cột của MSA (The Two Pillars)**
- **Accuracy (Độ chính xác / Bias):** Sự khác biệt giữa giá trị đo trung bình và "True Value" (giá trị chuẩn).
  - *Ví dụ:* Bắn trúng hồng tâm.
  - *Bias:* Lỗi hệ thống (Luôn đo dư 1mm).
  - *Linearity:* Chính xác trên toàn dải đo (Đo 10kg chuẩn, liệu 100kg có chuẩn?).
  - *Stability:* Ổn định theo thời gian (Máy có trôi sau 4 giờ?).
- **Precision (Độ chụm / Variation):** Độ biến thiên khi đo lặp lại cùng một vật.
  - *Ví dụ:* Các phát bắn chụm vào một chỗ (dù lệch tâm).
  - *Gage R&R:* Công cụ đo độ chụm.

━━━━━━

**2. Thành Phần Gage R&R (Decision Criteria)**
- **Repeatability (Equipment Variation - EV):**
  - *Định nghĩa:* 1 Người, 1 Vật, 1 Thước đo, Lặp lại nhiều lần.
  - *Nguyên nhân:* Thiết bị lỏng lẻo, kẹp không chặt, bảo dưỡng kém.
- **Reproducibility (Appraiser Variation - AV):**
  - *Định nghĩa:* Nhiều Người, 1 Vật, 1 Thước đo.
  - *Nguyên nhân:* Người đo thao tác khác nhau. Cần training lại SOP.

━━━━━━

**3. Thiết Kế & Tiêu Chuẩn (Study Design & Rules)**
- **Standard Setup:** 10 Mẫu × 3 Người đo × 3 Lần lặp = 90 dữ liệu.
- **Acceptance Criteria (% Study Variation):** *HỌC THUỘC LÒNG!*
  - **< 10%:** Xanh (Green). Hệ thống tốt. -> *Dùng ngay.*
  - **10% - 30%:** Vàng (Yellow). Tạm chấp nhận. -> *Cân nhắc chi phí/rủi ro.*
  - **> 30%:** Đỏ (Fail). Không chấp nhận. -> *DỪNG LẠI! Không được qua pha Analyze.*
- **Resolution (Độ phân giải):**
  - *Chỉ số:* **ndc** (Number of Distinct Categories).
  - *Quy tắc:* **ndc ≥ 5** mới phân biệt được các nhóm dữ liệu.
            `,
            explanation_en: `
**1. The Two Pillars of MSA**
- **Accuracy (Bias):** Difference between average measurement and "True Value".
  - *Analogy:* Hitting the bullseye.
  - *Types:* Bias (Offset), Linearity (Range consistency), Stability (Time consistency).
- **Precision (Variation):** Variation when measuring the same part repeatedly.
  - *Analogy:* Shots clustered tightly (Precision) vs Scattered (Imprecision).
  - *Gage R&R measures Precision.*

━━━━━━

**2. Gage R&R Components**
- **Repeatability (Equipment Variation - EV):**
  - *Def:* Same Operator, Same Part, Repeated trials.
  - *Cause:* Equipment maintenance, loose clamping, dirt.
- **Reproducibility (Appraiser Variation - AV):**
  - *Def:* Different Operators, Same Part.
  - *Cause:* Human error, unclear SOP, lack of training.

━━━━━━

**3. Study Design & Criteria**
- **Standard:** 10 Parts × 3 Operators × 3 Trials = 90 points.
- **Acceptance Criteria (% Study Var):** *MEMORIZE THIS*
  - **< 10%:** Excellent. System is capable.
  - **10% - 30%:** Marginal. Acceptable depending on cost.
  - **> 30%:** **FAIL**. System unacceptable. Fix the gage before collecting data.
- **Resolution Rule:**
  - **ndc (Number of Distinct Categories) ≥ 5.**
  - *The "10-Bucket Rule":* Gage should be 10x more precise than the tolerance.
            `,
            recommended_tools_en: ["Gage R&R Crossed", "Calibration"],
            python_focus_en: ["Variance Component Analysis"],
            code_blocks: [
                {
                    id: "code_measure_grr",
                    title_en: "Simple R&R Calculator",
                    title_vi: "Máy tính Gage R&R Đơn giản",
                    description_vi: "Tính %Gage R&R dựa trên phương sai của Thiết bị (EV) và Con người (AV).",
                    concept_explanation_en: `Calculates total **Gage R&R** from its components:
1. Equipment Variation (EV)
2. Appraiser Variation (AV)
3. Part-to-Part Variation (PV)

Formula: $ TotalVariation = \\sqrt{GRR^2 + PV^2} $`,
                    concept_explanation_vi: `Tính tổng **Gage R&R** từ các thành phần:
1. Biến thiên Thiết bị (EV)
2. Biến thiên Người đo (AV)
3. Biến thiên Mẫu (PV)

Công thức: $ TotalVariation = \\sqrt{GRR^2 + PV^2} $`,
                    code_template: `import math

def calculate_grr_percentage(sigma_ev, sigma_av, sigma_pv):
    # 1. Total Gage R&R Variance (Repeatability + Reproducibility)
    var_grr = sigma_ev**2 + sigma_av**2
    sigma_grr = math.sqrt(var_grr)
    
    # 2. Total Study Variation (TV) = sqrt(GRR^2 + PV^2)
    var_tv = var_grr + sigma_pv**2
    sigma_tv = math.sqrt(var_tv)
    
    # 3. Calculate % Study Variation
    percent_grr = (sigma_grr / sigma_tv) * 100
    
    # 4. Calculate ndc (Number of Distinct Categories)
    ndc = 1.41 * (sigma_pv / sigma_grr)
    
    return percent_grr, ndc

# Example Data (Standard Deviation components from ANOVA)
s_ev = 0.5  # Repeatability
s_av = 0.4  # Reproducibility
s_pv = 5.0  # Part Variation (Actual Process)

pct_rr, ndc_val = calculate_grr_percentage(s_ev, s_av, s_pv)

print(f"% Gage R&R: {pct_rr:.2f}%")
print(f"ndc:        {int(ndc_val)}")

if pct_rr < 10:
    print("-> System is EXCELLENT (Green)")
elif pct_rr > 30:
    print("-> System FAILED (Red) - Fix immediately!")
else:
    print("-> System is MARGINAL (Yellow)")`,
                    expected_output_en: "%R&R and pass/fail verdict.",
                    expected_output_vi: "Kết quả %R&R và kết luận Đạt/Hỏng.",
                    datasets_used: [],
                    learning_points_en: ["%Study Variation Formula", "ndc logic"],
                    difficulty_en: "Intermediate",
                    ai_tutor_prompts: ["What if sigma_av is 0?", "Why is ndc important?"],
                    challenges: [
                        {
                            id: "ch_grr_01",
                            prompt_en: "Increase Appraiser Variation (s_av) to 2.0 and check result.",
                            hint_en: "Set s_av = 2.0",
                            solution_code: "s_av = 2.0\npct_rr, ndc_val = calculate_grr_percentage(s_ev, s_av, s_pv)"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "You are an MSA expert. Diagnose measurement issues.",
                suggested_questions: [
                    { question_vi: "Repeatability khác Reproducibility chỗ nào?", question_en: "Difference between Repeatability and Reproducibility?" },
                    { question_vi: "Nếu Gage R&R > 30% thì làm gì?", question_en: "What if Gage R&R > 30%?" },
                    { question_vi: "Chỉ số ndc là gì?", question_en: "What is the ndc metric?" }
                ],
                hint_levels: ["Same operator vs Different operators", "Reject system", "Distinct Categories > 5"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 8", location_hint_en: "MSA" }
            ],
            flashcards: [
                {
                    id: "fc_measure_03_01",
                    question_en: "Variation observed when the SAME operator measures the same part repeatedly is:",
                    answer_vi: "Repeatability (Equipment Variation).",
                    tags_en: ["MSA", "Definitions"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_03_02",
                    question_en: "What is the mandatory action if Gage R&R > 30%?",
                    answer_vi: "Stop. The system is unacceptable. Fix it before measuring.",
                    tags_en: ["MSA", "Rules"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_03_03",
                    question_en: "What is the minimum acceptable value for ndc (Number of Distinct Categories)?",
                    answer_vi: "ndc >= 5.",
                    tags_en: ["MSA", "Metrics"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_03_04",
                    question_en: "Can a gage be Precise but not Accurate?",
                    answer_vi: "Yes. (Consistently wrong). You need both.",
                    tags_en: ["MSA", "Concepts"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_03_05",
                    question_en: "Which variation is caused by 'Different People'?",
                    answer_vi: "Reproducibility (Appraiser Variation).",
                    tags_en: ["MSA", "Definitions"],
                    difficulty_en: "Easy",
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
            summary_vi: "Đánh giá năng lực quy trình. So sánh Tiếng nói của Quy trình (Voice of Process) với Tiếng nói của Khách hàng (Voice of Customer).",
            summary_en: "Assessing if the process can meet requirements. Comparing Voice of Process (Control Limits) to Voice of Customer (Spec Limits).",
            key_metrics_en: ["Cp (Potential)", "Cpk (Actual)", "Sigma Level", "DPMO", "Yield"],
            key_points_en: [
                "Prerequisite 1: Stability (Process must be in control).",
                "Prerequisite 2: Normality (P-value > 0.05).",
                "Cp: Potential capability (Width). Formula: (USL-LSL)/6σ. 'Can we fit the car?'",
                "Cpk: Actual capability (Centering). Formula: Min(Cpu, Cpl). 'Did we hit the wall?'",
                "Standard: Cpk >= 1.33 (4 Sigma) is the minimum goal.",
                "Relationship: Short-term Sigma Level ≈ 3 * Cpk."
            ],
            explanation_vi: `
**1. Các Định Nghĩa Cốt Lõi (Definitions)**
Trước khi tính toán, hãy hiểu rõ các biến số:
- **USL (Upper Specification Limit):** Giới hạn trên của khách hàng. (VD: Đường kính tối đa 10.5mm).
- **LSL (Lower Specification Limit):** Giới hạn dưới của khách hàng. (VD: Đường kính tối thiểu 9.5mm).
- **Sigma ($\sigma$):** Độ lệch chuẩn (Standard Deviation) - Đo lường sự biến thiên của quy trình.
- **$\mu$ (Mu):** Giá trị trung bình của quy trình.

━━━━━━

**2. Công Thức Cp (Process Potential)**
Cp đo lường "Tiềm năng" - liệu quy trình có *đủ hẹp* để lọt vào giới hạn của khách hàng không (bỏ qua việc có lệch tâm hay không).

$$ Cp = \\frac{USL - LSL}{6\\sigma} $$

*Giải thích công thức:*
- **Tử số ($USL - LSL$):** Độ rộng cho phép của khách hàng (Voice of Customer).
- **Mẫu số ($6\\sigma$):** Độ rộng thực tế của quy trình (Voice of Process).
- *Quy tắc:* Nếu $Cp > 1$, quy trình "vừa vặn" (Capable).

━━━━━━

**3. Công Thức Cpk (Process Capability)**
Cpk đo lường "Thực tế" - xem xét cả độ rộng và vị trí trung tâm.

$$ Cpk = \\min(Cpk_{upper}, Cpk_{lower}) $$

Trong đó:
$$ Cpk_{upper} = \\frac{USL - \\mu}{3\\sigma} $$
$$ Cpk_{lower} = \\frac{\\mu - LSL}{3\\sigma} $$

*Tại sao dùng Min?*
Chúng ta quan tâm đến phía "tệ nhất" (gần giới hạn nào nhất). Nếu xe đỗ sát tường bên phải, ta tính khoảng cách đến tường đó.

━━━━━━

**4. Bảng Quy Đổi Magic (Sigma Conversion)**
| Cpk | Sigma Level | DPMO | Yield (%) | Đánh giá |
|---|---|---|---|---|
| < 1.0 | < 3 σ | > 66,807 | < 93.3% | **Kém (Not Capable)**. |
| **1.33** | **4 σ** | **6,210** | **99.38%** | **Chuẩn công nghiệp**. |
| **2.0** | **6 σ** | **3.4** | **99.9997%** | **Six Sigma**. |
            `,
            explanation_en: `
**1. Core Definitions**
Before calculating, understand the variables:
- **USL (Upper Specification Limit):** The maximum allowed by the customer (e.g., Max diameter 10.5mm).
- **LSL (Lower Specification Limit):** The minimum allowed by the customer (e.g., Min diameter 9.5mm).
- **Sigma ($\sigma$):** Standard Deviation - The measure of process variation.
- **$\mu$ (Mu):** The process average (Mean).

━━━━━━

**2. Cp Formula (Process Potential)**
Cp measures "Potential" - does the process variation fit within specificatoin limits? (Ignoring centering).

$$ Cp = \\frac{USL - LSL}{6\\sigma} $$

*Step-by-Step:*
1. Calculate the spread allowed by customer: $USL - LSL$.
2. Calculate the process spread: $6 \\times \\sigma$.
3. Divide Customer Spread by Process Spread.
*Interpretation:* If $Cp > 1.0$, the process width is good.

━━━━━━

**3. Cpk Formula (Process Capability)**
Cpk measures "Reality" - checking both width and centering.

$$ Cpk = \\min\\left(\\frac{USL - \\mu}{3\\sigma}, \\frac{\\mu - LSL}{3\\sigma}\\right) $$

*Step-by-Step:*
1. Calculate **Upper Capability**: Distance from Mean to USL defined in sigmas. ($Cpk_u$)
2. Calculate **Lower Capability**: Distance from Mean to LSL defined in sigmas. ($Cpk_l$)
3. Take the **Minimum** of the two.
*Reason:* The "Min" identifies the closest wall you might hit.

━━━━━━

**4. The Magic Table**
| Cpk | Sigma | DPMO | Interpretation |
|---|---|---|---|
| < 1.0 | < 3 σ | > 66,807 | **Bad**. High defects. |
| **1.33** | **4 σ** | **6,210** | **Industry Standard**. |
| **2.0** | **6 σ** | **3.4** | **Six Sigma**. |
            `,
            recommended_tools_en: ["Capability Sixpack (Minitab)", "Python (Scipy)"],
            python_focus_en: ["Process Capability Analysis"],
            code_blocks: [
                {
                    id: "code_measure_cpk",
                    title_en: "Calculating Cp, Cpk & DPMO",
                    title_vi: "Tính toán Cp, Cpk & DPMO",
                    description_vi: "Hàm này tính toán năng lực quy trình:\n\n1. **Cp (Tiềm năng):** So sánh bề rộng. Nếu Cp > 1, quy trình đủ khả năng.\n2. **Cpk (Thực tế):** Cpk luôn <= Cp. Nếu Cpk < 1.33, quy trình cần cải tiến.",
                    context_en: `Situation: A customer requires a shaft diameter of 10.0 ± 0.5 mm. You collected 8 samples.
Goal: Determine if the process is capable (Cpk >= 1.33).`,
                    code_template: `import numpy as np

def calculate_capability(data, usl, lsl):
    # 1. Calculate Descriptive Stats
    sigma = np.std(data, ddof=1) # Sample Std Dev
    mean = np.mean(data)
    
    # 2. Cp Calculation (Width)
    # Formula: (USL - LSL) / 6*sigma
    cp = (usl - lsl) / (6 * sigma)
    
    # 3. Cpk Calculation (Centering)
    # Formula: Min( (USL-Mean)/3s, (Mean-LSL)/3s )
    cpu = (usl - mean) / (3 * sigma)
    cpl = (mean - lsl) / (3 * sigma)
    cpk = min(cpu, cpl)
    
    return cp, cpk, mean, sigma

# Example Data
data = [9.8, 10.1, 9.9, 10.0, 10.2, 9.7, 10.1, 10.0]
USL = 10.5
LSL = 9.5

cp, cpk, mu, std = calculate_capability(data, USL, LSL)

print(f"Mean: {mu:.3f}, StdDev: {std:.3f}")
print(f"Cp (Potential): {cp:.2f}")
print(f"Cpk (Actual):   {cpk:.2f}")

# Verdict Logic
if cpk < 1.0:
    print("Verdict: NOT CAPABLE (Red). High defects.")
elif cpk < 1.33:
    print("Verdict: MARGINAL (Yellow). Improvements needed.")
else:
    print("Verdict: CAPABLE (Green). Meets Industry Standard.")

# Centering Check
if cp > 1.33 and cpk < 1.0:
    print("Insight: Process is Precise but OFF-CENTER. Adjust the Mean!")`,
                    expected_output_en: "Cp/Cpk values and Capability Verdict.",
                    expected_output_vi: "Giá trị Cp/Cpk và kết luận năng lực.",
                    datasets_used: [],
                    learning_points_en: ["Cp vs Cpk logic", "Standard 1.33 threshold"],
                    difficulty_en: "Intermediate",
                    ai_tutor_prompts: ["Why is Cpk always <= Cp?", "What happens if we move the Mean closer to USL?"],
                    challenges: [
                        {
                            id: "ch_cpk_01",
                            prompt_en: "Change the data to be centered at 10.0 exactly and see Cpk.",
                            hint_en: "Use data = [10.0, 10.0, ...]",
                            solution_code: "data = [10.0]*8\ncp, cpk, m, s = calculate_capability(data, USL, LSL)"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "You are a Process Capability expert. Help interpret Cp/Cpk indices.",
                suggested_questions: [
                    { question_vi: "Nếu dữ liệu không ổn định (Unstable) thì dùng chỉ số nào?", question_en: "Which index to use if process is Unstable?" },
                    { question_vi: "Cp = 2.0, Cpk = 1.0 nghĩa là gì?", question_en: "What does Cp=2.0, Cpk=1.0 mean?" },
                    { question_vi: "Mục tiêu Cpk chuẩn là bao nhiêu?", question_en: "What is the standard target for Cpk?" }
                ],
                hint_levels: ["Use Pp/Ppk", "Good potential but off-center", "Target Cpk >= 1.33"],
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
                    question_en: "If Cp is high (2.0) but Cpk is low (0.5), what is the problem?",
                    answer_vi: "The process is Off-Center. Adjust the Mean.",
                    tags_en: ["Capability", "Strategy"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_04_03",
                    question_en: "Which index implies 'Potential Capability' (Ignoring Centering)?",
                    answer_vi: "Cp.",
                    tags_en: ["Capability", "Definitions"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_04_04",
                    question_en: "Result: Can you calculate Cpk if the process is NOT stable?",
                    answer_vi: "No. You must fix stability first (or use Ppk).",
                    tags_en: ["Capability", "Rules"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_measure_04_05",
                    question_en: "What is the definition of Six Sigma in terms of Cpk?",
                    answer_vi: "Cpk >= 2.0.",
                    tags_en: ["Six Sigma", "Goals"],
                    difficulty_en: "Easy",
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
