import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret || apiKey === 'your_stream_api_key' || apiSecret === 'your_stream_api_secret') {
  console.warn("Stream API key or Secret is missing or using placeholder values. Stream features will not work until proper credentials are provided.");
}

let streamClient;

// Only initialize Stream client if we have valid credentials
if (apiKey && apiSecret && apiKey !== 'your_stream_api_key' && apiSecret !== 'your_stream_api_secret') {
  streamClient = StreamChat.getInstance(apiKey, apiSecret);
} else {
  streamClient = null;
}

export const upsertStreamUser = async (userData) => {
  try {
    if (!streamClient) {
      console.warn("Stream client not initialized. Cannot upsert user.");
      return userData;
    }
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    if (!streamClient) {
      console.warn("Stream client not initialized. Cannot generate token.");
      return null;
    }
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
