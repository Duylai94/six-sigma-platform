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
            summary_vi: "Phân tích nguồn gốc biến động: Vị trí (Positional), Chu kỳ (Cyclical), Thời gian (Temporal).",
            summary_en: "Source of Variation: Positional, Cyclical, and Temporal.",
            key_metrics_en: ["Positional", "Cyclical", "Temporal", "Within-Piece", "Piece-to-Piece", "Time-to-Time"],
            key_points_en: [
                "Positional (Within-Piece): Variation within a single unit (e.g., thickness on left vs right).",
                "Cyclical (Piece-to-Piece): Variation between consecutive units.",
                "Temporal (Time-to-Time): Variation over shifts, days, or weeks.",
                "Multi-Vari Chart: Vertical lines represent range within a piece, connect means to see trends."
            ],
            explanation_vi: `
**Multi-Vari Analysis**
Công cụ này như "Sherlock Holmes" của Six Sigma. Nó giúp khoanh vùng nghi phạm gây ra biến động.
1. **Positional (Vị trí - Within Piece):** Lỗi nằm ở đâu trên sản phẩm? (Trái vs Phải, Trên vs Dưới).
2. **Cyclical (Chu kỳ - Piece to Piece):** Sự khác biệt giữa các sản phẩm liên tiếp. (Sản phẩm 1 vs Sản phẩm 2).
3. **Temporal (Thời gian - Time to Time):** Sự khác biệt theo giờ, theo ca, theo ngày.
*Ví dụ:* Nếu biến động chủ yếu là 'Temporal' (Ca sáng tốt, Ca chiều xấu) -> Hãy kiểm tra tay nghề nhân viên hoặc nhiệt độ môi trường.
            `,
            explanation_en: `
**Multi-Vari Analysis**
A tool to visually pinpoint the source of variation. It reduces the number of possible inputs (x's) to a manageable few.
1. **Positional (Within Piece):** Variation within a single unit (e.g., Top vs Bottom, Left vs Right).
2. **Cyclical (Piece to Piece):** Variation between consecutive units. (e.g., Batch to Batch).
3. **Temporal (Time to Time):** Variation over time (e.g., Shift A vs Shift B, Day vs Night).
            `,
            recommended_tools_en: ["Multi-Vari Chart"],
            python_focus_en: ["Data Visualization"],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the three families of variation in Multi-Vari.",
                suggested_questions: ["Biến động trong một sản phẩm (Within-piece) là gì?", "Làm sao vẽ Multi-Vari Chart?"],
                hint_levels: ["Left vs Right side", "Consecutive pieces", "Shift to Shift"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Analyze", location_hint_en: "Patterns of Variation" }
            ],
            flashcards: [
                {
                    id: "fc_analyze_multi_01",
                    question_en: "Variation observed between the morning shift and the night shift is an example of:",
                    answer_vi: "Temporal Variation (Time-to-Time).",
                    tags_en: ["Analyze", "Multi-Vari"],
                    difficulty_en: "Medium",
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
                suggested_questions: ["Tại sao cần n >= 30?", "Khi nào dùng Mann-Whitney?"],
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
                suggested_questions: ["VIF là gì?", "Tại sao Residual phải ngẫu nhiên?"],
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
