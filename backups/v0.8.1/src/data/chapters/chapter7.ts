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
**1. Quy Tắc & Kỹ Thuật Động Não (Brainstorming)**
Để giải quyết vấn đề phức tạp, bạn cần "Mở rộng" (Diverge) trước khi "Thu hẹp" (Converge).

*   **4 Quy Tắc Vàng:**
    1.  **No Criticism (Không chỉ trích):** Không có ý tưởng tồi. Phán xét giết chết sự sáng tạo.
    2.  **Quantity over Quality:** Số lượng hơn chất lượng. Càng nhiều càng tốt.
    3.  **Encourage "Wild" Ideas:** Khuyến khích ý tưởng điên rồ. Thuần hóa một ý tưởng điên dễ hơn là làm nóng một ý tưởng nhàm chán.
    4.  **Piggybacking (Dựa hơi):** Phát triển dựa trên ý tưởng của người khác (còn gọi là "Hitch-hiking").

*   **Kỹ Thuật:**
    *   **Round Robin:** Mọi người lần lượt đưa ra ý kiến theo vòng tròn.
    *   **Brainwriting:** Viết ý tưởng ra giấy/thẻ trong im lặng. Tránh việc người to mồm lấn át người hướng nội.

━━━━━━

**2. Ma Trận Pugh (Concept Selection Matrix)**
Công cụ loại bỏ cảm tính khi chọn giải pháp. Chúng ta so sánh mọi thứ với **Baseline** (Mốc chuẩn).

*   **Quy Trình 5 Bước:**
    1.  **Chọn Tiêu Chí:** Cái gì quan trọng? (Chi phí, An toàn, Tốc độ).
    2.  **Chọn Baseline (Datum/Mốc):** Thường là quy trình hiện tại. Mọi giải pháp khác được so sánh với cột mốc này.
    3.  **Chấm điểm (Scoring):**
        *   **(+) hoặc +1:** Tốt hơn Baseline.
        *   **(-) hoặc -1:** Tệ hơn Baseline.
        *   **(S) hoặc 0:** Ngang bằng Baseline.
    4.  **Tính Tổng:** Cộng điểm (+ và -).
    5.  **Lai Tạo (Hybridize):** *Bước quan trọng nhất.* Nhìn vào điểm (-) của giải pháp thắng cuộc. Liệu có thể mượn tính năng của giải pháp thua cuộc để khắc phục điểm yếu đó không? -> Tạo ra **Hybrid Solution**.

━━━━━━

**3. Weighted Matrix (Ma Trận Có Trọng Số)**
Khi so sánh đơn giản (+/-) là chưa đủ (Ví dụ: An toàn quan trọng gấp 3 lần Thẩm mỹ).
*   **Công thức:** Tổng Điểm = Σ (Điểm số x Trọng số).
*   Giúp bảo vệ quyết định của bạn trước các bên liên quan ("Tại sao bạn chọn cái này?").
            `,
            explanation_en: `
**1. Brainstorming Rules & Techniques**
To solve complex problems, you must Diverge (expand) before you Converge (select).

*   **The 4 Rules:**
    1.  **No Criticism:** Judgment kills creativity.
    2.  **Quantity over Quality:** Go for volume.
    3.  **Encourage "Wild" Ideas:** It's easier to tame a wild idea than to invigorate a boring one.
    4.  **Piggybacking:** Build on, combine, or refine others' ideas (also called "Hitch-hiking").

*   **Techniques:**
    *   **Round Robin:** Everyone takes a turn.
    *   **Brainwriting:** Silent writing on cards to avoid groupthink/dominance.

━━━━━━

**2. The Pugh Matrix (Concept Selection)**
Developed by Stuart Pugh. Used to objectively compare concepts against a **Baseline (Datum)**.

*   **The 5-Step Process:**
    1.  **Establish Criteria:** Cost, Safety, Speed, etc.
    2.  **Select Baseline (Datum):** Usually the "Current Process".
    3.  **Scoring:**
        *   **(+) / +1:** Better than Baseline.
        *   **(-) / -1:** Worse than Baseline.
        *   **(S) / 0:** Same as Baseline.
    4.  **Calculate:** Sum the Pluses and Minuses.
    5.  **Hybridize:** *The Secret Sauce.* Can you take a feature from a "losing" concept to fix a weakness in the "winning" concept? This creates a stronger **Hybrid Solution**.

