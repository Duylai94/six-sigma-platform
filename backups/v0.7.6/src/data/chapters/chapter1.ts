import { Chapter, Module, Reference, Flashcard, QuizQuestion } from "../../types/course";

export const chapterFoundations: Chapter = {
    id: "ch_foundations",
    order: 1,
    title_en: "Foundations & Mindset",
    goal_vi: "Xây dựng tư duy Six Sigma, hiểu vai trò và nắm vững khuôn khổ DMAIC.",
    goal_en: "Develop Six Sigma mindset, understand roles, and master the DMAIC framework.",
    iassc_topics_en: [
        "1.1 The Basics of Six Sigma",
        "1.2 Roles & Responsibilities",
        "1.3 Excellence: Gurus & Teams",
        "1.4 Fundamentals & DMAIC Overview",
        "1.5 The Lean Enterprise"
    ],
    modules: [
        {
            id: "mod_foundations_01",
            order: 1,
            title_en: "1.1 The Basics of Six Sigma",
            summary_vi: "Tìm hiểu toàn diện về định nghĩa, lịch sử và phương trình Y=f(x) cốt lõi của Six Sigma.",
            summary_en: "Comprehensive understanding of Six Sigma definition, history, and the core Y=f(x) equation.",
            key_metrics_en: ["Y = f(x)", "Sigma Levels", "3.4 DPMO", "99.99966% Yield"],
            key_points_en: [
                "Definition: A data-driven methodology to reduce variation and defects.",
                "Target: 3.4 Defects Per Million Opportunities (DPMO).",
                "History: Developed by Bill Smith at Motorola (1986). Popularized by Jack Welch at General Electric.",
                "Y = f(x): Y is the Output (Effect), x are the Inputs (Causes). To change Y, you must control x.",
                "Voice of Customer (VOC): The starting point of all projects."
            ],
            explanation_vi: `
**1. Meanings of Six Sigma (Ý nghĩa của Six Sigma)**
Six Sigma thường bị hiểu nhầm là "chỉ là thống kê". Thực tế, nó là ba thứ cùng lúc:
1. **Metric (Thước đo):** Mục tiêu thống kê là **3.4 DPMO** (Lỗi trên một triệu cơ hội), tương đương tỷ lệ sạch lỗi **99.99966%**.
2. **Methodology (Phương pháp luận):** Lộ trình giải quyết vấn đề có cấu trúc gọi là **DMAIC** (Xác định, Đo lường, Phân tích, Cải tiến, Kiểm soát).
3. **Philosophy (Triết lý):** Tập trung vào việc **giảm biến động** (reducing variation). Khách hàng không cảm nhận "trung bình"; họ cảm nhận sự biến động. Một quy trình ổn định, dự đoán được là chìa khóa của chất lượng.

**📌 VÍ DỤ: 99% vs 6 Sigma**
Nếu chúng ta chấp nhận độ chính xác 99% (khoảng 3.8 Sigma) thay vì Six Sigma (99.99966%), hậu quả sẽ rất thảm khốc:
- **Tại 99%:** Sẽ có khoảng **20,000 lá thư bị thất lạc mỗi giờ** hoặc nguồn nước không an toàn trong **15 phút mỗi ngày**.
- **Tại 6 Sigma:** Những lỗi này gần như bị loại bỏ hoàn toàn (~35 lỗi/năm).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. History (Lịch sử & Bối cảnh)**
- **Motorola (1986):** Bill Smith phát triển Six Sigma để giải quyết các vấn đề bảo hành và lỗi do quy trình sản xuất. Trọng tâm ban đầu là *Cải tiến Chất lượng*.
- **General Electric (1995):** Jack Welch phổ biến nó bằng cách gắn liền với *Kết quả Tài chính* và thăng tiến lãnh đạo. Ông chứng minh Six Sigma tiết kiệm hàng tỷ USD, đưa nó từ nhà máy lên phòng họp hội đồng quản trị.
- **Lean vs Six Sigma:**
  - **Lean:** Tập trung vào loại bỏ *Lãng phí (Muda)* và cải thiện *Tốc độ/Dòng chảy*.
  - **Six Sigma:** Tập trung vào giảm *Biến động* và cải thiện *Độ chính xác*.

**📌 VÍ DỤ: Tiệm Pizza (Giảm biến động)**
Hãy tưởng tượng một tiệm pizza. Nhân viên dùng cốc để đong phô mai.
- **Vấn đề:** Bánh nhỏ dùng 1 cốc, bánh lớn dùng 2 cốc. Nhưng có nhân viên thì *xúc mạnh* (đầy chặt), người khác lại *rót nhẹ* (lỏng lẻo). Điều này tạo ra biến động: bánh thì quá nhiều phô mai (tốn kém), bánh thì khô (khách phàn nàn).
- **Giải pháp Six Sigma:** Chủ tiệm yêu cầu nhân viên xúc đầy cốc tràn miệng, rồi dùng dao gạt phẳng (Standardize). Quy trình trở nên nhất quán (ổn định), và trải nghiệm khách hàng được dự đoán trước.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. The Problem Solving Strategy Y = f(x)**
Đây là "DNA" của Six Sigma.
- **Y (Output / Effect):** Vấn đề bạn đang thấy (VD: Khách hàng không hài lòng). Đây là chỉ số trễ (Lagging Indicator) - bạn chỉ đo được sau khi nó đã xảy ra. Bạn không thể "quản lý" Y trực tiếp.
- **x (Inputs / Causes):** Các nguyên nhân gốc rễ (VD: Đào tạo, Nhiệt độ, Nguyên liệu). Đây là chỉ số dẫn dắt (Leading Indicators). Để sửa Y, bạn phải kiểm soát x.
- **f (Function):** Mối quan hệ giữa đầu vào và đầu ra.

**📌 VÍ DỤ: Hiệu quả Tổng đài**
- **Y (Vấn đề):** Cuộc gọi kéo dài quá lâu. Quản lý không thể ra lệnh: "Hãy gọi nhanh lên!" (Đó là cố quản lý Y).
- **Phân tích:** Dữ liệu cho thấy x1 (Nói chuyện phiếm) và x2 (Thiếu kỹ năng phần mềm) là nguyên nhân.
- **Giải pháp:** Bằng cách kiểm soát x1 (hạn chế chuyện phiếm) và x2 (đào tạo lại), Y (thời gian gọi) tự động được cải thiện.
            `,
            explanation_en: `
**1. Meanings of Six Sigma**
Six Sigma is often misunderstood as just "statistics." It is actually three things simultaneously:
1. **Metric:** It represents a statistical target of **3.4 DPMO** (Defects Per Million Opportunities), which translates to a **99.99966%** defect-free yield.
2. **Methodology:** It provides a structured roadmap called **DMAIC** (Define, Measure, Analyze, Improve, Control) to solve problems.
3. **Philosophy:** It focuses on **reducing variation**. The core belief is that customers do not feel "averages"; they feel the variation in the process. A stable, predictable process is the key to quality.

**📌 EXAMPLE: The "99% is Good Enough" Fallacy**
If we accept a 99% accuracy rate (roughly 3.8 Sigma) instead of Six Sigma (99.99966%), the consequences in critical industries would be catastrophic.
- **At 99% accuracy:** There would be roughly **20,000 lost articles of mail per hour** or unsafe drinking water for **15 minutes each day**.
- **At 6 Sigma:** These errors are virtually eliminated (~35 errors per year in airline industry).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. History & Context**
- **Motorola (1986):** Bill Smith developed Six Sigma to solve warranty claims and defect issues. The focus was purely on *Quality Improvement*.
- **General Electric (1995):** Jack Welch popularized it by tying it to *Financial Results* and leadership promotion. He proved that Six Sigma saves billions of dollars, moving it from the factory floor to the boardroom.
- **Lean vs. Six Sigma:**
  - **Lean** focuses on removing *Waste (Muda)* and improving *Speed/Flow*.
  - **Six Sigma** focuses on reducing *Variation* and improving *Accuracy*.

**📌 EXAMPLE: The Pizzeria (Reducing Variation)**
Imagine a pizza shop. Employees use cups to add cheese.
- **Problem:** Small pizzas get 1 cup, large get 2 cups. But some employees *scoop* the cheese (packing it tight), while others *pour* it (loose). This creates variation: some pizzas are too cheesy/expensive, others are dry/complained about.
- **Six Sigma Solution:** The owner reduces variation by training employees to fill the cup over the rim and use a flat spatula to scrape it level. The process becomes consistent (stable), and customer experience is predictable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. The Problem Solving Strategy Y = f(x)**
This is the "DNA" of Six Sigma.
- **Y (Output / Effect):** This is the problem you are seeing (e.g., Low customer satisfaction). It is a **Lagging Indicator**—you can only measure it after it happens. You cannot directly "manage" Y.
- **x (Inputs / Causes):** These are the root causes (e.g., Training, Temperature, Raw Materials). These are **Leading Indicators**. To fix Y, you must control x.
- **f (Function):** The relationship between the inputs and the output.

**📌 EXAMPLE: Call Center Efficiency**
- **Y (The Problem):** Calls are taking too long (High Cycle Time). A manager cannot simply order employees: "Make the calls shorter!" That is trying to manage Y directly.
- **Analysis:** Data shows two specific reps take longer because they talk about non-work topics (x1), and others take longer because they don't know how to use the software (x2).
- **Solution:** By controlling x (limiting chatter and providing training), the Y (call duration) automatically improves.
            `,
            recommended_tools_en: ["SIPOC", "VOC Translation Matrix"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the history of Six Sigma and definitions.",
                suggested_questions: [
                    { question_vi: "Ai là cha đẻ của Six Sigma?", question_en: "Who is the father of Six Sigma?" },
                    { question_vi: "Sự khác biệt giữa Y và x?", question_en: "What is the difference between Y and x?" },
                    { question_vi: "Quy tắc 3.4 DPMO là gì?", question_en: "What is the 3.4 DPMO rule?" },
                    { question_vi: "Tại sao độ chính xác 99% lại không đủ tốt?", question_en: "Why is 99% accuracy not good enough?" },
                    { question_vi: "Khác biệt cốt lõi giữa Lean và Six Sigma?", question_en: "What is the core difference between Lean and Six Sigma?" }
                ],
                hint_levels: ["Basic definitions", "Motorola vs GE", "Causality"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Define 1.1", location_hint_en: "The Basics of Six Sigma" }
            ],
            flashcards: [
                {
                    id: "fc_foundations_01",
                    question_en: "What is the mathematical definition of Six Sigma in terms of DPMO?",
                    answer_vi: "3.4 DPMO (Defects Per Million Opportunities).",
                    tags_en: ["Basics", "Metrics"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_foundations_02",
                    question_en: "Who is credited as the 'Father of Six Sigma'?",
                    answer_vi: "Bill Smith (Motorola).",
                    tags_en: ["History"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_foundations_03",
                    question_en: "Which part of Y=f(x) represents the lagging indicator?",
                    answer_vi: "Y (The Output/Effect). Bạn chỉ có thể đo nó sau khi sự việc đã xảy ra.",
                    tags_en: ["Basics", "Y=f(x)"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: []
        },
        {
            id: "mod_foundations_02",
            order: 2,
            title_en: "1.2 Six Sigma Roles & Responsibilities",
            summary_vi: "Chi tiết về hệ thống đai (Belts) và trách nhiệm của từng vai trò trong dự án.",
            summary_en: "Detailed breakdown of the Belt system and project roles/responsibilities.",
            key_metrics_en: ["Project Savings > $50k", "Time Commitment"],
            key_points_en: [
                "Yellow Belt: Project member, data collector. Understands basic terminology.",
                "Green Belt: Project leader (part-time ~25%). Leads simpler projects.",
                "Black Belt: Project leader (full-time). Deep statistical knowledge, mentor to GBs.",
                "Master Black Belt (MBB): Trainer, coach, strategic alignment.",
                "Champion/Sponsor: Executive who approves funding and removes roadblocks.",
                "Process Owner: The person responsible for the process after the project closes."
            ],
            explanation_vi: `
**Hệ thống Đai (The Belt System): Phân cấp như Đội xây dựng**
Six Sigma phân cấp kỹ năng tương tự như một công trường xây dựng hoặc đội bóng:

1. **White/Yellow Belt (Quan sát viên):**
   - Là "Mắt và Tai" của dự án.
   - Họ phát hiện vấn đề (VD: "Cái máy này kêu to quá") nhưng không trực tiếp sửa.
2. **Green Belt (Kiến trúc sư bán thời gian):**
   - Là "Ngựa thồ" (Workhorse). Vẫn làm công việc chính (Kế toán, Kỹ sư) nhưng dành 20-30% thời gian dẫn dắt các dự án cải tiến *trong phòng ban của họ*.
   - Sửa chữa các "vết nứt" cụ thể.
3. **Black Belt (Kỹ sư kết cấu toàn thời gian):**
   - Làm việc 100% cho Six Sigma.
   - Giải quyết các vấn đề phức tạp, liên phòng ban (VD: Quy trình từ Kho -> Sản xuất -> Giao hàng bị lỗi).
   - Là người hướng dẫn (Mentor) cho Green Belt.
4. **Master Black Belt (Giáo sư):**
   - Người dạy các Black/Green Belt. Định hướng chiến lược cho công ty.

**Lãnh đạo (Authority vs Responsibility)**
- **Champion/Sponsor (Chủ đầu tư/Ngân hàng):**
   - Người "ký séc". Giám đốc tài chính (CFO) hoặc Giám đốc nhà máy.
   - Họ xóa bỏ rào cản (VD: Cấp lính, cấp tiền). *Họ không làm toán thống kê.*
- **Process Owner (Chủ nhà):**
   - Người chịu trách nhiệm vận hành quy trình hàng ngày (Trưởng phòng Billing).
   - Khi dự án xong, họ "nhận lại chìa khóa" và duy trì kết quả.

**📌 KỊCH BẢN: Dự án "Hóa đơn sai lệch"**
Một công ty đang mất $1M/năm do gửi sai hóa đơn.
- **Sponsor (CFO):** Ra lệnh "Sửa ngay đi!" và cấp ngân sách.
- **Master Black Belt:** Chọn dự án này và giao cho một Black Belt giỏi nhất.
- **Black Belt:** Phân tích dữ liệu phức tạp giữa 3 phòng ban (Sales, Kế toán, IT). Phát hiện lỗi do phần mềm và nhập liệu.
- **Green Belt:** Dẫn dắt một nhóm nhỏ sửa quy trình *In ấn* (một phần nhỏ của dự án).
- **Process Owner (Trưởng phòng Kế toán):** Phê duyệt thay đổi và đảm bảo nhân viên tuân thủ quy trình mới sau khi đội dự án rời đi.
            `,
            explanation_en: `
**The Belt System: Construction Crew Analogy**
Six Sigma hierarchy is similar to a specialized construction team:

1. **White/Yellow Belt (The Observer):**
   - The "Eyes and Ears".
   - They spot issues (e.g., "This machine is rattling") but do not lead the repair.
2. **Green Belt (The Part-Time Architect):**
   - The "Workhorse". They keep their day job (Accountant, Engineer) but spend 20-30% of time leading specific improvement projects *within their department*.
3. **Black Belt (The Structural Engineer):**
   - **Full-time** problem solver.
   - Handles complex, cross-functional collapses (e.g., Fix the flow from Warehouse -> Production -> Shipping).
   - Mentors Green Belts.
4. **Master Black Belt (The Professor):**
   - Trains the Engineers and Architects. Sets the strategic roadmap.

**Leadership Roles (Authority vs Responsibility)**
- **Champion/Sponsor (The Banker/Owner):**
   - The Executive (CFO/Plant Manager) who signs the checks.
   - They remove roadblocks (political/financial). * They do NOT do the statistics.*
- **Process Owner (The Landlord):**
   - The Manager responsible for the daily operation (Billing Ops Manager).
   - They "take the keys back" after the renovation is done and ensure the new process is followed.

**📌 SCENARIO: The "Broken Billing" Project**
A company is losing $1M/year due to incorrect customer invoices.
- **Sponsor (CFO):** Demands a fix and approves budget.
- **Master Black Belt:** Selects the project and assigns a top Black Belt.
- **Black Belt:** Leads the complex analysis across Sales, Accounting, and IT. Finds root cause in data transfer logic.
- **Green Belt:** A Senior Accountant leads a sub-team to fix the *Manual Entry Protocol*.
- **Process Owner (Accounting Manager):** Accepts the new software/protocol and enforces it daily after the Belt team leaves.
            `,
            recommended_tools_en: ["RACI Matrix", "Stakeholder Map"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the difference between a Green Belt and a Black Belt and other roles.",
                suggested_questions: [
                    { question_vi: "Process Owner khác gì với Project Sponsor?", question_en: "How is a Process Owner different from a Project Sponsor?" },
                    { question_vi: "Green Belt có phải làm full-time không?", question_en: "Does a Green Belt work full-time?" },
                    { question_vi: "Ai là người ký séc cho dự án?", question_en: "Who signs the check for the project?" },
                    { question_vi: "Vai trò của Master Black Belt là gì?", question_en: "What is the role of a Master Black Belt?" },
                    { question_vi: "Tại sao gọi Process Owner là 'Chủ nhà'?", question_en: "Why is the Process Owner called the 'Landlord'?" }
                ],
                hint_levels: ["Authority vs Responsibility", "Time allocation", "Skill depth"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - 1.1.6 Roles", location_hint_en: "Roles & Responsibilities" }
            ],
            flashcards: [
                {
                    id: "fc_roles_01",
                    question_en: "What is the primary role of a Champion/Sponsor?",
                    answer_vi: "Remove roadblocks and approve funding (Xóa bỏ rào cản và duyệt ngân sách).",
                    tags_en: ["Roles", "Leadership"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_roles_02",
                    question_en: "Which Belt level works full-time on Six Sigma projects?",
                    answer_vi: "Black Belt.",
                    tags_en: ["Roles"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_roles_03",
                    question_en: "Who is responsible for the process AFTER the Six Sigma project is closed?",
                    answer_vi: "Process Owner.",
                    tags_en: ["Roles", "Sustainability"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],

            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_foundations_01"]
        },
        {
            id: "mod_foundations_gurus",
            order: 3,
            title_en: "1.3 Excellence: Gurus, Teams & Change",
            summary_vi: "Các bậc thầy chất lượng (Shewhart, Deming, Juran), Các giai đoạn phát triển nhóm (Tuckman) và Quản lý sự thay đổi.",
            summary_en: "Quality Gurus (Shewhart, Deming, Juran), Tuckman's Team Stages, and Change Management fundamentals.",
            key_metrics_en: [
                "94/6 Rule (Deming): 94% System vs 6% Special Causes",
                "PDCA / PDSA: Plan-Do-Check(Study)-Act",
                "Pareto (80/20): 80% of effects from 20% of causes",
                "Juran Trilogy: Planning, Control, Improvement"
            ],
            key_points_en: [
                "Shewhart: Invented Control Charts (SPC) and the concept of PDCA.",
                "Deming: Focus on the System (94%) rather than blaming the worker.",
                "Juran: The Trilogy (Plan, Control, Improve). 'Fitness for use'.",
                "Tuckman's Stages: Storming is the phase of conflict; Norming is the phase of establishing rules.",
                "Stakeholder Analysis: Use the Power/Interest Matrix to decide who to 'Manage Closely' vs 'Keep Informed'."
            ],
            explanation_vi: `
**1. Quality Gurus (Các Bậc Thầy Về Chất Lượng)**

**Walter Shewhart (The Grandfather)**
- **Cha đẻ của Kiểm Soát Chất Lượng Thống Kê (SQC).**
- Phát minh ra **Biểu đồ Kiểm soát (Control Chart)** năm 1924 để phân biệt giữa:
  - **Nguyên nhân có thể gán (Assignable/Special Cause):** Bất thường, có thể xác định và loại bỏ.
  - **Nguyên nhân ngẫu nhiên (Chance/Common Cause):** Biến động tự nhiên của hệ thống.
- Phát triển ban đầu **Vòng tròn PDCA (Plan-Do-Check-Act)** như một phương pháp khoa học để học hỏi.

**W. Edwards Deming (The System Thinker)**
- Phổ biến PDCA (sau này gọi là **PDSA - Study** thay vì Check).
- **Quy tắc 94/6:** Ông dạy rằng **94% vấn đề là do Hệ thống** (trách nhiệm của Ban quản lý) và chỉ **6% là do Nguyên nhân đặc biệt** (trách nhiệm của công nhân).
- Nổi tiếng với **14 Điểm về Quản lý** (14 Points for Management).
- Câu nói nổi tiếng: *"In God we trust, all others must bring data."*

**Joseph Juran (The Strategist)**
- Tập trung vào **Chi phí Chất lượng Kém (COPQ - Cost of Poor Quality).**
- **Bộ ba Juran (Juran Trilogy):** Chất lượng bao gồm ba quy trình:
  1. **Hoạch định (Planning/Design):** Thiết kế quy trình đáp ứng nhu cầu khách hàng.
  2. **Kiểm soát (Control/Monitoring):** Giám sát quy trình để duy trì hiệu suất.
  3. **Cải tiến (Improvement/Breakthrough):** Đạt mức hiệu suất cao hơn.
- Áp dụng **Nguyên tắc Pareto (80/20)** vào quản lý chất lượng: 80% vấn đề đến từ 20% nguyên nhân.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. Tuckman's Team Stages (Các Giai Đoạn Phát Triển Nhóm)**
Các nhóm đều đi qua một vòng đời có thể dự đoán được:

| Giai đoạn | Mô tả |
|-----------|-------|
| **Forming (Hình thành)** | Thành viên lịch sự, dè dặt, phụ thuộc vào người lãnh đạo. Vai trò chưa rõ ràng. |
| **Storming (Sóng gió)** | Xung đột nảy sinh khi các thành viên vượt qua giới hạn. ⚠️ **Đây là giai đoạn khó khăn nhất** nhưng cần thiết để phát triển. |
| **Norming (Ổn định)** | Nhóm thiết lập các quy tắc (norms). Sự gắn kết và hợp tác bắt đầu. |
| **Performing (Hoạt động)** | Sức mạnh tổng hợp cao. Nhóm hoạt động với sự giám sát tối thiểu. |
| **Adjourning (Kết thúc)** | Hoàn thành dự án và ghi nhận thành tích. |

💡 **Mẹo thi:** *"Storming"* là giai đoạn xung đột; *"Norming"* là giai đoạn thiết lập luật chơi.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. Change Management (Quản Lý Thay Đổi)**

**Stakeholder Analysis (Phân tích các bên liên quan)**
Xác định ai bị ảnh hưởng bởi dự án và mức độ ảnh hưởng của họ.

**Power/Interest Matrix (Ma trận Quyền lực/Quan tâm)**
Công cụ phân loại các bên liên quan để xác định chiến lược giao tiếp:

| Quyền lực | Quan tâm CAO | Quan tâm THẤP |
|-----------|--------------|---------------|
| **CAO** | ⭐ **Key Players** (Quản lý chặt chẽ) | Keep Satisfied |
| **THẤP** | Keep Informed | Monitor (Theo dõi) |

💡 **Key Players** là những người cần được **quản lý chặt chẽ** vì họ có cả quyền lực lẫn sự quan tâm đến dự án.
            `,
            explanation_en: `
**1. Quality Gurus**

**Walter Shewhart (The Grandfather)**
- **Father of Statistical Quality Control (SQC).**
- Invented the **Control Chart** in 1924 to distinguish between:
  - **Assignable Cause (Special):** Abnormal variation that can be identified and eliminated.
  - **Chance Cause (Common):** Natural variation inherent in the system.
- Originally developed the **PDCA cycle (Plan-Do-Check-Act)** as a scientific method for learning.

**W. Edwards Deming (The System Thinker)**
- Popularized PDCA (later **PDSA** - replacing "Check" with "Study").
- **The 94/6 Rule:** He taught that **94% of problems are due to the System** (Management's responsibility) and only **6% are due to Special Causes** (Worker's responsibility).
- Famous for his **14 Points for Management**.
- Quote: *"In God we trust, all others must bring data."*

**Joseph Juran (The Strategist)**
- Focused on the **Cost of Poor Quality (COPQ).**
- **The Juran Trilogy:** Quality consists of three processes:
  1. **Planning (Design):** Designing processes to meet customer needs.
  2. **Control (Monitoring):** Monitoring processes to maintain performance.
  3. **Improvement (Breakthrough):** Achieving higher levels of performance.
- Applied the **Pareto Principle (80/20)** to quality management: 80% of effects come from 20% of causes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. Tuckman's Team Stages**
Teams move through a predictable lifecycle:

| Stage | Description |
|-------|-------------|
| **Forming** | Members are polite, guarded, and rely on the leader. Roles are unclear. |
| **Storming** | Conflict arises as members push boundaries. ⚠️ **This is the most difficult stage** but necessary for growth. |
| **Norming** | The team establishes rules (norms). Cohesion and cooperation begin. |
| **Performing** | High synergy. The team functions with minimal oversight. |
| **Adjourning** | Project completion and recognition. |

💡 **Exam Tip:** *"Storming"* is the phase of conflict; *"Norming"* is the phase of establishing rules.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. Change Management**

**Stakeholder Analysis**
Identifying who is impacted by the project and their level of influence.

**Power/Interest Matrix**
A tool to classify stakeholders to determine communication strategy:

| Power | HIGH Interest | LOW Interest |
|-------|---------------|--------------|
| **HIGH** | ⭐ **Key Players** (Manage closely) | Keep Satisfied |
| **LOW** | Keep Informed | Monitor |

💡 **Key Players** are those who need to be **managed closely** because they have both the power to impact the project and a high stake in its outcome.
            `,
            recommended_tools_en: ["Stakeholder Analysis", "Power/Interest Matrix", "RACI Matrix"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Quality Gurus (Shewhart, Deming, Juran), Tuckman's Team Stages, and Change Management concepts for Six Sigma.",
                suggested_questions: [
                    { question_vi: "Quy tắc 94/6 của Deming nghĩa là gì?", question_en: "What does Deming's 94/6 rule mean?" },
                    { question_vi: "Sự khác biệt giữa Storming và Norming?", question_en: "What is the difference between Storming and Norming?" },
                    { question_vi: "Khi nào cần 'Quản lý chặt chẽ' một Stakeholder?", question_en: "When should you 'Manage Closely' a Stakeholder?" },
                    { question_vi: "Juran Trilogy bao gồm những gì?", question_en: "What does the Juran Trilogy include?" },
                    { question_vi: "14 Points for Management là của ai?", question_en: "Who created the 14 Points for Management?" }
                ],
                hint_levels: ["Guru contributions", "Team conflict resolution", "Stakeholder classification"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Define Phase", location_hint_en: "Team Dynamics & Change Management" },
                { source_type: "pdf", label_en: "ASQ Green Belt BOK", location_hint_en: "Quality Gurus" },
                { source_type: "pdf", label_en: "CSSC Green Belt Manual", location_hint_en: "Excellence Section" }
            ],
            flashcards: [
                {
                    id: "fc_gurus_shewhart",
                    question_en: "Who invented the Control Chart and when?",
                    answer_vi: "Walter Shewhart, năm 1924.",
                    tags_en: ["Foundations", "History", "SPC"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_gurus_deming_946",
                    question_en: "According to Deming, what percentage of problems are due to the System vs Special Causes?",
                    answer_vi: "94% do Hệ thống, 6% do Nguyên nhân đặc biệt.",
                    tags_en: ["Foundations", "Deming"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_gurus_juran_trilogy",
                    question_en: "What are the three components of the Juran Trilogy?",
                    answer_vi: "Planning (Hoạch định), Control (Kiểm soát), Improvement (Cải tiến).",
                    tags_en: ["Foundations", "Juran"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_tuckman_storming",
                    question_en: "In Tuckman's model, which stage is characterized by conflict and is the most difficult?",
                    answer_vi: "Storming (Sóng gió).",
                    tags_en: ["Foundations", "Teams"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_stakeholder_matrix",
                    question_en: "In the Power/Interest Matrix, which quadrant requires you to 'Manage Closely'?",
                    answer_vi: "High Power / High Interest (Key Players).",
                    tags_en: ["Foundations", "Change Management"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_foundations_01", "mod_foundations_02"]
        },


        {
            id: "mod_foundations_03",
            order: 4,
            title_en: "1.4 Fundamentals & DMAIC Overview",
            summary_vi: "Khung tiêu chuẩn để cải tiến quy trình. Đây là một vòng lặp dựa trên dữ liệu, không phải đường thẳng tuyến tính.",
            summary_en: "The standard framework for process improvement. It is a data-driven loop, not a linear straight line.",
            key_metrics_en: [
                "Baseline Sigma Level",
                "Cpk (Process Capability Index)",
                "DPMO (Defects Per Million Opportunities)"
            ],
            key_points_en: [
                "Define: Ends with a signed Project Charter. Focus is on the Customer (VOC).",
                "Measure: Focus is on Data Integrity (MSA). If you can't measure it, you can't fix it.",
                "Analyze: Turns data into Root Cause. Moves from 'Process Map' to 'Statistical Proof' (Y=f(x)).",
                "Improve: Focus is on Implementation and Piloting (Testing solutions).",
                "Control: Focus is on Sustainability. If the problem returns after 3 months, the Control phase failed."
            ],
            explanation_vi: `
**DMAIC Methodology (Phương Pháp Luận DMAIC)**
DMAIC là một **vòng lặp khép kín dựa trên dữ liệu**, không phải một đường thẳng tuyến tính. Mỗi giai đoạn kết thúc bằng một **Tollgate Review** (Cửa kiểm soát) nơi Sponsor phê duyệt để tiếp tục.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**1. DEFINE (Xác Định) - "Vấn đề là gì?"**
- **Mục tiêu:** Xác định vấn đề, phạm vi, và yêu cầu của khách hàng.
- **Câu hỏi chính:** Khách hàng cần gì (VOC)? Dự án có hợp lý về tài chính không (Business Case)?
- **Công cụ chính:** Project Charter, SIPOC, VOC Analysis, CTQ Tree.
- **Đầu ra (Deliverable):** **Project Charter đã ký** với Problem Statement rõ ràng.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. MEASURE (Đo Lường) - "Hiệu suất hiện tại như thế nào?"**
- **Mục tiêu:** Xác nhận hệ thống đo lường và thu thập dữ liệu cơ sở (baseline).
- **Câu hỏi chính:** Dữ liệu có đáng tin không? (MSA). Vấn đề tệ đến mức nào? (Baseline).
- **Công cụ chính:** Data Collection Plan, Gage R&R (MSA), Process Capability (Cp/Cpk), Sigma Level calculation.
- **Đầu ra (Deliverable):** **Baseline Sigma Level** & Dữ liệu đã được xác nhận.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. ANALYZE (Phân Tích) - "Nguyên nhân gốc rễ là gì?"**
- **Mục tiêu:** Xác định các nguyên nhân gốc rễ (x) gây ra lỗi (Y).
- **Câu hỏi chính:** Đầu vào (x) nào ảnh hưởng lớn nhất đến đầu ra (Y)? (Vital Few vs. Trivial Many).
- **Công cụ chính:** Fishbone Diagram, 5 Whys, Hypothesis Testing (p-value), Pareto Chart, Regression.
- **Đầu ra (Deliverable):** **Các nguyên nhân gốc rễ đã được xác minh** (Chứng minh bằng dữ liệu, không phải đoán).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**4. IMPROVE (Cải Tiến) - "Làm thế nào để sửa?"**
- **Mục tiêu:** Triển khai các giải pháp để loại bỏ nguyên nhân gốc rễ.
- **Câu hỏi chính:** Thiết lập tối ưu cho quy trình là gì?
- **Công cụ chính:** Brainstorming, DOE (Design of Experiments), Piloting (Thử nghiệm quy mô nhỏ), FMEA (cập nhật).
- **Đầu ra (Deliverable):** **Kết quả Pilot** & Giải pháp đã triển khai.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**5. CONTROL (Kiểm Soát) - "Làm thế nào để duy trì kết quả?"**
- **Mục tiêu:** Duy trì sự cải tiến và chuyển giao cho Process Owner.
- **Câu hỏi chính:** Làm sao để ngăn vấn đề quay lại?
- **Công cụ chính:** Control Plan, SPC Charts (Control Charts), SOPs (Standard Operating Procedures).
- **Đầu ra (Deliverable):** **Control Plan** & Bàn giao dự án.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Tollgate Reviews (Cổng Kiểm Soát)**
Tollgate Review xảy ra **giữa các giai đoạn**:
- **Mục đích:** Đánh giá chính thức với Sponsor/Champion.
- **Quyết định:** **Go** (Tiếp tục) / **No-Go** (Dừng) / **Recycle** (Làm lại các bước trước).

⚠️ **Quan trọng:** Bạn **không thể chuyển sang giai đoạn Measure** cho đến khi Sponsor phê duyệt Tollgate của Define.
            `,
            explanation_en: `
**DMAIC Methodology**
DMAIC is a **data-driven closed-loop cycle**, not a linear straight line. Each phase ends with a **Tollgate Review** where the Sponsor approves progression.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**1. DEFINE - "What is the problem?"**
- **Goal:** Define the problem, the scope, and customer requirements.
- **Key Question:** What does the customer need (VOC) and does the project make financial sense (Business Case)?
- **Key Tools:** Project Charter, SIPOC, VOC Analysis, CTQ Tree.
- **Deliverable:** **Signed Project Charter** with a clear Problem Statement.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. MEASURE - "What is the current performance?"**
- **Goal:** Validate the measurement system and gather baseline data.
- **Key Question:** Can we trust our data? (MSA). How bad is the problem right now? (Baseline).
- **Key Tools:** Data Collection Plan, Gage R&R (MSA), Process Capability (Cp/Cpk), Sigma Level calculation.
- **Deliverable:** **Baseline Sigma Level** & Validated Data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. ANALYZE - "What is the root cause?"**
- **Goal:** Identify the root causes (x's) of the defects (Y).
- **Key Question:** Which inputs (x) have the biggest impact on the output (Y)? (Vital Few vs. Trivial Many).
- **Key Tools:** Fishbone Diagram, 5 Whys, Hypothesis Testing (p-value), Pareto Chart, Regression.
- **Deliverable:** **Verified Root Causes** (Proven with data, not just guessing).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**4. IMPROVE - "How do we fix it?"**
- **Goal:** Implement solutions to eliminate root causes.
- **Key Question:** What is the optimal setting for the process?
- **Key Tools:** Brainstorming, DOE (Design of Experiments), Piloting, FMEA (updated).
- **Deliverable:** **Pilot Results** & Implemented Solution.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**5. CONTROL - "How do we sustain the gains?"**
- **Goal:** Sustain the improvement and transition to the process owner.
- **Key Question:** How do we prevent the problem from coming back?
- **Key Tools:** Control Plan, SPC Charts (Control Charts), SOPs (Standard Operating Procedures).
- **Deliverable:** **Control Plan** & Project Handover.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Tollgate Reviews**
A Tollgate Review happens **between phases**:
- **Purpose:** A formal review with the Sponsor/Champion.
- **Decision:** **Go** (Proceed) / **No-Go** (Stop) / **Recycle** (Redo previous steps).

⚠️ **Critical:** You **cannot move to the Measure phase** until the Sponsor approves the Define tollgate.
            `,
            recommended_tools_en: ["DMAIC Roadmap", "Tollgate Checklist", "Project Charter Template"],
            python_focus_en: [],
            code_blocks: [
                {
                    id: "code_dmaic_viz",
                    title_en: "Visualizing DMAIC Progress",
                    description_vi: "Vẽ biểu đồ Gantt đơn giản cho các giai đoạn DMAIC.",
                    code_template: `import matplotlib.pyplot as plt

phases = ['Define', 'Measure', 'Analyze', 'Improve', 'Control']
days = [10, 15, 20, 25, 10]  # Days spent in each phase

plt.figure(figsize=(10, 5))
plt.bar(phases, days, color='skyblue', edgecolor='black')
plt.ylabel('Days Estimated')
plt.title('DMAIC Project Timeline')
plt.show()`,
                    expected_output_en: "Bar chart of project timeline.",
                    datasets_used: [],
                    learning_points_en: ["Matplotlib Bar Chart"],
                    difficulty_en: "Beginner"
                }
            ],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain the DMAIC methodology phases, their goals, key tools, and deliverables. Also explain Tollgate Reviews.",
                suggested_questions: [
                    { question_vi: "Tollgate Review là gì và có 3 quyết định nào?", question_en: "What is a Tollgate Review and what are the 3 decisions?" },
                    { question_vi: "Output chính của Measure phase là gì?", question_en: "What is the main output of the Measure phase?" },
                    { question_vi: "Nếu vấn đề quay lại sau 3 tháng, phase nào đã thất bại?", question_en: "If the problem returns after 3 months, which phase failed?" },
                    { question_vi: "Tại sao không nên đoán mò nguyên nhân trong Define?", question_en: "Why shouldn't we guess the root cause in Define?" },
                    { question_vi: "Sự khác biệt giữa Measure và Control?", question_en: "What is the difference between Measure and Control?" }
                ],
                hint_levels: ["Phase goals", "Key deliverables", "Tollgate decisions"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - Define Phase", location_hint_en: "DMAIC Overview" },
                { source_type: "pdf", label_en: "ASQ Green Belt BOK", location_hint_en: "DMAIC Fundamentals" },
                { source_type: "pdf", label_en: "CSSC Green Belt Manual", location_hint_en: "Project Methodology" }
            ],
            flashcards: [
                {
                    id: "fc_dmaic_define_output",
                    question_en: "What is the key deliverable of the Define phase?",
                    answer_vi: "Signed Project Charter (Hiến chương dự án đã ký) với Problem Statement rõ ràng.",
                    tags_en: ["DMAIC", "Define"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_dmaic_measure_focus",
                    question_en: "What is the primary focus of the Measure phase?",
                    answer_vi: "Data Integrity (MSA - Measurement System Analysis). Nếu không đo được thì không sửa được.",
                    tags_en: ["DMAIC", "Measure"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_dmaic_analyze_output",
                    question_en: "What is the key deliverable of the Analyze phase?",
                    answer_vi: "Verified Root Causes (Nguyên nhân gốc rễ đã được xác minh bằng dữ liệu, không phải đoán).",
                    tags_en: ["DMAIC", "Analyze"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_dmaic_control_failure",
                    question_en: "If a problem returns after 3 months, which DMAIC phase failed?",
                    answer_vi: "Control phase (Giai đoạn Kiểm soát).",
                    tags_en: ["DMAIC", "Control"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_tollgate_decisions",
                    question_en: "What are the three possible decisions at a Tollgate Review?",
                    answer_vi: "Go (Tiếp tục), No-Go (Dừng), Recycle (Làm lại các bước trước).",
                    tags_en: ["DMAIC", "Tollgate"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_dmaic_improve_tools",
                    question_en: "Name two key tools used in the Improve phase.",
                    answer_vi: "DOE (Design of Experiments) và Piloting (Thử nghiệm quy mô nhỏ).",
                    tags_en: ["DMAIC", "Improve"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 30,
            prerequisites_ids: ["mod_foundations_02", "mod_foundations_gurus"]
        },
        {
            id: "mod_foundations_04",
            order: 5,
            title_en: "1.5 The Lean Enterprise & 8 Wastes",
            summary_vi: "Lean tập trung vào tốc độ (Velocity) và loại bỏ lãng phí (Muda). Mục tiêu cuối cùng là giảm Cycle Time bằng cách loại bỏ các bước không tạo giá trị.",
            summary_en: "Lean is about speed (Velocity) and the elimination of waste (Muda). The ultimate goal is to reduce Cycle Time by removing Non-Value-Added steps.",
            key_metrics_en: [
                "DOWNTIME (8 Wastes Acronym)",
                "VA (~5%) / NVA (~60%) / BVA (~35%)",
                "Just-In-Time (JIT)",
                "5S: Seiri, Seiton, Seiso, Seiketsu, Shitsuke"
            ],
            key_points_en: [
                "Value Added: Must meet ALL 3 criteria - Customer pays, Changes form/fit/function, Done right first time.",
                "Overproduction: The 'Worst Waste' because it hides other wastes and creates Inventory.",
                "Motion vs Transportation: Motion = Moving People; Transportation = Moving Things.",
                "Inspection is NEVER Value Added (it's NVA or BVA).",
                "5S Translation: Sort (Seiri), Set (Seiton), Shine (Seiso), Standardize (Seiketsu), Sustain (Shitsuke)."
            ],
            explanation_vi: `
**Lean là gì?**
Lean tập trung vào **tốc độ (Velocity)** và **loại bỏ lãng phí (Muda)**. Mục tiêu cuối cùng là giảm **Cycle Time** bằng cách loại bỏ các bước không tạo giá trị.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**1. Value Analysis (Phân Tích Giá Trị)**
Để xác định một bước có tạo giá trị hay không, hãy hỏi 3 câu hỏi. Chỉ là **Value Added (VA)** nếu đáp ứng **CẢ BA** tiêu chí:

| Tiêu chí | Giải thích |
|----------|------------|
| **Customer willing to pay** | Khách hàng có quan tâm đến bước này không? |
| **Changes form/fit/function** | Có thay đổi sản phẩm/dịch vụ về mặt vật lý/hóa học không? |
| **Done right the first time** | Làm đúng ngay từ đầu (không sửa lỗi)? |

**Phân loại hoạt động:**
- **Value Added (VA):** ~5% thời gian quy trình → Giữ lại và tối ưu hóa.
- **Non-Value Added (NVA - Waste/Muda):** ~60% thời gian → **Loại bỏ ngay lập tức.**
- **Business Value Added (BVA):** ~35% thời gian → Bắt buộc theo luật/quy định (VD: Kiểm toán, Hồ sơ HR) → **Giảm thiểu tối đa.**

⚠️ **Quan trọng:** Inspection (Kiểm tra) **KHÔNG BAO GIỜ** là Value Added (nó là NVA hoặc BVA).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. The 8 Wastes (DOWNTIME)**
Từ viết tắt cần nhớ: **DOWNTIME**

| Chữ | Lãng phí | Mô tả |
|-----|----------|-------|
| **D** | **Defects (Lỗi)** | Sản phẩm/dịch vụ cần Rework hoặc Scrap. Tác động đến "Hidden Factory". |
| **O** | **Overproduction (Sản xuất thừa)** | Sản xuất nhiều hơn cần hoặc quá sớm. ⚠️ **Lãng phí tệ nhất** vì che giấu các lãng phí khác và tạo Inventory. |
| **W** | **Waiting (Chờ đợi)** | Thời gian chết chờ vật tư/thông tin. |
| **N** | **Non-utilized Talent** | Không sử dụng kỹ năng hoặc ý tưởng của nhân viên. |
| **T** | **Transportation (Vận chuyển)** | Di chuyển vật liệu/sản phẩm không cần thiết. 📦 = **Moving Things** |
| **I** | **Inventory (Tồn kho)** | Nguyên liệu thô, WIP, hoặc thành phẩm dư thừa. Tồn kho che giấu vấn đề (River & Rocks analogy). |
| **M** | **Motion (Thao tác thừa)** | Di chuyển người/máy không cần thiết. 🚶 = **Moving People** |
| **E** | **Extra-processing (Gia công thừa)** | Làm nhiều hơn yêu cầu của khách hàng (Gold-plating). |

💡 **Mẹo thi:** **Motion** = Di chuyển người (cúi, với tay). **Transportation** = Di chuyển hàng (xe nâng).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. The 5S Methodology (Tổ Chức Nơi Làm Việc)**
Công cụ nền tảng của Lean. **Phải nhớ cả thuật ngữ tiếng Anh và tiếng Nhật:**

| S | Tiếng Nhật | Tiếng Anh | Mô tả |
|---|------------|-----------|-------|
| 1 | **Seiri** | **Sort (Sàng lọc)** | "When in doubt, throw it out." Loại bỏ vật không cần (Red Tag strategy). |
| 2 | **Seiton** | **Set in Order (Sắp xếp)** | "A place for everything." Tổ chức để dễ tìm (Shadow boards, labeling). |
| 3 | **Seiso** | **Shine (Sạch sẽ)** | "Clean to inspect." Vệ sinh là một hình thức kiểm tra để phát hiện rò rỉ/vết nứt. |
| 4 | **Seiketsu** | **Standardize (Săn sóc)** | Tạo quy tắc/SOPs để duy trì 3S đầu tiên. |
| 5 | **Shitsuke** | **Sustain (Sẵn sàng)** | Kỷ luật tự giác và kiểm toán để duy trì thói quen. |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Key Concepts (Khái Niệm Chính)**
- **Just-In-Time (JIT):** Sản xuất đúng sản phẩm, đúng thời điểm, đúng số lượng.
- **Muda:** Thuật ngữ tiếng Nhật cho Lãng phí.
- **Gemba:** "Nơi thực sự" (nơi công việc thực sự diễn ra).
            `,
            explanation_en: `
**What is Lean?**
Lean focuses on **speed (Velocity)** and the **elimination of waste (Muda)**. The ultimate goal is to reduce **Cycle Time** by removing Non-Value-Added steps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**1. Value Analysis**
To determine if a step adds value, ask 3 questions. It is **Value Added (VA)** ONLY if it meets **ALL THREE** criteria:

| Criteria | Question |
|----------|----------|
| **Customer willing to pay** | Does the customer care about this step? |
| **Changes form/fit/function** | Does it physically/chemically change the product/service? |
| **Done right the first time** | Is it done correctly without rework? |

**Activity Classification:**
- **Value Added (VA):** ~5% of process time → Keep and optimize.
- **Non-Value Added (NVA - Waste/Muda):** ~60% of process time → **Remove immediately.**
- **Business Value Added (BVA):** ~35% of process time → Required by law/regulation (e.g., Audits, HR records) → **Minimize.**

⚠️ **Critical:** Inspection is **NEVER** Value Added (it's NVA or BVA).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**2. The 8 Wastes (DOWNTIME)**
Acronym to memorize: **DOWNTIME**

| Letter | Waste | Description |
|--------|-------|-------------|
| **D** | **Defects** | Products/services requiring Rework or Scrap. Impacts the "Hidden Factory". |
| **O** | **Overproduction** | Producing more than needed or too early. ⚠️ **"Worst Waste"** - hides other wastes and creates Inventory. |
| **W** | **Waiting** | Idle time for people/machines waiting for material/info. |
| **N** | **Non-utilized Talent** | Underusing employee skills or ideas. |
| **T** | **Transportation** | Moving materials/products unnecessarily. 📦 = **Moving Things** |
| **I** | **Inventory** | Excess raw materials, WIP, or finished goods. Inventory hides problems (River & Rocks analogy). |
| **M** | **Motion** | Unnecessary movement of people/machines. 🚶 = **Moving People** |
| **E** | **Extra-processing** | Doing more work/quality than customer requires (Gold-plating). |

💡 **Exam Tip:** **Motion** = Moving People (bending, walking). **Transportation** = Moving Product (forklift moving pallets).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**3. The 5S Methodology (Workplace Organization)**
A foundational tool for Lean. **Must know English AND Japanese terms:**

| S | Japanese | English | Description |
|---|----------|---------|-------------|
| 1 | **Seiri** | **Sort** | "When in doubt, throw it out." Remove unneeded items (Red Tag strategy). |
| 2 | **Seiton** | **Set in Order** | "A place for everything." Organize for efficiency (Shadow boards, labeling). |
| 3 | **Seiso** | **Shine** | "Clean to inspect." Cleaning reveals leaks/cracks. |
| 4 | **Seiketsu** | **Standardize** | Create rules/SOPs to maintain the first 3 S's. |
| 5 | **Shitsuke** | **Sustain** | Self-discipline and audits to keep the habit. |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Key Concepts**
- **Just-In-Time (JIT):** Producing the right part, at the right time, in the right amount.
- **Muda:** Japanese term for Waste.
- **Gemba:** "The real place" (where work actually happens).
            `,
            recommended_tools_en: ["5S Checklist", "Value Stream Map", "Waste Walk Audit"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Explain Lean concepts including Value Analysis (VA/NVA/BVA), the 8 Wastes (DOWNTIME), and 5S methodology with Japanese terms.",
                suggested_questions: [
                    { question_vi: "Tại sao Overproduction là lãng phí tệ nhất?", question_en: "Why is Overproduction the worst waste?" },
                    { question_vi: "Sự khác biệt giữa Motion và Transportation là gì?", question_en: "What is the difference between Motion and Transportation?" },
                    { question_vi: "Inspection có phải là Value Added không?", question_en: "Is Inspection Value Added?" }
                ],
                hint_levels: ["Waste classification", "Moving people vs things", "5S Japanese terms"],
                max_hints_per_question: 3
            },
            references_en: [
                { source_type: "pdf", label_en: "IASSC BOK - 1.4 Lean", location_hint_en: "The Lean Enterprise" },
                { source_type: "pdf", label_en: "ASQ Green Belt BOK", location_hint_en: "Lean Fundamentals" },
                { source_type: "pdf", label_en: "CSSC Green Belt Manual", location_hint_en: "Waste Identification" }
            ],
            flashcards: [
                {
                    id: "fc_lean_va_criteria",
                    question_en: "What are the 3 criteria for an activity to be Value Added?",
                    answer_vi: "1. Customer willing to pay, 2. Changes form/fit/function, 3. Done right the first time. Phải đáp ứng CẢ BA tiêu chí.",
                    tags_en: ["Lean", "Value Analysis"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_lean_worst_waste",
                    question_en: "Which of the 8 Wastes is considered the 'Worst Waste' and why?",
                    answer_vi: "Overproduction (Sản xuất thừa) - vì nó che giấu các lãng phí khác và tạo ra Inventory.",
                    tags_en: ["Lean", "DOWNTIME"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_lean_motion_vs_transport",
                    question_en: "What is the difference between Motion and Transportation waste?",
                    answer_vi: "Motion = Di chuyển Người (cúi, với tay). Transportation = Di chuyển Hàng (xe nâng vận chuyển pallet).",
                    tags_en: ["Lean", "DOWNTIME"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_lean_inspection_va",
                    question_en: "Is Inspection considered Value Added?",
                    answer_vi: "KHÔNG BAO GIỜ. Inspection là Non-Value Added (NVA) hoặc Business Value Added (BVA).",
                    tags_en: ["Lean", "Value Analysis"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_lean_5s_japanese",
                    question_en: "Name the 5S in order with Japanese terms.",
                    answer_vi: "1. Seiri (Sort), 2. Seiton (Set in Order), 3. Seiso (Shine), 4. Seiketsu (Standardize), 5. Shitsuke (Sustain).",
                    tags_en: ["Lean", "5S"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                },
                {
                    id: "fc_lean_va_percentage",
                    question_en: "What is the typical percentage breakdown of VA, NVA, and BVA in a process?",
                    answer_vi: "VA ~5%, NVA ~60%, BVA ~35%.",
                    tags_en: ["Lean", "Value Analysis"],
                    difficulty_en: "Medium",
                    ai_tutor_available: true
                },
                {
                    id: "fc_lean_jit",
                    question_en: "What does Just-In-Time (JIT) mean?",
                    answer_vi: "Sản xuất đúng sản phẩm, đúng thời điểm, đúng số lượng (Producing the right part, at the right time, in the right amount).",
                    tags_en: ["Lean", "JIT"],
                    difficulty_en: "Easy",
                    ai_tutor_available: true
                }
            ],
            faq: [],
            mastery_threshold: 80,
            estimated_time_minutes: 40,
            prerequisites_ids: ["mod_foundations_03"]
        },

        // --- CHAPTER QUIZ MODULE ---
        {
            id: "mod_foundations_quiz",
            order: 6,
            title_en: "Chapter 1 Quiz: Foundations",
            summary_vi: "Kiểm tra tổng hợp kiến thức Chương 1 (25 câu hỏi).",
            summary_en: "Comprehensive Chapter 1 Quiz (25 Questions).",
            key_metrics_en: ["Score > 80% to pass"],
            key_points_en: [
                "Review of Six Sigma History, Roles, DMAIC, and Lean."
            ],
            explanation_vi: "Bài kiểm tra này tổng hợp toàn bộ lích sử, vai trò đai, quy trình DMAIC và tư duy Lean căn bản.",
            explanation_en: "This quiz covers Six Sigma History, Roles, DMAIC framework, and Lean fundamentals, designed to reinforce key concepts from Chapter 1.",
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
            prerequisites_ids: ["mod_foundations_01", "mod_foundations_02", "mod_foundations_gurus", "mod_foundations_03", "mod_foundations_04"]
        }
    ]
};
