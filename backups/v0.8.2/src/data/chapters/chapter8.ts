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
            summary_vi: "Kiểm soát dữ liệu liên tục: Biến động (Ngẫu nhiên/Đặc biệt) và Cách chọn biểu đồ.",
            summary_en: "Controlling Variable Data: Variation Types, Limit Rules, and Chart Selection.",
            key_metrics_en: ["UCL/LCL vs USL/LSL", "Subgroup (n)", "Common Cause vs Special Cause"],
            key_points_en: [
                "Common Cause: Noise (Do Nothing). Special Cause: Signal (Stop & Fix).",
                "Tampering: Adjusting for Common Cause increases variation.",
                "Limits: UCL/LCL are Voice of Process. USL/LSL are Voice of Customer. Never mix them.",
                "Chart Matrix: I-MR (n=1), Xbar-R (n=2-9), Xbar-S (n>=10)."
            ],
            explanation_vi: `
**1. Triết lý SPC: Biến động (Variation)**
Cốt lõi của Six Sigma là Giảm Biến Động. SPC chia biến động làm 2 loại:
*   **Common Cause (Ngẫu nhiên):** Nhiễu tự nhiên của hệ thống (Ví dụ: Rung động nhẹ của máy).
    *   *Action:* **KHÔNG LÀM GÌ CẢ**. Nếu bạn cố chỉnh máy vì lỗi này, bạn đang "Tampering" (Can thiệp thô bạo) và làm mọi thứ tồi tệ hơn. Chỉ Management mới sửa được lỗi hệ thống này.
*   **Special Cause (Đặc biệt):** Sự cố cụ thể (Ví dụ: Gãy dao, Lô hàng lởm).
    *   *Action:* **DỪNG VÀ SỬA NGAY**. Đây là "Tín hiệu" (Signal) mà biểu đồ tìm kiếm.

━━━━━━

**2. Control Limits vs Spec Limits (Cực kỳ quan trọng)**
Đừng bao giờ nhầm lẫn 2 khái niệm này khi đi thi:
*   **Control Limits (UCL/LCL):** Tính từ Dữ liệu Quy trình (Voice of Process). Cho biết quy trình **ĐANG** làm gì (±3σ).
*   **Spec Limits (USL/LSL):** Khách hàng/Thiết kế yêu cầu (Voice of Customer). Cho biết quy trình **CẦN** làm gì.
*   **Quy tắc:** Tuyệt đối KHÔNG vẽ Spec Limits lên Control Chart. Một quy trình có thể Ổn định (In Control) nhưng vẫn tạo ra phế phẩm (Not Capable).

━━━━━━

**3. Ma trận chọn biểu đồ (Chart Selection Matrix)**
Chọn biểu đồ dựa trên Cỡ mẫu nhóm con (Subgroup Size - n):
*   **n = 1: I-MR (Individual Moving Range).**
    *   *Khi nào:* Kiểm tra phá hủy (Crash test), hoặc dữ liệu rất hiếm (1 ngày đo 1 lần).
*   **n = 2 đến 9: Xbar-R (Average & Range).**
    *   *Tại sao:* Dùng "Range" (Max-Min) để ước lượng biến động. Hiệu quả cho nhóm nhỏ.
*   **n ≥ 10: Xbar-S (Average & StDev).**
    *   *Tại sao:* Với mẫu lớn, "Range" bỏ qua quá nhiều dữ liệu ở giữa. Độ lệch chuẩn (S) chính xác hơn.

━━━━━━

**4. Quy tắc Ổn định (Western Electric Rules)**
Biểu đồ báo động "Mất kiểm soát" (Out of Control) khi:
1.  **1 điểm vượt 3σ:** Sự cố đột ngột (Freak event).
2.  **Trend (Xu hướng):** 6 điểm liên tiếp tăng hoặc giảm. (Dấu hiệu mòn dao).
3.  **Shift (Dịch chuyển):** 9 điểm liên tiếp nằm cùng một phía của đường Center Line. (Trung bình đã bị lệch).
            `,
            explanation_en: `
**1. SPC Philosophy: Variation Types**
*   **Common Cause:** Natural system noise.
    *   *Action:* **Do Nothing.** Adjusting for this is "Tampering" and increases variation.
*   **Special Cause:** Specific assignable event (Tool broke).
    *   *Action:* **Stop and Fix.** This is the "Signal".

━━━━━━

**2. Control Limits vs Spec Limits**
*   **Control Limits (UCL/LCL):** Voice of the Process (Calculated ±3σ).
*   **USL/LSL:** Voice of the Customer (Design Requirements).
*   **Rule:** NEVER put Spec Limits on a Control Chart.

━━━━━━

**3. Chart Selection Matrix**
Choose based on Subgroup Size (n):
*   **n = 1: I-MR.** (Rare/Destructive data).
*   **n = 2-9: Xbar-R.** (Standard chart. Uses Range).
*   **n ≥ 10: Xbar-S.** (Large samples. Uses StDev because Range is inefficient for large n).

━━━━━━

**4. Western Electric Rules (Stability)**
Process is "Out of Control" if:
1.  **1 Point > 3σ:** Sudden spike.
2.  **Trend:** 6 points strictly limits increasing/decreasing (Tool wear).
3.  **Shift:** 9 points on same side of Center Line (Mean shift).
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
                    description_vi: "Biểu đồ X-bar R dùng cho dữ liệu biến đổi (đo lường được) với cỡ mẫu nhỏ (< 10):\n\n1. **X-bar Chart:** Theo dõi sự thay đổi của Trung bình (Mean). Quá trình có bị lệch tâm không?\n2. **R Chart:** Theo dõi sự thay đổi của Biến động (Range). Quá trình có ổn định không?\n3. **Mục tiêu:** Tính toán giới hạn kiểm soát để máy tính có thể tự động báo động.",
                    code_template: `import numpy as np
