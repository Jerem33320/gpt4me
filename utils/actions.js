'use server';
import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';


// Check this to see custom for build
// https://sdk.vercel.ai/providers/ai-sdk-providers/groq
// const MY_API_KEY = process.env.GROQ_API_KEY;

export const generateChatResponse = async (chatMessages) => {
  try {
    const { text } = await generateText({
      model: groq('gemma2-9b-it'),
      prompt: chatMessages.reverse()[0].content,
    });
    console.log(text);

    return {
        message: text,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
