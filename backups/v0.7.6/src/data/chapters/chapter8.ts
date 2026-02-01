import { Chapter, Module } from "../../types/course";

export const chapterControl: Chapter = {
    id: "ch_control",
    order: 8,
    title_en: "Control Phase - SPC & Sustaining",
    goal_vi: "Thiết lập cơ chế kiểm soát (Control Mechanism) để duy trì kết quả lâu dài.",
    goal_en: "Establish Control Mechanisms to sustain results long-term.",
    iassc_topics_en: [
        "5.1 Statistical Process Control (SPC)",
        "5.2 Control Plan",
        "5.3 Lean Controls"
    ],
    modules: [
        {
            id: "mod_control_spc_variable",
            order: 1,
            title_en: "SPC for Variable Data (Xbar-R / Xbar-S)",
            summary_vi: "Kiểm soát dữ liệu liên tục: Xbar-R, Xbar-S và I-MR.",
            summary_en: "Controlling Variable Data: Xbar-R, Xbar-S, and I-MR Charts.",
            key_metrics_en: ["UCL (Upper Control Limit)", "LCL (Lower Control Limit)", "Subgroups"],
            key_points_en: [
                "Control Limits (UCL/LCL): Voice of Process. Calculated from data (±3σ).",
                "Spec Limits (USL/LSL): Voice of Customer. Never put these on a Control Chart.",
                "Process in Control: Only Common Cause variation exists.",
                "Rule: Use Xbar-R for n=2-9. Use Xbar-S for n>=10."
            ],
            explanation_vi: `
**1. Statistical Process Control (SPC)**
SPC giống như "Hệ thống cảnh báo làn đường" trên xe hơi.
- **Common Cause (Ngẫu nhiên):** Biến động tự nhiên. -> *Action: Không làm gì cả.*
- **Special Cause (Đặc biệt):** Biến động do sự cố. -> *Action: Dừng và sửa.*

**2. Control Limits vs Spec Limits (Rất quan trọng)**
- **Control Limits (UCL, LCL):** Quy trình **THỰC TẾ** đang chạy thế nào. (Voice of Process).
- **Spec Limits (USL, LSL):** KHÁCH HÀNG **MUỐN** gì. (Voice of Customer).
- **Tuyệt đối:** Không dùng Spec Limits để đánh giá sự ổn định (Stability).

**3. Chart Selection for Continuous Data**
- **I-MR (Individual):** Khi cỡ mẫu **n = 1** (Phá hủy mẫu, hoặc đo quá lâu).
- **Xbar-R (Range):** Khi cỡ mẫu **n = 2 đến 9**. (Phổ biến nhất).
- **Xbar-S (Sigma):** Khi cỡ mẫu **n >= 10**. (Dùng độ lệch chuẩn S chuẩn xác hơn Range R).

**4. Western Electric Rules (Quy tắc ổn định)**
Máy tính sẽ báo động nếu gặp các mẫu sau (Special Cause):
1. **1 điểm ngoài 3σ:** Rõ ràng nhất (Outlier).
2. **Rule of 9:** 9 điểm liên tiếp nằm cùng một phía của đường Center Line. (Báo hiệu sự lệch tâm - Shift).
3. **Rule of 6:** 6 điểm liên tiếp tăng hoặc giảm. (Báo hiệu xu hướng - Trend).
            `,
            explanation_en: `
**1. SPC Concept**
- **Common Cause:** Natural noise (Random). -> *Do nothing.*
- **Special Cause:** Assignable event (Tool break, Material change). -> *Stop and Fix.*

**2. Control Limits vs Spec Limits**
- **UCL/LCL:** Internal limits calculated from process data (+/- 3 Sigma).
- **USL/LSL:** External limits defined by the customer.
- **Rule:** Never confuse the two. A process can be Stable (In Control) but creating defects (Out of Spec).

**3. Chart Selection (Variable Data)**
- **I-MR:** Subgroup size **n = 1**.
- **Xbar-R:** Subgroup size **n = 2 - 9**. (Uses Range).
- **Xbar-S:** Subgroup size **n >= 10**. (Uses Standard Deviation - More accurate for large samples).

**4. Stability Rules (Western Electric)**
1. **1 point outside 3σ:** Out of Control.
2. **Rule of 9:** 9 points on one side of Mean (Shift).
3. **Rule of 6:** 6 points increasing/decreasing (Trend).
            `,
            recommended_tools_en: ["Western Electric Rules", "Xbar-S"],
            python_focus_en: ["Control Limits Calculation"],
            code_blocks: [
                {
                    id: "code_spc_xbar",
                    title_en: "Generating Xbar-R Control Limits",
                    context_en: `Situation: You measures the diameter of 5 pistons every hour (Subgroup size n=5). Goal: Calculate the Upper and Lower Control Limits (UCL/LCL) to detect unstable variation.

Math Formula:
• X-double-bar (Center Line) = Avg(Means)
• UCL_x = X-double-bar + (A2 * R-bar)
• LCL_x = X-double-bar - (A2 * R-bar)
• For n=5, Constant A2 = 0.577`,
                    description_vi: "Biểu đồ X-bar R dùng cho dữ liệu biến đổi (đo lường được) với cỡ mẫu nhỏ (< 10):\n\n1. **X-bar Chart:** Theo dõi sự thay đổi của Trung bình (Mean). Quá trình có bị lệch tâm không?\n2. **R Chart:** Theo dõi sự thay đổi của Biến động (Range). Quá trình có ổn định không?\n3. **Quy tắc:** Bất kỳ điểm nào vượt ra ngoài UCL/LCL là tín hiệu 'Mất kiểm soát' (Out of Control).",
                    code_template: `import numpy as np
import matplotlib.pyplot as plt

# Simulated Data: 20 subgroups of 5 samples each
np.random.seed(42)
data = np.random.normal(loc=100, scale=2, size=(20, 5))

# Calculate Statistics
x_bar = np.mean(data, axis=1) # Mean of each subgroup
r_val = np.ptp(data, axis=1)  # Range (Max - Min) of each subgroup

# Constants for n=5
A2 = 0.577

# Grand Averages
x_dbar = np.mean(x_bar)
r_bar = np.mean(r_val)

# Control Limits
ucl_x = x_dbar + (A2 * r_bar)
lcl_x = x_dbar - (A2 * r_bar)

print(f"X-double-bar (Center Line): {x_dbar:.2f}")
print(f"UCL: {ucl_x:.2f}")
print(f"LCL: {lcl_x:.2f}")

# Check for Out of Control points
out_of_control = np.where((x_bar > ucl_x) | (x_bar < lcl_x))[0]
if len(out_of_control) > 0:
    print(f"⚠️ Alarm! Out of Control at subgroups: {out_of_control}")
else:
    print("✅ Process is Stable.")`,
                    expected_output_en: "Limits and Stability status.",
                    datasets_used: [],
                    learning_points_en: ["Manual Limit Calculation", "Identifying OOC points"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the Western Electric Rules for stability.",
                suggested_questions: [
                    { question_vi: "Quy tắc 7 điểm liên tiếp là gì?", question_en: "What is the rule of 7 consecutive points?" },
                    { question_vi: "Tại sao giới hạn là 3 Sigma?", question_en: "Why is the limit 3 Sigma?" }
                ],
                hint_levels: ["Probability of randomness", "Shift in mean detected", "99.7% confidence"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "cheatsheet", label_en: "Green Belt Cheat Sheet - Control", location_hint_en: "Variable Charts" }
            ],
            flashcards: [
                {
                    id: "fc_spc_01",
                    question_en: "Which Control Chart should you use for Continuous Data with a subgroup size of 12?",
                    answer_vi: "Xbar-S Chart (Variable, n > 9).",
                    tags_en: ["Control", "SPC", "Chart Selection"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_improve_doe_02"]
        },
        {
            id: "mod_control_spc_attribute",
            order: 2,
            title_en: "SPC for Attribute Data",
            summary_vi: "Biểu đồ kiểm soát cho dữ liệu đếm bằng (P, NP, C, U).",
            summary_en: "Control Charts for Attribute Data (P, NP, C, U).",
            key_metrics_en: ["Defectives (Sản phẩm lỗi)", "Defects (Số lỗi)"],
            key_points_en: [
                "Defectives (Good/Bad): Use P-chart (varied size) or NP-chart (fixed size).",
                "Defects (Count of errors): Use U-chart (varied size) or C-chart (fixed size).",
                "Require much larger sample sizes than Variable charts."
            ],
            explanation_vi: `
**1. Khi nào dùng Attribute Charts?**
Khi dữ liệu không đo được bằng thước (cm, kg) mà chỉ đếm được bằng mắt (Lỗi, Hỏng).

**2. Cây quyết định (Decision Tree):**
- **Q1: Bạn đếm cái gì?**
  - **Defectives (Sản phẩm hỏng):** Hư cả cái. (Pass/Fail). -> Dùng nhóm **P / NP**.
  - **Defects (Số lỗi):** 1 cái áo có 3 lỗi chỉ thừa, 2 lỗi vết bẩn. -> Dùng nhóm **U / C**.

- **Q2: Cỡ mẫu (Sample Size) có cố định không?**
  - **Constant (Cố định):** Ngày nào cũng kiểm tra đúng 100 cái.
    - Defectives -> **NP Chart** (Number of Defectives).
    - Defects -> **C Chart** (Count of Defects).
  - **Variable (Thay đổi):** Hôm nay kiểm 50, mai kiểm 100.
    - Defectives -> **P Chart** (Proportion).
    - Defects -> **U Chart** (Units).
            `,
            explanation_en: `
**1. When to use Attribute Charts?**
When data is not measured (cm, kg) but counted (Good/Bad, Number of defects).

**2. Decision Tree:**
- **Q1: What are you counting?**
  - **Defectives (Bad Parts):** The whole part is scrapped (Pass/Fail). -> **P / NP**.
  - **Defects (Errors):** Counting per unit (e.g., 5 scratches on 1 door). -> **U / C**.

- **Q2: Is Sample Size Constant?**
  - **Constant:** Daily inspection is always 100 units.
    - Defectives -> **NP Chart** (Number of Defectives).
    - Defects -> **C Chart** (Count of Defects).
  - **Variable:** Inspection qty varies (50 today, 100 tomorrow).
    - Defectives -> **P Chart** (Proportion).
    - Defects -> **U Chart** (Units).
            `,
            recommended_tools_en: ["Decision Tree for Charts"],
            python_focus_en: ["P-Chart Logic"],
            code_blocks: [
                {
                    id: "code_spc_attribute",
                    title_en: "Creating a P-Chart",
                    context_en: `Situation: You inspect 100 printed circuit boards (PCBs) daily. The number of rejected boards varies (5, 2, 8...). The sample size is constant (n=100). Goal: Monitor the Defect Rate.

Math Formula:
• p (Proportion Defective) = count / n
• p-bar = Total Defective / Total Inspected
• UCL = p-bar + 3 * √ [ p-bar(1 - p-bar) / n ]`,
                    description_vi: "Biểu đồ P (Proportion) dùng cho dữ liệu thuộc tính (Pass/Fail):\n\n1. **P-bar:** Tỷ lệ lỗi trung bình (VD: 5%).\n2. **Control Limits:** Giới hạn này thay đổi tùy theo kích thước mẫu (nhưng ở đây mẫu cố định nên đường giới hạn thẳng).\n3. **Ứng dụng:** Theo dõi tỷ lệ phế phẩm hàng ngày để phát hiện xu hướng bất thường.",
                    code_template: `import numpy as np
import matplotlib.pyplot as plt

# Data
# Produced: Số lượng sản xuất (Sample Size - n)
# Defective: Số lượng hỏng
n = np.array([100, 100, 100, 100, 100, 100])
d = np.array([2, 5, 12, 1, 3, 2]) # Notice 12 is high

# Calculate P (Proportion)
p = d / n
p_bar = np.sum(d) / np.sum(n)

# Control Limits for P-Chart
# UCL = p_bar + 3 * sqrt( (p_bar * (1-p_bar)) / n )
sigma_p = np.sqrt((p_bar * (1 - p_bar)) / n)
ucl = p_bar + 3 * sigma_p
lcl = np.maximum(0, p_bar - 3 * sigma_p)

# Plot
plt.plot(p, marker='o', label='Proportion Defective')
plt.plot(ucl, 'r--', label='UCL')
plt.plot(lcl, 'r--', label='LCL')
plt.axhline(p_bar, color='g', label='Avg P')
plt.title('P-Chart')
plt.legend()
plt.show()`,
                    expected_output_en: "Plot identifying the spike as Out of Control.",
                    datasets_used: [],
                    learning_points_en: ["Standard Deviation of Proportion", "Variable limits (if n changed)"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz me on selecting P, NP, C, U charts.",
                suggested_questions: [
                    { question_vi: "Đếm số lỗi trên vải, khổ vải khác nhau?", question_en: "Counting defects on fabric of different widths?" },
                    { question_vi: "Đếm số đơn hàng trễ mỗi ngày?", question_en: "Counting late orders per day?" }
                ],
                hint_levels: ["Defects vs Defectives", "Constant vs Variable Area/Size"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 16", location_hint_en: "Attribute Charts" }
            ],
            flashcards: [
                {
                    id: "fc_spc_02",
                    question_en: "Which chart monitors the COUNT of defectives in a constant sample size?",
                    answer_vi: "NP-chart.",
                    tags_en: ["Control", "Attribute"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_control_spc_variable"]
        },
        {
            id: "mod_control_plan_01",
            order: 3,
            title_en: "Lean Controls & Control Plans",
            summary_vi: "Duy trì thành quả với 5S, Visual Factory và Kế hoạch kiểm soát.",
            summary_en: "Sustaining gains with 5S, Visual Factory, and Control Plans.",
            key_metrics_en: ["5S", "SOP (Standard Operating Procedure)", "Control Plan", "Reaction Plan"],
            key_points_en: [
                "5S: Sort, Set in Order, Shine, Standardize, Sustain.",
                "Visual Factory: Information at a glance (e.g., Shadow boards, Floor tape).",
                "Control Plan: The master document tracking process quality.",
                "Reaction Plan: 'If X happens, do Y'."
            ],
            explanation_vi: `
**1. 5S - Nền tảng của Lean**
- **Sort (Sàng lọc):** Phân loại và loại bỏ những thứ không cần thiết. (Red Tag Strategy).
- **Set in Order (Sắp xếp):** "Mọi thứ đều có chỗ quy định". Dễ tìm, dễ lấy, dễ trả lại. (Shadow Boards).
- **Shine (Sạch sẽ):** Vệ sinh là kiểm tra. Máy sạch thì dễ phát hiện rò rỉ dầu.
- **Standardize (Săn sóc):** Quy trình hóa 3 bước trên bằng văn bản/hình ảnh.
- **Sustain (Sẵn sàng):** Kỷ luật tự giác. Đây là bước khó nhất.

**2. Control Plan (Kế hoạch kiểm soát)**
- Tài liệu sống (Living Document) để duy trì cải tiến.
- **5 Yếu tố chính:**
  1. **Measure:** Đo cái gì? (Nhiệt độ, kích thước).
  2. **Specification:** Tiêu chuẩn là gì? (100 ± 2 độ C).
  3. **Frequency:** Đo bao lâu một lần? (Mỗi giờ, mỗi lô).
  4. **Sample Size:** Cỡ mẫu bao nhiêu? (n=5).
  5. **Reaction Plan (OCAP):** Nếu sai thì làm gì? (Dừng máy, gọi QC, chỉnh áp suất).

**3. Visual Factory (Nhà máy trực quan)**
- Mục tiêu: Bất kỳ ai bước vào cũng biết ngay tình trạng (Bình thường vs Bất thường) trong vòng 5 giây.
- Ví dụ: Đèn Andon (Xanh/Vàng/Đỏ), vạch kẻ sàn (WIP), biển báo.
            `,
            explanation_en: `
**1. 5S - The Foundation of Just-in-Time**
- **Sort:** Eliminate unneeded items. (Strategy: Red Tag).
- **Set in Order:** A place for everything. (Strategy: Shadow Boards, Foams).
- **Shine:** Clean to inspect.
- **Standardize:** Make rules and procedures specific.
- **Sustain:** Self-discipline. The hardest 'S' to maintain.

**2. Control Plan Components**
- The "Living Document" transferred to the Process Owner.
- Must include:
  1. **What** to check (Variable/Attribute).
  2. **How** to check (Gage type).
  3. **Where** & **When** (Frequency).
  4. **Action Plan** (Reaction Plan): Specific steps to take when Out-of-Control.

**3. Visual Factory**
- Making the workplace "speak" to you.
- Examples: Color-coded bins, Floor markings, Andon lights.
            `,
            recommended_tools_en: ["Control Plan Template", "5S Audit Checklist"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the importance of the Sustain step in 5S.",
                suggested_questions: [
                    { question_vi: "Phản ứng (Reaction Plan) cụ thể là gì?", question_en: "What specifically is the Reaction Plan?" },
                    { question_vi: "Tại sao 5S không chỉ là dọn vệ sinh?", question_en: "Why is 5S not just cleaning?" }
                ],
                hint_levels: ["Actionable steps", "It's about efficiency and safety", "Standardization reduces variation"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Control", location_hint_en: "Control Plan" }
            ],
            flashcards: [
                {
                    id: "fc_control_03",
                    question_en: "Which element of the Control Plan describes what to do if a metric is out of control?",
                    answer_vi: "Reaction Plan (Ops Control Action Plan - OCAP).",
                    tags_en: ["Control", "Plan"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_control_04",
                    question_en: "In 5S, which step involves creating procedures to maintain the first 3 steps?",
                    answer_vi: "Standardize (Săn sóc).",
                    tags_en: ["Lean", "5S"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 25,
            prerequisites_ids: ["mod_control_spc_attribute"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_control_quiz",
            order: 4,
            title_en: "Chapter 8 Quiz: Control Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 8 (25 câu hỏi).",
            summary_en: "Comprehensive Chapter 8 Quiz (25 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of SPC (Variables & Attributes), Control Plan, and Project Closure."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp kiến thức về cơ chế kiểm soát (SPC) và kế hoạch duy trì (Control Plan) để đảm bảo thành quả dự án bền vững.",
            explanation_en: "This quiz tests your knowledge on SPC (Statistical Process Control) and Control Plans for sustaining results.",
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
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_control_spc_variable", "mod_control_spc_attribute", "mod_control_plan_01"]
        }
    ]
};
