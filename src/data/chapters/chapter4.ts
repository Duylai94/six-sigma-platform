import { Chapter, Module } from "../../types/course";

export const chapterAnalyzePatterns: Chapter = {
    id: "ch_analyze_patterns",
    order: 4,
    title_en: "Analyze Phase - Patterns & Variation",
    goal_vi: "Nhận diện các kiểu biến động (Variation Patterns) và sử dụng thống kê suy diễn.",
    goal_en: "Identify patterns of variation and apply inferential statistics.",
    iassc_topics_en: [
        "3.1 Patterns of Variation",
        "3.2 Inferential Statistics",
        "3.3 Correlation & Regression"
    ],
    modules: [
        {
            id: "mod_analyze_multivari_01",
            order: 1,
            title_en: "Multi-Vari Analysis",
            summary_vi: "Công cụ đồ họa giúp phân rã biến động tổng thể thành 3 nhóm: Vị trí, Chu kỳ, và Thời gian.",
            summary_en: "A graphical tool used to decompose Total Variation into three specific families: Positional, Cyclical, and Temporal.",
            key_metrics_en: ["Positional (Within-Piece)", "Cyclical (Piece-to-Piece)", "Temporal (Time-to-Time)"],
            key_points_en: [
                "Decomposes variation to find the 'Vital Few' families.",
                "Positional: Variation location on a single unit (e.g., thickness).",
                "Cyclical: Variation between consecutive units (e.g., batch-to-batch).",
                "Temporal: Variation over longer periods (e.g., shift-to-shift).",
                "Sampling: Requires a Nested Design (3 points x 3 parts x Time)."
            ],
            explanation_vi: `
**1. Mục Tiêu (The Goal)**
Multi-Vari Analysis dùng đồ thị để "khoanh vùng" nguồn gốc gây ra biến động lớn nhất (Red X family). Nó không chỉ ra nguyên nhân gốc rễ chính xác, nhưng nó chỉ cho bạn biết **nơi cần tìm kiếm**.

━━━━━━

**2. Ba Nguồn Biến Động (3 Families of Variation)**
Bạn cần thuộc lòng 3 nhóm này và các từ đồng nghĩa:

- **1. Positional (Vị trí) / Within-Piece:**
  - *Định nghĩa:* Biến động đo được tại các vị trí khác nhau trên **cùng một sản phẩm**.
  - *Ví dụ:* Độ dày đĩa phanh (viền vs tâm), độ xốp của vật đúc (trên vs dưới).
  - *Trên biểu đồ:* Thể hiện bằng độ dài của đường thẳng đứng nối các điểm đo trên 1 sản phẩm.
  - *Nguyên nhân:* Thường do thiết kế sản phẩm hoặc đồ gá (fixture).

- **2. Cyclical (Chu kỳ) / Piece-to-Piece:**
  - *Định nghĩa:* Sự khác biệt giữa các sản phẩm được sản xuất **liên tiếp** trong thời gian ngắn.
  - *Ví dụ:* Sản phẩm 1 vs Sản phẩm 2 vs Sản phẩm 3 cùng một lô.
  - *Trên biểu đồ:* Thể hiện bằng sự dao động của các nhóm điểm (cluster of means).
  - *Nguyên nhân:* Thường do máy móc không ổn định.

- **3. Temporal (Thời gian) / Time-to-Time:**
  - *Định nghĩa:* Biến động xảy ra trong khoảng thời gian **dài hơn**.
  - *Ví dụ:* Ca A vs Ca B, Sáng vs Chiều, Mòn dao cắt theo tuần.
  - *Trên biểu đồ:* Thể hiện bằng xu hướng (trend) hoặc sự dịch chuyển của trung bình nhóm theo thời gian.
  - *Nguyên nhân:* Mòn dụng cụ, thay đổi ca, nhiệt độ môi trường.

━━━━━━

**3. Kế Hoạch Lấy Mẫu Lồng Nhau (Nested Sampling Plan)**
Để vẽ biểu đồ Multi-Vari, bạn KHÔNG ĐƯỢC lấy mẫu ngẫu nhiên. Bạn phải dùng **Nested Design**:
1. Đo 3 điểm trên 1 sản phẩm (Positional).
2. Đo 3 sản phẩm liên tiếp (Cyclical).
3. Lặp lại việc này mỗi giờ hoặc mỗi ca (Temporal).

━━━━━━

**4. Phân Tích (Analysis Logic)**
- **Vạch đứng dài:** Biến động Vị trí (Positional) là chính -> Xem lại thiết kế/khuôn.
- **Các cụm điểm nhảy múa:** Biến động Chu kỳ (Cyclical) là chính -> Xem lại tính ổn định của máy.
- **Giá trị trung bình trôi đi:** Biến động Thời gian (Temporal) là chính -> Xem lại các yếu tố thay đổi theo thời gian (nhiệt độ, mòn dao).

*Quy tắc:* Luôn xử lý nguồn biến động lớn nhất trước.
            `,
            explanation_en: `
**1. The Goal: Reducing the "Vital Few"**
Multi-Vari Analysis takes a long list of variables and uses a graphical chart to identify which **category** of variation is the biggest culprit. It tells you **where to look**.

━━━━━━

**2. The Three Families of Variation**
Memorize these synonyms:

- **1. Positional (Within-Piece / Intra-piece):**
  - *Definition:* Variation measured at different locations on a **single unit**.
  - *Examples:* Disk thickness (edge vs center), Furnace temp (front vs back).
  - *Chart Visual:* Represented by the **length of the vertical line** for each unit. Long lines = High Positional Variation.

- **2. Cyclical (Piece-to-Piece / Inter-piece):**
  - *Definition:* Variation between **consecutive units** produced in a short timeframe.
  - *Examples:* Part 1 vs Part 2 vs Part 3.
  - *Chart Visual:* Represented by the **scatter/fluctuation of the means** (dots) of consecutive units.

- **3. Temporal (Time-to-Time / Shift-to-Shift):**
  - *Definition:* Variation occurring over **longer periods**.
  - *Examples:* Shift A vs Shift B, Morning vs Afternoon, Tool wear.
  - *Chart Visual:* Represented by **trends** or shifts connecting groups over time.

━━━━━━

**3. Sampling Plan (Nested Design)**
You cannot sample randomly. You must use a **Nested Sampling Plan**:
1. Measure 3 points on one part (Positional).
2. Measure 3 consecutive parts (Cyclical).
3. Repeat this every hour/shift (Temporal).

━━━━━━

**4. Key Takeaways**
- **Vertical Lines:** Positional. (Check part geometry/fixture).
- **Cluster of Means:** Cyclical. (Check machine stability).
- **Group Trends:** Temporal. (Check tool wear, temp drift, shifts).
*Rule:* Fix the largest source of variation first.
            `,
            recommended_tools_en: ["Multi-Vari Chart (Minitab)", "Seaborn (Python)"],
            python_focus_en: ["Visualizing Nested Data"],
            code_blocks: [
                {
                    id: "code_analyze_multivari",
                    title_en: "Generating a Multi-Vari Chart",
                    title_vi: "Tạo biểu đồ Multi-Vari",
                    description_vi: "Đoạn code này mô phỏng dữ liệu Nested Design và vẽ biểu đồ Multi-Vari đơn giản dùng Seaborn để thấy rõ 3 nguồn biến động.",
                    context_en: "Scenario: You suspect variation exists between shifts (Temporal) and within parts (Positional).",
                    code_template: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Simulate Data (Nested Design)
# Factors: Shift (Temporal), Part_ID (Cyclical within Shift), Location (Positional within Part)
data = {
    'Shift': ['Morning']*9 + ['Evening']*9,
    'Part_ID': ['P1','P1','P1', 'P2','P2','P2', 'P3','P3','P3'] * 2,
    'Location': ['Top', 'Mid', 'Bot'] * 6,
    # Morning: Stable parts, consistent positions
    # Evening: High positional variation (Top vs Bot)
    'Measurement': [
        10, 10, 10,  10, 10, 10,  10, 10, 10,  # Morning (Perfect)
        12, 10, 8,   12, 10, 8,   12, 10, 8    # Evening (High Positional Var)
    ]
}

df = pd.DataFrame(data)

# Visualizing Multi-Vari
# X-axis = Part (Cyclical), Y-axis = Measurement, Hue = Shift (Temporal)
plt.figure(figsize=(10, 6))
sns.lineplot(data=df, x='Part_ID', y='Measurement', hue='Shift', style='Shift', markers=True, err_style="bars", ci='sd')

# Add individual points to show Positional variation
sns.stripplot(data=df, x='Part_ID', y='Measurement', hue='Shift', dodge=False, jitter=False, color='black', alpha=0.5)

plt.title("Multi-Vari Chart Approximation")
plt.ylabel("Measurement Value")
plt.xlabel("Consecutive Parts (Cyclical)")
plt.show()

print("Interpretation:")
print("- Morning Shift: Flat line, tight points -> Low Variation.")
print("- Evening Shift: Vertical spread (12 to 8) -> High POSITIONAL Variation.")`,
                    expected_output_en: "Chart showing spread differences between shifts.",
                    expected_output_vi: "Biểu đồ so sánh độ tản mạn giữa 2 ca.",
                    datasets_used: [],
                    learning_points_en: ["Nested Data Structure", "Interpreting Scales"],
                    difficulty_en: "Intermediate",
                    ai_tutor_prompts: ["How to spot Temporal variation?", "Why are the evening points spread out?"],
                    challenges: []
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "You are a Multi-Vari Analysis expert. Help identify Positional, Cyclical, and Temporal variation families.",
                suggested_questions: [
                    { question_vi: "Biểu đồ Multi-Vari cho biết điều gì?", question_en: "What does a Multi-Vari chart tell you?" },
                    { question_vi: "Làm sao phân biệt biến động Chu kỳ và Thời gian?", question_en: "How to distinguish Cyclical vs Temporal?" },
                    { question_vi: "Ví dụ về biến động Vị trí?", question_en: "Give an example of Positional variation." },
                    { question_vi: "3 nguồn biến động chính là gì?", question_en: "What are the 3 families of variation?" }
                ],
                hint_levels: ["Focus on the 3 families", "Consecutive vs Long term", "Within a single unit"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Analyze", location_hint_en: "Patterns of Variation" }
            ],
            flashcards: [
                {
                    id: "fc_analyze_multi_01",
                    question_en: "Which variation family describes differences between Shift A and Shift B?",
                    answer_vi: "Temporal (Time-to-Time).",
                    tags_en: ["Analyze", "Multi-Vari"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_multi_02",
                    question_en: "Variation measured at different locations on a single unit is called?",
                    answer_vi: "Positional (Within-Piece).",
                    tags_en: ["Analyze", "Multi-Vari"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_multi_03",
                    question_en: "What type of sampling plan is required for Multi-Vari Analysis?",
                    answer_vi: "Nested Sampling Plan.",
                    tags_en: ["Analyze", "Sampling"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_multi_04",
                    question_en: "If the vertical lines on a Multi-Vari chart are very long, what is the dominant variation?",
                    answer_vi: "Positional (Within-Piece).",
                    tags_en: ["Analyze", "dCharts"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_measure_capability_02"]
        },

        {
            id: "mod_analyze_inferential_01",
            order: 2,
            title_en: "Hypothesis Testing & Inferential Stats",
            summary_vi: "Kiểm định giả thuyết (P-value, Alpha, Power) và chọn kiểm định phù hợp.",
            summary_en: "Hypothesis Testing (P-value, Alpha, Power) and Test Selection.",
            key_metrics_en: ["P-value", "Alpha (Risk)", "Power (1-Beta)", "H0 (Null)", "H1 (Alt)"],
            key_points_en: [
                "H0 (Null Hypothesis): The boring assumption (No difference, Status Quo).",
                "H1 (Alt Hypothesis): The exciting discovery (Significant difference exists).",
                "P-value < 0.05: Reject H0 (Statistically Significant).",
                "Power (1-β): Probability of finding a difference if it really exists.",
                "Non-Parametric Tests: Use when data is NOT Normal (Mann-Whitney, Kruskal-Wallis)."
            ],
            explanation_vi: `
**1. The Logic of Hypothesis Testing**
Chúng ta giống như quan tòa.
- **H0 (Vô tội):** Mặc định không có gì xảy ra. (Mean A = Mean B).
- **H1 (Có tội):** Có bằng chứng cho thấy sự khác biệt. (Mean A != Mean B).
- **P-value (Bằng chứng):** Nếu P-value < 0.05 (Alpha), bằng chứng đủ mạnh để bác bỏ H0 -> Kết luận có sự khác biệt.

**2. P-value (The Most Misunderstood Concept)**
- **Sai:** P-value là xác suất H0 đúng.
- **Đúng:** P-value là xác suất **Dữ liệu này xuất hiện ngẫu nhiên** nếu H0 đúng.
  - Ví dụ: P = 0.03. Nghĩa là chỉ có 3% khả năng sự việc này là ngẫu nhiên. -> Nó không ngẫu nhiên -> Nó là thật (Significant).

**3. Errors & Power**
- **Type I Error (Alpha):** Kết luận sai là có tội. (False Positive). Alpha thường chọn là 0.05.
- **Type II Error (Beta):** Bỏ sót tội phạm. (False Negative).
- **Power (1 - Beta):** Khả năng lưới trời lồng lộng. Power càng cao (thường > 0.8), ta càng dễ phát hiện ra lỗi sai. Tăng cỡ mẫu (n) sẽ tăng Power.

**4. Test Selection Guide (Tier 1)**
- **Normal Data (Parametric):**
  - 2 Groups: **t-test**.
  - 3+ Groups: **ANOVA**. (Nếu P < 0.05, dùng **Tukey** để biết cụ thể nhóm nào khác biệt).
- **Non-Normal Data (Non-Parametric):**
  - 2 Groups: **Mann-Whitney**.
  - 3+ Groups: **Kruskal-Wallis**.
            `,
            explanation_en: `
**1. The Courtroom Analogy**
- **H0 (Null):** Innocent until proven guilty. (Assumption: No difference).
- **H1 (Alternative):** Guilty. (Claim: There is a difference).
- **P-value:** The probability of innocent coincidence.

**2. Interpreting P-value (< 0.05)**
- **Definition:** Probability of observing the data IF H0 is true.
- **Rule:** "If P is low, the Null must go." (Reject H0).
- **Rule:** "If P is high, the Null must fly." (Fail to Reject H0).

**3. Type I vs Type II Errors**
- **Type I (Alpha):** Convicting an innocent person. (False Positive).
- **Type II (Beta):** Letting a guilty person go free. (False Negative).
- **Power (1 - Beta):** The ability to catch the guilty. Higher Sample Size (n) = Higher Power.

**4. Test Selection (Memorize This)**
- **Continuous Normal:**
  - 2 Groups -> **t-test** (Paired if same samples, 2-Sample if restricted).
  - 3+ Groups -> **ANOVA** (Use **Tukey Post-hoc** to find the specific winner).
- **Continuous Non-Normal:**
  - 2 Groups -> **Mann-Whitney U**.
  - 3+ Groups -> **Kruskal-Wallis**.
            `,
            recommended_tools_en: ["Confidence Interval Plot", "Hypothesis Test Map"],
            python_focus_en: ["scipy.stats.ttest_ind"],
            code_blocks: [
                {
                    id: "code_analyze_anova",
                    title_en: "ANOVA & Tukey Post-hoc",
                    description_vi: "Đoạn code này thực hiện ANOVA một yếu tố (One-way ANOVA) để so sánh 3 nhóm. Nếu P-value < 0.05, ta dùng Tukey Test để tìm ra chính xác cặp nhóm nào khác biệt.",
                    code_template: `import scipy.stats as stats
from statsmodels.stats.multicomp import pairwise_tukeyhsd

# Data: Scores of 3 Classes
class_a = [82, 85, 88, 90, 86]
class_b = [75, 78, 80, 79, 77]
class_c = [95, 92, 96, 94, 98]

# 1. ANOVA (Can we begin?)
f_stat, p_value = stats.f_oneway(class_a, class_b, class_c)
print(f"ANOVA P-value: {p_value:.5f}")

if p_value < 0.05:
    print("Significant difference found! Running Tukey Post-hoc...")
    # 2. Tukey Post-hoc (Who is different?)
    all_data = class_a + class_b + class_c
    labels = ['A']*5 + ['B']*5 + ['C']*5
    
    tukey = pairwise_tukeyhsd(endog=all_data, groups=labels, alpha=0.05)
    print(tukey)
else:
    print("No difference between classes.")`,
                    expected_output_en: "ANOVA Table and Pairwise comparisons.",
                    datasets_used: [],
                    learning_points_en: ["ANOVA Logic", "Tukey Interpretation"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Central Limit Theorem using dice rolls.",
                suggested_questions: [
                    { question_vi: "Tại sao cần n >= 30?", question_en: "Why is n >= 30 required?" },
                    { question_vi: "Khi nào dùng Mann-Whitney?", question_en: "When to use Mann-Whitney?" }
                ],
                hint_levels: ["Average of averages", "Non-normal data", "Alternative to t-test"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 11", location_hint_en: "Central Limit Theorem" }
            ],
            flashcards: [
                {
                    id: "fc_analyze_stats_01",
                    question_en: "What implies a Type I Error (Alpha)?",
                    answer_vi: "Rejecting the Null Hypothesis when it is actually True (False Positive).",
                    tags_en: ["Analyze", "Statistics", "Errors"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_stats_02",
                    question_en: "If data is Non-Normal and you have 3 groups, which test do you use?",
                    answer_vi: "Kruskal-Wallis Test.",
                    tags_en: ["Analyze", "Test Selection"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_multivari_01"]
        },
        {
            id: "mod_analyze_regression_01",
            order: 3,
            title_en: "Correlation & Simple Regression",
            summary_vi: "Đánh giá mối quan hệ giữa biến X và biến Y và 5 giả định quan trọng.",
            summary_en: "Relationship between X and Y, and the 5 Critical Assumptions.",
            key_metrics_en: ["Pearson (r)", "R-squared", "Residuals", "VIF", "Homoscedasticity"],
            key_points_en: [
                "r ranges from -1 to +1.",
                "R-squared: % of variation in Y explained by X.",
                "Assumption 1: Linearity (Straight line relationship).",
                "Assumption 2: Normality of Residuals.",
                "Assumption 3: Homoscedasticity (Constant Variance).",
                "Assumption 4: Independence (No pattern over time).",
                "Assumption 5: No Multicollinearity (VIF < 5)."
            ],
            explanation_vi: `
**1. Correlation & Regression Intro**
- **Correlation (r):** Độ mạnh của mối quan hệ (-1 đến +1).
- **Regression (Y = mx +c):** Phương trình dự báo.

**2. 5 Giả định của Hồi quy (Bắt buộc phải check)**
Nếu vi phạm một trong 5 điều này, phương trình hồi quy là RÁC (Invalid).
1. **Linearity (Tuyến tính):** X và Y phải có quan hệ đường thẳng. (Check: Residual Plot không được cong).
2. **Normality of Residuals:** Phần dư (Error) phải phân phối chuẩn. (Check: Anderson-Darling on Residuals).
3. **Homoscedasticity (Phương sai đồng nhất):** Độ tản mạn của Error phải giống nhau ở mọi điểm. (Check: Residual Plot không được có hình cái phễu).
4. **Independence (Độc lập):** Dữ liệu không phụ thuộc lẫn nhau theo thời gian. (Check: Durbin-Watson ≈ 2; tốt nhất là từ 1.5 đến 2.5).
5. **No Multicollinearity:** Các biến đầu vào (X1, X2...) không được tương quan với nhau. (Check: VIF < 5).

**3. R-squared (R²)**
- \`R² = 0.8\`: 80% biến động của Y là do X gây ra. Còn 20% là do các yếu tố khác.
            `,
            explanation_en: `
**1. Correlation & Regression Intro**
- **Correlation (r):** Strength of relationship.
- **Regression Equation:** Tool for prediction.

**2. The 5 Critical Assumptions**
You CANNOT trust the P-value if these are violated:
1. **Linearity:** The relationship is a straight line. (Fix: Log transform).
2. **Normality of Residuals:** Errors are normally distributed (Bell Curve).
3. **Homoscedasticity:** Constant Variance of errors. (Bad: Funnel shape in Residual Plot).
4. **Independence:** No auto-correlation over time. (Test: Durbin-Watson Stat should be ~2.0; range 0-4 where values between ~1.5-2.5 are acceptable).
5. **No Multicollinearity:** X variables are independent of each other. (Test: Variance Inflation Factor VIF < 5).

**3. R-squared (R²)**
- The % of variation in Y explained by the model.
- High R² + High P-value = Warning (Potential Multicollinearity).
            `,
            recommended_tools_en: ["Residual Plots", "Durbin-Watson"],
            python_focus_en: ["statsmodels.stats.stattools.durbin_watson"],
            code_blocks: [
                {
                    id: "code_analyze_regression_assumptions",
                    title_en: "Checking Regression Assumptions",
                    context_en: `Situation: You built a model. Now you must validate it using Residual Analysis.`,
                    description_vi: "Code kiểm tra 2 giả định quan trọng: Durbin-Watson (Độc lập) và vẽ biểu đồ Residual (Tuyến tính & Phương sai).",
                    code_template: `import numpy as np
import matplotlib.pyplot as plt
from statsmodels.stats.stattools import durbin_watson

# Residuals = Actual - Predicted
residuals = [0.5, -0.2, 0.1, -0.4, 0.0]

# 1. Check Independence (Durbin-Watson)
dw = durbin_watson(residuals)
print(f"Durbin-Watson Statistic: {dw:.2f}")
if 1.5 < dw < 2.5:
    print("-> Assumption Met: Independence.")
else:
    print("-> Warning: Auto-correlation detected.")

# 2. Check Homoscedasticity (Visual)
plt.scatter(range(len(residuals)), residuals)
plt.axhline(0, color='red', linestyle='--')
plt.title("Residual Plot (Look for random scatter)")
plt.show()`,
                    expected_output_en: "DW Stat approx 2.0 and Random Scatter plot.",
                    datasets_used: [],
                    learning_points_en: ["Model Validation", "Residual Analysis"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain 'Correlation does not imply Causation'.",
                suggested_questions: [
                    { question_vi: "VIF là gì?", question_en: "What is VIF?" },
                    { question_vi: "Tại sao Residual phải ngẫu nhiên?", question_en: "Why must Residuals be random?" }
                ],
                hint_levels: ["VIF measures Multicollinearity", "Patterns indicate missing variables", "Randomness = Good Model"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 6", location_hint_en: "Correlation & Regression" }
            ],
            flashcards: [
                {
                    id: "fc_analyze_reg_01",
                    question_en: "What is the acceptable range for the Durbin-Watson statistic?",
                    answer_vi: "Approximately 1.5 to 2.5 (Ideal is 2.0).",
                    tags_en: ["Analyze", "Regression"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_inferential_01"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_analyze_patterns_quiz",
            order: 4,
            title_en: "Chapter 4 Quiz: Analyze (Patterns) Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 4 (20 câu hỏi).",
            summary_en: "Comprehensive Chapter 4 Quiz (20 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of Multi-Vari Analysis, Inferential Statistics, and Regression."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp các kiến thức về nhận diện biến động (Multi-Vari), định lý giới hạn trung tâm (CLT) và hồi quy tuyến tính.",
            explanation_en: "This quiz covers Multi-Vari Analysis, Central Limit Theorem, and Correlation/Regression concepts.",
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
            prerequisites_ids: ["mod_analyze_multivari_01", "mod_analyze_inferential_01", "mod_analyze_regression_01"]
        }
    ]
};