import matplotlib.pyplot as plt

# Simulated Data: 20 subgroups of 5 samples each
np.random.seed(42)
data = np.random.normal(loc=100, scale=2, size=(20, 5))

# Calculate Subgroup Statistics
x_bar = np.mean(data, axis=1) # Mean of each subgroup
r_val = np.ptp(data, axis=1)  # Range (Max - Min) of each subgroup

# Constants for n=5 (Look up in table)
A2 = 0.577

# Grand Averages
x_dbar = np.mean(x_bar)
r_bar = np.mean(r_val)

# Control Limits Calculation
ucl_x = x_dbar + (A2 * r_bar)
lcl_x = x_dbar - (A2 * r_bar)

print(f"Center Line (Mean): {x_dbar:.2f}")
print(f"UCL (Upper Limit): {ucl_x:.2f}")
print(f"LCL (Lower Limit): {lcl_x:.2f}")

# Check for Out of Control points
# Rule 1: Point outside 3 Sigma (UCL/LCL)
out_of_control = np.where((x_bar > ucl_x) | (x_bar < lcl_x))[0]

if len(out_of_control) > 0:
    print(f"⚠️ ALARM: Special Cause detected at subgroups: {out_of_control}")
else:
    print("✅ Process is In Control (Stable).")`,
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
                    { question_vi: "Quy tắc 7 điểm liên tiếp là gì?", question_en: "What is the rule of 6/7 consecutive points?" },
                    { question_vi: "Tampering là gì?", question_en: "What is Tampering?" }
                ],
                hint_levels: ["Adjusting noise", "Increases variation", "Do nothing is better"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "cheatsheet", label_en: "Green Belt Cheat Sheet - Control", location_hint_en: "Variable Charts" }
            ],
            flashcards: [
                {
                    id: "fc_spc_01",
                    question_en: "Which Control Chart should you use for Continuous Data with a subgroup size of 12?",
                    answer_vi: "Xbar-S Chart (Variable, n >= 10).",
                    tags_en: ["Control", "SPC", "Chart Selection"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_spc_03",
                    question_en: "What happens if you adjust a process in response to Common Cause variation?",
                    answer_vi: "Tampering - You increase the total variation.",
                    tags_en: ["Control", "SPC"],
                    difficulty_en: "Medium",
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
            title_en: "SPC for Attribute Data (P / NP / C / U)",
            summary_vi: "Biểu đồ kiểm soát cho dữ liệu định tính: Phân biệt Defectives vs Defects.",
            summary_en: "Attribute Charts: Defectives vs Defects and the Decision Matrix.",
            key_metrics_en: ["Defectives (Bad Parts)", "Defects (Count of Errors)", "Constant vs Variable Sample Size"],
            key_points_en: [
                "Defectives (Sản phẩm lỗi): Pass/Fail. Uses P or NP charts.",
                "Defects (Số lỗi): Count of flaws (e.g., 5 scratches). Uses C or U charts.",
                "Trade-off: Attribute charts need much larger sample sizes (50-100+) than Variable charts.",
                "Memory Aid: P=Proportion, NP=Number, C=Count, U=Unit."
            ],
            explanation_vi: `