━━━━━━

**3. Solution Selection Matrix (Weighted)**
When criteria have different importance (e.g., Safety Weight 10 vs Aesthetics Weight 3).
*   **Formula:** Total Score = Σ (Rating x Weight).
*   **Result:** Provides a "paper trail" to justify your decision to stakeholders.
            `,
            recommended_tools_en: ["Pugh Matrix Template", "Brainwriting Sheet"],
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
                suggested_questions: [
                    { question_vi: "Baseline (Datum) là gì?", question_en: "What is a Baseline/Datum?" },
                    { question_vi: "Hybrid Solution (Giải pháp lai) là gì?", question_en: "What is a Hybrid Solution?" },
                    { question_vi: "Piggybacking nghĩa là gì?", question_en: "What does Piggybacking mean?" }
                ],
                hint_levels: ["Standard reference point", "Combining best features of multiple concepts", "Building on other's ideas"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "cheatsheet", label_en: "Green Belt Cheat Sheet - Improve", location_hint_en: "Pugh Matrix" }
            ],
            flashcards: [
                {
                    id: "fc_improve_01",
                    question_en: "In Brainstorming, what does 'Piggybacking' mean?",
                    answer_vi: "Building on, refining, or combining someone else's idea (also called Hitch-hiking).",
                    tags_en: ["Improve", "Brainstorming"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_improve_02",
                    question_en: "What is a 'Hybrid Solution' in the context of a Pugh Matrix?",
                    answer_vi: "A new concept created by combining the best features of different ideas/concepts.",
                    tags_en: ["Improve", "Pugh Matrix"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_improve_03",
                    question_en: "What is the 'Baseline' or 'Datum' in a Pugh Matrix?",
                    answer_vi: "The standard (usually the Current Process) against which all other concepts are scored (+, -, S).",
                    tags_en: ["Improve", "Pugh Matrix"],
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
**1. Vấn đề của OFAT (One-Factor-At-A-Time)**
Phương pháp "khoa học cổ điển" học ở cấp 3: "Giữ nguyên mọi thứ, chỉ thay đổi 1 yếu tố" là **SAI LẦM** trong Six Sigma.
*   **Kém Hiệu Quả:** Bạn cần chạy thử nghiệm rất nhiều lần.
*   **Bỏ sót Tương tác (Interactions):** Đây là lỗi chết người. OFAT giả định rằng Nhân tố A luôn hoạt động giống nhau bất kể Nhân tố B đang làm gì.

━━━━━━

**2. Các Ví Dụ Thực Tế về Tương Tác (Real Life Interactions)**
Tương tác là lí do chính khiến chúng ta cần DOE.

*   **Case 1: Giặt Giũ (Hóa Học)**
    *   **Factor A:** Nhiệt độ (Nóng/Lạnh).
    *   **Factor B:** Loại xà phòng (Enzyme/Thuốc tẩy).
    *   *Tương tác:* Thuốc tẩy mạnh hơn khi Nóng. Nhưng Enzyme (sinh học) sẽ **CHẾT** khi gặp nước Nóng.
    *   *Kết luận:* Nếu bạn test riêng lẻ (OFAT), bạn sẽ thấy "Nước Nóng tốt" và "Enzyme tốt". Kết hợp lại -> Hỏng việc.

*   **Case 2: Chiến dịch Marketing (Kinh Doanh)**
    *   **Factor A:** Giảm giá (Có/Không).
    *   **Factor B:** Loại khách (Thân thiết/Vãng lai).
    *   *Tương tác:* Khách thân thiết mua bất kể giá (Giảm giá = Mất lợi nhuận). Khách vãng lai chỉ mua khi có Giảm giá.
    *   *Kết luận:* Hiệu quả của "Giảm giá" phụ thuộc hoàn toàn vào "Đối tượng".

*   **Case 3: Nướng Bánh (Ẩm Thực)**
    *   *Tương tác:* "Lửa To" (High Heat) chỉ tốt cho Pizza đế mỏng, nhưng lại làm cháy Pizza đế dày.

━━━━━━

**3. Sức mạnh của DOE (Design of Experiments)**
DOE thay đổi nhiều nhân tố cùng lúc một cách có cấu trúc.
*   **Hiệu quả:** Mỗi mẫu thử (data point) được dùng để tính toán nhiều hiệu ứng, giúp Rẻ hơn và Nhanh hơn OFAT.
*   **Phát hiện Tương tác:** DOE là công cụ duy nhất chứng minh được bằng toán học các mối quan hệ chéo này.

━━━━━━

**4. Các Thuật Ngữ Chính (Key Terminology)**
*   **Factor (Input / X):** Biến đầu vào (Nhiệt độ, Tốc độ).
*   **Level (Mức / Setting):** Giá trị cụ thể (100°C, 200°C).
*   **Response (Output / Y):** Kết quả đo lường (Độ sạch, Doanh thu).
*   **Replication (Lặp lại):** Chạy lại cùng một cấu hình nhiều lần để đo **"Nhiễu" (Experimental Error)**.
*   **Interaction Rule:** Nếu có Tương tác mạnh (các đường cắt nhau), bạn KHÔNG ĐƯỢC tin vào Hiệu ứng chính (Main Effects).
            `,
            explanation_en: `
**1. The Problem with OFAT (One-Factor-At-A-Time)**
The traditional method "Change one thing, hold everything else constant" is inefficient and dangerous in complex processes because it misses **Interactions**.

━━━━━━

**2. Real Life Examples of Interactions**
Interaction means the effect of one factor depends on the level of another factor.

*   **Case 1: Laundry (Chemistry)**
    *   **Factor A:** Water Temp (Hot/Cold).
    *   **Factor B:** Detergent Type (Enzyme/Bleach).
    *   *Interaction:* Bleach likes Hot. Enzymes **DIE** in Hot water.
    *   *Conclusion:* If you run OFAT, you might conclude "Hot is good" and "Enzyme is good". Combine them -> Disaster.

*   **Case 2: Marketing (Business)**
    *   **Factor A:** Discount (Yes/No).
    *   **Factor B:** Customer Type (Loyal/New).
    *   *Interaction:* Loyalists buy anyway (Discount hurts profit). New customers only buy with Discount.
    *   *Conclusion:* The effect of "Discount" depends entirely on "Customer Type".

*   **Case 3: Baking (Culinary)**
    *   *Interaction:* "High Heat" is good for Thin Pizza, but burns Deep Dish Pizza.

━━━━━━

**3. The Power of DOE**
Change multiple factors simultaneously.
*   **Efficiency:** Faster and Cheaper than OFAT.
*   **Interactions:** DOE is the only tool that mathematically proves these cross-relationships.

━━━━━━

**4. Key Terminology for Exam**
*   **Factor (Input / X):** The variable you change (Temperature, Speed).
*   **Level (Setting):** Specific values (Low, High).
*   **Response (Output / Y):** The result (Cleanliness, Revenue).
*   **Replication:** Running the same setup multiple times to estimate **Experimental Error** (Noise).
*   **Interaction Rule:** If an Interaction exists (Crossing Lines), you MUST NOT rely on Main Effects alone.
            `,
            recommended_tools_en: ["DOE Planning Template", "Interaction Plot"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz student on DOE terminology.",
                suggested_questions: [
                    { question_vi: "Tại sao Replication (Lặp lại) lại quan trọng?", question_en: "Why is Replication important?" },
                    { question_vi: "Nếu biểu đồ tương tác có 2 đường cắt nhau, điều đó nghĩa là gì?", question_en: "What do crossing lines in an interaction plot mean?" }
                ],
                hint_levels: ["Estimates Experimental Error", "Signal vs Noise", "Strong Interaction exists"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 15", location_hint_en: "DOE Introduction" }
            ],
            flashcards: [
                {
                    id: "fc_doe_01",
                    question_en: "What is the primary disadvantage of OFAT (One-Factor-At-A-Time) testing?",
                    answer_vi: "It misses Interactions between factors and is inefficient.",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_doe_02",
                    question_en: "In DOE, what is 'Replication' used to estimate?",
                    answer_vi: "Experimental Error (Variation/Noise).",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_doe_03",
                    question_en: "If an Interaction exists, can you rely solely on Main Effects?",
                    answer_vi: "No. Main Effects can be misleading. You must analyze the Interaction Plot.",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Hard",
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
            title_en: "Full Factorial DOE (2^k)",
            summary_vi: "Thiết kế Giai thừa toàn phần, Mã hóa (-1, +1) và Biểu đồ Tương tác.",
            summary_en: "Full Factorial Designs, Coded Units, and Interaction Plots.",
            key_metrics_en: ["2^k Formula", "Main Effect", "Interaction Effect", "Coded Units (-1, +1)"],
            key_points_en: [
                "2^k: Tests all combinations (k factors at 2 levels).",
                "Coded Design: Low = -1, High = +1.",
                "Main Effect: Slope of the line (Avg High - Avg Low).",
                "Interaction: Crossing lines (X-shape) mean factors are dependent.",
                "Golden Rule: If lines cross, ignore Main Effects and focus on the Interaction."
            ],
            explanation_vi: `
**1. Cấu Trúc Giai Thừa 2^k (2^k Factorial)**
Đây là công cụ mạnh nhất để tối ưu hóa hóa. Chúng ta test **Mọi tổ hợp có thể**.
*   **Công thức:** Số lần chạy = $2^k$ (k là số lượng Factor).
    *   Ví dụ: 3 Factors (Nhiệt, Áp suất, Tốc độ) -> $2^3 = 8$ lần chạy.
*   **Mã hóa (Coded Design):** Để dễ tính toán, ta quy ước:
    *   **Thấp (-1):** Ví dụ 100°C.
    *   **Cao (+1):** Ví dụ 200°C.

━━━━━━

**2. Hiệu Ứng Chính (Main Effects)**
*   Lấy trung bình Y ở mức Cao trừ trung bình Y ở mức Thấp.
*   Nếu kết quả xa 0 -> Factor đó quan trọng (Significant).

━━━━━━

**3. Hiệu Ứng Tương Tác (Interaction Effects) - QUAN TRỌNG**
*   **Quy tắc Vàng:** Nếu Tương tác tồn tại, Hiệu ứng chính có thể gây hiểu lầm (Misleading).
*   **Ví dụ Đời thường:** "Đường làm cafe ngon hơn" (Main Effect). Nhưng "Đường chỉ làm cafe ngon hơn NẾU bạn khuấy" (Interaction). Nếu không khuấy, đường lắng dưới đáy = vô dụng.

━━━━━━

**4. Đọc Biểu Đồ Tương Tác (Visualizing Interactions)**
*   **Song song (Parallel):** Không có tương tác. A và B độc lập. Bạn có thể chỉnh A mà không lo về B.
*   **Cắt nhau (Crossed / X-shape):** Tương tác MẠNH. Luật chơi thay đổi! A Cao có thể tốt khi B Thấp, nhưng xấu khi B Cao.
*   **Ví dụ Bỏng Ngô (Popcorn):**
    *   Nhiệt độ (400 vs 600). Nhãn hiệu (X vs Y).
    *   Nếu đường cắt nhau: Bạn không thể nói "Nhãn X tốt nhất". Bạn phải nói "Nó phụ thuộc vào nhiệt độ".
            `,
            explanation_en: `
**1. The 2^k Factorial Structure**
The gold standard for optimization. We test **every possible combination**.
*   **Formula:** Runs = $2^k$ (k = number of Factors).
    *   Ex: 3 Factors -> $2^3 = 8$ runs.
*   **Coded Design:** Simplifies analysis.
    *   **Low (-1):** e.g., 100°C.
    *   **High (+1):** e.g., 200°C.

━━━━━━

**2. Main Effects**
*   The average change in Output (Y) when you go from Low to High.
*   Large value = Significant factor.

━━━━━━

**3. Interaction Effects - CRITICAL**
*   **Golden Rule:** If an Interaction exists, Main Effects might be misleading. You cannot just pick the "best" setting for Factor A; you must check Factor B.
*   **Real-life:** Sugar improves coffee ONLY if you stir. Stirring x Sugar interaction.

━━━━━━

**4. Visualizing Interactions (Interaction Plots)**
*   **Parallel Lines:** No Interaction. Factors are independent.
*   **Crossed Lines (X-shape):** Strong Interaction. The rules change!
*   **Popcorn Example:**
    *   Temp (400 vs 600) x Brand (X vs Y).
    *   **Scenario:** Brand X is better at 400, but Brand Y is better at 600. The lines cross. You cannot say "Brand X is best"; you must say "It depends on the temperature."
            `,
            recommended_tools_en: ["Interaction Plot", "Minitab/JMP/SigmaXL"],
            python_focus_en: ["statsmodels.graphics.interaction_plot"],
            code_blocks: [
                {
                    id: "code_doe_popcorn",
                    title_en: "Popcorn Optimization (Interaction Plot)",
                    context_en: `Scenario: Optimizing Unpopped Kernels (Defects).
Factors:
- Temperature: Low (400), High (600)
- Brand: Brand X, Brand Y
Goal: Check if the "Best Brand" depends on Temperature.`,
                    description_vi: "Vẽ biểu đồ tương tác cho ví dụ Bỏng Ngô:\n\n- Nếu đường **Cắt Nhau** (Chữ X): Có tương tác. Bạn không thể chọn Brand X cho mọi nhiệt độ.\n- Nếu đường **Song Song**: Không tương tác. Brand nào tốt hơn thì tốt hơn ở mọi nhiệt độ.",
                    code_template: `import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.graphics.factorplots import interaction_plot
import numpy as np

# Data: Popcorn Experiment (Unpopped Kernels - Lower is Better)
# Temp: 400, 600
# Brand: X, Y

temperature = np.array([400, 400, 600, 600])
brand = np.array(['Brand X', 'Brand Y', 'Brand X', 'Brand Y'])

# Scenario: CROSSING LINES (Interaction)
# X is good at 400 (Low defects), but bad at 600 (High defects)
defects = np.array([10, 50, 60, 20]) 

fig, ax = plt.subplots(figsize=(6, 6))
interaction_plot(x=temperature, trace=brand, response=defects, 
                 colors=['red', 'blue'], markers=['D', '^'], ms=10, ax=ax)

plt.xlabel('Temperature')
plt.ylabel('Unpopped Kernels (Defects)')
plt.title('Interaction Plot: Temp vs Brand')
plt.grid(True, linestyle='--')
plt.show()

# Interpretation:
# Lines Cross! 
# At 400 deg: Brand X (10) is better than Y (50).
# At 600 deg: Brand Y (20) is better than X (60).
# Conclusion: "It Depends" on temperature.`,
                    expected_output_en: "X-shaped interaction plot showing reversal of best brand.",
                    datasets_used: [],
                    learning_points_en: ["Identifying Crossing Lines", "Optimization choice depends on context"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz on DOE 2^k and Interactions.",
                suggested_questions: [
                    { question_vi: "Nếu biểu đồ tương tác có hình chữ X, ta kết luận gì?", question_en: "If the interaction plot forms an 'X', what is the conclusion?" },
                    { question_vi: "Tính số lần chạy cho 4 Factors (2 mức)?", question_en: "Calculate runs for 4 Factors (2 levels)?" }
                ],
                hint_levels: ["Strong Interaction exists", "Main effects are misleading", "2^4 = 16 runs"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 15", location_hint_en: "DOE Full Factorial" }
            ],
            flashcards: [
                {
                    id: "fc_doe_04",
                    question_en: "Calculate the total number of runs for a 2^3 Full Factorial Design.",
                    answer_vi: "8 runs (2 * 2 * 2).",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_doe_05",
                    question_en: "What does a 'Coded Value' of -1 represent in a DOE?",
                    answer_vi: "The Low Setting (Level) of a factor.",
                    tags_en: ["Improve", "DOE"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_doe_06",
                    question_en: "What implies a 'Strong Interaction' on an interaction plot?",
                    answer_vi: "The lines cross each other (Non-parallel).",
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
            key_metrics_en: ["Pilot Plan", "Rollback Strategy", "Paired t-test"],
            key_points_en: [
                "Nail it, then Scale it.",
                "Pilot Goal: Validate Y=f(x) in the real world.",
                "Stress Test: Defines how to handle failure (Rollback).",
                "Verification: Must use statistical tools (t-test) to prove improvement."
            ],
            explanation_vi: `
**1. Mục đích của Pilot (Why Pilot?)**
Bạn đã tìm ra "Công thức tối ưu (x)" từ DOE, nhưng đó là trong phòng thí nghiệm. Pilot kiểm tra xem mối quan hệ Y=f(x) có đúng trong "thế giới thực" lộn xộn hay không.
*   **Quy tắc:** "Nail it, then Scale it" (Làm chuẩn rồi mới nhân rộng).
*   **Mục tiêu:** Phát hiện tác dụng phụ (Side effects) mà không làm công ty phá sản.

━━━━━━

**2. Chiến lược Pilot (Stress Test)**
*   **Phạm vi:** Giới hạn (1 dây chuyền, 1 ca, 1 nhóm khách hàng).
*   **Kế hoạch Quay đầu (Rollback Plan):** BẮT BUỘC phải có. Nếu Pilot thất bại hoặc gây mất an toàn, bạn phải quay lại quy trình cũ ngay lập tức.
*   **Cập nhật FMEA:** Giải pháp mới sinh ra rủi ro mới. Hãy cập nhật FMEA ngay.

━━━━━━

**3. Xác minh Thống kê (Statistical Verification)**
Cảm giác "tốt hơn" là chưa đủ. Số liệu phải chứng minh điều đó.
*   **Paired t-test:** So sánh cùng 1 dây chuyền "Trước Pilot" vs "Trong Pilot".
*   **2-Sample t-test:** So sánh "Dây chuyền Pilot" vs "Dây chuyền Đối chứng" (cũ).
*   **Cpk:** Năng lực quy trình có đạt mục tiêu 6 Sigma không?
            `,
            explanation_en: `
**1. The Purpose of a Pilot**
DOE gives you the optimal settings in a "controlled" environment. A Pilot tests validaty in the "messy" real world.
*   **Rule:** "Nail it, then Scale it."
*   **Goal:** Detect unforeseen risks without bankrupting the company.

━━━━━━

**2. Pilot Strategy: The Stress Test**
*   **Scope:** Limited (One line, one shift).
*   **Rollback Plan:** Mandatory. If the Pilot fails, you must immediately revert to the old process.
*   **Update FMEA:** New solutions introduce new failure modes. Update your risk analysis.

━━━━━━

**3. Statistical Verification**
"Looking" at the results is not enough. You must prove potential gain with statistics.
*   **Paired t-test:** Compare performance of the SAME line (Before vs During).
*   **2-Sample t-test:** Compare Pilot Line vs Control Line.
*   **Capability (Cpk):** Did we hit the target (e.g., Cpk > 1.33)?
            `,
            recommended_tools_en: ["Paired t-test", "Gantt Chart", "FMEA"],
            python_focus_en: ["scipy.stats.ttest_rel"],
            code_blocks: [
                {
                    id: "code_pilot_verification",
                    title_en: "Pilot Verification (Paired t-test)",
                    context_en: `Situation: You ran a Pilot for 1 week.
Data: Daily Defect Rates for the *same* machine before and during the Pilot.
Goal: Prove statistically that the Pilot improved the process (Reduced defects).`,
                    description_vi: "Sử dụng Paired t-test để so sánh hiệu suất 'Trước' và 'Sau' trên cùng một đối tượng. Nếu p-value < 0.05, sự cải thiện là có thật.",
                    code_template: `from scipy import stats
import numpy as np

# Daily Defect Rates (%)
before_pilot = np.array([5.2, 5.0, 4.9, 5.3, 5.1])
during_pilot = np.array([3.8, 3.7, 3.9, 3.6, 3.8])

# Paired t-test (Rel = Related samples)
t_stat, p_val = stats.ttest_rel(before_pilot, during_pilot)

print(f"P-value: {p_val:.5f}")

if p_val < 0.05 and t_stat > 0: 
    # Note: t_stat sign depends on order (before - during)
    print("Result: Pilot Statistically Significantly Improved the Process!")
else:
    print("Result: No significant difference found.")`,
                    expected_output_en: "P-value < 0.05 confirmation.",
                    datasets_used: [],
                    learning_points_en: ["Statistical significance", "Before vs After comparison"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Why is Piloting critical?",
                suggested_questions: [
                    { question_vi: "Pilot khác gì sản xuất thật?", question_en: "How is a Pilot different from actual production?" },
                    { question_vi: "Khi nào thì kích hoạt Kế hoạch Quay đầu?", question_en: "When trigger the Rollback Plan?" }
                ],
                hint_levels: ["Controlled scope", "Safety issues or major failure", "Limit financial loss"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Improve", location_hint_en: "Implementation" }
            ],
            flashcards: [
                {
                    id: "fc_pilot_01",
                    question_en: "What implies you should verify a Pilot using a Paired t-test?",
                    answer_vi: "When comparing the SAME process/line Before and After the change.",
                    tags_en: ["Improve", "Pilot"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_pilot_02",
                    question_en: "What must be updated immediately upon implementing a Pilot solution?",
                    answer_vi: "The FMEA (to account for new risks introduced by the change).",
                    tags_en: ["Improve", "Risk"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 20,
            prerequisites_ids: ["mod_improve_doe_02"]
        },
        {
            id: "mod_improve_regression",
            order: 4.5,
            title_en: "Advanced Regression & Modeling (Multiple Regression)",
            summary_vi: "Hồi quy đa biến, R-squared hiệu chỉnh, Đa cộng tuyến (VIF) và Stepwise.",
            summary_en: "Multiple Regression, Adjusted R-squared, VIF, and Model Selection.",
            key_metrics_en: ["Y=f(x1, x2...)", "Adjusted R-squared", "VIF > 5 (Bad)", "Parsimony"],
            key_points_en: [
                "Multiple Regression: Determines contribution of each x to Y.",
                "Adjusted R-squared: Penalizes useless variables (Vanity Metric fix).",
                "VIF (Variance Inflation Factor): Detects Multicollinearity (Inputs fighting).",
                "Model Selection: Simplest model (Parsimony / Occam's Razor) is usually best."
            ],
            explanation_vi: `
**1. Hồi Quy Đa Biến (Multiple Regression)**
Đời thực hiếm khi đơn giản là 1-1.
*   **Simple:** Y = f(x). (Ví dụ: Lương = f(Kinh nghiệm)).
*   **Multiple:** Y = f($x_1, x_2, \dots, x_n$). (Ví dụ: Lương = f(Kinh nghiệm, Bằng cấp, Quan hệ)).
*   **Mục tiêu:** Tìm ra hệ số đóng góp riêng biệt của từng nhân tố.

━━━━━━

**2. Cái bẫy R-squared (The R-squared Trap)**
*   **R-squared ($R^2$):** Đo độ phù hợp của mô hình.
*   **Cái bẫy:** Mỗi khi bạn thêm 1 biến (dù vô dụng như "Chu kỳ trăng"), $R^2$ vẫn tăng. Nó là "Chỉ số phù phiếm" (Vanity Metric).
*   **Giải pháp - Adjusted R-squared ($R^2_{adj}$):** Nó sẽ **phạt** (trừ điểm) mô hình nếu bạn thêm biến rác.
    *   *Quy tắc:* Luôn dùng $R^2_{adj}$ khi so sánh các mô hình đa biến.

━━━━━━

**3. Đa Cộng Tuyến & VIF (Multicollinearity)**
*   **Vấn đề:** Khi hai biến đầu vào ($x_1, x_2$) quá giống nhau (Tương quan cao).
    *   *Ví dụ:* Bạn dùng cả "Chiều cao (cm)" và "Chiều cao (inch)" để dự đoán Cân nặng. Mô hình sẽ bị "lú" không biết công lao thuộc về ai.
*   **Công cụ phát hiện - VIF (Variance Inflation Factor):**
    *   **VIF = 1:** Tuyệt vời.
    *   **VIF > 5:** Báo động đỏ. Hai biến đang "đánh nhau". Hãy vứt bớt 1 biến.

━━━━━━

**4. Chọn Mô Hình (Stepwise Regression)**
Thuật toán tự động tìm "Dream Team" các biến:
*   **Forward:** Thêm biến mạnh nhất vào trước -> Thêm tiếp... -> Dừng.
*   **Backward:** Cho tất cả vào -> Đá biến yếu nhất ra -> Đá tiếp... -> Dừng.
*   **Parsimony (Sự tối giản):** Mô hình tốt nhất thường là mô hình đơn giản nhất giải thích được dữ liệu.
            `,
            explanation_en: `
**1. Multiple Regression**
Real-world problems are rarely caused by a single factor.
*   **Simple:** Y = f(x).
*   **Multiple:** Y = f($x_1, x_2, \dots, x_n$).
*   **Goal:** Define the exact function describing how multiple inputs define the output.

━━━━━━

**2. The R-squared Trap**
*   **The Trap:** Regular $R^2$ always goes up when you add variables, even useless ones. It's a "Vanity Metric".
*   **The Fix - Adjusted R-squared ($R^2_{adj}$):** It imposes a **penalty** for adding noise.
    *   *Rule:* If you add a variable and $R^2_{adj}$ drops, remove it.

━━━━━━

**3. Multicollinearity & VIF**
*   **Problem:** When inputs ($x_1, x_2$) are highly correlated, the model gets confused about which one drives Y.
    *   *Analogy:* Two people shouting the exact same answer. You hear the answer (Y), but don't know who to credit (x).
*   **Detection - VIF (Variance Inflation Factor):**
    *   **VIF = 1:** Perfect.
    *   **VIF > 5:** High Multicollinearity. Redundant. Remove one.

━━━━━━

**4. Stepwise Regression**
Automated "Best Fit" finding:
*   **Forward:** Start empty, add strongest predictors.
*   **Backward:** Start full, remove weakest predictors.
*   **Parsimony:** Occam's Razor applies—the simplest sufficient model is best.
            `,
            recommended_tools_en: ["Minitab Stepwise", "VIF check"],
            python_focus_en: ["statsmodels.stats.outliers_influence.variance_inflation_factor"],
            code_blocks: [
                {
                    id: "code_reg_vif",
                    title_en: "Detecting Multicollinearity with VIF",
                    context_en: `Situation: You built a model to predict 'House Price'.
Predictors: 'Square Feet' and 'Number of Rooms'.
Problem: These two are likely correlated (Big houses have more rooms).
Goal: Check VIF to see if we should drop one.`,
                    description_vi: "Tính chỉ số VIF bằng Python. Nếu VIF > 5, biến đó bị đa cộng tuyến (thừa thãi).",
                    code_template: `import pandas as pd
from statsmodels.stats.outliers_influence import variance_inflation_factor
from statsmodels.tools.tools import add_constant

# Data: House Price Factors
# X1: Square Feet
# X2: Number of Rooms (Likely correlated with Sq Feet!)
# X3: Age of House
data = {
    'Sq_Ft': [1500, 2000, 2500, 1500, 2000],
    'Rooms': [3, 4, 5, 3, 4],  # Perfect correlation with Sq_Ft / 500
    'Age': [10, 5, 2, 20, 15]
}
df = pd.DataFrame(data)

# VIF requires a constant term (intercept) to work correctly
X = add_constant(df)

# Calculate VIF for each variable
vif_data = pd.DataFrame()
vif_data["Variable"] = X.columns
vif_data["VIF"] = [variance_inflation_factor(X.values, i) 
                   for i in range(X.shape[1])]

print(vif_data)

# Expected Result:
# Sq_Ft and Rooms will have Infinite (inf) or very high VIF 
# because they are perfectly correlated in this dummy data.
# Action: Drop 'Rooms' (Keep the more precise 'Sq_Ft').`,
                    expected_output_en: "High VIF values for correlated variables.",
                    datasets_used: [],
                    learning_points_en: ["VIF calculation", "Identifying redundancy"],
                    difficulty_en: "Advanced"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Multicollinearity and VIF.",
                suggested_questions: [
                    { question_vi: "VIF bao nhiêu là cao?", question_en: "What VIF value is considered high?" },
                    { question_vi: "Tại sao R-squared lại lừa dối?", question_en: "Why is regular R-squared misleading?" }
                ],
                hint_levels: ["Redundant information", "Inflation of variance", "Use Adjusted R-sq"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Improve", location_hint_en: "Regression Analysis" }
            ],
            flashcards: [
                {

                    id: "fc_reg_01",
                    question_en: "Which metric should be used effectively to compare multiple regression models?",
                    answer_vi: "Adjusted R-squared (R² hiệu chỉnh).",
                    tags_en: ["Improve", "Regression"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_reg_02",
                    question_en: "What should you do if a variable has a VIF > 5?",
                    answer_vi: "Remove it. It indicates High Multicollinearity (Redundancy).",
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
