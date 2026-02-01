import { Chapter, Module } from "../../types/course";

export const chapterPythonTrack: Chapter = {
    id: "ch_capstone",
    order: 9,
    title_en: "Capstone Project: The 'Titan' Case Study",
    goal_vi: "Áp dụng toàn bộ kiến thức DMAIC và Python để giải quyết một bài toán sản xuất thực tế từ A-Z.",
    goal_en: "Apply full DMAIC knowledge and Python to solve a real-world manufacturing problem from A-Z.",
    iassc_topics_en: ["Capstone Project", "Full DMAIC Cycle", "Data-Driven Decision Making"],
    modules: [
        {
            id: "mod_capstone_01",
            order: 1,
            title_en: "Phase 1: Define - The 'Titan' Case Study",
            summary_vi: "Thiết lập dự án: Tính toán Baseline (Sigma Level) và viết Project Charter.",
            summary_en: "Project Setup: Calculating Baseline (Sigma Level) and writing the Project Charter.",
            key_metrics_en: ["DPMO", "Sigma Level (2.5)", "Yield (85%)", "Financial Loss"],
            key_points_en: [
                "Scenario: Titan Casting Inc. makes Aluminum Engine Blocks.",
                "Problem (Y): Porosity (Air pockets) causing 15% rejection rate.",
                "Financial Impact: $7,500/day ($2.7M/year) loss.",
                "Goal: Reduce defects from 15% to < 1% (4 Sigma target)."
            ],
            explanation_vi: `
**1. Bối cảnh Dự án (The Scenario)**
*   **Công ty:** Titan Casting Inc.
*   **Sản phẩm:** Lốc máy nhôm (Aluminum Engine Blocks).
*   **Vấn đề (Y):** Khách hàng trả hàng vì lỗi **Rỗ khí (Porosity)**.
*   **Hiện trạng:**
    *   Tỷ lệ lỗi nôm na: **15%**. (Sản xuất 1,000 cái thì vứt 150 cái).
    *   Thiệt hại: $50/cái x 150 cái = **$7,500 mỗi ngày**. (Hơn $2.7 Triệu USD/năm). -> Đây là một "Burning Platform".

━━━━━━

**2. Chiến lược Y=f(x)**
Trước khi lao vào sửa, ta phải định hình phương trình:
*   **Y (Output/Lagging):** Độ rỗ khí (Porosity Level). Ta không thể "ra lệnh" cho kim loại đặc lại được.
*   **x (Input/Leading):** Ta nghi ngờ các nguyên nhân gốc rễ là:
    *   $x_1$: Nhiệt độ nóng chảy (Melt Temp).
    *   $x_2$: Tốc độ phun (Injection Speed).
    *   $x_3$: Thời gian làm nguội (Cooling Time).

━━━━━━

**3. Thiết lập Mức cơ sở (Establishing Baseline)**
Ta phải chuyển đổi con số "15% lỗi" sang ngôn ngữ Six Sigma để so sánh với chuẩn quốc tế.
*   **Yield (Sản lượng đạt):** $100\% - 15\% = 85\%$.
*   **DPMO:** $(150 / 1000) * 1,000,000 = 150,000$.
*   **Sigma Level:** Tra bảng hoặc tính toán $\approx 2.5$ Sigma.
    *   *Kết luận:* Mức 2.5 Sigma là RẤT KÉM. Mục tiêu tối thiểu ngành ô tô thường là 4-5 Sigma. Cần can thiệp gấp!

━━━━━━

**4. Toms tắt Hiến chương Dự án (Project Charter Snapshot)**
*   **Problem Statement:** Tỷ lệ lỗi rỗ khí đang là 15%, gây thiệt hại $2.7M/năm.
*   **Goal Statement:** Giảm lỗi xuống < 1% trước Quý 4.
*   **Business Case:** Giữ chân khách hàng và tiết kiệm chi phí phế phẩm.
*   **Scope:** Chỉ tập trung vào Dây chuyền Đúc A (Casting Line A).
            `,
            explanation_en: `
**1. The Scenario**
*   **Company:** Titan Casting Inc.
*   **Problem (Y):** **Porosity** (Air pockets) in Aluminum Engine Blocks.
*   **Current State:** **15% Rejection Rate**.
*   **Financial Impact:** $7,500 loss/day (~$2.7M/year). This is a crisis.

━━━━━━

**2. The Y=f(x) Strategy**
*   **Y (Lagging):** Porosity Level. We can only measure this after the fact.
*   **x (Leading):** Potential Root Causes to investigate:
    *   $x_1$: Melt Temp.
    *   $x_2$: Injection Speed.
    *   $x_3$: Cooling Time.

━━━━━━

**3. Establishing the Baseline**
Convert existing performance to Six Sigma metrics.
*   **Yield:** 85%.
*   **DPMO:** 150,000.
*   **Sigma Level:** **~2.5 Sigma**.
    *   *Verdict:* Terrible performance. Far below the 4-5 Sigma industry standard.

━━━━━━

**4. Project Charter**
*   **Problem:** 15% Scrap rate costing $2.7M/yr.
*   **Goal:** Reduce to < 1% by Q4.
*   **Scope:** Casting Line A only.
            `,
            recommended_tools_en: ["Project Charter", "Sigma Calculator"],
            python_focus_en: ["Baseline Calculation"],
            code_blocks: [
                {
                    id: "code_capstone_define",
                    title_en: "Task 1: Calculate Baseline Metrics",
                    context_en: `Situation: You have the daily production report.
- Total Produced: 1,000 units
- Defective Units: 150 units
Goal: Calculate Yield, DPMO, and Current Sigma Level to confirm the "Burning Platform".`,
                    description_vi: "Sử dụng Python để tính DPMO và Sigma Level từ dữ liệu sản xuất thô.",
                    code_template: `import scipy.stats as stats

# Given Data from Titan Casting
total_units = 1000
defective_units = 150

# 1. Calculate Yield (Tỷ lệ đạt)
yield_rate = (total_units - defective_units) / total_units

# 2. Calculate DPMO (Defects Per Million Opportunities)
# Assuming 1 opportunity per part (Pass/Fail)
dpmo = (defective_units / total_units) * 1_000_000

# 3. Calculate Sigma Level
# Formula: Normsinv(Yield) + 1.5 Shift
# stats.norm.ppf is the inverse normal distribution CDF
sigma_level_short_term = stats.norm.ppf(yield_rate) + 1.5

print(f"--- PROJECT BASELINE ---")
print(f"Total Produced: {total_units}")
print(f"Defects: {defective_units}")
print(f"Yield: {yield_rate:.1%}")
print(f"DPMO: {dpmo:,.0f}")
print(f"Current Sigma Level: {sigma_level_short_term:.2f}")

# Verdict
if sigma_level_short_term < 3:
    print("\nResult: 🛑 RED ALERT. Process is unstable (Below 3 Sigma). Project Approved.")
else:
    print("\nResult: Process is acceptable.")`,
                    expected_output_en: "Sigma Level ≈ 2.54 indicating a critical need for improvement.",
                    datasets_used: [],
                    learning_points_en: ["Converting Defects to Sigma", "Quantifying the problem"],
                    difficulty_en: "Beginner"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Act as the Plant Manager reviewing the Project Charter.",
                suggested_questions: [
                    { question_vi: "Tại sao mức 2.5 Sigma lại tệ?", question_en: "Why is 2.5 Sigma considered bad?" },
                    { question_vi: "Mục tiêu < 1% lỗi tương đương mấy Sigma?", question_en: "What Sigma level is < 1% defect rate?" }
                ],
                hint_levels: ["Cost of Poor Quality is high", "Industry standard is usually 4+", "1% is approx 3.8 Sigma"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Titan Casting Project Charter", location_hint_en: "Appendix A" }
            ],
            flashcards: [
                {
                    id: "fc_cap_01",
                    question_en: "In the Titan Case Study, what is the 'Y' variable?",
                    answer_vi: "Porosity (Defect Rate).",
                    tags_en: ["Capstone", "Define"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_cap_02",
                    question_en: "What is the calculated Sigma Level for a process with 85% Yield?",
                    answer_vi: "Approximately 2.5 Sigma.",
                    tags_en: ["Capstone", "Define"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_control_plan_01"]
        },
        {
            id: "mod_capstone_02",
            order: 2,
            title_en: "Phase 2 & 3: Measure & Analyze - The Hunt for Root Causes",
            summary_vi: "Đóng vai thám tử: Sàng lọc biến đầu vào (x) để tìm thủ phạm gây ra lỗi (Y).",
            summary_en: "Detective Work: Screening Inputs (x) to find the 'Smoking Gun' causing defects (Y).",
            key_metrics_en: ["Normality (P > 0.05)", "Correlation (r)", "P-value (< 0.05)"],
            key_points_en: [
                "Normality Check: P=0.08 -> Normal. Use Parametric tools.",
                "Suspect 1 (Pressure): r=0.12 -> Innocent.",
                "Suspect 2 (Cooling): r=-0.30 -> Minor.",
                "Suspect 3 (Temperature): r=-0.85 -> Smoking Gun (Root Cause).",
                "Proof: t-test confirms High Temp is significantly better."
            ],
            explanation_vi: `
**1. Kiểm tra Sức khỏe Dữ liệu (Data Health Check)**
Trước khi phân tích, ta chạy Anderson-Darling Test cho dữ liệu lỗi.
*   **Kết quả:** P-value = **0.08**.
*   **Quyết định:** P > 0.05 -> Dữ liệu Chuẩn (Normal).
*   **Ý nghĩa:** Tin tốt. Ta có thể dùng các công cụ mạnh (Pearson, ANOVA) thay vì công cụ yếu (Non-Parametric).

━━━━━━

**2. Sàng lọc Kẻ tình nghi (Screening the Suspects)**
Ta đã xác định 3 nghi phạm đầu vào (x). Hãy xem bằng chứng từ Correlation Matrix:
*   **Nghi phạm 1: Áp suất phun (Pressure)**
    *   *Bằng chứng:* Biểu đồ tan nát (Shapeless cloud). **r = 0.12**.
    *   *Phán quyết:* **Vô tội (Innocent).** Chỉnh áp suất chỉ tổ tốn tiền.
*   **Nghi phạm 2: Thời gian làm nguội (Cooling Time)**
    *   *Bằng chứng:* Xu hướng yếu. **r = -0.30**.
    *   *Phán quyết:* **Đồng phạm nhỏ (Minor).** Không phải kẻ chủ mưu.
*   **Nghi phạm 3: Nhiệt độ nóng chảy (Melt Temp)**
    *   *Bằng chứng:* Các điểm xếp thành đường thẳng dốc xuống đẹp mắt. **r = -0.85**.
    *   *Phán quyết:* **Thủ phạm (Smoking Gun).**
    *   *Logic:* Giống như vặn lò nướng (x) làm cháy bánh (Y). Nhiệt độ lò đúc (x) quyết định độ rỗ khí (Y).

━━━━━━

**3. Củng cố hồ sơ (Proving the Case)**
"Nghi ngờ" là chưa đủ. Ta cần bằng chứng trước tòa (Plant Manager).
*   **Test:** Chạy t-test so sánh Lô A (Nhiệt thấp) vs Lô B (Nhiệt cao).
*   **Kết quả:** P-value = **0.0001**.
*   **Kết luận:** Có sự khác biệt có ý nghĩa thống kê. Tăng nhiệt độ CHẮC CHẮN giảm lỗi.
            `,
            explanation_en: `
**1. Data Health Check**
*   **Test:** Anderson-Darling Normality Test.
*   **Result:** P-value = 0.08 (> 0.05).
*   **Decision:** Data is Normal. We can proceed with powerful Parametric tests.

━━━━━━

**2. Screening the Suspects (Y=f(x))**
We look at the Scatter Plots and Correlation (r):
*   **Suspect 1 (Pressure):** r = 0.12. **Innocent**. No impact on defects.
*   **Suspect 2 (Cooling):** r = -0.30. **Minor**.
*   **Suspect 3 (Melt Temp):** r = -0.85. **The Smoking Gun**.
    *   *Analogy:* The "Oven Dial" that controls the outcome.

━━━━━━

**3. Proving the Case**
We need legal proof to change factory settings.
*   **Test:** 2-Sample t-test.
*   **Result:** P-value = 0.0001.
*   **Verdict:** Guilty. Changing Temperature is statistically proven to fix the problem.
            `,
            recommended_tools_en: ["Correlation Matrix", "2-Sample t-test"],
            python_focus_en: ["Correlation Analysis"],
            code_blocks: [
                {
                    id: "code_capstone_analyze",
                    title_en: "Task 2: The Detective Work",
                    context_en: `Situation: You have data for Pressure, Cooling, and Temperature.
Goal: 
1. Check Normality (Assume passed).
2. Calculate Correlation Matrix to find the 'Smoking Gun'.
3. Verify with t-test.`,
                    description_vi: "Chạy ma trận tương quan để tìm thủ phạm và kiểm định t-test để xác nhận.",
                    code_template: `import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from scipy import stats

# 1. Generate "Detective" Data
np.random.seed(42)
n = 100
# Temperature (x1) - Strong Driver (Negative Correlation)
temp = np.random.normal(700, 20, n)
# Pressure (x2) - Noise (No Correlation)
pressure = np.random.normal(150, 10, n)
# Porosity (Y) - Heavily depends on Temp, minor random noise
# Higher Temp -> Lower Porosity
porosity = 20 - (0.02 * temp) + np.random.normal(0, 0.5, n)

df = pd.DataFrame({'Temperature': temp, 'Pressure': pressure, 'Porosity': porosity})

# 2. Screening Suspects (Correlation)
corr_matrix = df.corr()
print("--- EVIDENCE REPORT (Correlation) ---")
print(corr_matrix[['Porosity']])

r_temp = corr_matrix.loc['Temperature', 'Porosity']
r_press = corr_matrix.loc['Pressure', 'Porosity']

print(f"\nVerbose Verdict:")
if abs(r_press) < 0.2:
    print(f"❌ Pressure (r={r_press:.2f}): INNOCENT. Random noise.")
if abs(r_temp) > 0.7:
    print(f"🕵️ Temperature (r={r_temp:.2f}): SMOKING GUN! Strong driver.")

# 3. Proving the Case (t-test)
# Compare "Low Temp" (< 690) vs "High Temp" (> 710) batches
group_low = df[df['Temperature'] < 690]['Porosity']
group_high = df[df['Temperature'] > 710]['Porosity']

t_stat, p_val = stats.ttest_ind(group_low, group_high)
print(f"\n--- TRIAL VERDICT (t-test) ---")
print(f"P-value: {p_val:.5f}")

if p_val < 0.05:
    print("✅ PROVEN: Significant difference. Increasing Temp fixes the issue.")
else:
    print("❌ Not Proven.")`,
                    expected_output_en: "Correlation matrix showing Temp as the driver and low P-value confirming significance.",
                    datasets_used: [],
                    learning_points_en: ["Screening variables", "Statistical Proof"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Guide the root cause analysis.",
                suggested_questions: [
                    { question_vi: "P-value = 0.08 nói lên điều gì về dữ liệu?", question_en: "What does P-value = 0.08 mean for normality?" },
                    { question_vi: "Tại sao không chỉnh Áp suất?", question_en: "Why not adjust Pressure?" }
                ],
                hint_levels: ["P > 0.05 means Normal", "Because Correlation is weak", "Focus on the Vital Few"],
                max_hints_per_question: 3
            },
            references_en: [],
            flashcards: [],
            quiz: {
                difficulty_en: "Exam-level",
                questions: []
            },
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_capstone_01"]
        },
        {
            id: "mod_capstone_03",
            order: 3,
            title_en: "Phase 4 & 5: Improve & Control - The Solution",
            summary_vi: "Tối ưu hóa (Regression) để tìm nhiệt độ lý tưởng và Thiết lập kiểm soát (Control Chart).",
            summary_en: "Optimization (Regression) to find ideal Temperature and Locking it in (Control Chart).",
            key_metrics_en: ["Regression Equation", "Optimal Setting (750°C)", "New Sigma (4.5)", "Control Plan"],
            key_points_en: [
                "Equation: Porosity = 45 - 0.06 * Temp.",
                "Optimization: To get 0% Porosity, set Temp = 750°C.",
                "Validation: Defects dropped 15% -> 0.2%. New Sigma = 4.5.",
                "Control: Monitor Input (Temp) with Xbar-R chart. Leading Indicator."
            ],
            explanation_vi: `
**1. Improve Phase: Giải phương trình Y=f(x)**
Ta biết $x$ (Nhiệt độ) ảnh hưởng $Y$ (Rỗ khí). Nhưng vặn lò lên bao nhiêu?
*   **Phương trình Hồi quy:** Phần mềm tính ra là:
    $$Y (Porosity) = 45 - 0.06 * Temperature$$
*   **Tối ưu hóa:**
    *   Mục tiêu: $Y = 0$.
    *   Tính toán: $0 = 45 - 0.06x \\rightarrow 0.06x = 45 \\rightarrow x = 750$.
    *   **Hành động:** Set lò nung ở mức **750°C**. Đây là tư duy "Burnt Cake": Bạn sửa Input (Lò) để sửa Output (Bánh).

━━━━━━

**2. Confirmation: Giảm biến động**
Six Sigma không chỉ là thay đổi trung bình, mà là giảm biến động.
*   **Chạy thử (Pilot):** Chạy lò ở 750°C trong 1 tuần.
*   **Kết quả:** Tỷ lệ lỗi giảm từ **15%** xuống **0.2%**.
*   **Check lại Sigma Level:**
    *   Yield mới = 99.8%.
    *   Sigma mới = **4.5 Sigma**.
    *   *Phán quyết:* **Thành công mỹ mãn.**

━━━━━━

**3. Control Phase: Khóa chặt trục x (Sustaining)**
Để ngăn thợ tự ý chỉnh lại lò (Entropy/Sự hỗn loạn), ta lắp hệ thống kiểm soát.
*   **Control Chart (Xbar-R):** Dán biểu đồ ngay máy nung để theo dõi **Nhiệt độ (x)** mỗi giờ.
    *   *Tại sao soi x?* Vì Nhiệt độ là **Leading Indicator**. Nếu nhiệt rớt xuống 740°C, thợ thấy ngay và chỉnh liền TRƯỚC KHI sản phẩm bị hỏng.
*   **Reaction Plan:** "Nếu Temp < 740°C -> Dừng chuyền, Gia nhiệt lại, và Cách ly lô vừa chạy."
            `,
            explanation_en: `
**1. Improve: Solving Y=f(x)**
*   **The Equation:** $Porosity = 45 - 0.06 * Temp$.
*   **Optimization:** Target $Y=0$.
    *   $x = 45 / 0.06 = 750$.
    *   **Action:** Set Oven Dial to **750°C**.

━━━━━━

**2. Confirmation**
*   **Pilot:** Run at 750°C.
*   **Result:** Defects dropped 15% -> 0.2%.
*   **New Metric:** **4.5 Sigma** (Yield 99.8%). Project Success!

━━━━━━

**3. Control: Locking the x**
Prevent drift (entropy).
*   **Tool:** Xbar-R Chart on **Temperature (x)**.
*   **Logic:** Monitor the Leading Indicator (Temp). Don't wait for Porosity (Lagging).
*   **Reaction Plan:** "If Temp < 740°C, Stop & Fix."
            `,
            recommended_tools_en: ["Linear Regression", "Control Chart", "Reaction Plan"],
            python_focus_en: ["Predictive Modeling"],
            code_blocks: [
                {
                    id: "code_capstone_improve",
                    title_en: "Task 3: Optimization & Validation",
                    context_en: `Situation: You found the equation: Porosity = 45 - 0.06 * Temp.
Goal: 
1. Solve for Temp when Porosity = 0.
2. Simulate the new process at 750°C.
3. Calculate the New Sigma Level.`,
                    description_vi: "Tính toán tham số tối ưu và mô phỏng kết quả sau cải tiến.",
                    code_template: `from scipy import stats
import numpy as np

# 1. The Regression Equation found in Analyze Phase
# Porosity = 45 - 0.06 * Temp
slope = -0.06
intercept = 45

# 2. Optimization (Goal: Porosity = 0)
# 0 = 45 - 0.06 * x  ->  0.06 * x = 45
optimal_temp = intercept / abs(slope)
print(f"--- OPTIMIZATION ---")
print(f"Regression Equation: Porosity = {intercept} {slope} * Temp")
print(f"Optimal Temperature Setting (Target Y=0): {optimal_temp:.0f}°C")

# 3. Validation Simulation (The "After" State)
# We run the process at 750°C. Variation is reduced because x is controlled.
np.random.seed(99)
new_porosity = np.random.normal(0.5, 0.5, 1000) # Mean 0.5%, Std 0.5% (Much better!)

# Specification Limit is still > 18% (Wait, 18% is huge. Let's say strictly > 2% is bad now?)
# In define phase USL was 18%. Let's stick to the physical USL.
# Actually, let's look at the Defect Rate (Simulated as 0.2%)
total_units = 1000
new_defects = 2 # 0.2% of 1000

new_yield = (total_units - new_defects) / total_units
new_sigma = stats.norm.ppf(new_yield) + 1.5

print(f"\n--- VALIDATION (Pilot Run) ---")
print(f"New Defect Rate: {(new_defects/total_units):.1%}")
print(f"New Yield: {new_yield:.1%}")
print(f"New Sigma Level: {new_sigma:.2f}")

if new_sigma > 4:
    print("🚀 MISSION ACCOMPLISHED. Project Closed.")
else:
    print("⚠️ Still needs work.")`,
                    expected_output_en: "Optimal Temp = 750C. New Sigma > 4.0.",
                    datasets_used: [],
                    learning_points_en: ["Using math to optimize", "Validating results"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Close the project.",
                suggested_questions: [
                    { question_vi: "Tại sao lại theo dõi Nhiệt độ thay vì Rỗ khí?", question_en: "Why monitor Temperature instead of Porosity?" },
                    { question_vi: "Nếu nhiệt độ tụt xuống 730 độ thì làm gì?", question_en: "If temp drops to 730, what is the reaction?" }
                ],
                hint_levels: ["Temp is Leading, Porosity is Lagging", "Stop Line and Recalibrate"],
                max_hints_per_question: 3
            },
            references_en: [],
            flashcards: [
                {
                    id: "fc_cap_03",
                    question_en: "In the Control Phase, why do we monitor the Input (Temperature)?",
                    answer_vi: "Because it is a Leading Indicator. We can prevent defects before they happen.",
                    tags_en: ["Capstone", "Control"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            quiz: {
                difficulty_en: "Exam-level",
                questions: []
            },
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_capstone_02"]
        }
    ]
};
