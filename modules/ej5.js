const { URL } = require("url");

function analizarUrl(link) {
    const objUrl = new URL(link);
    const argumentos = {};

    objUrl.searchParams.forEach((valor, clave) => {
        argumentos[clave] = valor;
    });

    return {
        origen: objUrl.origin,
        ruta: objUrl.pathname,
        args: argumentos
    };
}

module.exports = analizarUrl;