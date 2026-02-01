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
            title_en: "Hypothesis Testing Basics & Effect Size",
            summary_vi: "Phân biệt Ý nghĩa thống kê (P-value) và Ý nghĩa thực tiễn (Effect Size). Nguyên lý Tòa án và các loại lỗi (Alpha/Beta).",
            summary_en: "Distinguishing Statistical Significance (P-value) from Practical Significance (Effect Size). Courtroom Analogy and Error Types.",
            key_metrics_en: ["P-value", "Alpha/Beta", "Effect Size (Cohen's d)", "Power"],
            key_points_en: [
                "H0 (Null): 'Innocent until proven guilty' (Status Quo).",
                "Ha (Alt): 'Guilty' (Change detected).",
                "P-value < 0.05: Statistically Significant (Evidence against H0).",
                "Effect Size: Measures magnitude ('So What?').",
                "Decision Matrix: P < 0.05 + Large Effect = Action.",
                "Power (1-Beta): Probability of correctly rejecting H0."
            ],
            explanation_vi: `
**1. Nguyên Lý Tòa Án (The Courtroom Analogy)**
Kiểm định giả thuyết giống như một phiên tòa:
- **Null Hypothesis (H0 - Giả thuyết không):** "Vô tội cho đến khi chứng minh được là có tội".
  - *Giả định:* Không có sự khác biệt, Không có thay đổi, Giữ nguyên hiện trạng ($\mu_{new} = \mu_{old}$).
  - *Lưu ý thi:* Chúng ta không bao giờ "chấp nhận" H0; chúng ta chỉ "không thể bác bỏ" nó (fail to reject).
- **Alternative Hypothesis (Ha/H1 - Giả thuyết đối):** "Có tội".
  - *Tuyên bố:* CÓ sự khác biệt hoặc thay đổi. ($\mu_{new} \neq \mu_{old}$).
  - Đây là điều nhóm dự án muốn chứng minh (Việc cải tiến có hiệu quả).

━━━━━━

**2. P-value vs. Effect Size**
Đây là sự khác biệt giữa "Ý nghĩa Thống kê" và "Ý nghĩa Thực tiễn":
- **P-value (Statistical Significance):** Xác suất quan sát dữ liệu NẾU H0 đúng.
  - *Quy tắc:* "If P is low, the Null must go" (Thường P < 0.05).
  - *Hạn chế:* Với mẫu cực lớn (Huge Sample Size), một khác biệt cực nhỏ (VD: 0.001 micron) cũng có thể có P < 0.05.
- **Effect Size (Practical Significance):** Đo lường độ lớn của sự khác biệt. "So what?" (Có quan trọng không?).
  - *Thước đo:* Cohen’s d.
    - $d = 0.2$ (Nhỏ), $d = 0.5$ (Trung bình), $d = 0.8$ (Lớn).

**Decision Matrix (Ma trận Quyết định):**
- **P < 0.05 + Large Effect:** Hành động ngay! (Khác biệt thật và quan trọng).
- **P < 0.05 + Tiny Effect:** Cảnh báo. (Có ý nghĩa thống kê nhưng vô nghĩa thực tế. Đừng tốn tiền sửa).
- **P > 0.05:** Dừng lại. (Không có bằng chứng khác biệt).

━━━━━━

**3. Các Loại Lỗi & Độ Mạnh (Errors & Power)**
Vì dùng dữ liệu mẫu, chúng ta luôn phải chấp nhận rủi ro:

| Error Type | Symbol | Definition | Analogy | Risk Name |
|---|---|---|---|---|
| **Type I** | $\alpha$ (Alpha) | Reject H0 when True (False Positive) | Kết án người vô tội | Producer's Risk |
| **Type II** | $\beta$ (Beta) | Fail to reject H0 when False (False Negative) | Thả tội phạm | Consumer's Risk |

- **Power (1 - $\beta$):** Xác suất tìm ra sự khác biệt ĐÚNG (Correctly rejecting H0).
- **Mục tiêu:** Power > 0.80 (80%).
- **3 Cách tăng Power:**
  1. Tăng cỡ mẫu (**n**) -> Cách phổ biến nhất.
  2. Tăng sự khác biệt muốn tìm (Delta/Signal).
  3. Tăng Alpha (Chấp nhận rủi ro Type I cao hơn).
            `,
            explanation_en: `
**1. The Courtroom Analogy**
Hypothesis testing places the process on trial.
- **Null Hypothesis (H0):** "Innocent until proven guilty." (Status Quo, No Difference).
- **Alternative Hypothesis (Ha or H1):** "Guilty." (Change Exists). Use this to prove improvement.

**2. P-value vs. Effect Size**
Distinguishing Statistical from Practical significance:
- **P-value (Statistical):** Probability of the evidence given H0 is true.
  - *Rule:* "If P is low, the Null must go."
  - *Warning:* With large samples, tiny differences can be significant.
- **Effect Size (Practical):** Measures the magnitude ("So what?").
  - *Metric:* Cohen’s d ($d=0.2$ Small, $d=0.5$ Medium, $d=0.8$ Large).

**Decision Matrix:**
- **P < 0.05 + Large Effect:** **Action!** (Real and Important).
- **P < 0.05 + Tiny Effect:** **Warning.** (Statistically significant but practically useless).
- **P > 0.05:** **Stop.** (No evidence).

**3. Errors & Power**
| Error | Symbol | Definition | Analogy | Risk |
|---|---|---|---|---|
| **Type I** | $\alpha$ | False Positive | Convict Innocent | Producer's Risk |
| **Type II** | $\beta$ | False Negative | Free Guilty | Consumer's Risk |

- **Power (1 - $\beta$):** Probability of finding a real difference. Goal > 0.80.
- **To Increase Power:** Increase Sample Size ($n$), Increase Delta, or Increase Alpha.
            `,
            recommended_tools_en: ["G*Power", "Effect Size Calculator"],
            python_focus_en: [],
            code_blocks: [
                {
                    id: "code_effect_size",
                    title_en: "Calculating Cohen's d & Power",
                    description_vi: "Đoạn code này tính Cohen's d (Effect Size) và gợi ý về Power.",
                    code_template: `import numpy as np

def cohen_d(group1, group2):
    # Calculate the size of samples
    n1, n2 = len(group1), len(group2)
    
    # Calculate the variance of the samples
    s1, s2 = np.var(group1, ddof=1), np.var(group2, ddof=1)
    
    # Calculate the pooled standard deviation
    s_pooled = np.sqrt(((n1 - 1) * s1 + (n2 - 1) * s2) / (n1 + n2 - 2))
    
    # Calculate the means of the samples
    u1, u2 = np.mean(group1), np.mean(group2)
    
    # Calculate the effect size
    return (u1 - u2) / s_pooled

# Example: Process Improvement (Before vs After)
before = [10, 12, 11, 13, 12, 11, 10, 12]
after =  [14, 15, 14, 16, 15, 14, 15, 14]

d = cohen_d(after, before)
print(f"Cohen's d: {d:.2f}")

if d > 0.8:
    print("-> Large Effect Size! (Practical Significance is High)")
    print("-> If P-value is also < 0.05, implement this change immediately.")
elif d < 0.2:
    print("-> Small Effect Size. (Is it worth the cost?)")`,
                    expected_output_en: "Cohen's d > 0.8 indicates a large shift.",
                    datasets_used: [],
                    learning_points_en: ["Cohen's d formula", "Interpreting Effect Size"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the relationship between Sample Size and Power.",
                suggested_questions: [
                    { question_vi: "Tại sao mẫu lớn lại dễ có P-value nhỏ?", question_en: "Why do large samples lead to low P-values?" },
                    { question_vi: "Producer's Risk là gì?", question_en: "What is Producer's Risk?" },
                    { question_vi: "Làm sao để tăng Power?", question_en: "How to increase Power?" }
                ],
                hint_levels: ["Standard Error decreases", "Type I Error (Alpha)", "Increase N or Delta"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 13", location_hint_en: "Hypothesis Testing" }
            ],
            flashcards: [
                {
                    id: "fc_hyp_01",
                    question_en: "What implies a Type II Error (Beta)?",
                    answer_vi: "Failing to reject H0 when it is actually False (False Negative). Letting a guilty person go free.",
                    tags_en: ["Analyze", "Errors"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_hyp_02",
                    question_en: "If P-value < 0.05 but Effect Size is tiny, what is the conclusion?",
                    answer_vi: "Statistically Significant but NOT Practically Significant. (Warning).",
                    tags_en: ["Analyze", "Decision Matrix"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_hyp_03",
                    question_en: "What are the 3 ways to increase Power?",
                    answer_vi: "1. Increase Sample Size (n), 2. Increase Effect Size (Delta), 3. Increase Alpha.",
                    tags_en: ["Analyze", "Power"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_regression_01"]
        },
        {
            id: "mod_analyze_means_normal",
            order: 2,
            title_en: "Tests for Means (Normal Data)",
            summary_vi: "So sánh trung bình bằng kiểm định tham số (t-test, ANOVA). Giả định dữ liệu chuẩn.",
            summary_en: "Comparing averages using Parametric tests (t-test, ANOVA). Assumes Normal Data.",
            key_metrics_en: ["t-statistic (Signal/Noise)", "F-statistic", "P-value", "Variance"],
            key_points_en: [
                "Signal-to-Noise: t = Difference / Variation.",
                "Prerequisites: Normality & Equal Variance.",
                "1-Sample t: Compare against Target.",
                "2-Sample t: Compare 2 Independent Groups.",
                "Paired t: Compare Before/After (Dependent).",
                "ANOVA: Compare 3+ Groups (Use Tukey for details)."
            ],
            explanation_vi: `
**1. Nguyên Lý Tỷ Số "Signal to Noise"**
Tất cả các kiểm định t-test đều dựa trên t-statistic, hoạt động như một tỷ số tín hiệu trên nhiễu:
- $$ t = \\frac{\\text{Signal}}{\\text{Noise}} = \\frac{\\text{Difference in Means}}{\\text{Variation (Standard Error)}} $$
- **Signal (Tín hiệu):** Khoảng cách giữa các giá trị trung bình (Cái chúng ta muốn thấy).
- **Noise (Nhiễu):** Độ tản mạn trong các nhóm (Cái che mờ sự thật).
- **Quy tắc:** Điểm t cao (thường > 2) nghĩa là Tín hiệu đủ mạnh để vượt qua Nhiễu -> P-value thấp (Có sự khác biệt).

━━━━━━

**2. Điều Kiện Tiên Quyết (Prerequisites)**
Trước khi chạy các test này, bạn phải kiểm tra 2 giả định:
1. **Normality (Tính chuẩn):** Dữ liệu phải phân phối chuẩn (Anderson-Darling P > 0.05).
2. **Homogeneity of Variance (Phương sai đồng nhất):** Độ tản mạn của các nhóm phải tương đương nhau.
   - **Bartlett's Test:** Dùng khi dữ liệu Chuẩn.
   - **Levene's Test:** Dùng khi dữ liệu Không Chuẩn.

━━━━━━

**3. Hướng Dẫn Chọn Test (Test Selection Guide)**
*Ghi nhớ:*
- **1-Sample t-test:** So sánh 1 nhóm với **Target** (Chuẩn/Mục tiêu).
  - *VD:* Trọng lượng trung bình chai nước có đúng bằng 500ml không? ($H_0: \\mu = Target$).
- **2-Sample t-test (Independent):** So sánh trung bình của **2 nhóm Độc lập**.
  - *VD:* Thời gian chạy máy A vs Máy B.
  - *Lưu ý:* Phải chọn "Assume Equal Variances" hay không dựa trên kết quả test phương sai (Bartlett/Levene).
- **Paired t-test (Dependent):** So sánh 2 điểm dữ liệu **Liên quan** (Thường là Trước/Sau trên CÙNG một vật thể).
  - *VD:* Cân nặng 10 người Trước và Sau khi ăn kiêng.
  - *Sức mạnh:* Mạnh hơn 2-Sample t-test vì nó loại bỏ được biến động giữa các cá thể.
- **One-Way ANOVA:** So sánh trung bình **3 nhóm trở lên**.
  - $H_0: \\mu_1 = \\mu_2 = \\mu_3 = ...$ (Tất cả bằng nhau).
  - *Tại sao không chạy nhiều lần t-test?* Vì sẽ làm tăng rủi ro Alpha (Type I Error). ANOVA giữ rủi ro ở mức 5%.
  - **Post-Hoc Test:** Nếu ANOVA P < 0.05, chạy **Tukey Test** để tìm cặp nào khác biệt.

━━━━━━

**Key Takeaways:**
- **Paired vs 2-Sample:** Nếu bạn không thể tráo đổi dữ liệu giữa 2 nhóm mà không mất ý nghĩa (VD: Trước/Sau), thì dùng **Paired t**.
- **ANOVA:** Chỉ cho biết "Có sự khác biệt", không chỉ rõ ở đâu. Phải dùng **Tukey**.
            `,
            explanation_en: `
**1. The "Signal to Noise" Ratio**
All t-tests rely on the t-statistic:
- $$ t = \\frac{\\text{Signal}}{\\text{Noise}} = \\frac{\\text{Difference (Means)}}{\\text{Variation (SE)}} $$
- **Signal:** The gap between averages.
- **Noise:** The scatter/deviation.
- **Rule:** High t-score (> 2) -> Signal implies Real Difference (Significant).

**2. Prerequisites**
1. **Normality:** Anderson-Darling P > 0.05.
2. **Homogeneity of Variance:** Equal spread.
   - **Bartlett's:** For Normal Data.
   - **Levene's:** For Non-Normal Data.

**3. Test Selection Guide (Memorize This)**
- **1-Sample t-test:** Compare 1 Group vs **Target**.
  - *Hypothesis:* $H_0: \\mu = Target$.
- **2-Sample t-test (Independent):** Compare **2 Independent Groups** (e.g., Machine A vs B).
- **Paired t-test (Dependent):** Compare **Related Data** (Before/After on same unit).
  - *Power:* Removing individual variation makes this more powerful than 2-Sample t.
- **One-Way ANOVA:** Compare **3+ Groups**.
  - *Why ANOVA?* Prevents Alpha Risk inflation (keeps error rate at 5%).
  - *Post-Hoc:* Use **Tukey** to find the specific winner if P < 0.05.
            `,
            recommended_tools_en: ["2-Sample t-test", "ANOVA", "Levene's Test"],
            python_focus_en: ["scipy.stats.ttest_ind", "scipy.stats.f_oneway", "scipy.stats.levene"],
            code_blocks: [
                {
                    id: "code_tests_normal",
                    title_en: "T-Test & ANOVA Showcase",
                    context_en: `Situation: Manufacturing data from 3 machines.
1. Are variances equal? (Levene)
2. Is Machine A different from Machine B? (T-test)
3. Are there differences among A, B, and C? (ANOVA)`,
                    description_vi: "Đoạn code minh họa quy trình chuẩn: Kiểm tra phương sai (Levene) -> Chạy T-test (cho 2 nhóm) -> Chạy ANOVA (cho 3 nhóm).",
                    code_template: `from scipy import stats
import numpy as np

# Data: Cycle Times (seconds)
machine_a = [10.1, 10.2, 10.5, 10.8, 9.9]
machine_b = [12.1, 12.3, 12.0, 12.5, 11.9]
machine_c = [10.3, 10.1, 9.8, 10.5, 10.2]

# 1. Variance Check (Levene's Test) - Check Homogeneity
stat, p_var = stats.levene(machine_a, machine_b, machine_c)
print(f"Levene Variance P-value: {p_var:.4f}")
if p_var > 0.05:
    print("-> Variances are Equal (Proceed with standard tests)")
else:
    print("-> Variances are Different (Use Welch's t-test)")

# 2. Two-Sample T-Test (A vs B)
# We assume equal variance based on check above
t_stat, p_val_t = stats.ttest_ind(machine_a, machine_b, equal_var=(p_var>0.05))
print(f"\\nT-Test (A vs B) P-value: {p_val_t:.5e}")

if p_val_t < 0.05:
    print("-> A and B are Significantly Different.")

# 3. ANOVA (A vs B vs C)
f_stat, p_val_anova = stats.f_oneway(machine_a, machine_b, machine_c)
print(f"\\nANOVA (All 3) P-value: {p_val_anova:.5e}")

if p_val_anova < 0.05:
    print("-> At least one group is different (Run Tukey next!)")`,
                    expected_output_en: "Levene P > 0.05, Significant differences in T-test and ANOVA.",
                    datasets_used: [],
                    learning_points_en: ["Testing Assumptions first", "Selecting correct parameters"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain why we can't just compare averages visually.",
                suggested_questions: [
                    { question_vi: "ANOVA khác gì T-test?", question_en: "How is ANOVA different from T-test?" },
                    { question_vi: "Levene's Test dùng để làm gì?", question_en: "What is Levene's Test used for?" }
                ],
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
                },
                {
                    id: "fc_tests_02",
                    question_en: "Which test has more Power: Paired t-test or 2-Sample t-test?",
                    answer_vi: "Paired t-test (because it removes variation between individuals).",
                    tags_en: ["Analyze", "T-Test"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_tests_03",
                    question_en: "If Levene's Test P-value < 0.05, what does it mean?",
                    answer_vi: "Variances are different (Not Equal). Cannot generally use standard ANOVA.",
                    tags_en: ["Analyze", "Variance"],
                    difficulty_en: "Hard",
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
            title_en: "Advanced Non-Parametric Tests",
            summary_vi: "Cơ chế Xếp hạng (Ranking) để xử lý dữ liệu 'xấu'. Giới thiệu Mood's Median và Friedman Test.",
            summary_en: "The Ranking Mechanism for skewed data. Introducing Mood's Median and Friedman Tests.",
            key_metrics_en: ["Median", "H-statistic (Kruskal)", "S-statistic (Friedman)"],
            key_points_en: [
                "Ranking Mechanism: Converts Raw Values to Ranks to neutralize outliers.",
                "Mood's Median: The 'Heavy Armor' for extreme outliers.",
                "Friedman Test: For 3+ Paired/Related groups.",
                "Power Loss: Parametric tests are always preferred if data allows."
            ],
            explanation_vi: `
**1. Cơ Chế "Ranking" (Xếp Hạng)**
Tại sao Non-Parametric được gọi là "Distribution-free" (Phi tham số)? Vì nó không quan tâm đến giá trị thô (vốn bị nhiễu bởi outlier) mà chỉ quan tâm đến **Thứ hạng (Rank)**.
- **Cách hoạt động:** Nếu bạn có dữ liệu {5, 100, 6, 7}.
  - T-test nhìn thấy "100" và bị lệch trung bình.
  - Non-Parametric chuyển thành Rank: {1, 4, 2, 3}. Outlier "100" chỉ đơn giản là "Rank 4", mất đi sự cực đoan của nó.
- **Đánh đổi (Trade-off):** Bạn mất "Power" (độ nhạy) vì đã vứt bỏ độ lớn thực tế của dữ liệu. Chỉ dùng khi Normality Test fail (P < 0.05).

━━━━━━

**2. Các Test Nâng Cao (Exam-Specific)**
Ngoài Mann-Whitney và Kruskal-Wallis, bạn cần biết 2 món "đặc sản" này:
- **Mood’s Median Test:**
  - *Dùng khi:* Dữ liệu cực kỳ xấu, nhiều outlier mà ngay cả Kruskal-Wallis cũng không chịu nổi. Hoặc khi các nhóm có hình dạng phân phối quá khác nhau.
  - *Cơ chế:* So sánh số lượng điểm dữ liệu nằm trên/dưới mức Median chung. Rất lì đòn (Robust).
- **Friedman Test:**
  - *Dùng khi:* Có 3 nhóm trở lên nhưng là dữ liệu **CẶP/LIÊN QUAN** (Paired/Related).
  - *Ví dụ:* 3 bác sĩ cùng đánh giá trên 1 bộ hồ sơ bệnh án (Repeated Measures).
  - *Analogy:* Đây là em họ của "Repeated Measures ANOVA".

━━━━━━

**3. Test Selection Summary (Bảng Tổng Hợp)**

| Scenario | Normal (Parametric) | Non-Normal (Non-Parametric) |
|---|---|---|
| **2 Independent Groups** | 2-Sample t-test | Mann-Whitney U |
| **2 Paired Groups** | Paired t-test | 1-Sample Wilcoxon |
| **3+ Independent** | One-Way ANOVA | Kruskal-Wallis |
| **3+ Indep (Extreme)** | (None) | **Mood's Median** |
| **3+ Paired Groups** | Repeated Measures ANOVA | **Friedman Test** |

*Ghi nhớ:*
- **Power:** Luôn ưu tiên Parametric (t-test/ANOVA) nếu dữ liệu cho phép, vì Non-Parametric dễ bị Type II Error (Bỏ sót sự khác biệt).
            `,
            explanation_en: `
**1. The "Ranking" Mechanism**
Why are these tests "distribution-free"? Because they rank data to ignore distribution shape.
- **Mechanism:** Values {5, 100, 6, 7} become Ranks {1, 4, 2, 3}. The outlier "100" is treated as Rank 4, statistically neutralizing it.
- **Trade-off:** Lower Power. Only use if Normality fails.

**2. Advanced Non-Parametric Tests**
- **Mood’s Median Test:**
  - *Use When:* Extreme outliers exists that break Kruskal-Wallis.
  - *Mechanism:* Extremely robust comparison of counts above/below global median.
- **Friedman Test:**
  - *Use When:* 3+ **Related/Paired** groups. (e.g., 3 Judges rating the same contestants).
  - *Analogy:* Non-parametric version of Repeated Measures ANOVA.

**3. Test Selection Matrix**

| Scenario | Parametric | Non-Parametric |
|---|---|---|
| **2 Independent** | 2-Sample t-test | Mann-Whitney U |
| **2 Paired** | Paired t-test | 1-Sample Wilcoxon |
| **3+ Independent** | One-Way ANOVA | Kruskal-Wallis |
| **3+ Indep (Extreme)** | - | **Mood's Median** |
| **3+ Paired** | Rep. Measures ANOVA | **Friedman Test** |
            `,
            recommended_tools_en: ["Friedman Test", "Mood's Median Test"],
            python_focus_en: ["scipy.stats.friedmanchisquare", "scipy.stats.median_test"],
            code_blocks: [
                {
                    id: "code_non_param_advanced",
                    title_en: "Friedman and Mood's Median Tests",
                    context_en: `Situation 1: 3 Judges rate the same 5 contestants (Friedman).
Situation 2: Data has extreme outliers comparing 2 groups (Mood's Median).`,
                    description_vi: "Đoạn code này minh họa 2 kiểm định nâng cao:\n\n1. **Friedman Test:** Dùng cho 3 nhóm liên quan (VD: Đánh giá của 3 giám khảo).\n2. **Mood's Median:** Dùng cho dữ liệu có Outlier cực đoan (200 vs 5, 6).",
                    code_template: `from scipy import stats
import numpy as np

# 1. Friedman Test (3 Paired Groups)
# e.g., 3 Judges rating 5 items
judge_A = [8, 9, 7, 8, 9]
judge_B = [5, 6, 5, 5, 6] # Harsh judge
judge_C = [7, 8, 6, 7, 8]

stat, p_friedman = stats.friedmanchisquare(judge_A, judge_B, judge_C)
print(f"Friedman P-value: {p_friedman:.5f}")

if p_friedman < 0.05:
    print("-> Judges are rating differently (Significant).")

# 2. Mood's Median Test (Extreme Outliers)
# Group 1 has an extreme outlier (200)
group_1 = [1, 2, 3, 200, 2] 
group_2 = [10, 12, 11, 13, 12]

stat, p_mood, med, tbl = stats.median_test(group_1, group_2)
print(f"\\nMood's Median P-value: {p_mood:.5f}")

if p_mood < 0.05:
    print("-> Medians are statistically different.")
else:
    print("-> No difference in medians.")`,
                    expected_output_en: "Friedman P < 0.05 (Judges differ), Mood's P < 0.05 (Medians differ).",
                    datasets_used: [],
                    learning_points_en: ["Handling Paired Non-normal Data", "Resilience to Outliers"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain why Ranking reduces Power.",
                suggested_questions: [
                    { question_vi: "Friedman Test khác gì Kruskal-Wallis?", question_en: "Friedman vs Kruskal-Wallis?" },
                    { question_vi: "Khi nào buộc phải dùng Mood's Median?", question_en: "When must Mood's Median be used?" }
                ],
                hint_levels: ["Friedman is for Paired data", "Mood's is for shapes/extreme outliers", "Ranking discards magnitude"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 14", location_hint_en: "Non-Parametric Tests" }
            ],
            flashcards: [
                {
                    id: "fc_nonparam_01",
                    question_en: "What is the Non-Parametric equivalent of Recursive Measures ANOVA (3+ Paired)?",
                    answer_vi: "Friedman Test.",
                    tags_en: ["Analyze", "Non-Parametric"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_nonparam_02",
                    question_en: "Why is Parametric preferred over Non-Parametric?",
                    answer_vi: "Parametric tests have higher Power (less likely to miss a real difference).",
                    tags_en: ["Analyze", "Power"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_nonparam_03",
                    question_en: "Which test is robust against the most extreme outliers?",
                    answer_vi: "Mood's Median Test.",
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
            summary_vi: "Kiểm định sữ liệu định tính: Goodness-of-Fit và Independence. Tính tần suất kỳ vọng (Expected Frequency).",
            summary_en: "Testing Attribute Data: Goodness-of-Fit and Independence. Calculating Expected Frequency.",
            key_metrics_en: ["Chi-Square Statistic", "P-value", "Expected Frequency (E)", "Degrees of Freedom"],
            key_points_en: [
                "Logic: Compare Observed (O) vs Expected (E).",
                "Formula: Chi-Square = Sum((O-E)^2 / E).",
                "Goodness-of-Fit: Does data match a distribution?",
                "Test of Independence: Are A and B related?",
                "Assumption: E >= 5 in every cell."
            ],
            explanation_vi: `
**1. Logic: Observed vs. Expected**
Chi-Square so sánh những gì bạn **Quan sát được (Observed)** với những gì bạn **Kỳ vọng (Expected)** nếu mọi thứ hoàn toàn ngẫu nhiên.
- **Công thức:** $$ \\chi^2 = \\sum \\frac{(Observed - Expected)^2}{Expected} $$
- Nếu $\\chi^2$ lớn -> Khác biệt lớn giữa O và E -> P-value thấp -> Reject H0.

━━━━━━

**2. Hai Loại Chi-Square Tests**
1. **Goodness-of-Fit (Kiểm định sự phù hợp):**
   - *Câu hỏi:* Dữ liệu của tôi có tuân theo phân phối X không? (VD: Xúc xắc có công bằng không? Dữ liệu có theo Poisson không?).
2. **Test of Independence (Kiểm định tính độc lập):**
   - *Câu hỏi:* Hai biến định danh (Factors) có liên quan nhau không?
   - *H0:* Hai biến Độc lập (Không liên quan).
   - *Ha:* Hai biến Phụ thuộc (Có liên quan).
   - *Ví dụ:* "Loại Lỗi" (Xước/Móp) có phụ thuộc vào "Ca Làm Việc" (Sáng/Tối) không?

━━━━━━

**3. Cách Tính Tần Suất Kỳ Vọng (Expected Frequency)**
Trong bài thi, bạn có thể phải tính tay giá trị kỳ vọng (E) cho 1 ô cụ thể trong bảng Contingency.
- **Công thức:**
  $$ E = \\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}} $$
- *Ví dụ:* Nếu Hàng Tổng = 50, Cột Tổng = 20, Tổng Toàn Bộ = 100.
  -> $E = (50 * 20) / 100 = 10$.

━━━━━━

**4. Điều Kiện Tiên Quyết (Assumptions)**
1. **Discrete Data:** Dữ liệu phải là số đếm (Counts), không phải số đo hay phần trăm.
2. **Sufficient Data:** Giá trị kỳ vọng (E) trong mỗi ô phải **>= 5**. Nếu E < 5, kết quả không đáng tin cậy (Cần gộp nhóm lại).

**Lưu ý:** Chi-Square chỉ cho biết "Có sự khác biệt", nhưng không chỉ rõ ô nào gây ra sự khác biệt. Bạn phải nhìn vào **Residuals** (Phần dư) để biết.
            `,
            explanation_en: `
**1. The Logic: Observed vs. Expected**
Compares Actual Data (Observed) against Random Chance (Expected).
- **Formula:** $$ \\chi^2 = \\sum \\frac{(O - E)^2}{E} $$
- Large $\\chi^2$ -> Large difference -> Low P-value -> Relationship exists.

**2. Two Types of Tests**
1. **Goodness-of-Fit:** Does data fit a shape? (e.g., Is the die fair? 1/6 chance per side).
2. **Test of Independence:** Are Factor A and Factor B related?
   - *H0:* Independent (No relationship).
   - *Ha:* Dependent (Related).

**3. Calculating Expected Frequency (Exam Formula)**
For a specific cell in a Contingency Table:
- $$ E = \\frac{\\text{Row Total} \\times \\text{Column Total}}{\\text{Grand Total}} $$
- *Rule:* If Expected Value < 5, the test is invalid.

**4. Key Metrics**
- **Calculated Chi-Square:** The test statistic.
- **P-value:** < 0.05 means Factors are Dependent.
- **Degrees of Freedom (df):** $(Rows - 1) \\times (Cols - 1)$.
            `,
            recommended_tools_en: ["Chi-Square Test", "Contingency Table"],
            python_focus_en: ["scipy.stats.chi2_contingency"],
            code_blocks: [
                {
                    id: "code_chi_square",
                    title_en: "Chi-Square Test of Independence",
                    context_en: `Situation: Investigating if 'Defect Type' depends on the 'Shift'.
Data:
- Day Shift: 30 Scratches, 10 Dents.
- Night Shift: 15 Scratches, 25 Dents.
Goal: Is there a significant pattern?`,
                    description_vi: "Đoạn code chạy kiểm định Chi-Square Independence. Scipy sẽ tự động tính Expected Frequencies và so sánh với Observed Data.",
                    code_template: `from scipy.stats import chi2_contingency
import pandas as pd

# Contingency Table
#           Scratch   Dent
# Day         30       10
# Night       15       25
obs = [[30, 10], 
       [15, 25]]

# Run Test
stat, p, dof, expected = chi2_contingency(obs)

print(f"P-value: {p:.5f}")
print("Expected Frequencies:\\n", expected)

if p < 0.05:
    print("-> Dependent: Shift affects Defect Type.")
else:
    print("-> Independent: No relationship.")`,
                    expected_output_en: "P < 0.05 (Dependent), showing Shift matters.",
                    datasets_used: [],
                    learning_points_en: ["Interpreting Chi-Square P-value", "Checking Expected values >= 5"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain why Expected Value must be >= 5.",
                suggested_questions: [
                    { question_vi: "Expected Value tính như thế nào?", question_en: " How to calculate Expected Value?" },
                    { question_vi: "Chi-Square khác gì ANOVA?", question_en: "Chi-Square vs ANOVA?" }
                ],
                hint_levels: ["Row*Col/Grand Total", "ANOVA is for Means (Numbers), Chi-Square is for Counts (Categories)", "Small E makes math unstable"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 14", location_hint_en: "Chi-Square" }
            ],
            flashcards: [
                {
                    id: "fc_chisq_01",
                    question_en: "What is the minimum Expected Frequency required for a valid Chi-Square test?",
                    answer_vi: "5.",
                    tags_en: ["Analyze", "Chi-Square", "Assumptions"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_chisq_02",
                    question_en: "If P-value < 0.05 in a Test of Independence, what is the conclusion?",
                    answer_vi: "The variables are Dependent (Related).",
                    tags_en: ["Analyze", "Chi-Square"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_chisq_03",
                    question_en: "Formula for Degrees of Freedom in a Contingency Table?",
                    answer_vi: "(Rows - 1) * (Columns - 1).",
                    tags_en: ["Analyze", "Chi-Square"],
                    difficulty_en: "Hard",
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
