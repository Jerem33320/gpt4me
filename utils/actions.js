'use server';
import LlamaAI from 'llamaai';

import prisma from './db';
import { revalidatePath } from 'next/cache';

const llamaai = new LlamaAI({
  apiKey: process.env.LLAMAAI_API_KEY,
});



// Build the Request
const apiRequestJson = {
  "messages": [
      {"role": "user", "content": "What is the weather like in Boston?"},
  ],
  "functions": [
      {
          "name": "get_current_weather",
          "description": "Get the current weather in a given location",
          "parameters": {
              "type": "object",
              "properties": {
                  "location": {
                      "type": "string",
                      "description": "The city and state, e.g. San Francisco, CA",
                  },
                  "days": {
                      "type": "number",
                      "description": "for how many days ahead you wants the forecast",
                  },
                  "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
              },
          },
          "required": ["location", "days"],
      }
  ],
  "stream": false,
  "function_call": "get_current_weather",
 };

 // Execute the Request
  // llamaAPI.run(apiRequestJson)
  //   .then(response => {
  //     // Process response
  //   })
  //   .catch(error => {
  //     // Handle errors
  //   });

export const generateChatResponse = async (chatMessages) => {
  try {
    console.log("chatMessages", chatMessages);
    console.log("llamaai", llamaai);
    const response = await llamaai.chat.create({
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        ...chatMessages,
      ],
      // model: 'gpt-3.5-turbo',
      temperature: 0,
      max_tokens: 100,
    });
    return {
      message: response.choices[0].message,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const generateTourResponse = async ({ city, country }) => {
  const query = `Find a exact ${city} in this exact ${country}.
If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
{
  "tour": {
    "city": "${city}",
    "country": "${country}",
    "title": "title of the tour",
    "description": "short description of the city and tour",
    "stops": [" stop name", "stop name","stop name"]
  }
}
"stops" property should include only three stops.
If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
  try {
    const response = await llamaai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a tour guide' },
        {
          role: 'user',
          content: query,
        },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });

    const tourData = JSON.parse(response.choices[0].message.content);
    if (!tourData.tour) {
      return null;
    }
    return { tour: tourData.tour, tokens: response.usage.total_tokens };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExistingTour = async ({ city, country }) => {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};

export const createNewTour = async (tour) => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getAllTours = async (searchTerm) => {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: 'asc',
      },
    });
    return tours;
  }
  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            contains: searchTerm,
          },
        },
        {
          country: {
            contains: searchTerm,
          },
        },
      ],
    },
    orderBy: {
      city: 'asc',
    },
  });

  return tours;
};

export const getSingleTour = async (id) => {
  return prisma.tour.findUnique({
    where: {
      id,
    },
  });
};

export const generateTourImage = async ({ city, country }) => {
  try {
    const tourImage = await llamaai.images.generate({
      prompt: `a panoramic view of teh ${city} ${country}`,
      n: 1,
      size: '512x512',
    });
    return tourImage?.data[0]?.url;
  } catch (error) {
    return null;
  }
};

export const fetchUserTokensById = async (clerkId) => {
  const result = await prisma.token.findUnique({
    where: {
      clerkId,
    },
  });

  return result?.tokens;
};

export const generateUserTokensForId = async (clerkId) => {
  const result = await prisma.token.create({
    data: {
      clerkId,
    },
  });
  return result?.tokens;
};

export const fetchOrGenerateTokens = async (clerkId) => {
  const result = await fetchUserTokensById(clerkId);
  if (result) {
    return result.tokens;
  }
  return (await generateUserTokensForId(clerkId)).tokens;
};

export const subtractTokens = async (clerkId, tokens) => {
  const result = await prisma.token.update({
    where: {
      clerkId,
    },
    data: {
      tokens: {
        decrement: tokens,
      },
    },
  });
  revalidatePath('/profile');
  // Return the new token value
  return result.tokens;
};