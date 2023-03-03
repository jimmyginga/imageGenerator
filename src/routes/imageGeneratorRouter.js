import { Router } from "express";
import { imageGeneratorController } from "../controller/imageGeneratorController.js";
const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "API working..." });
});
router.post("/generate-image", imageGeneratorController);

export { router };