**1. Dữ liệu Thuộc tính (Attribute Data)**
*   **Bối cảnh:** Biểu đồ kiểm soát theo dõi Output Y.
*   **Dữ liệu Định tính:** Là dạng đếm được, không đo được bằng thước (VD: Đậu/Rớt, Số vết xước).
*   ** Đánh đổi:** Cần cỡ mẫu LỚN hơn nhiều so với dữ liệu biến đổi (Variable) để phát hiện sự thay đổi, vì "Đậu/Rớt" chứa ít thông tin hơn "5.2mm".

━━━━━━

**2. Phân biệt: Defectives vs Defects (Cực quan trọng)**
Để chọn đúng biểu đồ, bạn phải trả lời: Bạn đang đếm cái gì?
*   **Defectives (Sản phẩm lỗi - Phế phẩm):** Cả sản phẩm bị coi là hỏng. (Nhị phân: Đậu hoặc Rớt).
    *   *Ví dụ:* Một tờ đơn bị hủy vì có lỗi sai.
*   **Defects (Số lỗi):** Đếm số lượng lỗi trên một đơn vị (Sản phẩm vẫn có thể dùng được).
    *   *Ví dụ:* Đếm 5 lỗi chính tả trên tờ đơn đó.

━━━━━━

**3. Ma Trận Chọn Biểu Đồ (Memorize This!)**
Hãy hỏi 2 câu: **Bạn đếm cái gì?** và **Cỡ mẫu (n) có cố định không?**

| Bạn đếm cái gì? | Cỡ mẫu CỐ ĐỊNH (Constant) | Cỡ mẫu THAY ĐỔI (Variable) |
| :--- | :--- | :--- |
| **DEFECTIVES**<br>(Sản phẩm hỏng)<br>*(Pass/Fail)* | **NP-Chart**<br>*(Number of Defectives)*<br>Dễ hiểu cho công nhân (Đếm số lượng). | **P-Chart**<br>*(Proportion)*<br>Tính % lỗi (VD: 5%). Phổ biến hơn. |
| **DEFECTS**<br>(Số lỗi)<br>*(Count of Errors)* | **C-Chart**<br>*(Count)*<br>Vùng kiểm tra cố định (VD: 1 m² vải). | **U-Chart**<br>*(Units)*<br>Vùng kiểm tra thay đổi (VD: Lô vải dài ngắn khác nhau). |

**Mẹo Nhớ (Memory Aid):**
*   **P** = **P**roportion (Tỷ lệ - Thay đổi).
*   **NP** = **N**umber (Số lượng - Cố định).
*   **C** = **C**ount (Đếm - Cố định).
*   **U** = **U**nit (Đơn vị - Thay đổi).
            `,
            explanation_en: `
**1. Attribute Data & Sample Size**
*   **Definition:** Counted data (Pass/Fail).
*   **Trade-off:** Requires **larger sample sizes** than Variable charts because binary data contains less information.

━━━━━━

**2. Defectives vs. Defects**
*   **Defectives (Bad Parts):** The entire unit is rejected. (Pass/Fail).
*   **Defects (Errors):** Counting flaws on a unit (e.g., 5 typos). The unit might still be usable.

━━━━━━

**3. Chart Selection Matrix**
Two Questions: What are you counting? Is Sample Size Constant?

| What are you counting? | Constant Sample Size (n) | Variable Sample Size (n) |
| :--- | :--- | :--- |
| **DEFECTIVES**<br>*(Bad Parts)* | **NP-Chart**<br>*(Number)* | **P-Chart**<br>*(Proportion)* |
| **DEFECTS**<br>*(Errors)* | **C-Chart**<br>*(Count)* | **U-Chart**<br>*(Units)* |

**Key Takeaways:**
*   **Variable Sample Size:** Use P or U.
*   **Constant Sample Size:** Use NP or C.
            `,
            recommended_tools_en: ["Decision Tree for Charts"],
            python_focus_en: ["P-Chart Logic"],
            code_blocks: [
                {
                    id: "code_spc_attribute",
                    title_en: "Creating a P-Chart (Variable Sample Size)",
                    context_en: `Situation: You inspect shipments of varying sizes (n varies). You count the number of rejected items.
Goal: Create a P-Chart to monitor the % Defective.
Note: Because 'n' changes, the Control Limits (UCL/LCL) will look "stepped" or jagged, not straight lines.`,
                    description_vi: "Biểu đồ P (Proportion) dùng cho cỡ mẫu thay đổi:\n\n1. **P-bar:** Tỷ lệ lỗi trung bình chung.\n2. **UCL/LCL:** Tính riêng cho từng điểm dữ liệu dựa trên n của ngày hôm đó.\n3. **Kết quả:** Đường giới hạn sẽ lồi lõm (Jagged Limit Lines) chứ không thẳng băng.",
                    code_template: `import numpy as np
