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
            summary_vi: "Sử dụng dữ liệu mẫu để đưa ra kết luận về tổng thể. Nguyên lý 'Tòa án' và Ma trận chọn kiểm định.",
            summary_en: "Using sample data to infer conclusions about the population. The 'Courtroom' Analogy and Test Selection Matrix.",
            key_metrics_en: ["P-value", "Alpha (Risk)", "Power (1-Beta)", "H0 (Null)", "H1 (Alt)"],
            key_points_en: [
                "H0 (Null Hypothesis): 'Status quo' or 'Innocent until proven guilty'.",
                "H1 (Alt Hypothesis): What we are trying to prove (Difference exists).",
                "P-value < 0.05: 'If P is low, the Null must go' (Statistically Significant).",
                "Power (1-β): Probability of detecting a difference when one truly exists.",
                "Assumption Checklist: Normality, Equal Variance, Independence."
            ],
            explanation_vi: `
**1. Nguyên Lý Tòa Án (The Courtroom Analogy)**
Dữ liệu là bằng chứng, và chúng ta là quan tòa.
- **Null Hypothesis (H0 - Giả thuyết không):** "Vô tội cho đến khi được chứng minh là có tội". Mặc định là **KHÔNG** có sự khác biệt. (VD: Quy trình Mới = Quy trình Cũ).
- **Alternative Hypothesis (H1/Ha - Giả thuyết đối):** "Có tội". Đây là điều ta muốn chứng minh. (VD: Quy trình Mới > Quy trình Cũ).

**2. P-value & Quy Tắc Ra Quyết Định**
P-value là thước đo "bằng chứng" chống lại H0.
- **Định nghĩa:** Xác suất quan sát được dữ liệu này NẾU H0 đúng.
- **Quy tắc Vàng (Alpha = 0.05):**
  - **P-value < 0.05:** "If P is low, the Null must go!" -> **Bác bỏ H0**. (Kết quả có ý nghĩa thống kê - Significant).
  - **P-value >= 0.05:** "If P is high, the Null must fly." -> **Chấp nhận H0**. (Không đủ bằng chứng để buộc tội).

━━━━━━

**3. Rủi Ro sai sót (Errors & Risks)**
Chúng ta không bao giờ chắc chắn 100%, nên phải quản lý rủi ro:
- **Type I Error (Alpha $\\alpha$):** Kết luận SAI là có tội (False Positive). (Thường chọn 5%).
  - *Ví dụ:* Tuyên án tử hình người vô tội. (Rủi ro của Nhà sản xuất).
- **Type II Error (Beta $\\beta$):** Bỏ lọt tội phạm (False Negative).
  - *Ví dụ:* Thả tự do kẻ giết người. (Rủi ro của Khách hàng).
- **Power (1 - $\\beta$):** Khả năng lưới trời lồng lộng. Muốn tăng Power (thường > 80%), bạn phải **tăng cỡ mẫu (n)** hoặc tăng độ lớn của sự khác biệt cần tìm (Effect Size).

━━━━━━

**4. Ma Trận Chọn Kiểm Định (Test Selection Matrix)**
*Mẹo thi: Luôn kiểm tra tính chuẩn (Normality) và phương sai (Variance) trước.*

| Scenario | Normal Data (Parametric) | Non-Normal (Non-Parametric) |
|---|---|---|
| **1 Group** vs Target | 1-Sample t-test | 1-Sample Wilcoxon |
| **2 Groups** (Independent) | 2-Sample t-test | Mann-Whitney U |
| **2 Groups** (Paired) | Paired t-test | Wilcoxon Signed Rank |
| **3+ Groups** | **One-Way ANOVA** (+ Tukey) | Kruskal-Wallis |
| **Compare Variances** | Bartlett's Test | Levene's Test |

*Ghi chú:*
- **ANOVA:** Chỉ cho biết "Có sự khác biệt". Dùng **Tukey Post-hoc** để biết cụ thể ai khác ai.
- **Z-test:** Chỉ dùng khi n > 30 VÀ biết rõ độ lệch chuẩn tổng thể ($\sigma$). Nếu không, luôn dùng **t-test**.
            `,
            explanation_en: `
**1. The Courtroom Analogy**
Data is the evidence, and statistics is the judge.
- **Null Hypothesis (H0):** "Innocent until proven guilty." Assumes NO difference or status quo. (e.g., $\\mu_1 = \\mu_2$).
- **Alternative Hypothesis (H1/Ha):** "Guilty." The claim we want to prove. (e.g., $\\mu_1 \\neq \\mu_2$).

**2. P-value & The Decision Rule**
P-value measures the strength of evidence against H0.
- **Definition:** Probability of observing the data IF H0 were true.
- **The Golden Rule ($\alpha = 0.05$):**
  - **P-value < 0.05:** "If P is low, the Null must go!" -> **Reject H0**. (Statistically Significant).
  - **P-value >= 0.05:** "If P is high, the Null must fly." -> **Fail to Reject H0**. (Not Significant).

━━━━━━

**3. Errors & Risks**
We can never be 100% sure, so we manage risk:
- **Type I Error (Alpha $\\alpha$):** False Positive. Rejecting H0 when it's actuall True.
  - *Analogy:* Convicting an innocent person.
- **Type II Error (Beta $\\beta$):** False Negative. Failing to reject H0 when it's False.
  - *Analogy:* Letting a guilty person go free.
- **Power (1 - $\\beta$):** The probability of correctly finding a difference. To increase Power, **increase Sample Size (n)**.

━━━━━━

**4. Test Selection Matrix (Memorize This!)**

| Scenario | Normal Data (Parametric) | Non-Normal (Non-Parametric) |
|---|---|---|
| **1 Group** vs Target | 1-Sample t-test | 1-Sample Wilcoxon |
| **2 Groups** (Independent) | 2-Sample t-test | Mann-Whitney U |
| **2 Groups** (Paired) | Paired t-test | Wilcoxon Signed Rank |
| **3+ Groups** | **One-Way ANOVA** (+ Tukey) | Kruskal-Wallis |
| **Compare Variances** | Bartlett's Test | Levene's Test |

*Key Takeaways:*
- **Assumption Checklist:** Normality (Anderson-Darling), Equal Variance (Levene), Independence.
- **Z-test vs t-test:** Only use Z-test if n > 30 AND Population Sigma ($\sigma$) is known. Otherwise, t-test.
            `,
            recommended_tools_en: ["Confidence Interval", "Hypothesis Test Map"],
            python_focus_en: ["scipy.stats.ttest_ind", "scipy.stats.f_oneway"],
            code_blocks: [
                {
                    id: "code_analyze_anova",
                    title_en: "ANOVA & Tukey Post-hoc",
                    description_vi: "Đoạn code này thực hiện One-way ANOVA để so sánh 3 nhóm. Nếu P < 0.05, ta dùng Tukey Test để tìm cặp khác biệt.",
                    code_template: `import scipy.stats as stats
from statsmodels.stats.multicomp import pairwise_tukeyhsd
import numpy as np

# Data: Scores of 3 Classes (3+ Groups)
class_a = [82, 85, 88, 90, 86]
class_b = [75, 78, 80, 79, 77]
class_c = [95, 92, 96, 94, 98]

# 1. Check Normality (Shapiro-Wilk)
# If P > 0.05, assume Normal.
_, p_norm_a = stats.shapiro(class_a)
_, p_norm_b = stats.shapiro(class_b)
_, p_norm_c = stats.shapiro(class_c)

print(f"Normality P-values: A={p_norm_a:.2f}, B={p_norm_b:.2f}, C={p_norm_c:.2f}")

# 2. ANOVA (Can we begin?)
f_stat, p_value = stats.f_oneway(class_a, class_b, class_c)
print(f"ANOVA P-value: {p_value:.5f}")

if p_value < 0.05:
    print("-> Result: Significant difference found! (If P is low, Null must go)")
    print("-> Next Step: Running Tukey Post-hoc to find the winner...")
    
    # 3. Tukey Post-hoc (Who is different?)
    all_data = class_a + class_b + class_c
    labels = ['A']*5 + ['B']*5 + ['C']*5
    
    tukey = pairwise_tukeyhsd(endog=all_data, groups=labels, alpha=0.05)
    print(tukey)
else:
    print("-> Result: No significant difference between classes.")`,
                    expected_output_en: "ANOVA P-value < 0.05, followed by Tukey table showing A-B, A-C, B-C diffs.",
                    datasets_used: [],
                    learning_points_en: ["ANOVA = 'Is there a difference?'", "Tukey = 'Where is the difference?'", "Check Assumptions first"],
                    difficulty_en: "Advanced",
                    ai_tutor_prompts: ["Why did we run Tukey?", "What if P-value was 0.10?"]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Act as a Six Sigma Black Belt. Quiz the user on Hypothesis Testing selection.",
                suggested_questions: [
                    { question_vi: "Khi nào dùng Paired t-test?", question_en: "When to use Paired t-test?" },
                    { question_vi: "Giải thích Alpha và Beta?", question_en: "Explain Alpha and Beta errors?" },
                    { question_vi: "Nếu dữ liệu không chuẩn thì dùng test gì?", question_en: "Test selection for Non-normal data?" }
                ],
                hint_levels: ["Check if groups are independent or dependent", "Alpha = False Positive", "Use Non-parametric tests"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 11", location_hint_en: "Hypothesis Testing Map" }
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
                    question_en: "Evaluate: P-value = 0.03 and Alpha = 0.05. What is the decision?",
                    answer_vi: "Reject H0. The result is Statistically Significant.",
                    tags_en: ["Analyze", "P-value"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_stats_03",
                    question_en: "If data is Non-Normal and you have 3 independent groups, which test do you use?",
                    answer_vi: "Kruskal-Wallis Test.",
                    tags_en: ["Analyze", "Test Selection"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_stats_04",
                    question_en: "What is the only scenario where you use a Z-test instead of a t-test?",
                    answer_vi: "When Sample Size > 30 AND Population Standard Deviation (Sigma) is KNOWN.",
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
            summary_vi: "Định lượng mối quan hệ (r) và dự báo tương lai (Regression Analysis).",
            summary_en: "Quantifying relationships (Pearson's r) and predicting future performance ($Y = f(X)$).",
            key_metrics_en: ["Pearson's r", "R-squared", "Residuals", "VIF", "Homoscedasticity"],
            key_points_en: [
                "Correlation (r): Measures strength & direction (-1 to +1).",
                "Regression: The equation for prediction ($Y = \\beta_0 + \\beta_1X$).",
                "R-squared: % of variation in Y explained by the model.",
                "Residuals: Must be Random and Normal (No patterns).",
                "Assumption Checklist: Linearity, Normality, Homoscedasticity, Independence, VIF."
            ],
            explanation_vi: `
**1. Hệ Số Tương Quan (Pearson's r)**
- **Định nghĩa:** Đo lường độ mạnh và chiều hướng của mối quan hệ tuyến tính giữa 2 biến.
- **Phạm vi:** Từ -1 đến +1.
  - \`r = -1\`: Tương quan âm tuyệt đối (X tăng, Y giảm).
  - \`r = 0\`: Không có tương quan.
  - \`r = +1\`: Tương quan dương tuyệt đối.
  - *Quy tắc:* |r| > 0.8 là Mạnh; < 0.5 là Yếu.
- **Cảnh báo:** "Correlation != Causation". (Ví dụ: Doanh số kem và Cá mập tấn công có tương quan cao, nhưng không gây ra nhau).

━━━━━━

**2. Hồi Quy Tuyến Tính Đơn (Simple Linear Regression)**
- **Mục tiêu:** Tạo ra phương trình toán học để DỰ BÁO Y dựa trên X.
- **Phương trình:** $ Y = \\beta_0 + \\beta_1X + \\epsilon $ (hoặc $ Y = a + bX $)
  - **Slope ($\\beta_1$):** Độ dốc. Y thay đổi bao nhiêu khi X tăng 1 đơn vị.
  - **Intercept ($\\beta_0$):** Điểm cắt trục tung. Giá trị của Y khi X = 0.
  - **Residual (e):** Sai số = Thực tế - Dự báo ($ Y_{actual} - Y_{predicted} $).

━━━━━━

**3. Hệ Số Xác Định (Coefficient of Determination - $R^2$)**
- **Ý nghĩa:** Cho biết bao nhiêu % biến thiên của Y được giải thích bởi mô hình X.
- **Ví dụ:** $ R^2 = 0.80 $. Nghĩa là mô hình giải thích được 80% sự thay đổi của Y. Còn 20% là do các yếu tố khác ("tiếng ồn").
- **Adjusted $R^2$:** Dùng khi có nhiều biến đầu vào (Multiple Regression). Nó phạt việc thêm các biến rác.

━━━━━━

**4. 5 Giả Định Quan Trọng (Critical Assumptions)**
Bạn **KHÔNG ĐƯỢC TIN** P-value nếu vi phạm các giả định này (Phân tích phần dư - Residual Analysis):
1. **Linearity:** Quan hệ phải là đường thẳng. (Residuals không có hình chữ U).
2. **Normality:** Phần dư phải phân phối chuẩn (Bell Curve). (Check: Anderson-Darling).
3. **Homoscedasticity:** Phương sai đồng nhất. (Phần dư không được có hình cái phễu/loa phóng thanh).
4. **Independence:** Không tự tương quan theo thời gian. (Check: Durbin-Watson $\\approx 2.0$).
5. **No Multicollinearity:** Các biến đầu vào X không được tương quan với nhau. (Check: VIF < 5).
            `,
            explanation_en: `
**1. Correlation (Pearson's r)**
- **Definition:** Measures strength and direction of the linear relationship.
- **Range:** -1 to +1.
  - \`r = -1\`: Perfect Negative.
  - \`r = 0\`: No Linear Correlation.
  - \`r = +1\`: Perfect Positive.
  - *Rule of Thumb:* |r| > 0.8 is Strong.
- **Warning:** Correlation $\\neq$ Causation.

━━━━━━

**2. Simple Linear Regression**
- **Goal:** Create a mathematical equation to predict Y.
- **Equation:** $ Y = \\beta_0 + \\beta_1X + \\epsilon $
  - **Slope ($b$ or $\\beta_1$):** The change in Y for every 1 unit increase in X.
  - **Intercept ($a$ or $\\beta_0$):** The value of Y when X = 0.
  - **Residual (e):** Distance between Actual data and the Predicted line.

━━━━━━

**3. Coefficient of Determination ($R^2$)**
- **Definition:** The percentage of variation in Y explained by the variation in X.
- **Interpretation:** If $R^2 = 0.80$, the model explains 80% of the variation. The remaining 20% is error/noise.

━━━━━━

**4. The 5 Critical Assumptions (Residual Analysis)**
Always check the Residual Plots. If these are violated, the model is invalid:
1. **Linearity:** Relationship is straight. (No U-shape residuals).
2. **Normality:** Residuals follow a Bell Curve. (Anderson-Darling).
3. **Homoscedasticity:** Constant Variance. (No Funnel/Megaphone shape).
4. **Independence:** No time-based patterns. (Durbin-Watson Statistic $\\approx 2.0$).
5. **No Multicollinearity:** Predictors (Xs) are independent. (VIF < 5).
            `,
            recommended_tools_en: ["Fitted Line Plot", "Residual Four-Pack"],
            python_focus_en: ["statsmodels.api.OLS"],
            code_blocks: [
                {
                    id: "code_analyze_regression",
                    title_en: "Simple Linear Regression & Assumptions",
                    description_vi: "Đoạn code này xây dựng mô hình hồi quy OLS và kiểm tra các giả định quan trọng (Durbin-Watson, Jarque-Bera).",
                    code_template: `import numpy as np
import statsmodels.api as sm
from statsmodels.stats.stattools import durbin_watson

# Data: Hours Studied (X) vs Exam Score (Y)
X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Y = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95]

# Add Intercept (Constant)
X_const = sm.add_constant(X)

# 1. Fit the Model (OLS - Ordinary Least Squares)
model = sm.OLS(Y, X_const).fit()

# 2. Print Summary (R-squared, P-values)
print(f"R-squared: {model.rsquared:.4f}")
print(f"P-value (Slope): {model.pvalues[1]:.4e}")

# 3. Check Assumptions
residuals = model.resid

# Independence (Durbin-Watson): Ideal is 2.0
dw = durbin_watson(residuals)
print(f"Durbin-Watson: {dw:.2f} (Target: ~2.0)")

if dw < 1.5 or dw > 2.5:
    print("-> Warning: Possible Auto-correlation.")
else:
    print("-> Independence Assumption Met.")

# Normality (Jarque-Bera)
from statsmodels.stats.stattools import jarque_bera
jb_score, jb_pvalue, _, _ = jarque_bera(residuals)
print(f"Normality P-value: {jb_pvalue:.4f} (> 0.05 is Normal)")`,
                    expected_output_en: "R-squared=1.0, DW=~2.0, Normality P > 0.05",
                    datasets_used: [],
                    learning_points_en: ["Interpreting OLS Summary", "Validating Assumptions"],
                    difficulty_en: "Advanced",
                    ai_tutor_prompts: ["What does R-squared 0.8 mean?", "Why check Durbin-Watson?"]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "You are a Regression expert. Explain relationships and assumptions.",
                suggested_questions: [
                    { question_vi: "Cổn là gì (Residual)?", question_en: "What is a Residual?" },
                    { question_vi: "Mối quan hệ giữa R-squared và r?", question_en: "Relationship between R-squared and r?" },
                    { question_vi: "Hiện tượng Đa cộng tuyến là gì?", question_en: "What is Multicollinearity?" }
                ],
                hint_levels: ["Observed minus Predicted", "Square of correlation coefficient", "VIF > 5"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 6", location_hint_en: "Correlation & Regression" }
            ],
            flashcards: [
                {
                    id: "fc_analyze_reg_01",
                    question_en: "If the Residual Plot shows a 'Megaphone' or 'Funnel' shape, which assumption is violated?",
                    answer_vi: "Homoscedasticity (Constant Variance). This is called Heteroscedasticity.",
                    tags_en: ["Analyze", "Regression", "Assumptions"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_reg_02",
                    question_en: "What is the rule of thumb for VIF (Variance Inflation Factor)?",
                    answer_vi: "VIF should be < 5. If VIF > 5, Multicollinearity exists (Redundant X variables).",
                    tags_en: ["Analyze", "Regression"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_analyze_reg_03",
                    question_en: "Does Correlation imply Causation?",
                    answer_vi: "NO. Correlation only measures strength of linear relationship.",
                    tags_en: ["Analyze", "Correlation"],
                    difficulty_en: "Easy",
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
