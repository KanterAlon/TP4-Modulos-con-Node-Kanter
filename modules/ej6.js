const { URL } = require("url");

function desglosarUrl(enlace) {
    try {
        const urlProcesada = new URL(enlace);
        const datos = {};

        urlProcesada.searchParams.forEach((valor, clave) => {
            datos[clave] = valor;
        });

        return {
            origen: urlProcesada.origin,
            ruta: urlProcesada.pathname,
            parametros: datos
        };
    } catch (e) {
        console.error("Falló el análisis de la URL:", e.message);
        return null;
    }
}

module.exports = desglosarUrl;