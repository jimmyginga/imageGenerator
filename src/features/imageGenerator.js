import { openai } from "../config/openai.js";

export const imageGenerator = async (command, imageSize, qty = 3) => {
  const size =
    imageSize === "small"
      ? "256x256"
      : imageSize === "medium"
      ? "512x512"
      : "1024x1024";
  const response = await openai.createImage({
    prompt: command,
    n: qty,
    size,
  });
  return response.data.data[0].url;
};
