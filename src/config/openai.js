import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);
