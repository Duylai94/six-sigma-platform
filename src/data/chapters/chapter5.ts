import { Chapter, Module } from "../../types/course";

export const chapterAnalyzeHypothesis: Chapter = {
    id: "ch_analyze_hypothesis",
    order: 5,
    title_en: "Analyze Phase - Hypothesis Testing",
    goal_vi: "Sử dụng thống kê để kiểm chứng giả thuyết: So sánh Trung bình, Trung vị và Tỷ lệ.",
    goal_en: "Use statistics to validate hypotheses: Comparing Means, Medians, and Proportions.",
    iassc_topics_en: [
        "3.4 Hypothesis Testing (Normal Data)",
        "3.5 Hypothesis Testing (Non-Normal Data)",
        "3.2 Inferential Statistics (Test Selection)"
    ],
    modules: [
        {
            id: "mod_analyze_hyp_basics",
            order: 1,
            title_en: "Hypothesis Testing & Effect Size",
            summary_vi: "P-value xác định 'Có khác biệt không?', còn Effect Size xác định 'Khác biệt lớn thế nào?'.",
            summary_en: "P-value determines 'Is there a difference?', Effect Size determines 'Does it matter?'.",
            key_metrics_en: ["P-value", "Alpha/Beta", "Effect Size (Cohen's d)", "Power"],
            key_points_en: [
                "H0 (Null): Status Quo. Ha (Alt): Change detected.",
                "P-value < 0.05: Statistically Significant (Real difference).",
                "Effect Size: Practical Significance (Important difference).",
                "Rule: Don't rely on P-value alone. A tiny difference can be significant with huge samples."
            ],
            explanation_vi: `
**1. Quy trình Tòa án (Courtroom Analogy)**
- **H0 (Null):** Bị cáo Vô tội (Status Quo).
- **Ha (Alternative):** Bị cáo Có tội (Change).
- **Bằng chứng (P-value):** \`P < 0.05\` -> Reject H0 (Có tội).

**2. Statistical Significance vs Practical Significance**
Đây là bẫy lớn nhất của người mới làm Green Belt.
- **Statistical Significance (P < 0.05):** "Khác biệt này là THẬT, không phải do ngẫu nhiên."
- **Practical Significance (Effect Size):** "Khác biệt này CÓ QUAN TRỌNG KHÔNG?"
- *Ví dụ:* Bạn giảm thời gian quy trình từ 100s xuống 99.9s (P < 0.01 vì mẫu lớn 10,000).
  -> Kết luận: Có ý nghĩa thống kê, nhưng **Vô nghĩa thực tế** (Khách hàng không cảm nhận được 0.1s).
- **Cohen's d:** Thước đo độ lớn ảnh hưởng.
  - \`d = 0.2\`: Nhỏ (Trivial).
  - \`d = 0.5\`: Trung bình.
  - \`d > 0.8\`: Lớn (Quan trọng).

**3. Type I vs Type II Error**
- **Type I (Alpha):** Báo cháy giả (False Alarm).
- **Type II (Beta):** Bỏ sót tội phạm (Missed Detection).
            `,
            explanation_en: `
**1. The Courtroom Analogy**
- **H0 (Null):** Innocent. **Ha (Alt):** Guilty.
- **P-value:** Probability of evidence if Defendant is Innocent. Low P -> Guilty.

**2. Effect Size vs P-value**
- **P-value** answers: "Is there a real effect?" (Yes/No).
- **Effect Size** answers: "How big is the effect?" (So What?).
- **The Trap:** With large sample sizes, even tiny differences (e.g., 0.01%) become "Statistically Significant".
- **Decision Matrix:**
  - *P < 0.05 + Large Effect:* **Implement** (Real & Important).
  - *P < 0.05 + Small Effect:* **Evaluate** (Real but Trivial - Is it worth the cost?).
  - *P > 0.05:* **Stop** (Not real).

**3. Error Types**
- **Type I (Alpha):** False Positive.
- **Type II (Beta):** False Negative.
            `,
            recommended_tools_en: ["G*Power", "Effect Size Calculator"],
            python_focus_en: [],
            code_blocks: [
                {
                    id: "code_effect_size",
                    title_en: "Calculating Cohen's d",
                    description_vi: "Tính Effect Size để xem sự khác biệt có ý nghĩa thực tế không.",
                    code_template: `import numpy as np
def cohen_d(x, y):
    diff = np.mean(x) - np.mean(y)
    var_x, var_y = np.var(x, ddof=1), np.var(y, ddof=1)
    n_x, n_y = len(x), len(y)
    pooled_var = ((n_x - 1) * var_x + (n_y - 1) * var_y) / (n_x + n_y - 2)
    d = diff / np.sqrt(pooled_var)
    return d

# Group A (Current), Group B (Improved)
group_a = [10, 12, 11, 13, 12, 11]
group_b = [14, 15, 14, 16, 15, 14]

d_val = cohen_d(group_b, group_a)
print(f"Cohen's d: {d_val:.2f}")

if d_val > 0.8:
    print("-> Large Effect (High Practical Significance)")
elif d_val > 0.5:
    print("-> Medium Effect")
else:
    print("-> Small Effect (Check ROI)")`,
                    expected_output_en: "Cohen's d value and interpretation.",
                    datasets_used: [],
                    learning_points_en: ["Effect Size Calculation", "Practical Significance"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain P-value simply.",
                suggested_questions: ["P-value là xác suất gì?", "Làm sao để tăng Power của kiểm định?"],
                hint_levels: ["Probability of seeing data if H0 is true", "Increase Sample Size", "Reduce Noise"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 13", location_hint_en: "Hypothesis Testing" }
            ],
            flashcards: [
                {
                    id: "fc_hyp_01",
                    question_en: "If P-value < 0.05 but Effect Size is very small (d=0.1), what should you do?",
                    answer_vi: "Re-evaluate ROI (Consider cost vs benefit) before implementing.",
                    tags_en: ["Analyze", "Effect Size"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_hyp_02",
                    question_en: "Which metric tells you 'How big' the difference is?",
                    answer_vi: "Effect Size (e.g., Cohen's d).",
                    tags_en: ["Analyze", "Hypothesis"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 100,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_inferential_01"]
        },
        {
            id: "mod_analyze_means_normal",
            order: 2,
            title_en: "Tests for Means (Normal Data)",
            summary_vi: "So sánh trung bình: 1-Sample t, 2-Sample t, Paired t, và ANOVA.",
            summary_en: "Comparing Means: 1-Sample t, 2-Sample t, Paired t, and ANOVA.",
            key_metrics_en: ["t-statistic", "F-statistic", "Equal Variance"],
            key_points_en: [
                "1-Sample t: Compare Mean against a Target.",
                "2-Sample t: Compare Means of 2 independent groups.",
                "Paired t: Compare 'Before vs After' on same items.",
                "ANOVA: Compare Means of 3+ groups.",
                "Assumption: Data must be Normal. Variances should be equal (check with Levene's Test)."
            ],
            explanation_vi: `
**1. Concept: Signal vs Noise**
Mọi kiểm định (t-test) đều dựa trên một nguyên lý duy nhất:
- **Signal (Tín hiệu):** Sự khác biệt giữa 2 số trung bình (x̄1 - x̄2).
- **Noise (Nhiễu):** Sự biến động nội tại (Độ lệch chuẩn - s).
\`t-stat = Signal / Noise\`
- Nếu **Signal lớn hơn nhiều so với Noise** (t-stat lớn) -> Sự khác biệt là THẬT.
- Nếu **Noise lấn át Signal** (t-stat nhỏ) -> Sự khác biệt chỉ là ngẫu nhiên.

**2. Chọn kiểm định phù hợp:**
- **1-Sample t:** So sánh Mean của 1 nhóm với Chuẩn (Target). (VD: Nhiệt độ lò có đúng 200 độ không?)
- **2-Sample t:** So sánh Mean của 2 nhóm ĐỘC LẬP. (VD: Máy A vs Máy B).
- **Paired t:** So sánh TRƯỚC vs SAU trên CÙNG một đối tượng. (VD: Cân nặng bệnh nhân Trước vs Sau khi uống thuốc).
- **ANOVA (Analysis of Variance):** Mở rộng của t-test cho 3 nhóm trở lên. Tại sao không chạy 3 lần t-test? Vì làm vậy sẽ tăng rủi ro sai sót (Alpha inflation). ANOVA giữ rủi ro tổng thể ở mức 5%.
            
            **3. Hypothesis Testing Roadmap (Bản đồ chọn kiểm định)**
            - **Compare 1 Mean vs Target:** 1-Sample t-test.
            - **Compare 2 Means (Independent):** 2-Sample t-test.
            - **Compare 2 Means (Related):** Paired t-test.
            - **Compare 3+ Means:** one-way ANOVA.
            *Lưu ý:* Nếu dữ liệu không chuẩn, chuyển sang Non-Parametric (Mann-Whitney, Kruskal-Wallis).
            `,
            explanation_en: `
**1. Concept: Signal vs Noise**
Every t-test is based on one principle:
\`t-stat = Signal / Noise\`
- **Signal:** The difference between averages.
- **Noise:** The variation (standard deviation).
- High Signal + Low Noise = **Real Difference**.

**2. Selecting the Right Test:**
- **1-Sample t:** Compare 1 Group vs Target. (Is the oven exactly 200°C?)
- **2-Sample t:** Compare 2 Independent Groups. (Machine A vs Machine B).
- **Paired t:** Compare Before vs After on the SAME item. (Patient weight Before vs After drug).
- **ANOVA (Analysis of Variance):** Compare 3+ Groups. Why not 3 t-tests? Because multiple tests increase the risk of Type I error. ANOVA keeps risk at 5%.

**3. Hypothesis Testing Roadmap**
- 1 Mean vs Target -> **1-Sample t**
- 2 Means (Independent) -> **2-Sample t**
- 2 Means (Related) -> **Paired t**
- 3+ Means -> **One-Way ANOVA**
            `,
            recommended_tools_en: ["2-Sample t-test", "ANOVA"],
            python_focus_en: ["scipy.stats.ttest_ind", "scipy.stats.f_oneway"],
            code_blocks: [
                {
                    id: "code_tests_normal",
                    title_en: "T-Test and ANOVA in Python",
                    context_en: `Situation: You have output data from 3 different machines (A, B, C). Goal: Check if Machine A and B are different (T-test), and if ALL machines are equal (ANOVA).

Math Formula:
• T-statistic = (Means Diff) / Standard Error
• P-value concept: Probability that the difference is just random luck.
  If P < 0.05 -> Difference is Real.`,
                    description_vi: "Đoạn code này thực hiện kiểm định so sánh trung bình:\n\n1. **T-test:** So sánh 2 nhóm A và B. Nếu P-value < 0.05 -> Hai máy chạy ra kết quả khác nhau.\n2. **ANOVA:** So sánh cả 3 nhóm. Nếu P-value < 0.05 -> Có ít nhất một máy khác biệt so với phần còn lại.\n\n*Lưu ý:* Cả hai kiểm định đều giả định dữ liệu phân phối chuẩn.",
                    code_template: `from scipy import stats
import numpy as np

# Data Generation
group_a = [10.1, 10.2, 10.5, 10.8, 9.9]
group_b = [12.1, 12.3, 12.0, 12.5, 11.9]
group_c = [10.3, 10.1, 9.8, 10.5, 10.2]

# 1. Two-Sample T-Test (A vs B)
t_stat, p_val_t = stats.ttest_ind(group_a, group_b)
print(f"T-Test (A vs B) P-value: {p_val_t:.5f}")

if p_val_t < 0.05:
    print("-> A and B are Significantly Different.")

# 2. ANOVA (A vs B vs C)
f_stat, p_val_anova = stats.f_oneway(group_a, group_b, group_c)
print(f"ANOVA (All 3) P-value: {p_val_anova:.5f}")

if p_val_anova < 0.05:
    print("-> At least one group is different.")`,
                    expected_output_en: "P-values for both tests.",
                    datasets_used: [],
                    learning_points_en: ["Stats syntax", "Interpreting low P-values"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain why we can't just compare averages visually.",
                suggested_questions: ["ANOVA khác gì T-test?", "Levene's Test dùng để làm gì?"],
                hint_levels: ["Variation overlaps", "T-test is for 2, ANOVA for 3+", "Check equal variance assumption"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 14", location_hint_en: "Hypothesis Testing Roadmap" }
            ],
            flashcards: [
                {
                    id: "fc_tests_01",
                    question_en: "Which test compares the means of 3 or more independent groups?",
                    answer_vi: "One-Way ANOVA.",
                    tags_en: ["Analyze", "ANOVA"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_analyze_hyp_basics"]
        },
        {
            id: "mod_analyze_non_normal",
            order: 3,
            title_en: "Tests for Non-Normal Data",
            summary_vi: "Kiểm định phi tham số (Non-Parametric) khi dữ liệu không chuẩn: Mann-Whitney, Kruskal-Wallis.",
            summary_en: "Non-Parametric tests for Non-Normal data: Mann-Whitney, Kruskal-Wallis.",
            key_metrics_en: ["Median", "Mood's Median"],
            key_points_en: [
                "Use when Normality Test fails (P < 0.05).",
                "Compares Medians instead of Means.",
                "1-Sample Wilcoxon (Alternative to 1-Sample t).",
                "Mann-Whitney U (Alternative to 2-Sample t).",
                "Kruskal-Wallis (Alternative to ANOVA)."
            ],
            explanation_vi: `
**Khi dữ liệu "xấu" (Không chuẩn):**
Đừng dùng t-test hay ANOVA, kết quả sẽ sai lệch. Hãy dùng phiên bản "Phi tham số" (Non-Parametric):
- Thay vì so sánh Trung bình (Mean), chúng ta so sánh **Trung vị (Median)**.
- **Mann-Whitney U:** Dùng cho 2 nhóm độc lập.
- **Kruskal-Wallis:** Dùng cho 3 nhóm trở lên.
**Mẹo nhớ:** Kruskal-Wallis nghe tên "khủng" giống ANOVA.
            `,
            explanation_en: `
**When Data is "Bad" (Non-Normal):**
Do not use t-test or ANOVA, results will be misleading. Use "Non-Parametric" versions:
- Instead of Means, we compare **Medians**.
- **Mann-Whitney U:** For 2 Independent Groups (Alternative to 2-Sample t).
- **Kruskal-Wallis:** For 3+ Groups (Alternative to ANOVA).
            `,
            recommended_tools_en: ["Mann-Whitney Test", "Kruskal-Wallis Test"],
            python_focus_en: ["scipy.stats.mannwhitneyu", "scipy.stats.kruskal"],
            code_blocks: [
                {
                    id: "code_non_param",
                    title_en: "Running Non-Parametric Tests",
                    context_en: `Situation: Your data has extreme outliers (e.g., Cycle Time usually 2s, but one sample is 50s). Normal tests fail. Goal: Compare the Medians of Group 1 and 2.

Math Formula:
• Mann-Whitney U: Compares the 'Ranks' of data, not the values.
• Logic: If Group A has higher ranks (position) than Group B, it is statistically larger.`,
                    description_vi: "Khi dữ liệu có Outlier (như số 50 và 100 trong ví dụ), T-test sẽ bị sai. Ta dùng kiểm định phi tham số:\n\n1. **Mann-Whitney U:** So sánh hạng (rank) của 2 nhóm thay vì giá trị trung bình. Nó 'miễn nhiễm' với outliers.\n2. **Kruskal-Wallis:** Mở rộng cho 3 nhóm trở lên.\nKết luận dựa vào P-value < 0.05.",
                    code_template: `from scipy import stats

# Non-Normal Data (Skewed)
group_1 = [1, 2, 1, 50, 2, 1] # Outlier 50 makes it non-normal
group_2 = [5, 6, 7, 5, 6, 100]

# 1. Mann-Whitney U (2 Samples)
stat, p_val_mw = stats.mannwhitneyu(group_1, group_2)
print(f"Mann-Whitney P-value: {p_val_mw:.5f}")

# 2. Kruskal-Wallis (3 Samples)
group_3 = [2, 2, 2, 2, 2, 2]
stat, p_val_kw = stats.kruskal(group_1, group_2, group_3)
print(f"Kruskal-Wallis P-value: {p_val_kw:.5f}")`,
                    expected_output_en: "P-values for non-parametric tests.",
                    datasets_used: [],
                    learning_points_en: ["Robustness against outliers", "Median comparison"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Why use Median for non-normal data?",
                suggested_questions: ["Mann-Whitney so sánh cái gì?", "Kruskal-Wallis giống test nào?"],
                hint_levels: ["Mean is sensitive to outliers", "Compares ranks/medians", "ANOVA equivalent"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 14", location_hint_en: "Non-Parametric Tests" }
            ],
            flashcards: [
                {
                    id: "fc_nonparam_01",
                    question_en: "What is the non-parametric equivalent to the One-Way ANOVA?",
                    answer_vi: "Kruskal-Wallis Test.",
                    tags_en: ["Analyze", "Non-Parametric"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_means_normal"]
        },
        {
            id: "mod_analyze_chi_square",
            order: 4,
            title_en: "Chi-Square Tests (Attribute Data)",
            summary_vi: "Kiểm định mối liên hệ giữa các biến định tính (Categorical Data).",
            summary_en: "Testing relationships between categorical variables.",
            key_metrics_en: ["Chi-Square Statistic", "Observed vs Expected", "Contingency Table"],
            key_points_en: [
                "Used for Attribute/Categorical data (Pass/Fail, Red/Blue).",
                "Chi-Square Goodness of Fit: Does the data fit a specific distribution?",
                "Chi-Square Test of Independence: Are two factors related? (e.g., Shift vs Defect Type)."
            ],
            explanation_vi: `
**Dữ liệu định tính (Attribute Data)**
Khi dữ liệu không phải là con số đo lường (cm, kg) mà là đếm (số lỗi, số người đậu/rớt), ta dùng **Chi-Square (χ²)**.
- **Test of Independence:** Có mối liên hệ nào giữa "Ca làm việc" và "Loại lỗi" không? (Hay là lỗi xảy ra ngẫu nhiên ở mọi ca?).
            `,
            explanation_en: `
**Attribute Data**
When data is not a measurement (cm, kg) but a count (Defects/No Defects, Pass/Fail), we use **Chi-Square (χ²)**.
- **Goodness of Fit:** Does my data match a theoretical distribution?
- **Test of Independence:** Is there a relationship between "Shift" (Day/Night) and "Defect Type"? Or are they independent?
            `,
            recommended_tools_en: ["Chi-Square Test"],
            python_focus_en: ["scipy.stats.chisquare", "scipy.stats.chi2_contingency"],
            code_blocks: [
                {
                    id: "code_chi_square",
                    title_en: "Chi-Square Test of Independence",
                    context_en: `Situation: You want to know if 'Shift' (Day/Night) depends on 'Defect Type' (Scratch/Dent). Do night workers make different mistakes?

Math Formula:
• Expected = (RowTotal * ColTotal) / GrandTotal
• Chi-Square = Sum[ (Observed - Expected)² / Expected ]`,
                    description_vi: "Chi-Square kiểm tra mối liên hệ giữa 2 biến định danh:\n\n1. **Contingency Table:** Bảng đếm tần suất (30 vết xước ban ngày, 15 ban đêm...).\n2. **P-value < 0.05:** Có mối liên hệ. (Ví dụ: Ca đêm hay bị móp, Ca ngày hay bị xước).\n3. **P-value >= 0.05:** Độc lập. Lỗi xảy ra ngẫu nhiên, không do ca làm việc.",
                    code_template: `from scipy.stats import chi2_contingency
import pandas as pd

# Creating a Contingency Table
# Rows: Shifts (Day, Night)
# Columns: Defect Type (Scratch, Dent)
data = [[30, 10],  # Day Shift: 30 Scratches, 10 Dents
        [15, 25]]  # Night Shift: 15 Scratches, 25 Dents

# Run Chi-Square
chi2, p, dof, expected = chi2_contingency(data)

print(f"P-value: {p:.5f}")

if p < 0.05:
    print("-> Relationship found! Defect type depends on Shift.")
else:
    print("-> No relationship. Independent.")`,
                    expected_output_en: "P-value indicating dependency.",
                    datasets_used: [],
                    learning_points_en: ["Contingency tables", "Independence check"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Observed vs Expected frequencies.",
                suggested_questions: ["Khi nào dùng Chi-Square?", "Expected value tính thế nào?"],
                hint_levels: ["Categorical data", "Calculated assuming independence", "Counts not measurements"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 14", location_hint_en: "Chi-Square" }
            ],
            flashcards: [
                {
                    id: "fc_chisq_01",
                    question_en: "Which test checks if two categorical variables are independent?",
                    answer_vi: "Chi-Square Test of Independence.",
                    tags_en: ["Analyze", "Chi-Square"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_non_normal"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_analyze_hypothesis_quiz",
            order: 5,
            title_en: "Chapter 5 Quiz: Analyze (Hypothesis) Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 5 (30 câu hỏi).",
            summary_en: "Comprehensive Chapter 5 Quiz (30 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of T-Tests, ANOVA, Non-Parametric Tests, and Chi-Square."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp toàn bộ các phương pháp kiểm định giả thuyết: So sánh trung bình (T-test, ANOVA), kiểm định phi tham số và kiểm định thuộc tính (Chi-Square).",
            explanation_en: "This quiz covers all hypothesis testing methods: Comparing Means (T-test, ANOVA), Non-Parametric tests, and Attribute tests (Chi-Square).",
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
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_analyze_hyp_basics", "mod_analyze_means_normal", "mod_analyze_non_normal", "mod_analyze_chi_square"]
        }
    ]
};
