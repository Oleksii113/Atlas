import mongoose from "mongoose";

export async function connectDB() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new EvalError("Meu, falta o .env! Não sejas Daniel!");
    }
    await mongoose.connect(uri);
    console.log("MongoDB conectado! Uhu! Maquinas!");
}