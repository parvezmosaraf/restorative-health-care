import { GoogleGenerativeAI, type ChatSession } from "@google/generative-ai";
import { CHATBOT_SYSTEM_INSTRUCTION } from "./chatbotKnowledge";

const MODEL = "gemini-2.5-flash";

let chatSession: ChatSession | null = null;

function getApiKey(): string | undefined {
  return import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
}

export function isGeminiConfigured(): boolean {
  const key = getApiKey();
  return typeof key === "string" && key.length > 0 && !key.startsWith("your_");
}

export function getOrCreateChatSession(): ChatSession {
  if (chatSession) return chatSession;
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Add VITE_GEMINI_API_KEY to your .env file.");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: MODEL,
    systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
  });
  chatSession = model.startChat();
  return chatSession;
}

const RATE_LIMIT_MESSAGE =
  "Rate limit reached. Please wait about a minute and try again. You can also check your quota at Google AI Studio (aistudio.google.com) or request a higher limit in Google Cloud Console.";

function isRateLimitError(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err);
  return msg.includes("429") || msg.includes("Quota exceeded") || msg.includes("RATE_LIMIT_EXCEEDED");
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendChatMessage(userMessage: string): Promise<string> {
  const session = getOrCreateChatSession();

  const trySend = async (): Promise<string> => {
    const result = await session.sendMessage(userMessage);
    const response = result.response;
    const text = response.text();
    if (!text) throw new Error("No response from the assistant.");
    return text;
  };

  try {
    return await trySend();
  } catch (err) {
    if (isRateLimitError(err)) {
      await delay(60_000);
      try {
        return await trySend();
      } catch (retryErr) {
        if (isRateLimitError(retryErr)) {
          throw new Error(RATE_LIMIT_MESSAGE);
        }
        throw retryErr;
      }
    }
    throw err;
  }
}
