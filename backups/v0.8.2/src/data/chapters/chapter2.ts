import { Chapter, Module } from "../../types/course";

export const chapterDefine: Chapter = {
    id: "ch_define",
    order: 2,
    title_en: "Define Phase",
    goal_vi: "Xác định rõ vấn đề, mục tiêu dự án và yêu cầu của khách hàng.",
    goal_en: "Clearly define the problem, project goals, and customer requirements.",
    iassc_topics_en: [
        "1.1 The Basics of Six Sigma",
        "1.2 The Fundamentals of Six Sigma",
        "1.3 Selecting Lean Six Sigma Projects",
        "1.4 The Lean Enterprise"
    ],
    modules: [
        {
            id: "mod_define_01",
            order: 1,
            title_en: "Project Selection & Business Case",
            summary_vi: "Lựa chọn dự án dựa trên căn chỉnh chiến lược và phân biệt giữa Chi phí Chất lượng (COQ) và Chi phí Chất lượng Kém (COPQ).",
            summary_en: "Selecting projects based on strategic alignment and financial justification, distinguishing between Cost of Quality (COQ) and Cost of Poor Quality (COPQ).",
            key_metrics_en: ["COQ vs. COPQ", "ROI & NPV", "Hard vs. Soft Savings"],
            key_points_en: [
                "COPQ: Specifically refers to Internal & External Failures. It is the cost of NOT doing it right the first time.",
                "1-10-100 Rule: Prevention costs $1, Correction (Internal) costs $10, Failure (External) costs $100.",
                "Business Case: Must link the project to Strategic Goals and answer 'Why do this project now?'.",
                "Pareto Priority Index (PPI): High PPI = High priority project."
            ],
            explanation_vi: `
**1. Business Case & Project Selection**
Dự án phải tác động đến "Bottom Line" (Lợi nhuận ròng).

━━━━━━

• **Hard Savings (Tiết kiệm cứng):** Giảm chi phí hữu hình, đo lường được, giải phóng tiền mặt thực sự hoặc giảm ngân sách (VD: Giảm nhân sự, giảm chi phí nguyên liệu).

• **Soft Savings (Tiết kiệm mềm/Cost Avoidance):** Lợi ích vô hình hoặc tránh chi phí tương lai. Không giảm ngân sách hiện tại ngay lập tức (VD: Tránh chi phí, tăng lòng trung thành khách hàng, giảm rủi ro).

• **Công cụ lựa chọn:**
  - **Pareto Priority Index (PPI):** Công thức ưu tiên dự án dựa trên tiết kiệm và xác suất thành công.
  - **Project Selection Matrix:** Chấm điểm dự án theo tiêu chí như "Tác động đến Khách hàng", "Sự hỗ trợ từ Sponsor", "Tính khả thi".

━━━━━━

**2. Cấu trúc Chi phí Chất lượng (COQ)**
📌 Công thức: **Total COQ = Cost of Good Quality + Cost of Poor Quality (COPQ)**

**Cost of Good Quality (Đầu tư):**
1. **Prevention Costs (Chi phí Phòng ngừa):** Chi phí ngăn ngừa lỗi trước khi xảy ra (Đào tạo, Review thiết kế, Poka-yoke). *Đầu tư hiệu quả nhất!*
2. **Appraisal Costs (Chi phí Đánh giá):** Chi phí phát hiện lỗi (Kiểm tra, Thử nghiệm, Audit, Hiệu chuẩn).

**Cost of Poor Quality - COPQ (Lãng phí):**
3. **Internal Failure Costs (Lỗi Nội bộ):** Lỗi phát hiện TRƯỚC khi đến khách hàng (Phế liệu, Làm lại, Kiểm tra lại, Downtime).
4. **External Failure Costs (Lỗi Bên ngoài):** Lỗi do KHÁCH HÀNG phát hiện (Bảo hành, Trả hàng, Kiện tụng, Mất doanh số). *Đắt nhất!*

━━━━━━

**The Iceberg Analogy (Ẩn dụ Tảng băng):**
🧊 **Visible Costs (Đỉnh):** Phế liệu, Làm lại, Kiểm tra.
🌊 **Hidden Costs (Dưới nước):** Mất lòng trung thành khách hàng, thời gian kỹ sư, phạt giao hàng trễ, sa sút tinh thần. COPQ tập trung vào các chi phí ẩn này!

━━━━━━

**3. Chỉ số Tài chính**
• **ROI (Return on Investment):** \`(Net Benefits / Project Cost) x 100%\`
• **Payback Period:** \`Project Cost / Annual Cash Flow\` - Thời gian thu hồi vốn đầu tư.
• **Net Present Value (NPV):** Giá trị của dòng tiền tương lai theo đồng tiền hôm nay (tính đến lạm phát/lãi suất).

💡 **Quy tắc 1-10-100:** Phòng ngừa tốn $1, Sửa lỗi nội bộ tốn $10, Lỗi bên ngoài tốn $100.
            `,
            explanation_en: `
**1. Business Case & Project Selection**
Projects must impact the "Bottom Line."

━━━━━━

• **Hard Savings:** Tangible, measurable reductions that physically release cash or reduce the budget (e.g., Headcount reduction, lower material costs).

• **Soft Savings (Cost Avoidance):** Intangible benefits or avoiding future costs. Does not immediately reduce the current budget (e.g., Cost avoidance, improved customer loyalty, risk reduction).

• **Selection Tools:**
  - **Pareto Priority Index (PPI):** A formula to prioritize projects based on savings and probability of success.
  - **Project Selection Matrix:** Scoring projects based on criteria like "Impact on Customer," "Sponsorship," and "Feasibility."

━━━━━━

**2. Cost of Quality (COQ) Structure**
📌 Formula: **Total COQ = Cost of Good Quality + Cost of Poor Quality (COPQ)**

**Cost of Good Quality (Investment):**
1. **Prevention Costs:** Costs to prevent defects before they happen (Training, Design reviews, Poka-yoke). *Most effective investment!*
2. **Appraisal Costs:** Costs to detect defects (Inspection, Testing, Audits, Calibration).

**Cost of Poor Quality - COPQ (Waste):**
3. **Internal Failure Costs:** Defects found BEFORE reaching the customer (Scrap, Rework, Re-testing, Downtime).
4. **External Failure Costs:** Defects found BY the customer (Warranty, Returns, Lawsuits, Lost Sales). *Most expensive!*

━━━━━━

**The Iceberg Analogy:**
🧊 **Visible Costs (Tip):** Scrap, Rework, Inspection.
🌊 **Hidden Costs (Underwater):** Lost customer loyalty, engineering time, late delivery penalties, morale loss. COPQ focuses heavily on these hidden costs!

━━━━━━

**3. Financial Metrics**
• **ROI (Return on Investment):** \`(Net Benefits / Project Cost) x 100%\`
• **Payback Period:** \`Project Cost / Annual Cash Flow\` - Time to recover the investment.
• **Net Present Value (NPV):** The value of future cash flows in today's dollars (accounting for inflation/interest).

💡 **1-10-100 Rule:** Prevention costs $1, Correction (Internal) costs $10, Failure (External) costs $100.
            `,
            recommended_tools_en: ["Project Selection Matrix", "Pareto Chart"],
            python_focus_en: ["Calculation"] as string[],
            code_blocks: [
                {
                    id: "code_define_roi",
                    title_en: "Calculating Project ROI & Payback Period",

                    // NEW: Detailed concept explanations
                    concept_explanation_en: `**Return on Investment (ROI)** measures how profitable a Six Sigma project is relative to its cost.

A higher ROI means better financial return. Six Sigma projects typically aim for **ROI > 100%** to be considered worthwhile.

**Payback Period** tells you how quickly you recover your initial investment. Projects with **Payback < 1 year** are considered excellent and are often prioritized in project selection.

**Why This Matters for Green Belt Exam:**
- You may be asked to calculate ROI given project costs and savings
- Understanding the relationship between ROI and Payback is tested
- Project selection criteria often include financial metrics`,

                    concept_explanation_vi: `**Lợi nhuận đầu tư (ROI)** đo lường mức độ sinh lời của dự án Six Sigma so với chi phí.

ROI càng cao thì lợi nhuận tài chính càng tốt. Dự án Six Sigma thường nhắm đến **ROI > 100%** để được coi là xứng đáng.

**Thời gian hoàn vốn** cho biết bạn thu hồi vốn đầu tư nhanh như thế nào. Dự án có **thời gian hoàn vốn < 1 năm** được coi là xuất sắc và thường được ưu tiên chọn.

**Tại sao quan trọng cho kỳ thi Green Belt:**
- Bạn có thể được yêu cầu tính ROI từ chi phí và tiết kiệm dự án
- Mối quan hệ giữa ROI và Payback được kiểm tra
- Tiêu chí chọn dự án thường bao gồm các chỉ số tài chính`,

                    // NEW: Formula breakdown
                    formula_breakdown: {
                        formula: "ROI = (Net Benefits / Project Cost) × 100%",
                        variables: [
                            {
                                name: "Net Benefits",
                                description_en: "Total savings minus project cost (what you gain after paying for the project)",
                                description_vi: "Tổng tiết kiệm trừ chi phí dự án (phần bạn thu được sau khi trả chi phí)",
                                example_value: "$40,000"
                            },
                            {
                                name: "Project Cost",
                                description_en: "Total investment in the project (training, tools, consultant fees, etc.)",
                                description_vi: "Tổng đầu tư vào dự án (đào tạo, công cụ, phí tư vấn, v.v.)",
                                example_value: "$5,000"
                            },
                            {
                                name: "Payback Period",
                                description_en: "Time to recover investment = Project Cost / Annual Savings",
                                description_vi: "Thời gian thu hồi vốn = Chi phí dự án / Tiết kiệm hàng năm",
                                example_value: "0.33 years"
                            }
                        ]
                    },

                    // NEW: Step-by-step walkthrough
                    step_by_step_en: [
                        "**Step 1: Define the function** - We create a reusable function `calculate_roi()` that takes three inputs: investment amount, annual savings, and project duration in years.",
                        "**Step 2: Calculate total savings** - Multiply annual savings by the number of years to get the cumulative benefit over the project lifetime.",
                        "**Step 3: Calculate net profit** - Subtract the initial investment from total savings. This is your actual gain.",
                        "**Step 4: Calculate ROI percentage** - Divide net profit by investment and multiply by 100 to express as a percentage.",
                        "**Step 5: Calculate payback period** - Divide investment by annual savings to find how many years it takes to recover the initial cost.",
                        "**Step 6: Evaluate the project** - If payback < 1 year, it's an excellent project. If ROI > 100%, the project doubles your investment."
                    ],
                    step_by_step_vi: [
                        "**Bước 1: Định nghĩa hàm** - Tạo hàm tái sử dụng `calculate_roi()` nhận 3 đầu vào: số tiền đầu tư, tiết kiệm hàng năm, và thời gian dự án theo năm.",
                        "**Bước 2: Tính tổng tiết kiệm** - Nhân tiết kiệm hàng năm với số năm để có lợi ích tích lũy trong suốt vòng đời dự án.",
                        "**Bước 3: Tính lợi nhuận ròng** - Lấy tổng tiết kiệm trừ đi vốn đầu tư ban đầu. Đây là phần lợi nhuận thực tế.",
                        "**Bước 4: Tính phần trăm ROI** - Chia lợi nhuận ròng cho vốn đầu tư và nhân 100 để biểu thị dạng phần trăm.",
                        "**Bước 5: Tính thời gian hoàn vốn** - Chia vốn đầu tư cho tiết kiệm hàng năm để tìm số năm cần thu hồi chi phí ban đầu.",
                        "**Bước 6: Đánh giá dự án** - Nếu hoàn vốn < 1 năm, đó là dự án xuất sắc. Nếu ROI > 100%, dự án gấp đôi vốn đầu tư."
                    ],

                    // NEW: AI Tutor prompts
                    ai_tutor_prompts: [
                        "Why is ROI > 100% considered good for Six Sigma?",
                        "What's the difference between ROI and NPV?",
                        "How does Payback Period relate to project selection?",
                        "Giải thích quy tắc 1-10-100 về chi phí chất lượng",
                        "Làm sao để tính COPQ từ dữ liệu thực tế?"
                    ],

                    // NEW: Interactive challenges
                    challenges: [
                        {
                            id: "challenge_npv",
                            prompt_en: "Modify the code to also calculate NPV (Net Present Value) with a discount rate of 10%.",
                            prompt_vi: "Sửa đổi code để tính thêm NPV (Giá trị hiện tại ròng) với lãi suất chiết khấu 10%.",
                            hint_en: "NPV = Σ [Cash Flow / (1 + r)^n] - Initial Investment. Use a loop to discount each year's savings.",
                            hint_vi: "NPV = Σ [Dòng tiền / (1 + r)^n] - Đầu tư ban đầu. Dùng vòng lặp để chiết khấu tiết kiệm mỗi năm.",
                            solution_code: "# Add this: npv = sum([save/(1+0.10)**i for i in range(1, yrs+1)]) - inv"
                        }
                    ],

                    // Original fields
                    description_vi: "Tính toán lợi nhuận đầu tư (ROI) và thời gian hoàn vốn bằng Python. Đây là kỹ năng cơ bản để đánh giá tính khả thi tài chính của dự án Six Sigma.",
                    code_template: `def calculate_roi(investment, annual_savings, years):
    total_savings = annual_savings * years
    net_profit = total_savings - investment
    roi = (net_profit / investment) * 100
    payback_years = investment / annual_savings
    
    return roi, net_profit, payback_years

# Example: Invest $5,000 to save $15,000/year for 3 years
inv = 5000
save = 15000
yrs = 3

project_roi, profit, payback = calculate_roi(inv, save, yrs)
print(f"Investment: \${inv}")
print(f"Net Profit (3 yrs): \${profit}")
print(f"ROI: {project_roi:.1f}%")
print(f"Payback Period: {payback:.2f} years")
if payback < 1:
    print("-> ✅ Excellent Project (Payback < 1 year)")`,
                    expected_output_en: "Investment: $5000, Net Profit: $40000, ROI: 800.0%, Payback: 0.33 years",
                    datasets_used: [],
                    learning_points_en: ["ROI Calculation", "Payback Period", "Financial Project Justification"],
                    difficulty_en: "Beginner"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain COPQ categories with examples. Explain Financial Metrics (ROI, NPV, Payback).",
                suggested_questions: [
                    { question_vi: "Chi phí bảo hành là loại COPQ nào?", question_en: "Warranty cost is which type of COPQ?" },
                    { question_vi: "Tại sao nên tập trung vào Prevention Cost?", question_en: "Why focus on Prevention Cost?" },
                    { question_vi: "Sự khác biệt giữa Hard Savings và Soft Savings?", question_en: "What is the difference between Hard Savings and Soft Savings?" },
                    { question_vi: "Làm sao tính ROI cho dự án?", question_en: "How to calculate ROI for a project?" },
                    { question_vi: "Tại sao Internal Failure ít tốn kém hơn External Failure?", question_en: "Why is Internal Failure less expensive than External Failure?" }
                ],
                hint_levels: ["Internal vs External", "1-10-100 Rule", "Budget impact"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 3", location_hint_en: "Project Charter & COPQ" }
            ],
            flashcards: [
                {
                    id: "fc_define_01",
                    question_en: "What type of cost is 'Inspection and Testing'?",
                    answer_vi: "Appraisal Cost (Chi phí đánh giá).",
                    tags_en: ["COPQ", "Financial"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_02",
                    question_en: "Which represents 'Hard Savings'?",
                    answer_vi: "Reduction in scrap/waste (Giảm phế liệu) - reduces actual budget.",
                    tags_en: ["Financial"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_03",
                    question_en: "According to the 1-10-100 Rule, which is the most expensive cost?",
                    answer_vi: "Failure (External) - $100. (Lỗi phát hiện bởi khách hàng).",
                    tags_en: ["COPQ", "1-10-100 Rule"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_04",
                    question_en: "What is the formula for ROI?",
                    answer_vi: "(Net Benefits / Project Cost) x 100%.",
                    tags_en: ["Financial", "Metrics"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_05",
                    question_en: "What does COPQ stand for?",
                    answer_vi: "Cost of Poor Quality (Chi phí chất lượng kém).",
                    tags_en: ["COPQ", "Definitions"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],

            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_foundations_03"]
        },
        {
            id: "mod_define_02",
            order: 2,
            title_en: "Voice of Customer (VOC) & Kano Model",
            summary_vi: "Thu thập nhu cầu khách hàng qua VOC, chuyển dịch thành các chỉ số CTQ đo lường được, và ưu tiên chúng bằng Mô hình Kano.",
            summary_en: "Capturing customer needs through VOC, translating them into measurable CTQs, and prioritizing them using the Kano Model.",
            key_metrics_en: ["VOC", "CTQ", "KPOV", "Likert Scale"],
            key_points_en: [
                "Translation: VOC is subjective (User language); CTQ is objective (Engineering language).",
                "Structure: Need -> Driver -> Requirement (CTQ).",
                "Kano Logic: Fulfill Must-Be first, compete on Performance, win loyalty with Delighters.",
                "Data Types: Reactive (Complaints) vs. Proactive (Surveys)."
            ],
            explanation_vi: `
**1. Voice of Customer (VOC)**
VOC là "tiếng nói thô" từ khách hàng. Nó mô tả khách hàng MUỐN gì, chứ không phải làm thế nào để đạt được.

📍 **So sánh Dữ liệu VOC:**

| Đặc điểm | Reactive Data (Phản ứng) | Proactive Data (Chủ động) |
| :--- | :--- | :--- |
| **Nguồn** | Khiếu nại, Trả hàng, Bảo hành | Khảo sát, Phỏng vấn, Focus Group |
| **Thời điểm** | Sau khi chuyện đã xảy ra | Trước hoặc trong quá trình phát triển |
| **Thông tin** | Cho biết "Bạn đã sai ở đâu" | Cho biết "Khách hàng muốn gì sắp tới" |
| **Chi phí** | Rất đắt (Mất khách, sửa chữa) | Rẻ (Chỉ tốn công thám sát) |

━━━━━━

**2. CTQ Tree (Cây chất lượng quan trọng)**
VOC thường mơ hồ. Bạn phải dịch nó thành Yêu cầu kỹ thuật (Requirement).
- **Need (Nhu cầu):** "Tôi muốn pizza ngon." *(Quá chung chung)*
- **Driver (Yếu tố):** "Độ nóng", "Hương vị", "Thời gian".
- **CTQ (Yêu cầu đo được):** "Pizza phải giao trên 60 độ C."

━━━━━━

**3. Mô hình Kano (Ưu tiên tính năng)**
Không phải tính năng nào cũng tạo ra sự hài lòng giống nhau.

🔴 **Must-Be (Phải có):**
- Đây là tiêu chuẩn tối thiểu.
- Có thì khách **không khen**, nhưng thiếu thì khách **sẽ chửi**.
- *VD:* Nhà vệ sinh sạch, Bánh xe cho ô tô.

🔵 **Performance (Hiệu suất):**
- Càng nhiều càng tốt. Tỉ lệ thuận với sự hài lòng.
- Đây là nơi các công ty cạnh tranh nhau.
- *VD:* Tốc độ internet, Thời lượng pin, Dung lượng GB.

🟡 **Delighters (Gây thích thú):**
- Khách hàng không ngờ tới.
- Thiếu cũng không sao, nhưng có thì **Wow!**.
- *VD:* Quà tặng bất ngờ, Gói nâng cấp miễn phí.
            `,
            explanation_en: `
**1. Voice of Customer (VOC)**
VOC is the "raw" feedback from the customer. It describes WHAT the customer wants, not HOW to achieve it.

📍 **VOC Data Comparison:**

| Feature | Reactive Data | Proactive Data |
| :--- | :--- | :--- |
| **Source** | Complaints, Returns, Warranty Claims | Surveys, Interviews, Focus Groups |
| **Timing** | After the meaningful event (Failure) | Before or during development |
| **Insight** | Tells you "Where you failed" | Tells you "What they want next" |
| **Cost** | High (Lost loyalty, rework) | Low (Research cost only) |

━━━━━━

**2. CTQ Tree (Critical to Quality)**
VOC is typically vague. You must translate it into measurable Requirements.
- **Need:** "I want a good pizza." *(Too Vague)*
- **Driver:** "Temperature", "Taste", "Speed".
- **CTQ (Measurable):** "Pizza delivered at > 60°C temp."

━━━━━━

**3. Kano Model (Feature Prioritization)**
Not all features create satisfaction equally.

🔴 **Must-Be (Threshold Attributes):**
- The minimum entry requirement.
- If present: Customer is **Neutral**.
- If missing: Customer is **Dissatisfied**.
- *Ex:* Clean restrooms, Brakes on a car.

🔵 **Performance (Linear Attributes):**
- "More is Better." Satisfaction increases linearly with performance.
- Direct competitive battleground.
- *Ex:* Internet speed, MPG, Battery life.

🟡 **Delighters (Exciters):**
- Unexpected features. The "Wow" factor.
- If missing: Customer is **Neutral** (didn't expect it).
- If present: Customer is **Delighted**.
- *Ex:* Free upgrade, Unexpected gift.
            `,
            recommended_tools_en: ["CTQ Tree", "Kano Survey", "Likert Scale"],
            python_focus_en: ["Data Visualization"],
            code_blocks: [
                {
                    id: "code_define_kano",
                    title_en: "Visualizing the Kano Model",
                    title_vi: "Trực quan hóa Mô hình Kano",
                    description_vi: "Mô phỏng và vẽ biểu đồ 3 loại yêu cầu trong Mô hình Kano bằng Python.",
                    concept_explanation_en: `This code simulates and plots the **Kano Model** curves.
- **Must-Be (Red)**: Satisfaction drops rapidly if performance is low. It never goes above Neutral (0).
- **Performance (Blue)**: Linear relationship. Better performance = Higher satisfaction.
- **Delighters (Green)**: Satisfaction grows exponentially ("Wow" factor) as performance increases.`,
                    concept_explanation_vi: `Mã này mô phỏng và vẽ các đường cong **Mô hình Kano**.
- **Must-Be (Đỏ)**: Hài lòng giảm thê thảm nếu hiệu suất kém. Không bao giờ vượt quá mức Trung lập (0).
- **Performance (Xanh dương)**: Tuyến tính. Tốt hơn = Hài lòng hơn.
- **Delighters (Xanh lá)**: Hài lòng tăng theo cấp số nhân (Yếu tố Wow).`,
                    code_template: `import matplotlib.pyplot as plt
import numpy as np

# Create data range (Performance: Low to High)
x = np.linspace(0.1, 10, 100)

# 1. Must-Be (Red): Logarithmic curve aiming for Neutral (0)
# If x is low, y is very negative. If x is high, y approaches 0.
y_must_be = -10 / x 

# 2. Performance (Blue): Linear
y_performance = x - 5  # Centered at 0

# 3. Delighter (Green): Exponential start
y_delighter = np.exp(x/3) - 1

# Plot Setup
plt.figure(figsize=(10, 6))

# Plot Lines
plt.plot(x, y_must_be, 'r-', linewidth=3, label='Must-Be (Basic)')
plt.plot(x, y_performance, 'b-', linewidth=3, label='Performance (Linear)')
plt.plot(x, y_delighter, 'g-', linewidth=3, label='Delighter (Exciter)')

# Add Neutral Line (y=0)
plt.axhline(0, color='gray', linestyle='--', alpha=0.5)
plt.text(0.5, 0.2, 'Neutral Zone', color='gray')

# Styling
plt.title('Kano Model Visualization', fontsize=14)
plt.xlabel('Degree of Implementation (Performance)', fontsize=12)
plt.ylabel('Customer Satisfaction', fontsize=12)
plt.legend()
plt.grid(True, alpha=0.3)

# Show Plot
plt.ylim(-10, 15)
plt.show()`,
                    expected_output_en: "A plot showing the three distinct Kano curves.",
                    expected_output_vi: "Biểu đồ hiển thị 3 đường cong Kano riêng biệt.",
                    datasets_used: [],
                    learning_points_en: ["Data Visualization", "Kano Logic"],
                    difficulty_en: "Beginner",
                    ai_tutor_prompts: ["How would you plot 'Reverse Quality'?", "Why does the Red line never go above 0?"],
                    challenges: [
                        {
                            id: "ch_kano_01",
                            prompt_en: "Challenge: Add the 'Indifferent' Line. Create a 4th category called 'Indifferent' where Satisfaction does not change regardless of Performance (y = 0). Plot it in Yellow.",
                            hint_en: "Use plt.axhline or create a y_indifferent array of zeros.",
                            solution_code: "y_indifferent = np.zeros_like(x)\nplt.plot(x, y_indifferent, 'y-', linewidth=3, label='Indifferent')"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "You are a Product Manager expert in VOC and Kano Model. Explain differences between Reactive and Proactive data.",
                suggested_questions: [
                    { question_vi: "Wifi miễn phí là Must-be hay Delighter?", question_en: "Is free Wifi a Must-be or Delighter?" },
                    { question_vi: "Ví dụ về Proactive Data?", question_en: "Example of Proactive Data?" },
                    { question_vi: "CTQ Tree khác gì với VOC?", question_en: "How is CTQ Tree different from VOC?" },
                    { question_vi: "Tại sao Must-Be không bao giờ tạo ra sự hài lòng?", question_en: "Why does Must-Be never create satisfaction?" },
                    { question_vi: "Làm sao để đo lường VOC?", question_en: "How to measure VOC?" }
                ],
                hint_levels: ["Context dependent", "Future needs vs Past complaints", "Measurable vs Vague"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 2", location_hint_en: "VOC & Kano" }
            ],
            flashcards: [
                {
                    id: "fc_define_02_01",
                    question_en: "What connects a vaguely defined Customer Need to a specific Requirement?",
                    answer_vi: "Drivers (Yếu tố dẫn dắt) in the CTQ Tree.",
                    tags_en: ["CTQ", "VOC"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_02_02",
                    question_en: "Complaints and Warranty Claims are what type of data?",
                    answer_vi: "Reactive Data (Dữ liệu phản ứng).",
                    tags_en: ["VOC", "Data Types"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_02_03",
                    question_en: "In the Kano Model, which feature leads to dissatisfaction if missing but is just neutral if present?",
                    answer_vi: "Must-Be (Basic Quality).",
                    tags_en: ["Kano", "VOC"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_02_04",
                    question_en: "Which Kano category does 'Performance' (Blue line) represent?",
                    answer_vi: "More is Better (Càng nhiều càng tốt). Satisfaction increases linearly.",
                    tags_en: ["Kano"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_02_05",
                    question_en: "Does VOC tell you HOW to fix the problem?",
                    answer_vi: "No. VOC tells you WHAT the customer wants. You need to Translate it to CTQs.",
                    tags_en: ["VOC", "Definitions"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_define_01"]
        },
        {
            id: "mod_define_03",
            order: 3,
            title_en: "Project Charter & SIPOC",
            summary_vi: "Xác định phạm vi dự án bằng SIPOC và chính thức hóa thỏa thuận giữa các bên bằng Hiến chương Dự án (Project Charter).",
            summary_en: "Defining project boundaries using SIPOC and formalizing the agreement via the Project Charter (The Contract).",
            key_metrics_en: ["Scope Creep", "SMART Goals", "Cycle Time"],
            key_points_en: [
                "Charter: The official authorization 'Contract'. No Sponsor signature = No Project.",
                "Problem Statement: Focuses on the Symptom (Y), NOT the Cause (x) or Solution. Must utilize the 4Ws (What, Where, When, Magnitude).",
                "Scope Creep: The tendency for a project to expand beyond original objectives. Defense: Clear 'Out-of-Scope' list.",
                "SIPOC: High-level map (30,000 ft view) to define 'Start' and 'Stop' points. Often filled P->O->C->I->S."
            ],
            explanation_vi: `
**1. Các Thành Phần Của Hiến Chương (Project Charter Elements)**
Hiến chương là một "văn bản sống" và là hợp đồng của dự án.
- **Business Case:** Tại sao làm dự án này ngay bây giờ? Liên kết với chiến lược công ty và tác động tài chính (ROI).
- **Problem Statement (Tuyên bố vấn đề):** Mô tả "nỗi đau". Phải chứa 4W:
  - **What:** Cái gì sai?
  - **Where:** Xảy ra ở đâu?
  - **When:** Từ khi nào?
  - **Magnitude:** Mức độ thế nào (Bao nhiêu tiền)?
  - ⚠️ *Quy tắc:* **Không Giải pháp (No Solutions)** và **Không Đổ lỗi (No Blame)**.
  - *Ví dụ:* "Quy trình thanh toán (Where) có tỷ lệ lỗi 15% (Magnitude) từ tháng 1/2023 (When), gây thiệt hại $20k/tháng (Impact)."
- **Goal Statement:** Xác định "Trạng thái mong muốn". Phải **SMART** (Specific, Measurable, Attainable, Relevant, Time-bound).
- **Scope (Phạm vi):** Dùng "In-Scope" và "Out-of-Scope" để định ranh giới. Ngăn chặn **Scope Creep** (dự án phình to không kiểm soát).
- **Team:** **Sponsor** (Cấp vốn/Phê duyệt) và **Process Owner** (Nhận bàn giao sau dự án).

━━━━━━

**2. Sơ Đồ SIPOC (SIPOC Diagram)**
Cái nhìn tổng quan (30,000-foot view) để xác minh phạm vi.
- **S**uppliers: Ai cung cấp đầu vào?
- **I**nputs: Nguyên liệu, thông tin cần thiết.
- **P**rocess: Các bước chính (Giới hạn 5-7 bước).
- **O**utputs: Sản phẩm/Dịch vụ đầu ra.
- **C**ustomers: Ai nhận đầu ra? (Nội bộ hoặc Bên ngoài).

💡 *Mẹo:* SIPOC thường được điền ngược: **P → O → C → I → S** để đảm bảo quy trình thực sự phục vụ khách hàng.
            `,
            explanation_en: `
**1. Project Charter Elements**
The Charter is a "living document" and a contract.
- **Business Case:** Why do this project now? Connects to organizational strategy and financial impact (ROI).
- **Problem Statement:** Describes the "pain". Must contain the 4 Ws:
  - **What** is wrong?
  - **Where** does it happen?
  - **When** did it start?
  - **Magnitude** (How much/Cost).
  - ⚠️ *Critical Rule:* **No Solutions** and **No Blame** in the statement.
  - *Example:* "The billing process (Where) has a 15% error rate (Magnitude) since Jan 2023 (When), costing $20k/month."
- **Goal Statement:** Defines the "Desired State". Must be **SMART** (Specific, Measurable, Attainable, Relevant, Time-bound).
- **Scope:** Uses "In-Scope" and "Out-of-Scope" to define boundaries. Prevents **Scope Creep** (project slowly expanding without approval).
- **Team:** **Sponsor** (Provides resources/approves charter) and **Process Owner** (Takes over after project ends).

━━━━━━

**2. SIPOC Diagram**
A high-level view (30,000-foot view) of the process used to verify scope.
- **S**uppliers: Who provides the inputs?
- **I**nputs: Material, info, resources needed.
- **P**rocess: High-level steps (Limit to 5-7 steps).
- **O**utputs: The service or product produced.
- **C**ustomers: Who receives the outputs?

💡 *Note:* SIPOC is often filled out in reverse: **P → O → C → I → S** to ensure the process serves the customer.
            `,
            recommended_tools_en: ["SIPOC Diagram", "SMART Checklist", "Project Charter Template"],
            python_focus_en: ["Visualization"],
            code_blocks: [
                {
                    id: "code_define_sipoc",
                    title_en: "Creating a Structured SIPOC Table",
                    description_vi: "Tạo bảng SIPOC có cấu trúc bằng Pandas.",
                    concept_explanation_en: `**SIPOC** stands for Suppliers, Inputs, Process, Outputs, Customers.
It is a high-level view of a process.
- **Suppliers**: Provide inputs to the process.
- **Inputs**: Resources required by the process.
- **Process**: Top-level steps (usually 5-7).
- **Outputs**: Deliverables to the customer.
- **Customers**: Receivers of the outputs.`,
                    concept_explanation_vi: `**SIPOC** là viết tắt của Nhà cung cấp, Đầu vào, Quy trình, Đầu ra, Khách hàng.
Đây là cái nhìn tổng quan về quy trình.
- **Suppliers**: Cung cấp đầu vào.
- **Inputs**: Nguồn lực cần thiết.
- **Process**: Các bước chính (thường 5-7 bước).
- **Outputs**: Sản phẩm bàn giao.
- **Customers**: Người nhận đầu ra.`,
                    code_template: `import pandas as pd

# Define the SIPOC data
sipoc_data = {
    'Category': ['Suppliers', 'Inputs', 'Process', 'Outputs', 'Customers'],
    'Details': [
        'Raw Material Vendor, IT Dept', 
        'Steel, Software License, Specs', 
        '1. Cut -> 2. Mold -> 3. Assembly -> 4. Test -> 5. Pack', 
        'Finished Widget, Test Report', 
        'Distributor, End User'
    ]
}

# Create DataFrame
df = pd.DataFrame(sipoc_data)

# Display properly
print("--- SIPOC DIAGRAM ---")
for index, row in df.iterrows():
    print(f"{row['Category']:<12} | {row['Details']}")`,
                    expected_output_en: "Formatted text table of SIPOC components.",
                    datasets_used: [],
                    learning_points_en: ["Data Structuring", "Process Definition"],
                    difficulty_en: "Beginner",
                    ai_tutor_prompts: ["Why limit Process to 7 steps?", "What happens if Inputs are missing?"],
                    challenges: [
                        {
                            id: "ch_sipoc_01",
                            prompt_en: "Modify the Process step to include a decision point (e.g., 'Check Quality').",
                            prompt_vi: "Sửa bước Process để bao gồm một điểm quyết định (VD: 'Kiểm tra chất lượng').",
                            hint_en: "Just edit the string in the 'Process' row.",
                            solution_code: "# Update the string in data list"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Critique a Problem Statement. Act as a Master Black Belt reviewing a Charter.",
                suggested_questions: [
                    { question_vi: "Scope Creep là gì?", question_en: "What is Scope Creep?" },
                    { question_vi: "Quy tắc 4W cho Problem Statement?", question_en: "What is the 4W rule for Problem Statements?" },
                    { question_vi: "Tại sao nên điền SIPOC ngược?", question_en: "Why fill SIPOC in reverse order?" },
                    { question_vi: "Tôi có được đưa giải pháp vào Problem Statement không?", question_en: "Can I put solutions in the Problem Statement?" },
                    { question_vi: "Ai là người ký Project Charter?", question_en: "Who signs the Project Charter?" }
                ],
                hint_levels: ["Moving goalposts", "What/Where/When/Magnitude", "Focus on Customer first", "Symptom vs Solution"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 3", location_hint_en: "Project Charter" }
            ],
            flashcards: [
                {
                    id: "fc_define_03_01",
                    question_en: "What is the primary role of the Project Charter?",
                    answer_vi: "It is the official contract/authorization for the project (signed by Sponsor).",
                    tags_en: ["Charter"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_03_02",
                    question_en: "Which 4 elements (Ms) must a Problem Statement contain?",
                    answer_vi: "What, Where, When, Magnitude (4Ws).",
                    tags_en: ["Charter", "Problem Statement"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_03_03",
                    question_en: "What should NEVER be in a Problem Statement?",
                    answer_vi: "Solutions or Blame.",
                    tags_en: ["Charter", "Rules"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_03_04",
                    question_en: "What mechanism in the Charter prevents the project from expanding uncontrollably?",
                    answer_vi: "Scope (In-Scope vs. Out-of-Scope lists). Prevents Scope Creep.",
                    tags_en: ["Charter", "Scope"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_03_05",
                    question_en: "Why is SIPOC often filled out in reverse (P->O->C->I->S)?",
                    answer_vi: "To ensure the process output actually meets the Customer's needs first.",
                    tags_en: ["SIPOC"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_define_02"]
        },
        {
            id: "mod_define_04",
            order: 4,
            title_en: "Process Mapping Fundamentals",
            summary_vi: "Trực quan hóa dòng chảy quy trình, các ký hiệu tiêu chuẩn và phát hiện lãng phí.",
            summary_en: "Visualizing the process flow using standard symbols to identify waste, decision points, and bottle-necks.",
            key_metrics_en: ["Takt Time", "Cycle Time", "Lead Time"],
            key_points_en: [
                "Symbols: Diamond = Decision (Yes/No); Rectangle = Activity; 'D' = Delay (Waste).",
                "Levels: L1 (Macro/SIPOC) -> L2 (Swimlane/Handoffs) -> L3 (Micro/Detailed SOPs).",
                "As-Is vs To-Be: Map reality first (As-Is) to find waste, then map the future (To-Be).",
                "Rule: If Cycle Time > Takt Time, you cannot meet customer demand."
            ],
            explanation_vi: `
**1. Các Ký Hiệu Chuẩn (Standard Symbols)**
Bạn phải thuộc lòng các ký hiệu ANSI này cho kỳ thi:
- **Oval (Bầu dục):** Start/End (Bắt đầu/Kết thúc).
- **Rectangle (Chữ nhật):** Operation/Activity (Hành động).
- **Diamond (Hình thoi):** Decision (Quyết định Yes/No). *Mẹo thi: Nơi tạo ra vòng lặp làm lại (Rework Loops).*
- **"D" Shape:** Delay (Sự chờ đợi). *Quan trọng để tìm lãng phí.*
- **Arrow:** Hướng đi của dòng chảy.
- **Parallelogram (Hình bình hành):** Input/Output (Dữ liệu/Vật liệu vào ra).

━━━━━━

**2. Các Cấp Độ Bản Đồ (Mapping Levels)**
- **Level 1 - Macro Map:** Góc nhìn từ 30,000 feet (như SIPOC). Chỉ 5-7 bước lớn. Dùng cho Lãnh đạo xem.
- **Level 2 - Swimlane (Sơ đồ bơi):** Chia các bước theo "Làn bơi" của từng Phòng ban/Vai trò.
  - *Mục tiêu:* Nhìn thấy sự chuyển giao (hand-offs) giữa các bộ phận - nơi lỗi hay xảy ra nhất.
- **Level 3 - Micro Map:** Góc nhìn mặt đất. Hướng dẫn công việc chi tiết (SOP). Từng cú click chuột, từng vòng quay ốc.

━━━━━━

**3. As-Is vs. To-Be**
- **As-Is Map:** Thực tế đang diễn ra thế nào (có cả lỗi, làm tắt, sửa lại). *Vẽ cái này trước.*
- **To-Be Map:** Trạng thái tương lai sau khi đã loại bỏ lãng phí.

━━━━━━

**4. Chỉ Số Thời Gian (Time Metrics)**
- **Cycle Time (C/T):** Thời gian để hoàn thành 1 sản phẩm/bước (thời gian thao tác).
- **Lead Time (L/T):** Tổng thời gian từ khi Khách đặt hàng -> Giao hàng (Bao gồm cả chờ đợi).
- **Takt Time:** Nhịp đập của khách hàng.
  - *Công thức:* Takt = Thời gian sản xuất khả dụng / Nhu cầu khách hàng.
  - *Quy tắc:* Nếu **Cycle Time > Takt Time** → Bạn không kịp giao hàng (Bottle-neck).
            `,
            explanation_en: `
**1. Standard Process Map Symbols**
Memorize these ANSI symbols:
- **Oval / Terminator:** Start and Stop points.
- **Rectangle:** Process Step / Activity.
- **Diamond:** Decision Point (Yes/No). *Exam Tip: Decisions often create rework loops.*
- **"D" Shape:** Delay (Waiting). *Crucial for finding Waste.*
- **Arrow:** Direction of flow.
- **Parallelogram:** Input/Output.

━━━━━━

**2. Mapping Levels**
- **Level 1 - Macro Map:** 30,000-foot view (like SIPOC). 5-7 major steps. For Management.
- **Level 2 - Swimlane (Deployment Map):**
  - Shows "Who does what". Separates steps into lanes by Department/Role.
  - *Goal:* Identify bad hand-offs between teams where errors occur.
- **Level 3 - Micro Map:** Ground level. Detailed Work Instructions (SOPs). Every click or turn.

━━━━━━

**3. As-Is vs. To-Be**
- **As-Is Map:** How it works TODAY (warts and all). Map reality, not fantasy.
- **To-Be Map:** The improved future state.

━━━━━━

**4. Time Metrics**
- **Cycle Time (C/T):** Time to complete one step/unit (hands-on).
- **Lead Time (L/T):** Total time from Work Order to Delivery (includes Delays).
- **Takt Time:** The "heartbeat" of customer demand.
  - *Formula:* Takt = Available Production Time / Customer Demand.
  - *Rule:* If **Cycle Time > Takt Time**, you cannot meet demand (Need more resources/efficiency).
            `,
            recommended_tools_en: ["Swimlane Diagram", "Value Stream Map", "Stopwatch"],
            python_focus_en: ["Metric Calculation"],
            code_blocks: [
                {
                    id: "code_define_takt",
                    title_en: "Takt Time Calculator",
                    title_vi: "Tính toán nhịp Takt Time",
                    description_vi: "Tính Takt Time và so sánh với Cycle Time để tìm điểm nghẽn.",
                    concept_explanation_en: `**Takt Time** is the required pace of production to meet customer demand.
Formula: $ Takt = \\frac{\\text{Available Time}}{\\text{Customer Demand}} $

If your **Cycle Time** (actual speed) is slower (higher number) than Takt Time, you have a bottleneck.`,
                    concept_explanation_vi: `**Takt Time** là nhịp độ sản xuất cần thiết để đáp ứng nhu cầu khách hàng.
Công thức: $ Takt = \\frac{\\text{Thời gian khả dụng}}{\\text{Nhu cầu khách}} $

Nếu **Cycle Time** (tốc độ thực) chậm hơn (số lớn hơn) Takt Time, bạn đang bị nghẽn (bottleneck).`,
                    code_template: `def calculate_takt_time(mins_per_shift, shifts_per_day, breaks_mins, demand_per_day):
    # 1. Provide Available Time (Total Mins - Breaks)
    total_mins = (mins_per_shift * shifts_per_day) - breaks_mins
    
    # 2. Calculate Takt (Time allowed per unit)
    takt_time = total_mins / demand_per_day
    
    return total_mins, takt_time

# Example Data
shift_mins = 480    # 8 hours
shifts = 1
breaks = 30         # 30 min lunch
daily_demand = 400  # Customers want 400 units/day

avail_time, takt = calculate_takt_time(shift_mins, shifts, breaks, daily_demand)

print(f"Available Time: {avail_time} minutes")
print(f"Customer Demand: {daily_demand} units")
print(f"Takt Time: {takt:.2f} minutes/unit")
print(f"Review: You must finish one unit every {takt * 60:.0f} seconds.")

# Comparison check
cycle_time = 1.5 # It takes us 1.5 mins to make one
print(f"\\nCurrent Cycle Time: {cycle_time} mins")

if cycle_time > takt:
    print("WARNING: Cycle Time > Takt Time. You cannot meet demand! (Bottleneck)")
else:
    print("GOOD: Production is fast enough to meet demand.")`,
                    expected_output_en: "Calculation of Takt Time and Bottleneck warning.",
                    expected_output_vi: "Kết quả tính Takt Time và cảnh báo điểm nghẽn.",
                    datasets_used: [],
                    learning_points_en: ["Takt Time Formula", "Capacity Analysis"],
                    difficulty_en: "Beginner",
                    ai_tutor_prompts: ["How do we fix Cycle Time > Takt?", "Does Takt Time depend on machine speed?"],
                    challenges: [
                        {
                            id: "ch_takt_01",
                            prompt_en: "Recalculate with 2 shifts per day.",
                            prompt_vi: "Tính lại với 2 ca làm việc mỗi ngày (shifts = 2).",
                            hint_en: "Change the 'shifts' variable to 2.",
                            solution_code: "shifts = 2\navail_time, takt = calculate_takt_time(shift_mins, shifts, breaks, daily_demand)"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the difference between Cycle Time and Takt Time.",
                suggested_questions: [
                    { question_vi: "Swimlane giúp gì cho việc tìm lỗi?", question_en: "How do Swimlanes help find errors?" },
                    { question_vi: "Làm gì nếu Cycle Time > Takt Time?", question_en: "What if Cycle Time > Takt Time?" },
                    { question_vi: "Hình thoi (Diamond) có ý nghĩa gì?", question_en: "What does the Diamond symbol mean?" },
                    { question_vi: "Sự khác biệt giữa As-Is và To-Be?", question_en: "Difference between As-Is and To-Be?" },
                    { question_vi: "Ký hiệu 'D' là gì?", question_en: "What is the 'D' symbol?" }
                ],
                hint_levels: ["Demand vs Capability", "Handoffs are risky", "Decision points create branches"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 4", location_hint_en: "Process Maps" }
            ],
            flashcards: [
                {
                    id: "fc_define_04_01",
                    question_en: "Which map level uses 'Swimlanes' to show department responsibilities?",
                    answer_vi: "Level 2 (Deployment Map).",
                    tags_en: ["Process Map", "Levels"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_04_02",
                    question_en: "What shape represents a 'Decision Point' (Yes/No) in a flowchart?",
                    answer_vi: "Diamond (Hình thoi).",
                    tags_en: ["Symbols"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_04_03",
                    question_en: "If Cycle Time (10m) > Takt Time (8m), what happens?",
                    answer_vi: "You cannot meet customer demand (Bottleneck/Overtime needed).",
                    tags_en: ["Metrics", "Takt Time"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_04_04",
                    question_en: "What does the 'D' symbol typically stand for?",
                    answer_vi: "Delay (A form of Waste).",
                    tags_en: ["Symbols", "Waste"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_04_05",
                    question_en: "Should you map the 'To-Be' process first?",
                    answer_vi: "No. Map 'As-Is' first to identify current waste and reality.",
                    tags_en: ["Process Map", "Methodology"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 45,
            prerequisites_ids: ["mod_define_03"]
        },
        {
            id: "mod_define_fmea",
            order: 5,
            title_en: "Process Failure Mode & Effects Analysis (FMEA)",
            summary_vi: "Công cụ chủ động để xác định rủi ro và ưu tiên chúng bằng chỉ số RPN.",
            summary_en: "A proactive tool used to identify potential risks and prioritize them using the Risk Priority Number (RPN).",
            key_metrics_en: ["RPN", "Severity", "Occurrence", "Detection"],
            key_points_en: [
                "Proactive vs Reactive: FMEA is about finding failures BEFORE they happen.",
                "Logic: Failure Mode -> Failure Effect -> Cause -> Controls.",
                "Formula: RPN = Severity (S) × Occurrence (O) × Detection (D).",
                "Rule: High Severity (9 or 10) MUST be fixed first, regardless of RPN total.",
                "Corrective Action: Reduce Occurrence (Best) > Improve Detection (Good) > Reduce Severity (Hardest)."
            ],
            explanation_vi: `
**1. Các Định Nghĩa & Phân Loại**
FMEA là cách tiếp cận từng bước để tìm rủi ro.
- **DFMEA (Design):** Phân tích lỗi thiết kế sản phẩm (pha Measure/Analyze của DMADV).
- **PFMEA (Process):** Phân tích lỗi quy trình (pha Measure/Analyze của DMAIC).
- **Luồng Logic:**
  - *Failure Mode (Lỗi):* Cách nó hỏng (VD: Quá nhiệt).
  - *Effect (Hệ quả):* Ảnh hưởng đến KH (VD: Bỏng tay).
  - *Cause (Nguyên nhân):* Tại sao hỏng? (VD: Hỏng cảm biến).
  - *Control (Kiểm soát):* Làm sao để chặn? (VD: Tự ngắt).

━━━━━━

**2. Điểm Số RPN (Thang 1-10) - CẦN NHỚ**
Bạn phải nhớ ý nghĩa của điểm 1 và 10:

- **Severity (S - Mức độ nghiêm trọng):** Ảnh hưởng tệ thế nào?
  - *10:* Nguy hiểm tính mạng / Phạm pháp không báo trước.
  - *1:* Không ảnh hưởng gì đáng kể.

- **Occurrence (O - Tần suất):** Có hay xảy ra không?
  - *10:* Chắc chắn xảy ra (Inevitable).
  - *1:* Cực kỳ hiếm khi xảy ra.

- **Detection (D - Khả năng phát hiện):** Khó phát hiện cỡ nào? *(Dễ nhầm lẫn)*
  - *10 (Tệ):* Không thể phát hiện (Không có cách kiểm tra).
  - *1 (Tốt):* Chắc chắn phát hiện (Tự động chặn lỗi).

━━━━━━

**3. Tính Toán & Ưu Tiên (RPN)**
- **Công thức:** $ RPN = S \\times O \\times D $ (Max 1000).
- **Quy tắc Ưu tiên (Quan trọng cho thi):**
  - *Quy tắc cũ:* Sửa mọi lỗi RPN > 100.
  - *Quy tắc mới:* Luôn ưu tiên **Severity cao (9-10)** trước, bất kể RPN là bao nhiêu. An toàn là số 1.
- **Chiến lược khắc phục:**
  1. Giảm **Occurrence** (Tốt nhất): Ngăn chặn nguyên nhân (Poka-yoke).
  2. Tăng **Detection** (Khá): Thêm kiểm tra/cảm biến.
  3. Giảm **Severity** (Khó nhất): Phải đổi thiết kế sản phẩm.
            `,
            explanation_en: `
**1. Definitions & Types**
FMEA is a step-by-step approach for identifying failures.
- **DFMEA (Design):** Product design risks (DMADV).
- **PFMEA (Process):** Process step risks (DMAIC).
- **Logic Flow:** Process Step → Failure Mode (How it fails) → Failure Effect (Impact) → Cause → Controls.

━━━━━━

**2. The RPN Variables (Scale 1-10)**
Memorize the extremes:

- **Severity (S):** Impact on customer.
  - *Score 10:* Hazardous/Safety issue without warning.
  - *Score 1:* No discernible effect.

- **Occurrence (O):** Frequency of the cause.
  - *Score 10:* Inevitable / Failure is certain.
  - *Score 1:* Extremely unlikely.

- **Detection (D):** Ability to detect failure BEFORE it reaches customer.
  - *Score 10 (Bad):* Absolute uncertainty / No controls.
  - *Score 1 (Good):* Certain to detect (Automatic error proofing).

━━━━━━

**3. Calculating & Prioritizing RPN**
- **Formula:** $ RPN = S \\times O \\times D $.
- **Range:** 1 to 1000.
- **Prioritization Rule (Exam Tip):**
  - ALWAYS prioritize high **Severity (9 or 10)** first, even if the total RPN is low. Safety first.
- **Corrective Action Strategy:**
  1. **Reduce Occurrence** (Best): Prevent the cause (Poka-yoke).
  2. **Improve Detection**: Add sensors/inspection.
  3. **Reduce Severity** (Hardest): Change the physical design.
            `,
            recommended_tools_en: ["FMEA Template", "Risk Assessment Matrix"],
            python_focus_en: ["Risk Analysis"],
            code_blocks: [
                {
                    id: "code_define_fmea",
                    title_en: "RPN Calculator & Prioritizer",
                    description_vi: "Tính RPN và tự động đề xuất ưu tiên xử lý.",
                    concept_explanation_en: `This script calculates the Risk Priority Number (RPN).
It also applies the **Safety First Rule**: If Severity >= 9, it flags it as CRITICAL regardless of the RPN score.`,
                    concept_explanation_vi: `Mã này tính chỉ số RPN.
Nó cũng áp dụng **Quy tắc An toàn**: Nếu Severity >= 9, nó sẽ báo là NGUY HIỂM (Critical) bất kể điểm RPN là bao nhiêu.`,
                    code_template: `def analyze_risk(severity, occurrence, detection):
    rpn = severity * occurrence * detection
    
    status = "Low Risk"
    action = "Monitor"

    # PRIORITIZATION LOGIC
    if severity >= 9:
        status = "CRITICAL (Safety Issue)"
        action = "Redesign Mandatory - Fix Immediately!"
    elif rpn > 100:
        status = "High Risk"
        action = "Take Action to Reduce Occurrence/Detection"
    
    return rpn, status, action

# Example Risk: Machine Overheating
s = 9  # Hazardous (Fire risk)
o = 2  # Low occurrence
d = 2  # Easy to detect (Sensors)

rpn, risk_status, rec_action = analyze_risk(s, o, d)

print(f"Risk Profile (S={s}, O={o}, D={d})")
print(f"RPN Score: {rpn}")
print(f"Status: {risk_status}")
print(f"Recommended Action: {rec_action}")`,
                    expected_output_en: "RPN calculation and priority warning.",
                    expected_output_vi: "Tính RPN và cảnh báo ưu tiên.",
                    datasets_used: [],
                    learning_points_en: ["RPN Logic", "Prioritization Rules"],
                    difficulty_en: "Beginner",
                    ai_tutor_prompts: ["Why is High Detection score (10) bad?", "How to reduce Severity?"],
                    challenges: [
                        {
                            id: "ch_rpn_01",
                            prompt_en: "Calculate a scenario with S=4, O=10, D=10.",
                            prompt_vi: "Tính toán kịch bản với S=4, O=10, D=10.",
                            hint_en: "Change variables s, o, d.",
                            solution_code: "s=4\no=10\nd=10\nrpn, st, ac = analyze_risk(s, o, d)"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Act as an FMEA moderator. Help prioritize risks.",
                suggested_questions: [
                    { question_vi: "Detection (D) bằng 10 nghĩa là gì?", question_en: "What does Detection score of 10 mean?" },
                    { question_vi: "Quy tắc ưu tiên RPN hiện đại là gì?", question_en: "What is the modern RPN prioritization rule?" },
                    { question_vi: "Làm sao để giảm Severity?", question_en: "How to reduce Severity?" },
                    { question_vi: "DFMEA khác gì PFMEA?", question_en: "Difference between DFMEA and PFMEA?" },
                    { question_vi: "Tính RPN: S=9, O=2, D=1?", question_en: "Calc RPN: S=9, O=2, D=1?" }
                ],
                hint_levels: ["Can you see the failure?", "Safety vs Frequency", "Design change vs Process change"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 5", location_hint_en: "FMEA" }
            ],
            flashcards: [
                {
                    id: "fc_define_05_01",
                    question_en: "What is the RPN formula?",
                    answer_vi: "RPN = Severity x Occurrence x Detection.",
                    tags_en: ["RPN", "Formula"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_05_02",
                    question_en: "If Severity is 9 or 10, what must you do regardless of RPN?",
                    answer_vi: "Prioritize it immediately (Safety Issue).",
                    tags_en: ["RPN", "Prioritization"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_05_03",
                    question_en: "Does a high Detection score (10) mean you are GOOD or BAD at finding the defect?",
                    answer_vi: "BAD. 10 means 'Absolute Uncertainty' (Cannot detect).",
                    tags_en: ["RPN", "Scoring"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_05_04",
                    question_en: "Which type of action is preferred: Reducing Occurrence or Improving Detection?",
                    answer_vi: "Reducing Occurrence (Preventing the cause is better than finding the defect).",
                    tags_en: ["Corrective Action"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_define_05_05",
                    question_en: "What does DFMEA stand for?",
                    answer_vi: "Design Failure Mode and Effects Analysis.",
                    tags_en: ["Definitions"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_define_04"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_define_quiz",
            order: 5,
            title_en: "Chapter 2 Quiz: Define Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 2 (20 câu hỏi).",
            summary_en: "Comprehensive Chapter 2 Quiz (20 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of Charter, VOC, SIPOC, and Process Maps."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp toàn bộ giai đoạn Define, giúp bạn rà soát lại các công cụ quan trọng như Charter và SIPOC.",
            explanation_en: "This quiz covers the entire Define phase, reinforcing key concepts like Project Charter, VOC, and SIPOC.",
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
            prerequisites_ids: ["mod_define_01", "mod_define_02", "mod_define_03", "mod_define_04"]
        }
    ]
};
