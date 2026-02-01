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
- **Định nghĩa:** Nhu cầu và mong đợi của khách hàng, bao gồm cả những điều nói ra (Explicit) và không nói ra (Implicit).
- **Loại dữ liệu (Data Types):**
  - **Reactive Data (Phản ứng):** Khiếu nại, Yêu cầu bảo hành, Trả hàng. *Cho biết bạn đã làm sai ở đâu.*
  - **Proactive Data (Chủ động):** Khảo sát, Phỏng vấn, Focus Groups, Thử nghiệm Beta. *Tìm hiểu khách hàng muốn gì trong tương lai.*

━━━━━━

**2. CTQ Tree (Cây chất lượng quan trọng)**
VOC thường mơ hồ. Bạn phải dịch nó thành Yêu cầu kỹ thuật (Requirement).
- **Cấu trúc:** Customer Need -> Drivers -> Requirements (CTQs).
- **Ví dụ:**
  - **Need (Nhu cầu):** "Tôi muốn dịch vụ tuyệt vời" *(Mơ hồ)*.
  - **Driver (Yếu tố dẫn dắt):** "Sự phản hồi nhanh".
  - **Requirement (CTQ):** "Điện thoại phải được trả lời trong vòng 3 tiếng chuông" *(Cụ thể, Đo lường được)*.
- *Lưu ý:* Một CTQ hợp lệ phải có Giới hạn/Mục tiêu (Limit/Target).

━━━━━━

**3. Kano Model (Mô hình Kano)**
Phân loại yêu cầu khách hàng thành 3 nhóm để xác định tác động đến sự hài lòng:

🟢 **Must-Be / Basic Quality (Phải có):**
- **Thiếu:** Khách hàng KHÔNG hài lòng (Dissatisfied).
- **Có:** Khách hàng thấy bình thường (Neutral) - Họ coi đó là điều hiển nhiên.
- *Ví dụ:* Khăn trải giường sạch ở khách sạn, phanh xe hơi.

🔵 **Performance / Expected Quality (Hiệu suất):**
- **Đặc điểm:** Tuyến tính (Linear). Có càng nhiều càng tốt.
- *Ví dụ:* Thời lượng pin, tốc độ internet, tiết kiệm xăng.

🔥 **Delighters / Exciting Quality (Gây thích thú):**
- **Thiếu:** Khách hàng thấy bình thường (Họ không mong đợi nó).
- **Có:** Khách hàng cực kỳ vui sướng (Delighted).
- *Ví dụ:* Bánh quy nóng miễn phí khi check-in.

*The Kano Shift:* Theo thời gian, Delighters sẽ trở thành Performance, và cuối cùng trở thành Must-Be (VD: Wifi ở khách sạn).
            `,
            explanation_en: `
**1. Voice of Customer (VOC)**
VOC is the "raw" feedback from the customer. It describes WHAT the customer wants, not HOW to achieve it.
- **Definition:** Customer's explicit (stated) and implicit (unspoken) needs and expectations.
- **Data Types:**
  - **Reactive Data:** Complaints, Warranty Claims, Returns. *Tells you where you failed.*
  - **Proactive Data:** Surveys, Focus Groups, Interviews, Beta Testing. *Finds out what customers want in the future.*

━━━━━━

**2. CTQ Tree (Critical to Quality)**
VOC is vague. You must translate it into a Requirement.
- **Structure:** Customer Need -> Drivers -> Requirements (CTQs).
- **Example:**
  - **Need:** "I want excellent service" *(Vague/Hard to measure)*.
  - **Driver:** "Responsiveness" *(The area we focus on)*.
  - **Requirement (CTQ):** "Phone must be answered within 3 rings" *(Specific, Measurable)*.
- *Note:* A valid CTQ must have a Limit (Limit/Target).

━━━━━━

**3. Kano Model**
Classifies customer requirements into three categories to determine satisfaction impact:

