import { Router } from "express";
import {
    criarTarefa,
    listarTarefa,
} from "../controllers/tarefas.controller.js";
import { validateTitulo } from "../middlewares/validateTitulo.js";

const router = Router();

router.get("/", listarTarefa);
router.post("/", validateTitulo, criarTarefa);

export default router;
