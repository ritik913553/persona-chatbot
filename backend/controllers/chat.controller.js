import { HITESH_CHOUDHARY, PIYUSH_GARG } from "../service/system-prompt.js";
import openai from "../service/chatbot.service.js";

// Example teacher personas
const teacherPrompts = {
    "Hitesh Choudhary": HITESH_CHOUDHARY,
    "Piyush Garg": PIYUSH_GARG,
};

const getChat = async (req, res) => {
    try {
        const { persona, messages } = req.body;

        if (!persona || !messages) {
            return res
                .status(400)
                .json({ error: "Persona and messages are required" });
        }

        // Get system prompt based on persona
        const systemPrompt = teacherPrompts[persona];

        // Build conversation with system message at the start
        const conversation = [
            { role: "system", content: systemPrompt },
            ...messages, // previous messages from frontend
        ];

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-5-mini",
            messages: conversation,
        });

        const reply = completion.choices[0].message.content;
       
        res.json({ reply });
    } catch (error) {
        console.error("Error in getChat:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

export { getChat };
