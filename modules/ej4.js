const fs = require("fs");

function duplicarArchivo(rutaEntrada, rutaSalida) {
    fs.copyFile(rutaEntrada, rutaSalida, (error) => {
        if (error) {
            console.error("No se pudo copiar el archivo:", error);
        } else {
            console.log(`Se copió el archivo de ${rutaEntrada} a ${rutaSalida}`);
        }
    });
}

module.exports = duplicarArchivo;