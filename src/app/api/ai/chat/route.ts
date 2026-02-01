import { iasscGreenBeltCourse } from "@/data/course_content";
import { NextResponse } from "next/server";

const apiKey = process.env.PERPLEXITY_API_KEY;

export async function POST(req: Request) {
    if (!apiKey) {
        return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    try {
        const { message, context } = await req.json();

        // Perplexity API Configuration
        const PERPLEXITY_URL = "https://api.perplexity.ai/chat/completions";
        const systemPrompt = iasscGreenBeltCourse.ai_config.system_prompt_vi;

        const payload = {
            model: iasscGreenBeltCourse.ai_config.model_name,
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: `
[CONTEXT]
${context || "No specific context provided."}
[/CONTEXT]

User Question: ${message}
                    `
                }
            ],
            temperature: 0.2,
            max_tokens: 1000,
            search_domain_filter: ["sixsigmacouncil.org", "isixsigma.com", "asq.org"] // Optional: Restrict reliability
        };

        const response = await fetch(PERPLEXITY_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Perplexity API Error (${response.status}): ${errorData}`);
        }

        const data = await response.json();
        const reply = data.choices[0].message.content;

        return NextResponse.json({ reply });

    } catch (error: any) {
        console.error("Gemini Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
