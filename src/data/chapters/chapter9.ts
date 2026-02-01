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
            title_en: "Project Brief & Define Phase",
            summary_vi: "Giới thiệu dự án 'Titan Casting'. Xác định vấn đề (Baseline Sigma).",
            summary_en: "Introducing 'Titan Casting' project. Defining the problem (Baseline Sigma).",
            key_metrics_en: ["DPMO", "Sigma Level", "Baseline"],
            key_points_en: [
                "Scenario: High porosity defects in Aluminum Die Casting.",
                "Goal: Reduce Porosity from 15% to < 1%.",
                "Dataset: 'titan_casting_v1.csv' (Historical Data).",
                "Task 1: Calculate current DPMO and Sigma Level."
            ],
            explanation_vi: `
**Tình huống dự án (Project Scenario):**
Bạn là Green Belt tại nhà máy Titan Casting. Khách hàng phàn nàn về lỗi rỗ khí (Porosity) trên sản phẩm nhôm đúc.
Giám đốc giao cho bạn bộ dữ liệu lịch sử. Nhiệm vụ của bạn là dùng Python để tìm nguyên nhân và đề xuất giải pháp.

**Bước 1: Define (Xác định)**
Trước khi sửa, phải biết mình đang "tệ" đến mức nào. Hãy tính Sigma Level hiện tại.
            `,
            explanation_en: `
**Project Scenario:**
You are a Green Belt at Titan Casting. Customers are complaining about "Porosity" (air pockets) in aluminum parts.
The Plant Manager gives you historical data. Your job: Use Python to find the cause and fix it.

**Step 1: Define**
Before fixing anything, how bad is it? Calculate the Current Sigma Level.
            `,
            recommended_tools_en: ["Python: Pandas"],
            python_focus_en: ["Baseline Calculation"],
            code_blocks: [
                {
                    id: "code_capstone_define",
                    title_en: "Step 1: Calculate Baseline Performance",
                    context_en: `Situation: The Plant Manager says 'Porosity is bad'. You ask 'How bad and what is the Sigma Level?'. He gives you 'titan_casting_v1.csv'. Goal: Calculate DPMO and Sigma.

Math Formula:
• DPMO = (Defects / Opportunities) * 1,000,000
• Yield = 1 - (Defects / Opportunities)
• Sigma Level ≈ NORMSINV(Yield) + 1.5 (Shift)`,
                    description_vi: "Tính DPMO và Sigma Level từ dữ liệu thô.",
                    code_template: `import pandas as pd
import numpy as np
from scipy import stats

# 1. Load Data
# Simulated Dataset for learning
data = {
    'Batch_ID': range(1, 101),
    'Porosity_Pct': np.random.normal(15, 2, 100), # Mean 15%, Std 2%
    'Temperature': np.random.normal(650, 10, 100),
    'Pressure': np.random.normal(120, 5, 100)
}
df = pd.DataFrame(data)

# 2. Define Defect (Specification: Porosity > 18% is FAIL)
USL = 18.0
defects = df[df['Porosity_Pct'] > USL]
num_defects = len(defects)
total_opportunities = len(df)

# 3. Calculate DPMO
dpmo = (num_defects / total_opportunities) * 1_000_000

# 4. Estimate Process Sigma (Approximate: normsinv(1 - yield) + 1.5)
yield_rate = 1 - (num_defects / total_opportunities)
sigma_level = stats.norm.ppf(yield_rate) + 1.5

print(f"Total Samples: {total_opportunities}")
print(f"Defects Found: {num_defects}")
print(f"Yield Rate: {yield_rate:.2%}")
print(f"DPMO: {dpmo:.0f}")
print(f"Current Sigma Level: {sigma_level:.2f}")

if sigma_level < 3:
    print("⚠️ Process is TERRIBLE. Needs immediate Six Sigma project.")
else:
    print("✅ Process is okay.")`,
                    expected_output_en: "Baseline metrics indicating a poor process (~2-3 Sigma).",
                    datasets_used: [],
                    learning_points_en: ["Establishing a Baseline", "Business Case Data"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Act as a Project Sponsor.",
                suggested_questions: ["Sigma Level hiện tại là bao nhiêu?", "Mục tiêu dự án nên là gì?"],
                hint_levels: ["Calculate Yield first", "Convert DPMO to Sigma", "Goal: Improvement > 1 Sigma"],
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
            prerequisites_ids: ["mod_control_plan_01"]
        },
        {
            id: "mod_capstone_02",
            order: 2,
            title_en: "Measure & Analyze Phase",
            summary_vi: "Đánh giá dữ liệu (Normality) và tìm nguyên nhân gốc (Correlation/Hypothesis).",
            summary_en: "Data Evaluation (Normality) and Root Cause Analysis (Correlation/Hypothesis).",
            key_metrics_en: ["P-value", "Correlation", "R-squared"],
            key_points_en: [
                "Normality Check: Is Porosity distributed normally?",
                "Correlation: Does Temperature or Pressure affect Porosity?",
                "Hypothesis: Is High Temp better than Low Temp?"
            ],
            explanation_vi: `
**Bước 2 & 3: Measure & Analyze**
Dữ liệu có chuẩn không? Yếu tố nào (X) tác động mạnh nhất đến Lỗi (Y)?
Chúng ta sẽ dùng biểu đồ Scatter và Correlation Matrix để tìm "Thủ phạm" (Root Cause).
            `,
            explanation_en: `
**Step 2 & 3: Measure & Analyze**
Is the data Normal? Which factor (X) drives the Defects (Y)?
We will use Scatter Plots and Correlation Matrix to find the "Smoking Gun" (Root Cause).
            `,
            recommended_tools_en: ["Scatter Plot", "Heatmap"],
            python_focus_en: ["seaborn.heatmap", "scipy.stats.pearsonr"],
            code_blocks: [
                {
                    id: "code_capstone_analyze",
                    title_en: "Step 2: Root Cause identification",
                    context_en: `Situation: You have the data. Now you need to find the Root Cause. Is it Temperature? Pressure? Or Shift? Goal: Use Correlation and Scatter Plots to find the 'Smoking Gun'.

Math Formula:
• Pearson Correlation (r): Measures linear strength.
  Covariance(X, Y) / (std(X) * std(Y))`,
                    description_vi: "Tìm mối tương quan giữa Nhiệt độ/Áp suất và Độ rỗ khí.",
                    code_template: `import seaborn as sns
import matplotlib.pyplot as plt

# Using the dataframe 'df' from previous step (simulation)
# Let's pretend we found a pattern: Higher Temp = Lower Porosity

# Correlation Matrix
corr = df[['Porosity_Pct', 'Temperature', 'Pressure']].corr()
print("Correlation Matrix:")
print(corr)

# Visualize
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
sns.scatterplot(x='Temperature', y='Porosity_Pct', data=df)
plt.title('Temp vs Porosity')

plt.subplot(1, 2, 2)
sns.scatterplot(x='Pressure', y='Porosity_Pct', data=df)
plt.title('Pressure vs Porosity')
plt.show()

# Logic check
# If Temp has strong negative correlation (e.g., -0.7), 
# then Increasing Temp might fix the problem!`,
                    expected_output_en: "Visual confirmation of Root Cause.",
                    datasets_used: [],
                    learning_points_en: ["Visual Analysis", "Confirming Hypotheses"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Guide data analysis.",
                suggested_questions: ["Biểu đồ Scatter nói lên điều gì?", "Correlation là âm hay dương?"],
                hint_levels: ["Look for trends", "Negative slope = Negative correlation", "Strong vs Weak"],
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
            title_en: "Improve & Control Phase",
            summary_vi: "Tối ưu hóa quy trình (Regression) và thiết lập kiểm soát (Control Chart).",
            summary_en: "Process Optimization (Regression) and Control Setup (Control Chart).",
            key_metrics_en: ["Regression Equation", "Control Limits"],
            key_points_en: [
                "Regression: Find the optimal Temperature setting.",
                "Confirmation: Re-calculate Sigma Level.",
                "Control: Setup Xbar-R chart for the new process."
            ],
            explanation_vi: `
**Bước 4 & 5: Improve & Control**
Sau khi biết Nhiệt độ là nguyên nhân. Ta dùng Hồi quy để tìm ra nhiệt độ tối ưu (Ví dụ: Cần tăng lên 700 độ).
Sau khi áp dụng, ta vẽ lại Control Chart để đảm bảo quy trình mới ổn định ở mức hiệu suất cao.
            `,
            explanation_en: `
**Step 4 & 5: Improve & Control**
We found that "Temperature" is the culprit. We use Regression to find the Perfect Temperature (e.g., increase to 700°C).
After applying the fix, we re-draw the Control Chart to ensure the new process stays stable at this high performance.
            `,
            recommended_tools_en: ["Linear Regression", "Control Chart"],
            python_focus_en: ["Predictive Modeling"],
            code_blocks: [
                {
                    id: "code_capstone_improve",
                    title_en: "Step 3: Optimize and Sustain",
                    context_en: `Situation: You found that Temperature is the main driver. Now, what is the OPTIMAL temperature to minimize defects? Goal: Use Regression to find the perfect setting and simulate the New Process.

Math Formula:
• Optimization Logic: Set Target Y = 10%.
• Y = mX + c  ->  10 = m * Temp + c
• Solve for Temp = (10 - c) / m`,
                    description_vi: "Dùng mô hình Hồi quy để tìm thông số tối ưu và mô phỏng kết quả mới.",
                    code_template: `from scipy import stats

# 1. Linear Regression to find 'Perfect Temp'
slope, intercept, r, p, err = stats.linregress(df['Temperature'], df['Porosity_Pct'])
print(f"Model: Porosity = {slope:.2f} * Temp + {intercept:.2f}")

# Target Porosity = 10% (Safe zone). What Temp is needed?
# 10 = slope * T + intercept -> T = (10 - intercept) / slope
target_temp = (10 - intercept) / slope
print(f"Recommended Temperature Setting: {target_temp:.0f} degrees")

# 2. Simulate Improvement (Control Phase)
# Let's say we set the machine to this new Temp
new_porosity = np.random.normal(10, 1.5, 50) # Improve mean to 10%, reduce variation

# Verify New Sigma
new_defects = len(new_porosity[new_porosity > 18]) # USL still 18
print(f"New Defects Found: {new_defects}")
if new_defects == 0:
    print("🚀 PROJECT SUCCESS! Sigma Level drastically improved.")`,
                    expected_output_en: "Optimization result and Validation.",
                    datasets_used: [],
                    learning_points_en: ["Using math to optimize", "Validating results"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Close the project.",
                suggested_questions: ["Dự án đã thành công chưa?", "Bước tiếp theo là gì?"],
                hint_levels: ["Compare Before vs After", "Handover to Process Owner", "Celebrate!"],
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
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_capstone_02"]
        }
    ]
};
