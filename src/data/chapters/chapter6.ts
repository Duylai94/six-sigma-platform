import { Chapter, Module } from "../../types/course";

export const chapterAnalyzeRootCause: Chapter = {
    id: "ch_analyze_rootcause",
    order: 6,
    title_en: "Analyze Phase - Root Cause & Lean",
    goal_vi: "Xác định nguyên nhân gốc rễ (Root Cause) và loại bỏ lãng phí (Waste) bằng công cụ Lean.",
    goal_en: "Identify Root Causes and eliminate Waste using Lean tools.",
    iassc_topics_en: [
        "3.0 Analyze Phase",
        "3.6 Root Cause Analysis",
        "3.7 Waste Analysis",
        "3.7 Lean Tools"
    ],
    modules: [
        {
            id: "mod_analyze_rca_01",
            order: 1,
            title_en: "Pareto Analysis (80/20 Rule)",
            summary_vi: "Nguyên lý Pareto: 80% hậu quả đến từ 20% nguyên nhân. Weighted Pareto.",
            summary_en: "Pareto Principle: 80% of effects come from 20% of causes. Weighted Pareto.",
            key_metrics_en: ["Cumulative Percentage", "Vital Few", "Trivial Many"],
            key_points_en: [
                "The Vital Few (20%): Causes 80% of properties/defects.",
                "The Trivial Many (80%): Causes 20% of problems.",
                "Weighted Pareto: Adjusts frequency by Cost ($) or Severity.",
                "Always attack the Vital Few first."
            ],
            explanation_vi: `
**1. Nguyên lý 80/20**
Trong hầu hết mọi tình huống, số ít nhân tố (20%) tạo ra phần lớn kết quả (80%).
- 20% khách hàng mang lại 80% doanh thu.
- 20% loại lỗi gây ra 80% phế phẩm.

**2. Weighted Pareto (Pareto có trọng số)**
Đôi khi lỗi "Xước bề mặt" xảy ra nhiều nhất, nhưng lỗi "Nứt gãy" lại tốn tiền đền bù nhất.
Nếu chỉ vẽ Pareto theo Số lượng (Quantity), ta sẽ tập trung sửa "Xước". Nhưng nếu nhân với Chi Phí (Cost), có thể "Nứt gãy" mới là cột cao nhất.
-> Hãy luôn cân nhắc Weighted Pareto khi các lỗi có mức độ nghiêm trọng khác nhau.
            `,
            explanation_en: `
**1. The 80/20 Rule**
In almost any situation, a "Vital Few" (20%) of causes produce the "Useful Many" (80%) of results.
- 20% of customers = 80% of revenue.
- 20% of defect types = 80% of scrap.

**2. Weighted Pareto**
Sometimes, the frequency isn't enough.
- Defect A occurs 100 times (Cost: $1 each). Total Impact: $100.
- Defect B occurs 10 times (Cost: $1000 each). Total Impact: $10,000.
-> If you just count quantity, you fix A. But if you weight by Cost, you MUST fix B.
            `,
            recommended_tools_en: ["Pareto Chart", "Weighted Pareto"],
            python_focus_en: ["matplotlib", "cumsum"],
            code_blocks: [
                {
                    id: "code_pareto",
                    title_en: "Creating a Pareto Chart",
                    context_en: `Situation: You have a log of 500 equipment failures. You want to know which 'Type of Reduction' you should focus on to solve 80% of the problems. Goal: Create a Pareto Chart.

Math Formula:
• Cumulative % = (Running Sum of Count / Total Count) * 100
• 80/20 Rule: Focus on the bars where the Line Chart is below 80%.`,
                    description_vi: "Biểu đồ Pareto tuân theo quy tắc 80/20:\n\n1. **Cột (Bar):** Hiển thị tần suất của từng loại lỗi (Giảm dần).\n2. **Đường (Line):** Hiển thị phần trăm tích lũy (Cumulative %).\n3. **Điểm quan trọng:** Tìm điểm đường cong cắt mức 80%. Những lỗi nằm bên trái điểm này là 'Vital Few' (Thiểu số quan trọng) cần xử lý ngay.",
                    code_template: `import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.ticker import PercentFormatter

# Data: Defect counts
data = {'Defect': ['Scratch', 'Dent', 'Stain', 'Gap', 'Crack'],
        'Count': [150, 80, 45, 20, 5]}
df = pd.DataFrame(data)

# 1. Sort Descending
df = df.sort_values(by='Count', ascending=False)

# 2. Calculate Cumulative %
df['Cum_Percent'] = df['Count'].cumsum() / df['Count'].sum() * 100

# 3. Plot
fig, ax1 = plt.subplots()

# Bar Chart
ax1.bar(df['Defect'], df['Count'], color='C0')
ax1.set_ylabel('Defect Count')

# Line Chart (Secondary Axis)
ax2 = ax1.twinx()
ax2.plot(df['Defect'], df['Cum_Percent'], color='C1', marker='D')
ax2.yaxis.set_major_formatter(PercentFormatter())
ax2.set_ylabel('Cumulative %')

plt.title('Pareto Chart of Defects')
plt.show()`,
                    expected_output_en: "Dual-axis chart showing 'Vital Few'.",
                    datasets_used: [],
                    learning_points_en: ["Dual-axis visualization", "Identification of Vital Few"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Weighted Pareto.",
                suggested_questions: ["Khi nào dùng Weighted Pareto?", "Nếu các cột bằng nhau thì sao?"],
                hint_levels: ["Use when costs differ", "Stratify data further", "No vital few exists"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "cheatsheet", label_en: "Green Belt Cheat Sheet - Analyze", location_hint_en: "Pareto" }
            ],
            flashcards: [
                {
                    id: "fc_rca_01",
                    question_en: "What is the 'Vital Few'?",
                    answer_vi: "The small percentage of causes (20%) that account for most of the effects (80%).",
                    tags_en: ["Analyze", "Pareto"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_rca_02",
                    question_en: "Why use a Weighted Pareto Chart?",
                    answer_vi: "To account for severity or cost, not just frequency.",
                    tags_en: ["Analyze", "Pareto"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_chi_square"]
        },
        {
            id: "mod_analyze_rca_02",
            order: 2,
            title_en: "Fishbone & 5 Whys",
            summary_vi: "Truy tìm nguyên nhân gốc rễ (Root Cause) với biểu đồ Xương cá (6M) và 5 Tại sao.",
            summary_en: "Finding Root Causes with Fishbone (6M) and 5 Whys.",
            key_metrics_en: ["6M Checklist", "Root Cause vs Symptom"],
            key_points_en: [
                "Fishbone (Ishikawa): Brainstorming tool using 6Ms (Man, Machine, Material, Method, Measurement, Environment).",
                "5 Whys: Technique to drill down past symptoms to the root cause.",
                "Root Cause: The underlying issue that, if fixed, prevents recurrence.",
                "Validation: You must Verify the root cause with data (don't just guess)."
            ],
            explanation_vi: `
**1. Fishbone (Biểu đồ Xương cá)**
Là công cụ "Mở rộng" (Divergent). Giúp nhóm không bỏ sót các khía cạnh.
- **Man:** Kỹ năng, đào tạo, tâm lý...
- **Machine:** Thiết bị, công cụ, bảo trì...
- **Material:** Nguyên liệu thô, linh kiện...
- **Method:** Quy trình, hướng dẫn công việc (SOP)...
- **Measurement:** Sai số dụng cụ đo...
- **Mother Nature:** Nhiệt độ, độ ẩm, ánh sáng...

**2. 5 Whys (5 Tại sao)**
Là công cụ "Thu hẹp" (Convergent). Đi từ triệu chứng vào cốt lõi.
- Tại sao máy dừng? -> Đứt cầu chì.
- Tại sao đứt? -> Quá tải.
- Tại sao quá tải? -> Trục khô dầu.
- Tại sao khô? -> Bơm dầu hỏng.
- Tại sao hỏng? -> **Không bảo trì định kỳ** (Root Cause).
            `,
            explanation_en: `
**1. Fishbone Diagram (Ishikawa)**
A "Divergent" tool to brainstorm ALL possible causes.
- **Man:** Skills, training, fatigue.
- **Machine:** Equipment, calibration.
- **Material:** Raw parts, supply.
- **Method:** Procedures (SOP), rules.
- **Measurement:** Gage error.
- **Mother Nature:** Environment (Heat, Humidity).

**2. 5 Whys**
A "Convergent" tool to drill down to the Root Cause.
- Problem: Car stopped.
- Why? Fuse blew.
- Why? Overloaded.
- Why? Bearing dry.
- Why? Pump broken.
- Why? **No prevented maintenance plan.** (Root Cause).
            `,
            recommended_tools_en: ["Ishikawa Diagram", "5 Whys"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Facilitate a Fishbone session.",
                suggested_questions: ["Nếu nguyên nhân là 'Con người', ta nên làm gì?", "Làm sao biết đã tìm ra Root Cause thật sự?"],
                hint_levels: ["Look at training/SOP", "Can you turn the problem on/off?", "Statistical validation"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Analyze", location_hint_en: "Root Cause Analysis" }
            ],
            flashcards: [
                {
                    id: "fc_rca_03",
                    question_en: "In a Fishbone Diagram, which 'M' covers temperature and humidity?",
                    answer_vi: "Mother Nature (Environment).",
                    tags_en: ["Analyze", "Ishikawa"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_rca_01"]
        },
        {
            id: "mod_analyze_vsm_01",
            order: 3,
            title_en: "Value Stream Mapping (VSM)",
            summary_vi: "Bản đồ dòng trị: Nhận diện lãng phí và dòng chảy.",
            summary_en: "Value Stream Mapping: Identifying Waste and Flow.",
            key_metrics_en: ["Value Added (VA)", "Non-Value Added (NVA)", "Lead Time", "Cycle Time"],
            key_points_en: [
                "Current State Map: Shows how things are done NOW (with all the mess).",
                "Future State Map: How things SHOULD be done (Flow).",
                "Value Added: Changes form/fit/function AND Customer pays for it AND Done right first time.",
                "Everything else is Waste (NVA)."
            ],
            explanation_vi: "VSM khác Flowchart ở chỗ nó thêm 'Dòng thông tin' (Information Flow) và 'Timeline'. Nó cho thấy thời gian chết (Waiting) nằm ở đâu giữa các bước.",
            explanation_en: "VSM differs from a Flowchart by adding 'Information Flow' and a 'Timeline'. It visualizes exactly where the Waiting (Non-Value Added time) is.",
            recommended_tools_en: ["VSM Software"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain difference between Lead Time and Cycle Time.",
                suggested_questions: ["VA là gì?", "NVA-Necessary là gì?"],
                hint_levels: ["Customer willingness to pay", "Regulatory requirements (e.g., Tax reporting)", "Total door-to-door time vs Process time"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 8", location_hint_en: "VSM" }
            ],
            flashcards: [
                {
                    id: "fc_vsm_01",
                    question_en: "What visual element in VSM represents the flow of information?",
                    answer_vi: "Thin lines (usually zig-zag for electronic, straight for manual).",
                    tags_en: ["Lean", "VSM"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_analyze_rca_02"]
        },
        {
            id: "mod_analyze_waste",
            order: 4,
            title_en: "Lean Wastes (Muda) & 5S",
            summary_vi: "8 loại lãng phí (DOWNTIME) và tổ chức nơi làm việc với 5S.",
            summary_en: "The 8 Wastes (DOWNTIME) and Workplace Organization (5S).",
            key_metrics_en: ["Muda (Waste)", "Mura (Unevenness)", "Muri (Overburden)", "DOWNTIME"],
            key_points_en: [
                "Defects: Rework/Scrap.",
                "Overproduction: Making too much/too early (Worst waste).",
                "Waiting: Idle time.",
                "Non-Utilized Talent: Ignoring ideas.",
                "Transportation: Moving stuff.",
                "Inventory: Storing stuff.",
                "Motion: Moving people.",
                "Extra-Processing: Gold plating."
            ],
            explanation_vi: `
**1. 3M của Lean**
- **Muda (Lãng phí):** Những việc không tạo giá trị (NVA).
- **Mura (Biến động):** Lúc làm nhanh, lúc làm chậm, lúc có hàng, lúc đói hàng.
- **Muri (Quá tải):** Ép nhân viên/máy móc làm quá sức -> Gây ra lỗi và tai nạn.

**2. 8 Lãng phí (DOWNTIME)**
Nhớ từ khóa **DOWNTIME** để tìm lãng phí tại Gemba (nơi làm việc).
Lãng phí tồi tệ nhất là **Overproduction** (Sản xuất thừa) vì nó che giấu tất cả các vấn đề khác.
            `,
            explanation_en: `
**1. The 3Ms of Lean**
- **Muda (Waste):** Non-Value Added activities.
- **Mura (Unevenness):** Fluctuating demand/production.
- **Muri (Overburden):** Stressing people or machines beyond capacity.

**2. The 8 Wastes (DOWNTIME)**
- **D**efects
- **O**verproduction (The Worst Waste - Hides all others).
- **W**aiting
- **N**on-Utilized Talent
- **T**ransportation (Moving stuff)
- **I**nventory (Storing stuff)
- **M**otion (Moving people)
- **E**xtra-Processing
            `,
            recommended_tools_en: ["Gemba Walk Checklist", "5S Audit"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz the student on identifying wastes in scenarios.",
                suggested_questions: ["Ví dụ về Waste of Motion?", "Tại sao Overproduction là tệ nhất?"],
                hint_levels: ["Movement of people vs things", "Hides other wastes", "Creates inventory"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 1", location_hint_en: "Lean Concepts" }
            ],
            flashcards: [
                {
                    id: "fc_waste_01",
                    question_en: "Which Lean waste refers to unnecessary movement of PEOPLE?",
                    answer_vi: "Motion.",
                    tags_en: ["Lean", "Waste"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_waste_02",
                    question_en: "Which Lean waste refers to unnecessary movement of MATERIALS?",
                    answer_vi: "Transportation.",
                    tags_en: ["Lean", "Waste"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_analyze_vsm_01"]
        },
        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_improve_quiz",
            order: 5,
            title_en: "Chapter 6 Quiz: Analyze (RCA & Lean) Phase",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 6 (25 câu hỏi).",
            summary_en: "Comprehensive Chapter 6 Quiz (25 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of Pareto, Fishbone, VSM, and Lean Wastes."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp các kiến thức về công cụ phân tích nguyên nhân gốc rễ (Pareto, Fishbone) và loại bỏ lãng phí (Lean/VSM).",
            explanation_en: "This quiz tests your ability to identify Root Causes (Pareto, Fishbone) and spotting Lean Wastes.",
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
            prerequisites_ids: ["mod_analyze_rca_01", "mod_analyze_rca_02", "mod_analyze_vsm_01", "mod_analyze_waste"]
        }
    ]
};
