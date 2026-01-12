
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getConciergeResponse = async (userPrompt: string) => {
  if (!API_KEY) {
    return "I'm currently resting, but I'll be back soon to help with your London adventure!";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are a high-end personal concierge for a luxury Airbnb in Fitzrovia, London (W1T 3AE). 
        You provide sophisticated, expert recommendations for the local area. 
        Focus on Fitzrovia, Marylebone, Soho, and Mayfair. 
        Be professional, warm, and helpful. 
        Keep responses concise and well-formatted. 
        The property is a 2-bed, 2-bath luxury flat.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't find an answer for that. Try asking about local dining!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a slight hiccup. Please ask me again in a moment!";
  }
};
