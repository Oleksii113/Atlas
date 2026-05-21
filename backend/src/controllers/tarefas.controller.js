import mongoose from "mongoose";
import {Tarefa} from "../models/Tarefa.js";

export async function listarTarefa(_req, res, next) {
    try {

        const tarefas = (await Tarefas.find()).sort({createdAt: -1});
        res.status(200),json(tarefas);

    } catch (error) {
        next(error);
    }
}

export async function criarTarefa(req, res, next) {
    try {

        const novaTarefa = await Tarefa.create({
            titulo: req.body.titulo,
        });
        res.status(201).json(novaTarefa);
    } catch (error) {
        next(error);
    }
}