export function validateTitulo(req, res, next){
    const titulo = req.body?.titulo;

    if (typeof titulo !== "string" || titulo.trim() === "") {
        res.status(422).json({
            error: {
                code: "VALIDATION_ERROR",
                message: "Título obrigatório",
                details: [],
            },
        });
        return;
    }
    const tituloLimpo = titulo.trim();
    if (tituloLimpo.length > 120) {
        res.status(422).json({
            errors: {
                code: "VALIDATION_ERROR",
                message: "Título demasiado longo",
                details: [],
            },
        });
        return;
    }
    req.body.titulo = tituloLimpo;
    next();
}