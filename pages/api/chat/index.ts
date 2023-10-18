import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export default async function(req: Request) {
    let { messages } = await req.json();

    // Prepend the system message if it's not already there
    if (messages.length === 0 || messages[0].role !== "system") {
        messages = [{
            role: "system",
            content: "You are a helpful AI assistant. Assist the user in writing React code, ensuring that all logic is contained within a single app component file and that the output is rendered to the DOM's root element."
        }, ...messages];
    }

    const response = await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true,
        messages
    })

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
