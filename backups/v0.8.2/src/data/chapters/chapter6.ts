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
            summary_vi: "Nguyên lý Pareto (Juran): Tách 'Thiểu số quan trọng' (Vital Few) ra khỏi 'Đa số không quan trọng' (Trivial Many).",
            summary_en: "Juran’s Pareto Principle: Separating the 'Vital Few' from the 'Trivial Many'.",
            key_metrics_en: ["Cumulative Percentage", "Vital Few", "Trivial Many"],
            key_points_en: [
                "80/20 Rule: 80% of effects come from 20% of causes.",
                "Vital Few: The critical problems you must fix first.",
                "Trivial Many: The less important problems (Useful Many).",
                "Weighted Pareto: Prioritizing by Cost/Risk, not just Frequency.",
                "Drill Down: Creating a 'Pareto of a Pareto' to find root causes."
            ],
            explanation_vi: `
**1. Nguyên lý 80/20 (Pareto Principle)**
Được đặt tên bởi Joseph Juran (theo Vilfredo Pareto).
- **Nguyên lý:** 80% hậu quả đến từ 20% nguyên nhân.
  - *Ví dụ:* 20% khách hàng mang lại 80% khiếu nại.
- **Mục tiêu:** Tập trung nguồn lực hạn chế vào nhóm **"Vital Few"** (Thiểu số quan trọng) thay vì nhóm "Trivial Many" (Đa số chi li).

━━━━━━

**2. Cấu Trúc Biểu Đồ Pareto**
- **Cột (Bars):** Sắp xếp giảm dần từ trái sang phải (Cao nhất bên trái). Đại diện cho Tần suất hoặc Chi phí.
- **Đường (Line):** Phần trăm tích lũy (Cumulative %). Điểm cắt 80% giúp nhận diện nhóm Vital Few.
- **Dấu hiệu tốt:** Biểu đồ phải có độ dốc (Cột đầu rất cao, cột sau thấp dần). Nếu các cột bằng nhau (Flat Pareto), cách phân loại vấn đề đang bị sai.

━━━━━━

**3. Weighted Pareto (Pareto có Trọng số)**
Đừng chỉ đếm số lượng! Hãy tính đến Tác động (Impact).
- **Lỗi A:** 100 lần (Chi phí sửa: $1). -> Tổng: $100.
- **Lỗi B:** 5 lần (Chi phí sửa: $10,000). -> Tổng: $50,000.
-> Biểu đồ Pareto thường sẽ ưu tiên A. **Weighted Pareto** sẽ ưu tiên B (vì tốn tiền nhất).
*Mẹo thi:* Luôn kiểm tra xem đề bài có cho "Cost" hay "Severity" không. Nếu có, phải nhân vào!

**4. Pareto of a Pareto (Drill Down)**
Sau khi tìm ra cột cao nhất (Ví dụ: "Giao hàng trễ"), đừng dừng lại.
Hãy vẽ tiếp một biểu đồ Pareto chỉ cho riêng "Giao hàng trễ" để tìm nguyên nhân sâu xa (Xe hỏng, Tắc đường, hay Kho chậm?). Quá trình này gọi là **Phân tầng (Stratification)**.
            `,
            explanation_en: `
**1. The 80/20 Rule (Pareto Principle)**
Origin: Joseph Juran applied Pareto's math to Quality.
- **Principle:** 80% of effects come from 20% of causes.
- **Goal:** Focus on the **"Vital Few"** (Critical) issues, ignore the "Trivial Many."

**2. Chart Structure**
- **Bars:** Descending order (Highest frequency on left).
- **Line:** Cumulative Percentage.
- **Cutoff:** The point where the line crosses 80% usually identifies the Vital Few.
- **Flat Pareto:** If all bars are equal height, the categorization is poor (no dominant cause found).

**3. Weighted Pareto**
Frequency can be misleading. Prioritize by **Impact (Cost)**.
- *Scenario:* Defect A (100 count, Low Cost) vs Defect B (5 count, Huge Cost/Safety Risk).
- *Solution:* A Standard Pareto highlights A. A **Weighted Pareto** highlights B.

**4. Drill Down (Pareto of a Pareto)**
Once you find the biggest bar (e.g., "Late Deliveries"), create a NEW Pareto just for that category to investigate further. This is called **Stratification**.
            `,
            recommended_tools_en: ["Pareto Chart", "Weighted Pareto"],
            python_focus_en: ["matplotlib", "cumsum"],
            code_blocks: [
                {
                    id: "code_pareto",
                    title_en: "Creating a Pareto Chart",
                    context_en: `Situation: You have a log of 500 equipment failures. You want to know which 'Type of Reduction' you should focus on to solve 80% of problems.
Goal: Create a Pareto Chart and find the cutoff.`,
                    description_vi: "Vẽ biểu đồ Pareto với 2 trục: Trục trái là số lượng lỗi (Bar), Trục phải là % tích lũy (Line).",
                    code_template: `import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.ticker import PercentFormatter

# Data: Defect counts
data = {'Defect': ['Scratch', 'Dent', 'Stain', 'Gap', 'Crack'],
        'Count': [150, 80, 45, 20, 5]}
df = pd.DataFrame(data)

# 1. Sort Descending (Crucial for Pareto)
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
ax2.plot(df['Defect'], df['Cum_Percent'], color='C1', marker='D', ms=7)
ax2.yaxis.set_major_formatter(PercentFormatter())
ax2.set_ylabel('Cumulative %')
ax2.set_ylim(0, 110) # Line chart usually goes 0-100%

# Add 80% Cutoff Line
ax2.axhline(80, color='r', linestyle='--')

plt.title('Pareto Chart: Finding the Vital Few')
plt.show()`,
                    expected_output_en: "Combined Bar and Line chart with 80% cutoff.",
                    datasets_used: [],
                    learning_points_en: ["Sorting Data", "Dual-Axis Plotting", "80/20 Cutoff"],
                    difficulty_en: "Intermediate"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Weighted Pareto.",
                suggested_questions: [
                    { question_vi: "Khi nào dùng Weighted Pareto?", question_en: "When to use Weighted Pareto?" },
                    { question_vi: "Flat Pareto (Biểu đồ phẳng) nghĩa là gì?", question_en: "What does a Flat Pareto mean?" }
                ],
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
                },
                {
                    id: "fc_rca_03",
                    question_en: "What should you do if your Pareto Chart is flat (all bars similar height)?",
                    answer_vi: "Re-categorize the data or Stratify differently. (No dominant cause found).",
                    tags_en: ["Analyze", "Pareto"],
                    difficulty_en: "Hard",
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
            title_en: "Root Cause Analysis (Fishbone, 5 Whys, 8D)",
            summary_vi: "Tìm nguyên nhân gốc rễ với Fishbone & 5 Whys. Quy trình 8D để giải quyết vấn đề.",
            summary_en: "Root Cause Analysis using Fishbone & 5 Whys. The 8D Problem Solving Methodology.",
            key_metrics_en: ["6M Checklist", "Root Cause vs Direct Cause", "Containment (D3)", "Corrective Action (D5)"],
            key_points_en: [
                "Fishbone (Ishikawa): Divergent tool (Brainstorming All Causes).",
                "5 Whys: Convergent tool (Drilling down to ONE Root Cause).",
                "Root Cause: The systemic failure used to prevent recurrence.",
                "8D Methodology: A lifecycle for solving critical customer issues (D0-D8)."
            ],
            explanation_vi: `
**1. Fishbone Diagram (Biểu đồ Xương Cá/Ishikawa)**
Công cụ "Mở rộng" (Divergent) để tìm **mọi nguyên nhân có thể**. Sử dụng quy tắc 6M để không bỏ sót:

| 6M Category | Mô tả & Ví dụ |
|---|---|
| **Man (Con người)** | Mệt mỏi, thiếu đào tạo, mất tập trung, không tuân thủ quy trình. |
| **Machine (Máy móc)** | Thiết bị hỏng, mòn dao cắt, rung lắc, sai lệch hiệu chuẩn. |
| **Material (Vật liệu)** | Nguyên liệu thô lỗi, thay đổi nhà cung cấp, lô hàng không đồng nhất. |
| **Method (Phương pháp)** | Quy trình (SOP) sai, thiếu hướng dẫn an toàn, chưa chuẩn hóa. |
| **Measurement (Đo lường)** | Thước đo sai, mắt thường nhìn nhầm, Gage R&R thất bại. |
| **Mother Nature** | Môi trường: Nhiệt độ, độ ẩm, ánh sáng, tiếng ồn. |

━━━━━━

**2. 5 Whys (5 Tại sao)**
Công cụ "Thu hẹp" (Convergent) để khoan sâu vào nguyên nhân gốc rễ.

\`\`\`mermaid
flowchart TD
    A[Problem: Car Stopped] -->|Why?| B(Fuse Blew)
    B -->|Why?| C(Alternator Overloaded)
    C -->|Why?| D(Bearing Locked Up)
    D -->|Why?| E(Bearing was Dry)
    E -->|Why?| F(Oil Seal Broken)
    F -->|Why?| G[ROOT CAUSE: No Preventive Maintenance Plan]
    style G fill:#f96,stroke:#333,stroke-width:2px
\`\`\`

*Quy tắc:* Đừng dừng lại ở "Lỗi con người". Hãy hỏi tại sao hệ thống cho phép lỗi đó xảy ra.

━━━━━━

**3. 8D Methodology (8 Disciplines)**
Quy trình 8 bước tiêu chuẩn (Gốc từ Ford) để xử lý các khiếu nại khách hàng lớn.

| Step | Description | Key Action |
|---|---|---|
| **D0: Plan** | Chuẩn bị khẩn cấp | Đánh giá rủi ro, bảo vệ khách hàng ngay lập tức (24h). |
| **D1: Team** | Lập đội đặc nhiệm | Phải có Cross-functional team (QA, Prod, Eng, Logistics). |
| **D2: Problem** | Mô tả vấn đề (5W2H) | "Lỗi xước" (Chung chung) -> "Vết xước sâu 2mm ở góc trái trên 500 sản phẩm lô #A12". |
| **D3: ICA** | **Interim Containment** | **Băng bó (Band-aid):** Chặn máu chảy. VD: Kiểm tra 100%, Thu hồi hàng, Dùng kho đệm. *Không sửa nguyên nhân, chỉ chặn lỗi thoát.* |
| **D4: RCA** | **Root Cause Analysis** | Tìm "Escape Point" (Tại sao lỗi thoát qua chốt kiểm tra?) và "Occurrence Root Cause" (Tại sao lỗi sinh ra?). |
| **D5: PCA** | **Permanent Corrective** | Chọn giải pháp tận gốc. VD: Thay đổi khuôn, Lắp cảm biến tự động (Poka-yoke). |
| **D6: Validate** | Triển khai & Kiểm tra | Chạy thử nghiệm để chứng minh PCA hoạt động và không gây ra lỗi mới. |
| **D7: Prevent** | Ngăn ngừa tái diễn | Cập nhật hệ thống: FMEA, Control Plan, SOP, Đào tạo lại. |
| **D8: Recognize** | Tuyên dương | Mở tiệc, trao thưởng cho team. |

━━━━━━

### 💡 Pro Tips for RCA
> [!TIP]
> **Quy tắc Brainstorming (Fishbone):**
> 1.  **Số lượng hơn Chất lượng:** Càng nhiều ý tưởng càng tốt.
> 2.  **Không Phán Xét:** Đừng bác bỏ ý kiến của người khác ngay lập tức.
> 3.  **Ghi chép tất cả:** Kể cả những ý tưởng điên rồ nhất.

> [!WARNING]
> **Cạm Bẫy 5 Whys:**
> -   **Dừng lại quá sớm:** "Do lỗi con người" -> *Sai!* Hãy hỏi tại sao con người phạm lỗi? (Thiếu đào tạo? Thiết kế gây nhầm lẫn?).
> -   **Logic sai:** Đảm bảo câu trả lời của Why 2 phải trực tiếp gây ra Why 1 (Kiểm tra ngược bằng từ "Do đó").
            `,
            explanation_en: `
**1. Fishbone Diagram (Ishikawa)**
A "Divergent" brainstorming tool. Imagine you are solving a **"Late Pizza Delivery"** problem.

| 6M Category | Possible Causes comparison |
|---|---|
| **Man** | Driver got lost, Chef worked slowly, Dispatcher forgot order. |
| **Machine** | Oven not hot enough, Scooter broke down, GPS failed. |
| **Material** | Ran out of dough, Box collapsed, Wrong topping. |
| **Method** | Taking longer route, "First In First Out" violation, No checklist. |
| **Measurement** | Clock was slow, Address read incorrectly. |
| **Environment** | Heavy rain, Traffic jam, Road construction. |

*Goal:* Group ideas so you don't miss any angle (e.g., forgetting to check "Mother Nature").

━━━━━━

**2. The 5 Whys**
A "Convergent" drilling tool. Let's look at the **"Three-Legged 5 Whys"** technique:

1.  **Specific Problem:** Why did it happen? (Technical Root Cause)
2.  **Detection Failure:** Why didn't we catch it? (Control Root Cause)
3.  **Systemic Failure:** Why did the system allow it? (Management Root Cause)

\`\`\`mermaid
flowchart TD
    Prob[Problem: Car Stopped] -->|Why 1| Sym(Fuse Blew)
    Sym -->|Why 2| Dir(Alternator Overloaded)
    Dir -->|Why 3| Cause1(Bearing Locked Up)
    Cause1 -->|Why 4| Cause2(Oil Seal Broken)
    Cause2 -->|Why 5| Root[ROOT CAUSE: No Maintenance Schedule]
    style Root fill:#f96,stroke:#333,stroke-width:2px
    
    %% Lateral Logic Check
    Root -.->|Therefore| Cause2
    Cause2 -.->|Therefore| Cause1
\`\`\`

━━━━━━

**3. The 8D Methodology**
Standard for solving major customer issues.

| Step | Focus | Example Action |
|---|---|---|
| **D0-D2** | **Preparation** | Plan, Team up, and Define "The Fuse blew on 15% of units in Q3". |
| **D3** | **Containment (ICA)** | *The Band-Aid.* 100% Inspection of stock. Stop shipping until safe. |
| **D4** | **Root Cause (RCA)** | *The Surgery.* Find out the oil seal was cheap rubber. |
| **D5-D6** | **Correction (PCA)** | Change to Viton Seals (Heat resistant). Validate with 500 hour test. |
| **D7** | **Prevention** | Update Design Rules: "Only Viton seals for high-temp engines". |
| **D8** | **Recognition** | Pizza party for the engineering team! |
            `,
            recommended_tools_en: ["Ishikawa Diagram", "5 Whys", "8D Report"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Facilitate a Fishbone/5 Whys session.",
                suggested_questions: [
                    { question_vi: "Sự khác biệt giữa D3 (Containment) và D5 (Corrective) là gì?", question_en: "Difference between D3 (Containment) and D5 (Corrective)?" },
                    { question_vi: "Khi nào nên dừng 5 Whys?", question_en: "When to stop asking Why?" }
                ],
                hint_levels: ["D3 is temporary, D5 is permanent", "Stop when you find a missing process/policy", "Do not stop at 'Human Error'"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Analyze", location_hint_en: "Root Cause Analysis" },
                { source_type: "template", label_en: "8D Report Template_v1.xlsx", location_hint_en: "All Sections" }
            ],
            flashcards: [
                {
                    id: "fc_rca_03",
                    question_en: "In a Fishbone Diagram, which 'M' covers temperature and humidity?",
                    answer_vi: "Mother Nature (Environment).",
                    tags_en: ["Analyze", "Ishikawa"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_rca_04",
                    question_en: "What is the main goal of D3 (Interim Containment Action) in 8D?",
                    answer_vi: "To protect the customer immediately (band-aid) while searching for the root cause.",
                    tags_en: ["Analyze", "8D"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 45,
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
            explanation_vi: `
**1. 3 Loại Công Việc (The 3 Types of Work)**
Để vẽ VSM, bạn phải phân loại mọi hành động vào 3 nhóm:

| Loại | Tên gọi | Định nghĩa & Ví dụ |
|---|---|---|
| **VA** | **Value-Added** | Khách hàng sẵn sàng trả tiền. Phải thỏa mãn 3 điều kiện: (1) Thay đổi hình dáng/tính chất, (2) Khách hàng cần, (3) Làm đúng ngay từ đầu. |
| **NVA** | **Non-Value-Added (Waste)** | Lãng phí thuần túy. Tiêu tốn tài nguyên nhưng không tạo giá trị. VD: Chờ đợi, Sửa hàng lỗi, Di chuyển thừa. -> **Loại bỏ ngay!** |
| **BVA** | **Business Value-Added** | Khách hàng không trả tiền, nhưng luật pháp/kinh doanh yêu cầu. VD: Trả lương, Báo cáo thuế, Kiểm toán an toàn. -> **Giảm thiểu tối đa.** |

━━━━━━

**2. Cấu Trúc & Ký Hiệu VSM**
VSM khác Process Map vì nó vẽ cả **Dòng Thông Tin** (trên cùng) điều khiển **Dòng Vật Chất** (bên dưới).

*   **Inventory Triangle (I):** Hình tam giác chứa chữ "I". Biểu thị hàng tồn kho nằm chết giữa các công đoạn. Đây là nguyên nhân chính gây ra Lead Time.
*   **Data Box:** Hộp dữ liệu gắn với mỗi bước. Chứa: C/T (Cycle Time), C/O (Changeover Time), Uptime.
*   **Push Arrow (Mũi tên sọc):** Đẩy hàng theo dự báo (Dấu hiệu của Waste).
*   **Pull Arrow (Mũi tên móc):** Kéo hàng theo nhu cầu thực tế (Lean).
*   **Lightning Bolt (Tia chớp):** Dòng thông tin điện tử (Email, ERP).

━━━━━━

**3. Các Chỉ Số Thời Gian (Key Metrics)**

$$
\\text{PCE (Process Cycle Efficiency)} = \\frac{\\text{Value Added Time}}{\\text{Total Lead Time}} \times 100\\%
$$

*   **Lead Time (L/T):** Tổng thời gian "từ cửa đến cửa" (Door-to-Door). Bao gồm cả thời gian chờ (Inventory).
*   **Cycle Time (C/T):** Thời gian để hoàn thành 1 sản phẩm tại 1 công đoạn cụ thể.
*   **Sự thật kỳ lạ:** Một quy trình chưa tối ưu thường có **PCE < 5%**. Nghĩa là 95% thời gian của sản phẩm là nằm chờ (Waiting)!

> [!TIP]
> **Timeline (Đường răng cưa):** Dưới đáy VSM là dòng thời gian.
> - **Đỉnh (Cao):** Thời gian chờ (NVA) - Thường tính bằng Ngày/Giờ.
> - **Đáy (Thấp):** Thời gian gia công (VA) - Thường tính bằng Giây/Phút.
            `,
            explanation_en: `
**1. The 3 Types of Work**
To map value, categorize every step into three buckets:

| Type | Name | Definition & Rule |
|---|---|---|
| **VA** | **Value-Added** | Must meet 3 criteria: (1) Customer pays for it, (2) Physically changes the product, (3) Done right the first time. |
| **NVA** | **Non-Value-Added (Muda)** | Pure Waste. Consumes resources but adds zero value. E.g., Waiting, Rework. -> **Eliminate!** |
| **BVA** | **Business Value-Added** | Required by business/law but adds no value to customer. E.g., Payroll, OSHA Audits. -> **Minimize.** |

━━━━━━

**2. VSM Structure & Symbols**
VSM maps **Information Flow** (Top) controlling **Material Flow** (Bottom).

*   **Inventory Triangle (I):** Stagnant parts between steps. Major source of Lead Time.
*   **Data Box:** Metrics for each step (C/T, C/O, Uptime).
*   **Push Arrow (Striped):** Production based on forecast (Bad/Waste).
*   **Pull Arrow:** Production triggered by demand (Good/Lean).
*   **Lightning Bolt:** Electronic info flow.

━━━━━━

**3. Key Metrics**

$$
\\text{PCE} = \\frac{\\text{Value Added Time}}{\\text{Total Lead Time}} \times 100\\%
$$

*   **Lead Time (L/T):** Total Door-to-Door time. Includes all the "Inventory" waiting time.
*   **Cycle Time (C/T):** Time to process one unit at a specific step.
*   **Exam Fact:** Typical un-optimized processes have a **PCE < 5%** (95% Waste!).

> [!NOTE]
> **The Sawtooth Timeline:**
> The bottom of a VSM shows a line.
> - **Peaks (High):** Waiting Time (NVA) -> Measured in Days/Hours.
> - **Valleys (Low):** Processing Time (VA) -> Measured in Seconds/Minutes.
            `,
            recommended_tools_en: ["VSM Software", "Stopwatch"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz the student on VA vs NVA scenarios and VSM symbols.",
                suggested_questions: [
                    { question_vi: "Làm lương (Payroll) là VA hay NVA?", question_en: "Is Payroll VA or NVA?" },
                    { question_vi: "Công thức tính PCE là gì?", question_en: "What is the PCE formula?" },
                    { question_vi: "Mũi tên 'Sọc' nghĩa là gì trong VSM?", question_en: "What does the 'Striped' arrow mean?" }
                ],
                hint_levels: ["BVA (Required but customer doesn't pay)", "VA Time / Lead Time", "Push System (Forecast)"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "VSM Symbols Guide", location_hint_en: "VSM Section" }
            ],
            flashcards: [
                {
                    id: "fc_vsm_01",
                    question_en: "What are the 3 criteria for a Value-Added (VA) step?",
                    answer_vi: "1. Customer pays for it. 2. Changes form/fit/function. 3. Done right the first time.",
                    tags_en: ["Lean", "VSM"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_vsm_02",
                    question_en: "What does Process Cycle Efficiency (PCE) < 5% mean?",
                    answer_vi: "It means 95% of the total Lead Time is WASTE (mostly waiting in inventory).",
                    tags_en: ["Lean", "VSM", "Calculations"],
                    difficulty_en: "Hard",
                    ai_tutor_available: true
                },
                {
                    id: "fc_vsm_03",
                    question_en: "Business Value Added (BVA) activities should be eliminated. True or False?",
                    answer_vi: "False. They are necessary (Payroll, Tax) so they should be MINIMIZED, not eliminated.",
                    tags_en: ["Lean", "VSM"],
                    difficulty_en: "Medium",
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
**1. 3 Kẻ Thù của Lean (The 3Ms)**
Bạn phải phân biệt được 3 thuật ngữ tiếng Nhật này:
*   **Muda (Waste):** Những hoạt động không tạo ra giá trị (NVA). Đây là mục tiêu chính của 8 Lãng phí.
*   **Mura (Unevenness - Sự không đều):** Biến động trong sản xuất (Lúc làm gấp, lúc ngồi chơi). *Mura sinh ra Muda.*
*   **Muri (Overburden - Quá tải):** Ép con người/máy móc làm quá công suất -> Dẫn đến kiệt sức và lỗi.

━━━━━━

**2. 8 Lãng phí (DOWNTIME)**
Hãy học thuộc lòng từ viết tắt **DOWNTIME**:

| Waste | Mô tả & Ví dụ |
|---|---|
| **D**efects | Sản phẩm lỗi, phải làm lại (Rework) hoặc vứt bỏ (Scrap). |
| **O**verproduction | **Lãng phí TỆ NHẤT.** Sản xuất quá nhiều hoặc quá sớm. Nó tạo ra Tồn kho và "che giấu" mọi vấn đề khác. |
| **W**aiting | Thời gian chết. Người đợi máy, máy đợi người, đợi duyệt đơn. |
| **N**on-Utilized Talent | Không tận dụng trí tuệ nhân viên. Chỉ thuê đôi tay mà quên bộ óc. |
| **T**ransportation | Di chuyển **Vật tư/Hàng hóa** không cần thiết. (VD: Xe nâng chạy lòng vòng). |
| **I**nventory | Hàng tồn kho (nguyên liệu, bán thành phẩm) nằm im lãng phí vốn. |
| **M**otion | Di chuyển **Con người** thừa thãi. (VD: Với tay lấy kìm, cúi xuống nhặt đồ). |
| **E**xtra-Processing | Làm kỹ quá mức cần thiết (Gold-plating). Khách hàng không yêu cầu nhưng vẫn làm. |

> [!WARNING]
> **Cạm Bẫy Thi Cử:**
> -   **Motion vs Transportation:** Người di chuyển = Motion. Xe/Hàng di chuyển = Transportation.
> -   **Inventory vs Overproduction:** Overproduction là hành động (động từ) tạo ra Inventory (danh từ).

━━━━━━

**3. 5S Methodology (Sắp xếp nơi làm việc)**
Mục tiêu của 5S không phải là "sạch sẽ", mà là làm cho **lãng phí hiển thị rõ ràng**.

1.  **Sort (Seiri - Sàng lọc):** Loại bỏ thứ không cần thiết. Dùng chiến lược **"Thẻ Đỏ" (Red Tag)** để đánh dấu vật dư thừa.
2.  **Straighten (Seiton - Sắp xếp):** "Dễ tìm, dễ thấy, dễ lấy". (Vạch sơn, bảng bóng).
3.  **Shine (Seiso - Sạch sẽ):** Vệ sinh là kiểm tra. Máy sạch thì mới phát hiện rò rỉ dầu.
4.  **Standardize (Seiketsu - Săn sóc):** Tạo quy trình (SOP) để duy trì 3S đầu.
5.  **Sustain (Shitsuke - Sẵn sàng):** Kỷ luật và thói quen. Bước khó nhất.
            `,
            explanation_en: `
**1. The 3Ms of Lean**
You must distinguish between these three Japanese terms:
*   **Muda (Waste):** Non-value-added activities (The 8 Wastes).
*   **Mura (Unevenness):** Fluctuations in demand (e.g., rushing at month-end). *Mura creates Muda.*
*   **Muri (Overburden):** Stressing people/machines beyond capacity. Leads to burnout/defects.

━━━━━━

**2. The 8 Wastes (DOWNTIME)**
Memorize the acronym **DOWNTIME**:

| Waste | Description & Keyword |
|---|---|
| **D**efects | Inspection, rework, scrap. |
| **O**verproduction | **THE WORST WASTE.** Making too much/too early. It creates Inventory and hides defects. |
| **W**aiting | Idle time (waiting for parts/approval). |
| **N**on-Utilized Talent | Not listening to employees' ideas. |
| **T**ransportation | Moving **Stuff** (Materials/Pallets) unnecessarily. |
| **I**nventory | Excess Stock. "Money sitting on the floor." |
| **M**otion | Moving **People** unnecessarily (Reaching, bending, walking). |
| **E**xtra-Processing | "Gold-plating". Doing more than the customer paid for. |

> [!CAUTION]
> **Exam Trap:**
> If a Forklift moves a box ➜ **Transportation**.
> If a Worker walks to the printer ➜ **Motion**.

━━━━━━

**3. 5S Methodology**
Organization tool to make waste visible. Know the Japanese terms:

1.  **Sort (Seiri):** Remove unneeded items. Strategy: **Red Tagging**.
2.  **Straighten (Seiton):** A place for everything. (Shadow boards, floor tape).
3.  **Shine (Seiso):** Clean and inspect.
4.  **Standardize (Seiketsu):** Rules/SOPs to maintain the first 3.
5.  **Sustain (Shitsuke):** Self-discipline/Culture.
            `,
            recommended_tools_en: ["Gemba Walk Checklist", "5S Audit", "Red Tags"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Quiz the student on identifying wastes relative to DOWNTIME.",
                suggested_questions: [
                    { question_vi: "Lãng phí nào là tồi tệ nhất? Tại sao?", question_en: "What is the Worst Waste and why?" },
                    { question_vi: "Sự khác biệt giữa Motion và Transportation?", question_en: "Difference between Motion and Transportation?" },
                    { question_vi: "Chiến lược Thẻ Đỏ (Red Tag) dùng ở bước 5S nào?", question_en: "Which 5S step uses Red Tags?" }
                ],
                hint_levels: ["Overproduction - Hides defects", "People vs Stuff", "Sort (Seiri)"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "Master Cheat Sheet - Section 1", location_hint_en: "Lean Concepts" },
                { source_type: "standard", label_en: "5S Audit Sheet", location_hint_en: "Templates" }
            ],
            flashcards: [
                {
                    id: "fc_waste_01",
                    question_en: "What is the difference between 'Motion' and 'Transportation'?",
                    answer_vi: "Motion = People moving. Transportation = Things/Materials moving.",
                    tags_en: ["Lean", "Waste"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_waste_02",
                    question_en: "Which 5S step involves 'Red Tagging' unneeded items?",
                    answer_vi: "Sort (Seiri).",
                    tags_en: ["Lean", "5S"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_waste_03",
                    question_en: "Why is Overproduction considered the 'Worst Waste'?",
                    answer_vi: "Because it creates Inventory, consumes cash, and hides all other problems (defects/inefficiencies).",
                    tags_en: ["Lean", "Waste"],
                    difficulty_en: "Hard",
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
