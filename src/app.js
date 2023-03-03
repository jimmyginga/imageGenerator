import express, { json } from "express";
import { config } from "dotenv";
import { router } from "./routes/imageGeneratorRouter.js";
const app = express();
config();

app.use(json());
app.use(router);

export { app };
