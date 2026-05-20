export function errorHandler(error, _rerq, res, _next) {
    console.error(error);

    const status = Number(error.status || error.statusCode || 500);
    const safeStatus = status >= 400 && status < 500 ? status : 500;

    res.status(safeStatus).json({
        error: {
            code: safeStatus === 500 ? "INTERNAL_ERROR" : "BAD_REQUEST",
            message: 
                safeStatus === 500
                    ? "Erro interno do servidor"
                    : "Pedido inválido",
            details: [],
        },
    });
}