🟢 **Must-Be / Basic Quality (Dissatisfiers):**
- **If missing:** Customer is Dissatisfied.
- **If present:** Customer is Neutral (They take it for granted).
- *Example:* Clean sheets in a hotel; brakes on a car.

🔵 **Performance / Expected Quality (Linear):**
- **Characteristics:** More is Better. Satisfaction rises linearly with performance.
- *Example:* Battery life, internet speed, gas mileage.

🔥 **Delighters / Exciting Quality (Exciters):**
- **If missing:** Customer is Neutral (They didn't expect it).
- **If present:** Customer is Delighted.
- *Example:* Free warm cookies at check-in.

*The Kano Shift:* Over time, Delighters become Performance features, and eventually become Must-Be features (e.g., Wi-Fi in hotels).
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
- **Must-Be**: Satisfaction drops rapidly if performance is low, but flattens out (maxes at Neutral) even with high performance.
- **Performance**: Linear relationship. Better performance = Higher satisfaction.
- **Delighters**: Satisfaction creates a "Wow" factor exponentially as performance increases.`,
                    concept_explanation_vi: `Mã này mô phỏng và vẽ các đường cong **Mô hình Kano**.
- **Must-Be**: Sự hài lòng giảm nhanh nếu hiệu suất thấp, nhưng chỉ đạt mức Trung lập (Neutral) ngay cả khi hiệu suất cao.
- **Performance**: Quan hệ tuyến tính. Hiệu suất tốt hơn = Hài lòng cao hơn.
- **Delighters**: Sự hài lòng tăng theo cấp số nhân (Wow factor) khi hiệu suất tăng.`,
                    code_template: `import matplotlib.pyplot as plt
import numpy as np

# Create data range (Performance: Low to High)
x = np.linspace(0.1, 10, 100)

# 1. Must-Be (Phải có): Logarithmic curve aiming for Neutral (0)
# If x is low, y is very negative. If x is high, y approaches 0.
y_must_be = -10 / x 

# 2. Performance (Hiệu suất): Linear
y_performance = x - 5  # Centered

# 3. Delighter (Thích thú): Exponential
y_delighter = np.exp(x/3) - 1

# Plot
plt.figure(figsize=(10, 6))
plt.plot(x, y_must_be, 'r-', linewidth=2, label='Must-Be (Basic)')
plt.plot(x, y_performance, 'b-', linewidth=2, label='Performance (Linear)')
plt.plot(x, y_delighter, 'g-', linewidth=2, label='Delighter (Exciter)')

# Add Neutral Line
plt.axhline(0, color='gray', linestyle='--')
plt.text(0.5, 0.5, 'Neutral Satisfaction', color='gray')

plt.title('Kano Model Visualization')
plt.xlabel('Degree of Implementation (Performance)')
plt.ylabel('Customer Satisfaction')
plt.ylim(-10, 10)
plt.legend()
plt.grid(True, alpha=0.3)
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
                            solution_code: "y_indifferent = np.zeros_like(x)\nplt.plot(x, y_indifferent, 'y-', label='Indifferent')"
                        }
                    ]
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "You are a Product Manager expert in VOC and Kano Model.",
                suggested_questions: [
                    { question_vi: "Wifi miễn phí là Must-be hay Delighter?", question_en: "Is free Wifi a Must-be or Delighter?" },
                    { question_vi: "Ví dụ về Proactive Data?", question_en: "Example of Proactive Data?" },
                    { question_vi: "CTQ Tree khác gì với VOC?", question_en: "How is CTQ Tree different from VOC?" },
                    { question_vi: "Khi nào Delighter trở thành Must-Be?", question_en: "When does a Delighter become a Must-Be?" },
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
                    question_en: "What defines a 'Proactive' VOC collection method?",
                    answer_vi: "Seeking input BEFORE a problem occurs (e.g., Surveys, Focus Groups).",
                    tags_en: ["VOC", "Data Types"],
                    difficulty_en: "Medium",
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
            summary_vi: "Xác định phạm vi dự án bằng SIPOC và chốt Project Charter.",
            summary_en: "Defining project scope using SIPOC and finalizing the Project Charter.",
            key_metrics_en: ["In-Scope", "Out-of-Scope", "SIPOC"],
            key_points_en: [
                "Project Charter: The 'Contract' for the project.",
                "Problem Statement: 4W description (What, Where, When, Cost). No solutions/blame.",
                "Goal Statement: SMART targets.",
                "SIPOC: Suppliers -> Inputs -> Process -> Outputs -> Customers.",
                "Scope Creep: The project slowly getting bigger without approval (SIPOC prevents this)."
            ],
            explanation_vi: `
**1. Project Charter Elements**
- **Problem Statement:** Mô tả nỗi đau. Phải có dữ liệu. KHÔNG được đoán mò nguyên nhân.
  * *Sai:* "Máy hỏng do bảo trì kém." (Đổ lỗi)
  * *Đúng:* "Tỷ lệ chết máy line 1 là 5% trong tháng 6, tốn $2000."
- **Goal Statement:** Phải SMART. "Giảm tỷ lệ chết máy xuống 2% vào tháng 12."
- **Scope:** Cái gì làm (In) và cái gì CẤM làm (Out). "Chỉ làm line 1, không làm line 2."

**2. SIPOC (High-Level Map)**
Dùng để xác định biên giới dự án (Start/Stop).
- **S**uppliers: Ai cung cấp đầu vào?
- **I**nputs: Cần gì để làm (7M - Man, Machine, Material...)?
- **P**rocess: 5-7 bước chính thôi.
- **O**utputs: Sản phẩm đầu ra là gì?
- **C**ustomers: Ai nhận đầu ra?
            `,
            explanation_en: `
**1. Project Charter Elements**
- **Problem Statement:** Describes the pain. Must include 4 W's (What, Where, When, magnitude). NO solutions, NO blame.
- **Goal Statement:** SMART Targets (Specific, Measurable, Attainable, Relevant, Time-bound).
- **Scope:** Define boundaries. What is IN and what is OUT. Prevents **Scope Creep**.

**2. SIPOC (High-Level Map)**
SIPOC is used to verify the project scope.
- **S**uppliers: Providers of inputs.
- **I**nputs: Materials/Info needed.
- **P**rocess: High-level steps (5-7).
- **O**utputs: Delieverables.
- **C**ustomers: Recipients of outputs.
            `,
            recommended_tools_en: ["SIPOC Diagram", "SMART Checklist"],
            python_focus_en: ["Visualization"],
            code_blocks: [
                {
                    id: "code_define_sipoc",
                    title_en: "Creating a SIPOC Table",
                    description_vi: "Tạo bảng SIPOC dùng Pandas.",
                    code_template: `import pandas as pd

data = {
    'Suppliers': ['Vendor X', 'Internal IT', 'Customer'],
    'Inputs': ['Raw Parts', 'Server Access', 'Order Spec'],
    'Process': ['1. Receive', '2. Assemble', '3. Test'],
    'Outputs': ['Inventory', 'Log', 'Finished Unit'],
    'Customers': ['Assembly', 'Audit', 'Shipping']
}

# Note: Arrays must be same length for simple DF, so we pad with empty strings if needed
df = pd.DataFrame(data)
print(df)`,
                    expected_output_en: "SIPOC dataframe display.",
                    datasets_used: [],
                    learning_points_en: ["Data Structuring"],
                    difficulty_en: "Beginner"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Critique a Problem Statement.",
                suggested_questions: [
                    { question_vi: "Scope Creep là gì?", question_en: "What is Scope Creep?" },
                    { question_vi: "SIPOC giúp gì cho Scope?", question_en: "How does SIPOC help with Scope?" }
                ],
                hint_levels: ["Moving goalposts", "Defining boundaries", "Inputs/Outputs validation"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 3", location_hint_en: "Project Charter" }
            ],
            flashcards: [],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_define_02"]
        },
        {
            id: "mod_define_04",
            order: 4,
            title_en: "Process Mapping Fundamentals",
            summary_vi: "Các cấp độ bản đồ quy trình: L1 (Macro) đến L3 (Micro/Detailed).",
            summary_en: "Process mapping levels: from L1 (Macro) to L3 (Micro/Detailed).",
            key_metrics_en: ["Process Map Levels"],
            key_points_en: [
                "Process Map: A visual representation of steps.",
                "Rectangles: Steps/Operations.",
                "Diamonds: Decision points (Yes/No).",
                "Ovals: Start/Stop points.",
                "Level 1: High Level (Management view, like SIPOC).",
                "Level 2: Standard Worker view.",
                "Level 3: Micro Detailed (for SOPs and debugging)."
            ],
            explanation_vi: `
**Bản đồ quy trình (Process Map / Flowchart)**
Để cải tiến quy trình, bạn phải NHÌN THẤY nó.
- **Ký hiệu chuẩn:**
  - Hình chữ nhật: Hành động (Bước).
  - Hình thoi: Quyết định (Kiểm tra, Nếu sai thì quay lại đâu?).
  - Hình bầu dục: Bắt đầu / Kết thúc.

**Các cấp độ (Levels):**
- **Level 1 (Macro):** Cái nhìn của Giám đốc. Chỉ 3-5 bước lớn.
- **Level 2 (Process):** Cái nhìn của Trưởng chuyền. Các bước chính để hoàn thành việc.
- **Level 3 (Micro):** Cái nhìn của Công nhân/Kỹ thuật viên. Chi tiết từng thao tác bấm nút. Dùng để viết SOP.
            
            **3. Time Metrics (Thời gian)**
            - **Cycle Time:** Tốc độ làm việc tại 1 bước.
            - **Lead Time:** Tổng thời gian từ đặt hàng -> nhận hàng.
            - **Takt Time:** Nhịp độ yêu cầu của khách hàng.
            `,
            explanation_en: `
**Process Mapping**
To improve a process, you must see it.
- **Symbols:**
  - Rectangle: Activity/Step.
  - Diamond: Decision (Yes/No).
  - Oval: Start/Stop.

**Mapping Levels:**
- **Level 1 (Macro):** Management view. 3-5 major steps.
- **Level 2 (Process):** Standard view. Shows key hand-offs.
- **Level 3 (Micro):** Detailed instruction view (Work Instructions).

**Time Metrics:**
- **Cycle Time:** Time to complete one unit at one step.
- **Lead Time:** Total time from order to delivery.
- **Takt Time:** The rate at which you MUST produce to meet customer demand (Available Time / Demand).
            `,
            recommended_tools_en: ["Flowchart standard symbols"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain standard flowchart symbols.",
                suggested_questions: [
                    { question_vi: "Hình thoi dùng để làm gì?", question_en: "What is the diamond shape used for?" },
                    { question_vi: "Level 3 khác gì Level 1?", question_en: "How is Level 3 different from Level 1?" }
                ],
                hint_levels: ["Visual shape meaning", "Granularity of detail", "Decision paths"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 17", location_hint_en: "Process Mapping" }
            ],
            flashcards: [],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 25,
            prerequisites_ids: ["mod_define_03"]
        },
        {
            id: "mod_define_fmea",
            order: 5,
            title_en: "Process Failure Analysis (FMEA)",
            summary_vi: "Phân tích sai hỏng (Failure Mode) và đánh giá rủi ro (RPN).",
            summary_en: "Failure Mode Effects Analysis and Risk Priority Number (RPN).",
            key_metrics_en: ["RPN (Risk Priority Number)", "Severity", "Occurrence", "Detection"],
            key_points_en: [
                "FMEA: Systematic method to identify failures BEFORE they happen.",
                "RPN = Severity × Occurrence × Detection.",
                "Action Threshold: RPN > 100 needs immediate action.",
                "Logic: Identify Failure -> Effect -> Cause -> Controls."
            ],
            explanation_vi: `
**1. FMEA là gì?**
Là công cụ "vắc-xin" của Six Sigma. Thay vì đợi cháy rồi chữa, ta tìm nguy cơ cháy và dập tắt từ trong trứng nước.
- **Quy trình 5 bước:** Tìm Lỗi -> Tìm Hậu quả -> Tìm Nguyên nhân -> Tính RPN -> Hành động.

**2. Công thức RN (Risk Priority Number)**
\`RPN = Severity (S) * Occurrence (O) * Detection (D)\`
Thang điểm 1-10 (Lưu ý: 10 là TỆ nhất, 1 là TỐT nhất).
- **Severity (Nghiêm trọng):** Hậu quả tệ thế nào? (10 = Chết người/Mất khách hàng).
- **Occurrence (Tần suất):** Có hay bị không? (10 = Ngày nào cũng bị).
- **Detection (Khả năng phát hiện):** Có dễ phát hiện không? (10 = Không thể phát hiện cho đến khi khách dùng).

**3. Quy tắc hành động**
- **RPN > 100:** BẮT BUỘC phải hành động (Action Plan).
- Hãy ưu tiên giảm **Occurrence** (Nguyên nhân) trước, rồi đến **Detection** (Kiểm soát), cuối cùng là **Severity** (Thiết kế lại).
            `,
            explanation_en: `
**1. What is FMEA?**
It is the "Vaccine" of Six Sigma. Systematic prevention of failure.
- **Logic:** Step -> Failure Mode -> Effect -> Cause -> Current Controls.

**2. The RPN Formula**
\`RPN = Severity (S) * Occurrence (O) * Detection (D)\`
Rated 1-10 (10 is BAD, 1 is GOOD).
- **Severity:** How bad is the impact? (10 = Hazardous/Safety).
- **Occurrence:** How often does the cause happen? (10 = Frequent).
- **Detection:** How good is our control? (10 = No detection, Client finds it).

**3. Action Rules**
- **RPN > 100:** Mandatory Action Required.
- **Priority:** First reduce Occurrence (Prevent cause), then improve Detection (Better alarms). Severity is hardest to change (Requires Redesign).
            `,
            recommended_tools_en: ["FMEA Template"],
            python_focus_en: ["Calculation"],
            code_blocks: [
                {
                    id: "code_define_fmea",
                    title_en: "Calculating RPN",
                    description_vi: "Tính chỉ số RPN và xác định mức độ ưu tiên.",
                    code_template: `def calculate_rpn(sev, occ, det):
    rpn = sev * occ * det
    
    status = "Safe"
    if rpn > 100:
        status = "CRITICAL ACTION REQUIRED"
    elif rpn > 50:
        status = "Monitor Closely"
        
    return rpn, status

# Scenario:
# Severity: 8 (Customer very angry)
# Occurrence: 5 (Happens occasionally)
# Detection: 7 (Hard to catch, manual check)
s, o, d = 8, 5, 7

rpn, action = calculate_rpn(s, o, d)
print(f"Severity: {s} | Occurrence: {o} | Detection: {d}")
print(f"Risk Priority Number (RPN): {rpn}")
print(f"Status: {action}")`,
                    expected_output_en: "RPN Score: 280 (Critical).",
                    datasets_used: [],
                    learning_points_en: ["Risk Logic", "Conditionals"],
                    difficulty_en: "Beginner"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz me on FMEA ratings.",
                suggested_questions: [
                    { question_vi: "Điểm Detection = 10 nghĩa là gì?", question_en: "What does Detection score = 10 mean?" },
                    { question_vi: "Nếu RPN = 120 thì làm gì?", question_en: "What to do if RPN = 120?" }
                ],
                hint_levels: ["Can you see the defect?", "Mandatory action threshold"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 5", location_hint_en: "FMEA" }
            ],
            flashcards: [
                {
                    id: "fc_fmea_01",
                    question_en: "In FMEA, which rating is '10' if the defect is impossible to detect?",
                    answer_vi: "Detection (Khả năng phát hiện).",
                    tags_en: ["FMEA", "Risk"],
                    difficulty_en: "Medium",
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
