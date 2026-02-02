import { iasscGreenBeltCourse } from "../src/data/course_content";

function validateCourse() {
    console.log(`Validating Course: ${iasscGreenBeltCourse.title_en}`);

    const chapterIds = new Set<string>();
    const moduleIds = new Set<string>();
    const contentErrors: string[] = [];

    // 1. Check Chapters
    if (iasscGreenBeltCourse.chapters.length !== 10) {
        contentErrors.push(`Expected 10 chapters, found ${iasscGreenBeltCourse.chapters.length}`);
    }

    iasscGreenBeltCourse.chapters.forEach(chapter => {
        // Check IDs
        if (chapterIds.has(chapter.id)) {
            contentErrors.push(`Duplicate Chapter ID: ${chapter.id}`);
        }
        chapterIds.add(chapter.id);

        // Check Modules
        if (!chapter.modules || chapter.modules.length === 0) {
            contentErrors.push(`Chapter ${chapter.id} has no modules`);
        }

        chapter.modules.forEach(mod => {
            if (moduleIds.has(mod.id)) {
                contentErrors.push(`Duplicate Module ID: ${mod.id}`);
            }
            moduleIds.add(mod.id);

            // Structure Checks
            if (!mod.title_en) contentErrors.push(`Module ${mod.id} missing title_en`);
            if (!mod.summary_vi) contentErrors.push(`Module ${mod.id} missing summary_vi`);

            // Check bilingual requirements (broad check)
            if (mod.explanation_vi && !/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(mod.explanation_vi)) {
                console.warn(`[WARN] Module ${mod.id} explanation_vi might not be Vietnamese.`);
            }
        });
    });

    // 2. Report
    if (contentErrors.length > 0) {
        console.error("❌ VALIDATION FAILED WITH ERRORS:");
        contentErrors.forEach(err => console.error(` - ${err}`));
        process.exit(1);
    } else {
        console.log("✅ COURSE CONTENT VALIDATED SUCCESSFULLY!");
        console.log(` - Chapters: ${chapterIds.size}`);
        console.log(` - Modules: ${moduleIds.size}`);
    }
}

validateCourse();
