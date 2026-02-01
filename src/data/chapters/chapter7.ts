import { Chapter, Module } from "../../types/course";

export const chapterImprove: Chapter = {
    id: "ch_improve",
    order: 7,
    title_en: "Improve Phase - Solutions & DOE",
    goal_vi: "Phát triển, lựa chọn và tối ưu hóa giải pháp chốt hạ (Final Solution).",
    goal_en: "Develop, select, and optimize the Final Solution.",
    iassc_topics_en: [
        "4.1 Solution Selection / Paugh Matrix",
        "4.2 Design of Experiments (DOE)",
        "4.3 Pilot Implementation"
    ],
    modules: [
        {
            id: "mod_improve_solutions_01",
            order: 1,
            title_en: "Brainstorming & Pugh Matrix",
            summary_vi: "Sáng tạo giải pháp và lựa chọn khách quan bằng Ma trận Pugh.",
            summary_en: "Generating solutions and selecting objectively using Pugh Matrix.",
            key_metrics_en: ["Baseline", "Weighted Score", "Criteria"],
            key_points_en: [
                "Brainstorming rules: No criticism, Quantity over Quality, Build on ideas.",
                "Pugh Matrix: Comparison tool against a Baseline (Current State).",
                "Scoring: Better (+), Same (S), Worse (-).",
                "Combine strong features of different concepts into a Hybrid Solution."
            ],
            explanation_vi: `
**1. Brainstorming (Động não)**
Giai đoạn này cần sự tự do. Đừng vội đánh giá "Ý tưởng này ngu ngốc". Đôi khi ý tưởng điên rồ nhất lại dẫn đến giải pháp đột phá.

**2. Pugh Matrix (Ma trận quyết định)**
Làm sao chọn giữa: Mua máy mới (Đắt, Nhanh) vs Thuê thêm người (Rẻ, Chậm)?
- Bước 1: Chọn tiêu chí (Cost, Time, Safety).
- Bước 2: Chọn Baseline (Hiện tại đang làm thế nào).
- Bước 3: So sánh từng giải pháp với Baseline (+, -, S).
Phương pháp này giúp loại bỏ cảm tính (Em thích phương án A vì em thân với sếp A).
            `,
            explanation_en: `
**1. Brainstorming**
Freedom is key here. Do not judge early. Sometimes the craziest idea leads to the breakthrough.

**2. Pugh Matrix (Decision Matrix)**
How to choose between: New Machine (Fast but Expensive) vs Hire More People (Cheap but Slow)?
- Step 1: Select Criteria (Cost, Time, Safety).
- Step 2: Select Baseline (Current Standard).
- Step 3: Compare each solution against Baseline (+, -, S).
- **Goal:** Remove bias and subjectivity from decision making.
            `,
            recommended_tools_en: ["Pugh Matrix", "Six Thinking Hats"],
            python_focus_en: ["Ranking Logic"],
            code_blocks: [
                {
                    id: "code_pugh_ranking",
                    title_en: "Simple Pugh Matrix Calculation",
                    context_en: `Situation: You need to choose a new supplier. Vendor A is Cheap but Slow. Vendor B is Fast but Expensive. Current Vendor is Average. Goal: Use a Weighted Score to decide.

Math Formula:
• Score = Σ (Criteria Weight * Rating)
• Rating: +1 (Better), 0 (Same), -1 (Worse)
• Total Score > Baseline (0) -> Potential improvement.`,
                    description_vi: "Ma trận Pugh giúp đưa ra quyết định khách quan:\n\n1. **Baseline (0):** Mọi thứ được so sánh với hiện trạng.\n2. **Scoring:** Tốt hơn (+1), Tệ hơn (-1), Bằng (0).\n3. **Kết quả:** Tổng điểm cao nhất là giải pháp tiềm năng. Lệnh `sort_values` sẽ xếp hạng từ cao xuống thấp.",
                    code_template: `import pandas as pd

# Concept Data
data = {
    'Concept': ['Concept A', 'Concept B', 'Current (Baseline)'],
    'Cost': [1, -1, 0],       # 1=Better, -1=Worse
    'Speed': [1, 1, 0],
    'Quality': [0, 1, 0]
}
df = pd.DataFrame(data)

# Calculate sum
df['Score'] = df['Cost'] + df['Speed'] + df['Quality']

print("Decision Matrix Results:")
print(df.sort_values(by='Score', ascending=False))

# Conclusion
# Ideally, verify if the winner is feasible.`,
                    expected_output_en: "Ranked list of concepts.",
                    datasets_used: [],
                    learning_points_en: ["Quantitative decision making"],
                    difficulty_en: "Beginner"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Act as a facilitator for Pugh Matrix.",
                suggested_questions: ["Baseline là gì?", "Nếu hai giải pháp điểm bằng nhau thì sao?"],
                hint_levels: ["Standard to compare against", "Combine them", "Check feasibility"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "cheatsheet", label_en: "Green Belt Cheat Sheet - Improve", location_hint_en: "Pugh Matrix" }
            ],
            flashcards: [
                {
                    id: "fc_improve_01",
                    question_en: "In a Pugh Matrix, if a concept is better than the Baseline, what score does it typically get?",
                    answer_vi: "+ (Plus) or +1.",
                    tags_en: ["Improve", "Tools"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_improve_02",
                    question_en: "What is the primary goal of the 'Improve' phase?",
                    answer_vi: "To implement and validate a solution that addresses the root cause.",
                    tags_en: ["Improve", "DMAIC"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 25,
            prerequisites_ids: ["mod_analyze_rca_02"]
        },
        {
            id: "mod_improve_doe_01",
            order: 2,
            title_en: "DOE Fundamentals vs OFAT",
            summary_vi: "Tại sao nên dùng DOE thay vì thử từng cái một (OFAT).",
            summary_en: "Why use DOE instead of One Factor At a Time (OFAT).",
            key_metrics_en: ["Factor", "Level", "Response", "Interaction"],
            key_points_en: [
                "OFAT (One Factor At a Time): Expensive, slow, misses interactions.",
                "DOE (Design of Experiments): Changes multiple factors at once.",
                "Factor (Input/X): Variable you change (e.g., Temperature).",
                "Level: Setting of the Factor (e.g., 100°C vs 200°C).",
                "Response (Output/Y): Result you measure (e.g., Cake fluffiness)."
            ],
            explanation_vi: `
**Vấn đề của OFAT (Thử từng cái):**
Tưởng tượng bạn nướng bánh.
1. Bạn đổi Nhiệt độ -> Bánh ngon hơn.
2. Bạn giữ Nhiệt độ đó, đổi Thời gian -> Bánh cháy.
Kết luận: Bạn không biết rằng "Nhiệt độ Cao chỉ tốt khi Thời gian Ngắn". Đó gọi là **Tương tác (Interaction)**.
OFAT hoàn toàn mù tịt về tương tác. DOE sinh ra để giải quyết việc này.
            `,
            explanation_en: `
**The Problem with OFAT (Trial and Error)**
Imagine baking a cake.
1. You change Temp -> Cake is better.
2. You keep that Temp, change Time -> Cake burns.
Conclusion: You failed to realize that "High Temp is only good if Time is Short". This is called an **Interaction**.
OFAT is blind to interactions. DOE is built to find them.
            `,
            recommended_tools_en: ["DOE Planning Template"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Factor vs Level vs Response using a Coffee example.",
                suggested_questions: ["Factor là gì?", "Tại sao OFAT tốn kém?"],
                hint_levels: ["Factor = Sugar amount", "Level = 1 spoon vs 2 spoons", "Response = Sweetness taste"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 15", location_hint_en: "DOE Introduction" }
            ],
            flashcards: [
                {
                    id: "fc_doe_01",
                    question_en: "What does OFAT stand for?",
                    answer_vi: "One Factor At a Time (Một nhân tố tại một thời điểm).",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 20,
            prerequisites_ids: ["mod_improve_solutions_01"]
        },
        {
            id: "mod_improve_doe_02",
            order: 3,
            title_en: "Full Factorial DOE",
            summary_vi: "Thiết kế 2^k, phân tích Main Effect và Interaction Effect.",
            summary_en: "2^k Designs, Main Effects, and Interaction Effects.",
            key_metrics_en: ["Main Effect", "Interaction Effect", "2^k Design"],
            key_points_en: [
                "2^k: k factors, 2 levels each.",
                "Main Effect: Average impact of one factor.",
                "PB (Plackett-Burman): Screening design for many factors (only Main Effects).",
                "Interaction Plot: Parallel lines = No interaction. Crossed lines = Strong interaction."
            ],
            explanation_vi: `
**1. 2^k Design**
Ví dụ: 3 nhân tố (A, B, C), mỗi cái 2 mức (+, -).
Tổng số lần chạy = 2^3 = 2*2*2 = 8 lần.
Với 8 mẫu thử này, bạn biết được TẤT CẢ mọi thứ về A, B, C và sự tương tác của chúng.

**2. Đọc biểu đồ Interaction**
Đây là kỹ năng quan trọng nhất của Green Belt khi làm DOE.
- Nếu 2 đường song song: "Mày làm việc của mày, tao làm việc của tao" (Độc lập).
- Nếu 2 đường cắt nhau (hình chữ X): "Mày ảnh hưởng tao, tao ảnh hưởng mày" (Tương tác).
            `,
            explanation_en: `
**1. 2^k Design**
Example: 3 Factors (A, B, C), 2 levels each (+, -).
Total runs = 2^3 = 8 runs.
With just 8 runs, you understand EVERYTHING about factors A, B, C and their interactions.

**2. Reading Interaction Plots**
This is the most critical Green Belt skill in DOE.
- **Parallel Lines:** No Interaction. Factors work independently.
- **Crossed Lines (X shape):** Strong Interaction. The effect of one factor depends on the level of the other.
            `,
            recommended_tools_en: ["Interaction Plot", "Pareto of Effects"],
            python_focus_en: ["statsmodels", "interaction_plot"],
            code_blocks: [
                {
                    id: "code_doe_full",
                    title_en: "Visualizing Interactions",
                    context_en: `Situation: You observe that 'High Pressure' increases Yield ONLY when 'Temperature' is also High. If Temp is Low, Pressure does nothing. This is an Interaction. Goal: Plot it.

Math Formula:
• Main Effect = Avg(High Level) - Avg(Low Level)
• Interaction = Difference in effect of Factor A at different levels of Factor B.
• Visual Check: Crossed Lines = Interaction present.`,
                    description_vi: "Biểu đồ Tương tác (Interaction Plot) giúp phát hiện 'Hidden logic':\n\n1. **Trục X:** Một nhân tố (Nhiệt độ).\n2. **Các đường màu:** Nhân tố kia (Áp suất).\n3. **Quy tắc:** Nếu hai đường **CẮT NHAU** (như chữ X) -> Có tương tác mạnh. Nếu song song -> Không có tương tác.",
                    code_template: `import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.graphics.factorplots import interaction_plot
import numpy as np

# Mock Data: Yield of a Chemical Process
# Factor 1: Temperature (Low=100, High=200)
# Factor 2: Pressure (Low=10, High=20)
# Response: Yield
temp = np.array([100, 100, 200, 200])
pressure = np.array([10, 20, 10, 20])
yield_val = np.array([50, 52, 60, 85]) 
# At Low Temp, Pressure adds +2. At High Temp, Pressure adds +25! -> Interaction!

fig, ax = plt.subplots(figsize=(6, 6))
interaction_plot(x=temp, trace=pressure, response=yield_val, 
                 colors=['red', 'blue'], markers=['D', '^'], ms=10, ax=ax)

plt.xlabel('Temperature')
plt.ylabel('Mean Yield')
plt.title('Interaction Plot: Temp vs Pressure')
plt.show()`,
                    expected_output_en: "Crossed lines indicating strong interaction.",
                    datasets_used: [],
                    learning_points_en: ["Identifying crossed lines", "Understanding synergy"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Main Effect vs Interaction.",
                suggested_questions: ["Main Effect là gì?", "Nếu có Interaction thì tối ưu hóa thế nào?"],
                hint_levels: ["Single factor impact", "Combined factor impact", "Set factors together"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 15", location_hint_en: "DOE Analysis" }
            ],
            flashcards: [
                {
                    id: "fc_doe_02",
                    question_en: "In an interaction plot, what do non-parallel (crossing) lines indicate?",
                    answer_vi: "Significant Interaction (Tương tác đáng kể).",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 45,
            prerequisites_ids: ["mod_improve_doe_01"]
        },
        {
            id: "mod_improve_pilot",
            order: 4,
            title_en: "Pilot Implementation",
            summary_vi: "Thử nghiệm giải pháp quy mô nhỏ (Pilot) trước khi triển khai toàn diện.",
            summary_en: "Small scale trial (Pilot) before full implementation.",
            key_metrics_en: ["Pilot Plan", "Risk Assessment", "Pre-Post Analysis"],
            key_points_en: [
                "Never roll out full scale immediately.",
                "Pilot: Small scale, short time, reversible.",
                "Verify results with Hypothesis Testing (e.g., Paired t-test Pilot vs Baseline).",
                "Update FMEA with new risks introduced by the solution."
            ],
            explanation_vi: `
**Thử nghiệm (Pilot)**
Bạn đã tìm ra "Công thức tối ưu" từ DOE. Nhưng đừng vội áp dụng cho cả nhà máy.
Hãy chạy thử trên 1 dây chuyền trong 1 tuần.
- Nếu thành công -> Triển khai rộng (Rollout).
- Nếu thất bại -> Chỉ thiệt hại nhỏ, dễ dàng quay lại (Rollback).
Sau Pilot, bắt buộc phải dùng số liệu chứng minh (Data Verification) sự cải thiện.
            `,
            explanation_en: `
**The Pilot**
You found the "Optimal Settings" from DOE. But don't change the whole factory yet.
Run a Pilot on 1 line for 1 week.
- **Success:** Rollout to other lines.
- **Fail:** Rollback immediately with minimal loss.
After Pilot, you generally need a Paired t-test (Before vs After) to statistically prove the gain.
            `,
            recommended_tools_en: ["Paired t-test", "Gantt Chart"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Why is Piloting critical?",
                suggested_questions: ["Pilot khác gì sản xuất thật?", "Khi nào thì kết thúc Pilot?"],
                hint_levels: ["Controlled environment", "Limit risk", "When success criteria met"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Improve", location_hint_en: "Implementation" }
            ],
            flashcards: [],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 20,
            prerequisites_ids: ["mod_improve_doe_02"]
        },
        {
            id: "mod_improve_regression",
            order: 4.5,
            title_en: "Advanced Regression & Modeling",
            summary_vi: "Hồi quy đa biến (Multiple Regression), chỉ số VIF và cách chọn mô hình tối ưu.",
            summary_en: "Multiple Regression, VIF, and Model Selection.",
            key_metrics_en: ["Multiple Regression", "Adjusted R-squared", "VIF (Variance Inflation Factor)", "Stepwise"],
            key_points_en: [
                "Simple Regression: Y = a + bX.",
                "Multiple Regression: Y = a + b1X1 + b2X2 + ... + bnXn.",
                "Adjusted R-sq: Penalizes adding useless variables (Unlike standard R-sq which always grows).",
                "VIF (Variance Inflation Factor): Detects Multicollinearity. VIF > 5 is bad (Redundant variables).",
                "Stepwise Regression: Automated method to add/remove variables to find the best model."
            ],
            explanation_vi: `
            **1. Simple vs Multiple Regression**
            - **Simple:** Y phụ thuộc 1 biến X (Ví dụ: Doanh số = f(Quảng cáo)).
            - **Multiple:** Y phụ thuộc nhiều biến X (Ví dụ: Doanh số = f(Quảng cáo, Giá bán, Mùa vụ)).
            
            **2. Adjusted R-squared (R² hiệu chỉnh)**
            Tại sao không dùng R² thường? Vì cứ thêm biến vào là R² tăng, kể cả biến vô nghĩa (như "số lượng chim bay qua nhà máy").
            - Đừng tin R² thường khi chạy đa biến. Hãy nhìn **Adjusted R²**. Nó sẽ giảm điểm nếu bạn thêm biến rác.
            
            **3. Multicollinearity & VIF**
            Đa cộng tuyến là khi các biến đầu vào (X) đánh nhau. Ví dụ: Bạn dùng cả "Chiều cao (cm)" và "Chiều cao (inch)" để dự đoán cân nặng.
            - Dùng **VIF (Variance Inflation Factor)** để phát hiện.
            - **Quy tắc:** VIF > 5 (hoặc 10) -> Loại bỏ biến đó ngay.
            
            **4. Model Selection (Stepwise)**
            Làm sao chọn ra "Dream Team" các biến X? Dùng Stepwise Regression:
            - **Forward:** Dò từng biến, cái nào ngon thì thêm vào.
            - **Backward:** Bỏ tất cả vào, cái nào dở thì đá ra.
            `,
            explanation_en: `
**1. Simple vs Multiple Regression**
- **Simple:** Y depends on 1 variable (Sales = f(Ads)).
- **Multiple:** Y depends on many variables (Sales = f(Ads, Price, Season)).

**2. Adjusted R-squared**
Why not regular R-squared? Because R² increases even if you add junk variables.
- Always use **Adjusted R²** for Multiple Regression. It penalizes complex models with useless variables.

**3. Multicollinearity & VIF**
When inputs "fight" each other (e.g., measuring Height in cm AND inches).
- Use **VIF (Variance Inflation Factor)**.
- **Rule:** VIF > 5 indicates redundancy. Remove that variable.

**4. Stepwise Regression**
Automated method to pick the "Dream Team" of variables.
- **Forward:** Start empty, add best variables one by one.
- **Backward:** Start full, remove worst variables one by one.
            `,
            recommended_tools_en: ["Minitab Stepwise", "VIF check"],
            python_focus_en: ["statsmodels.stats.outliers_influence.variance_inflation_factor"],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Multicollinearity.",
                suggested_questions: ["VIF bao nhiêu là cao?", "Tại sao R-squared lại lừa dối?"],
                hint_levels: ["Redundant information", "Inflation of variance", "Use Adjusted R-sq"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Improve", location_hint_en: "Regression Analysis" }
            ],
            flashcards: [
                {
                    id: "fc_reg_01",
                    question_en: "Which metric should be used to evaluate a Multiple Regression model to avoid overfitting?",
                    answer_vi: "Adjusted R-squared.",
                    tags_en: ["Improve", "Regression"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_reg_02",
                    question_en: "What does a VIF value of 10 indicate?",
                    answer_vi: "High Multicollinearity (Redundancy) - Remove the variable.",
                    tags_en: ["Improve", "Regression"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 35,
            prerequisites_ids: ["mod_improve_doe_02"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_improve_doe_quiz",
            order: 5,
            title_en: "Chapter 7 Quiz: Improve (DOE) Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 7 (40 câu hỏi).",
            summary_en: "Comprehensive Chapter 7 Quiz (40 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of Solutions, DOE Fundamentals, Full Factorial, and Pilot Implementation."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp các kiến thức về lựa chọn giải pháp, thiết kế thử nghiệm (DOE) và triển khai thí điểm (Pilot).",
            explanation_en: "This quiz covers Solution Selection (Pugh), Design of Experients (DOE), and Pilot Implementation.",
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
            prerequisites_ids: ["mod_improve_solutions_01", "mod_improve_doe_01", "mod_improve_doe_02", "mod_improve_pilot"]
        }
    ]
};