import matplotlib.pyplot as plt

# Data: Varying Sample Sizes (n) and Defectives (d)
n = np.array([100, 120, 110, 100, 90, 150, 100]) # Sample sizes vary
d = np.array([2, 5, 12, 1, 3, 25, 2])            # Defectives found

# 1. Calculate Proportions (p) for each day
p = d / n

# 2. Calculate P-bar (Grand Average Proportion)
p_bar = np.sum(d) / np.sum(n)

# 3. Calculate Variable Control Limits for each day
# Formula: Sigma_p depends on 'n' of that specific day
sigma_p = np.sqrt((p_bar * (1 - p_bar)) / n)

ucl = p_bar + 3 * sigma_p
lcl = np.maximum(0, p_bar - 3 * sigma_p) # LCL cannot be negative

# 4. Plotting
plt.figure(figsize=(10, 5))
plt.plot(p, 'bo-', label='Proportion Defective (p)')
plt.step(range(len(ucl)), ucl, 'r--', where='mid', label='UCL (Variable)')
plt.step(range(len(lcl)), lcl, 'r--', where='mid', label='LCL (Variable)')
plt.axhline(p_bar, color='g', label='Mean (P-bar)')

plt.title('P-Chart with Variable Control Limits')
plt.xlabel('Subgroup')
plt.ylabel('Proportion Defective')
plt.legend()
plt.grid(True)
plt.show()

