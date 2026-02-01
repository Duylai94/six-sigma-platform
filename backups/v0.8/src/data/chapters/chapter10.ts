import { Chapter, Module } from "../../types/course";

export const chapterExam: Chapter = {
    id: "ch_exam",
    order: 10,
    title_en: "Final Exam Preparation",
    goal_vi: "Vượt qua thử thách cuối cùng: 100 Câu hỏi mô phỏng kỳ thi IASSC.",
    goal_en: "Ace the final challenge: 100-Question IASSC Mock Exam.",
    iassc_topics_en: ["Mock Exam", "Certification"],
    modules: [
        {
            id: "mod_exam_tips",
            order: 1,
            title_en: "Last Minute Exam Tips & Strategy",
            summary_vi: "Chiến thuật làm bài thi, quản lý thời gian, bẫy tâm lý và các 'mẹo' quan trọng.",
            summary_en: "Exam strategies, time management, psychological traps, and critical topic 'gotchas'.",
            key_metrics_en: [
                "Time: 1.8 mins/question (Avg)",
                "Fast Scan: 60-90 mins (Pass 1)",
                "Hard Stop: Max 5 mins/question",
                "MSA Thresholds: <10%, 10-30%, >30%"
            ],
            key_points_en: [
                "Two-Pass Strategy: Scan fast first, flag hard questions, then return.",
                "Process of Elimination: Remove 'non-parametric' options if data is Normal.",
                "P-value Trap: It is probability of DATA, not probability of Hypothesis.",
                "SPC Trap: Control Limits (Process) are NOT Spec Limits (Customer).",
                "Mindset: Treat exam like a stable production process. Don't spike effort."
            ],
            explanation_vi: `
**1. Chiến thuật Quản lý Thời gian (Time Management)**
- **Quy tắc 1.8 phút:** Đây là trung bình. Nhưng đừng làm lầm lũi từ đầu đến cuối.
- **Chiến thuật 2 vòng (Ping-Pong):** Vòng 1 làm thật nhanh (60-90 phút), câu nào dễ khoanh ngay, câu nào khó **Cắm cờ (Flag)** đi tiếp. Vòng 2 quay lại xử lý các câu đã cắm cờ.
- **Điểm dừng (Hard Stop):** Không bao giờ tốn quá 5 phút cho 1 câu. Nếu bí, hãy loại trừ 2 đáp án sai nhất, chọn đại và đi tiếp.

**2. Chiến thuật Loại trừ (Elimination)**
- **Kiểm tra Giả định:** Nếu đề bài nói dữ liệu không chuẩn (non-normal), đáp án nào bảo dùng "T-test" hay "ANOVA" là sai ngay. Hãy tìm đáp án "Non-parametric" (Mann-Whitney...).
- **Ước lượng (Estimation):** Với câu tính toán, hãy ước lượng hướng đi trước (Ví dụ: "Kết quả phải lớn hơn 10"). Loại ngay các đáp án quá lớn hoặc quá nhỏ vô lý.

**3. Các "Cái Bẫy" Kinh điển (Common Traps)**
- **P-value**: Là xác suất xuất hiện của *dữ liệu* khi H0 đúng, KHÔNG PHẢI xác suất là H0 đúng.
- **Tương quan (Correlation) != Nguyên nhân (Causation)**: \`r = 0.9\` chỉ có nghĩa là biến thiên cùng nhau (association), không chứng minh cái này gây ra cái kia.
- **Giới hạn Kiểm soát (UCL/LCL) != Giới hạn Khách hàng (USL/LSL)**: Control limits tính từ quy trình (+/- 3 sigma). Spec limits do khách hàng đặt. Đừng nhầm lẫn.
- **Cỡ mẫu (Sample Size)**: Tăng N giúp tăng Power (khả năng phát hiện sai lệch), chứ không làm thay đổi Alpha (mức ý nghĩa).

**4. Những "Gotchas" (Điểm chết) cần nhớ kỹ**
- **MSA**: Repeatability (Lặp lại) = Do Thiết bị. Reproducibility (Tái lập) = Do Con người.
- **Ngưỡng MSA (GR&R)**: < 10% (Tuyệt vời), 10-30% (Tạm chấp nhận), > 30% (Vứt bỏ/Sửa ngay).
- **Quy tắc SPC (Western Electric)**: 1 điểm ngoài 3σ; 2/3 điểm ngoài 2σ; 9 điểm nằm cùng một phía.
- **Năng lực (Capability)**: Cpk < 1 là hỏng. 1.33 là tối thiểu. 1.67 là đạt chuẩn Six Sigma.
            `,
            explanation_en: `
**1. Time Management Strategy**
- **The 1.8 Minute Rule:** That's your average. But don't work linearly.
- **Two-Pass Approach:** Run through the exam in 60-90 minutes (Pass 1). Answer easy ones instanly. **Flag** *anything* confusing. Then strictly focus on flagged items (Pass 2).
- **The Hard Stop:** Never spend > 5 minutes on one question. Eliminate 2 options, guess, and move on.

**2. Answering & Elimination Strategy**
- **Assumption Check:** If data is non-normal, the answer claiming "T-test" or "ANOVA" is wrong. Look for "Appropriate Non-parametric test".
- **Direction Check:** For math questions, estimate first (e.g., "The answer should be bigger than 10"). Eliminate outrageous options immediately.

**3. Common Conceptual Traps**
- **P-value**: It is the probability of observing the *data*, NOT the probability that the *hypothesis (H0)* is true.
- **Correlation != Causation**: High \`r\` (0.9) means association, it DOES NOT prove causation. Look for words like "associated with".
- **Control Limits != Spec Limits**: Control limits come from the process (3 sigma). Spec limits come from the customer. Never mix them.
- **Sample Size**: Increasing N increases Power (ability to detect difference), it does not change Alpha (Significance Level).

**4. Topic Specific "Gotchas"**
- **MSA**: Repeatability = Equipment Variation. Reproducibility = Operator Variation.
- **GR&R Thresholds**: < 10% (Excellent), 10-30% (Marginal), > 30% (Unacceptable - Stop and Fix).
- **SPC Rules**: 1 point > 3σ; 2 of 3 points > 2σ; 9 points on one side of Mean.
- **Capability**: Cpk < 1 is bad. 1.33 is minimum. 1.67 is Six Sigma level.
            `,
            recommended_tools_en: ["Breathing Exercises", "Process of Elimination"],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: true,
                system_prompt_en: "Act as an Exam Coach. Motivate and clarify traps.",
                suggested_questions: [
                    { question_vi: "Làm sao để tránh bẫy P-value?", question_en: "How to avoid the P-value trap?" },
                    { question_vi: "Khi nào nên đoán mò (Guess)?", question_en: "When should you guess?" }
                ],
                hint_levels: ["Eliminate 2 wrong answers first", "Don't leave blanks - no negative marking", "Trust your first instinct on theory"],
                max_hints_per_question: 3
            },
            references_en: [],
            flashcards: [],
            quiz: {
                difficulty_en: "Exam-level",
                questions: []
            },
            faq: [],
            mastery_threshold: 100,
            estimated_time_minutes: 15,
            prerequisites_ids: ["mod_capstone_03"]
        },
        {
            id: "mod_final_exam",
            order: 2,
            title_en: "FULL MOCK EXAM (100 Questions)",
            summary_vi: "Bài thi thử tổng hợp toàn bộ kiến thức.",
            summary_en: "Comprehensive Mock Exam covering all knowledge areas.",
            key_metrics_en: ["Score / 100"],
            key_points_en: [
                "This is a simulation of the real exam.",
                "Covering Define, Measure, Analyze, Improve, Control.",
                "Passing Score: 70%."
            ],
            explanation_vi: "Đây là lúc bạn tỏa sáng. Hãy coi đây là bài thi thật. Không tra tài liệu. Không hỏi AI Tutor. Tự lực cánh sinh.",
            explanation_en: "This is your moment. Treat this like the real exam. No cheat sheets. No AI Tutor. Just you and your knowledge.",
            recommended_tools_en: [],
            python_focus_en: [],
            code_blocks: [],
            ai_tutor_context: {
                enabled: false, // Disabled during exam
                system_prompt_en: "",
                suggested_questions: [],
                hint_levels: [],
                max_hints_per_question: 0
            },
            references_en: [],
            flashcards: [],
            quiz: {
                difficulty_en: "Exam-level",
                questions: [
                    {
                        id: "q_final_01",
                        stem_en: "Which phase of DMAIC focuses on identifying the root cause of defects?",
                        options_en: ["Define", "Measure", "Analyze", "Improve"],
                        correct_index: 2,
                        explanation_vi: "Analyze Phase là nơi ta dùng dữ liệu để tìm ra Root Cause.",
                        iassc_mapping_en: ["Analyze Phase"],
                        has_code_component: false,
                        hint_available: false
                    },
                    {
                        id: "q_final_02",
                        stem_en: "What is the primary output of the Define phase?",
                        options_en: ["Control Chart", "Project Charter", "DOE Results", "Gage R&R"],
                        correct_index: 1,
                        explanation_vi: "Project Charter là đầu ra quan trọng nhất của Define.",
                        iassc_mapping_en: ["Define Phase"],
                        has_code_component: false,
                        hint_available: false
                    },
                    // Note: In a real app, this array would contain 100 questions loaded from a database
                    {
                        id: "q_final_placeholder",
                        stem_en: "[..98 More Questions in Real Exam Mode..]",
                        options_en: ["A", "B", "C", "D"],
                        correct_index: 0,
                        explanation_vi: "Placeholder.",
                        iassc_mapping_en: ["All Phases"],
                        has_code_component: false,
                        hint_available: false
                    }
                ]
            },
            faq: [],
            mastery_threshold: 70,
            estimated_time_minutes: 180,
            prerequisites_ids: ["mod_exam_tips"]
        }
    ]
};
