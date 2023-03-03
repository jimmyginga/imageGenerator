import { imageGenerator } from "../features/imageGenerator.js";

export const imageGeneratorController = async (req, res) => {
  const { command, size, qty } = req.body;
  try {
    const imgUrl = await imageGenerator(command, size, qty);
    return res.status(200).json({ success: true, data: imgUrl });
  } catch (error) {
    return res
      .status(400)
      .json({
        success: false,
        error: `The image could not be generated: ${error}`,
      });
  }
};
