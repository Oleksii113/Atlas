import cors from "cors";
import express from "express";
import tarefasRoutes from "./routes/tarefas.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    }),
);

app.use(express.json());