# Interpretation: 
# Notice how the UCL line moves up and down? 
# When sample size (n) is small, the Limit is wider (less strict).
# When sample size (n) is large, the Limit is tighter (more strict).`,
                    expected_output_en: "P-Chart with jagged control limits.",
                    datasets_used: [],
                    learning_points_en: ["Variable Limits calculation", "Impact of n on Limits"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz me on selecting P, NP, C, U charts.",
                suggested_questions: [
                    { question_vi: "Đếm số lỗi trên vải, khổ vải khác nhau?", question_en: "Counting defects on fabric of varying area?" },
                    { question_vi: "Kiểm tra 50 đơn hàng mỗi ngày, đếm số đơn trễ?", question_en: "Checking 50 orders daily, counting late ones?" },
                    { question_vi: "NP chart vs P chart khác gì nhau?", question_en: "Difference between NP and P chart?" }
                ],
                hint_levels: ["Is Area constant?", "Defects (Count) vs Defectives (Pass/Fail)", "NP uses Count, P uses %"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 16", location_hint_en: "Attribute Charts" }
            ],
            flashcards: [
                {
                    id: "fc_spc_02",
                    question_en: "Which chart is used for counting DEFECTS when the sample size varies?",
                    answer_vi: "U-Charts (Units).",
                    tags_en: ["Control", "Attribute"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_spc_04",
                    question_en: "What is the key difference between Defectives and Defects?",
                    answer_vi: "Defectives = Bad Part (Pass/Fail). Defects = Number of Errors on a part.",
                    tags_en: ["Control", "Definitions"],
                    difficulty_en: "Easy",
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
            title_en: "Lean Controls & The Strategy of Sustaining",
            summary_vi: "Chiến lược duy trì: 5S để giảm biến động và Kế hoạch kiểm soát Input (x).",
            summary_en: "Sustaining Strategy: 5S for Variation Reduction and Controlling Inputs (x).",
            key_metrics_en: ["Leading (x) vs Lagging (Y)", "Reaction Plan", "Visual Factory"],
            key_points_en: [
                "Philosophy: 5S is not about 'cleaning'; it's about eliminating the human choice to create variation.",
                "Y=f(x): You monitor Y (Lagging) but you CONTROL x (Leading).",
                "Reaction Plan: Must be specific (e.g., 'If Temp > 400, Stop Line'). Avoid vague instructions like 'Monitor'.",
                "Sustain: The hardest 'S'. Requires culture shift."
            ],
            explanation_vi: `
**1. 5S dưới góc nhìn Biến động (Variation) - Mô hình Bánh Pizza**
Ở giai đoạn Control, 5S là công cụ vật lý để cưỡng chế sự ổn định.
*   **Triết lý:** Khách hàng không cảm nhận "trung bình", họ cảm nhận "biến động".
*   **Ví dụ quán Pizza:**
    *   *Vấn đề:* Không có chuẩn, nhân viên A múc 2 chén phô mai (quá mặn, tốn kém), nhân viên B múc 1 chén (quá nhạt).
    *   *Giải pháp 5S (Săn sóc - Standardize):* Cấp 1 cái muỗng phẳng (Flat Spatula) và luật "Gạt ngang mặt".
    *   *Kết quả:* Bằng cách kiểm soát công cụ đầu vào (x), bạn ổn định chất lượng đầu ra (Y). 5S đã loại bỏ "sự lựa chọn sai" của con người.

━━━━━━

**2. Control Plan: Quản lý Y=f(x)**
Kế hoạch kiểm soát là "Tài liệu sống" để vận hành phương trình Y=f(x).
*   **Y (Output / Lagging Indicator):**
    *   Đây là kết quả (VD: Bánh bị cháy, Khách hàng chửi).
    *   *Sự thật:* Bạn không thể "quản lý" Y trực tiếp. Nếu chỉ nhìn vào Y, bạn đang phản ứng quá muộn.
*   **x (Input / Leading Indicator):**
    *   Đây là nguyên nhân (VD: Nhiệt độ lò, Kỹ năng nhân viên).
    *   *Chiến lược:* Control Plan phải tập trung giám sát x. Nếu kiểm soát được Nhiệt độ (x1) và Thời gian (x2), cái Bánh (Y) chắn chắn ngon.

━━━━━━

**3. Kế hoạch Phản ứng (Reaction Plan)**
Cột quan trọng nhất trong Control Plan. Nó chỉ dẫn Process Owner phải làm gì khi có biến.
*   **Kế hoạch tồi:** "Theo dõi quy trình." (Chung chung, vô dụng).
*   **Kế hoạch Six Sigma:** "Nếu Nhiệt độ > 400°F -> Dừng chuyền, Chỉnh lại van áp suất, và Cách ly lô hàng vừa chạy." (Hành động cụ thể lên x).

━━━━━━

**4. Visual Factory (Nhà máy trực quan)**
Làm cho trạng thái của x hiển thị ngay lập tức. Đèn đỏ/xanh, vạch kẻ sàn. Bất kỳ ai bước vào cũng biết máy đang chạy êm hay đang "ho" trong vòng 5 giây.
            `,
            explanation_en: `
**1. 5S as a Tool to Reduce Variation (The Pizzeria Model)**
In the Control Phase, 5S is the physical enforcement of consistency.
*   **Philosophy:** Customers feel variation, not averages.
*   **The Pizzeria Scenario:**
    *   *Problem:* Without standards, scooping cheese varies wildly (Cost/Taste fluctuation).
    *   *5S Solution:* Provide a specific "flat spatula" and a "scrape level" rule.
    *   *Result:* By controlling the physical input (x), you stabilize the output (Y). 5S eliminates the "human choice" to do it wrong.

━━━━━━

**2. The Control Plan: Managing Y=f(x)**
*   **Y (Lagging Indicator):** The Effect (Burnt Cake). You cannot directly manage Y; it's a history report.
*   **x (Leading Indicator):** The Cause (Oven Temp).
    *   *Strategy:* Focus the Control Plan on **x**. If you force 'x' to be correct, 'Y' has no choice but to be good.

━━━━━━

**3. The Reaction Plan**
The most critical instructions for the operator.
*   **Bad Plan:** "Monitor the process." (Vague).
*   **Good Plan:** "If Temp > 400°F, Stop Line, Recalibrate Dial, Quarantine batch." (Specific Action on x).

━━━━━━

**4. Visual Factory**
Making the status of 'x' visible immediately (Red/Green lights). If you can't tell the status in 5 seconds, it's not visual.
            `,
            recommended_tools_en: ["Control Plan Template", "5S Audit Checklist"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the difference between Leading and Lagging indicators in Control Plans.",
                suggested_questions: [
                    { question_vi: "Tại sao chỉ theo dõi Y là không đủ?", question_en: "Why is monitoring only Y insufficient?" },
                    { question_vi: "Ví dụ về Reaction Plan tồi?", question_en: "Example of a bad Reaction Plan?" }
                ],
                hint_levels: ["Y is lagging (too late)", "X is predictive", "Vague instructions are bad"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Control", location_hint_en: "Control Plan" }
            ],
            flashcards: [
                {
                    id: "fc_control_03",
                    question_en: "In a Control Plan, 'Oven Temperature' is an example of which type of indicator?",
                    answer_vi: "Leading Indicator (Input x).",
                    tags_en: ["Control", "Plan"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_control_04",
                    question_en: "What should a Reaction Plan specifically focus on?",
                    answer_vi: "Specific actions to correct the Input (x), not just 'monitor'.",
                    tags_en: ["Control", "Plan"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
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
