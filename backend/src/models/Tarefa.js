import mongoose from "mongoose";

const taferaSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            require: [true, "Titulo obrigatório"],
            trim: true,
            minlength: [1, "Demasiado curto"],
            maxlength: [120, "Título demasiado comprido"],
        },
        feito: {
            type: Boolean,
            default: false,
        },
    },
    { timestamp : true },
);

export const Tarefa = mongoose.model("Tarefa", tarefaSchema);