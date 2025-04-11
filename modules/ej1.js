function combinarCadenas(cad1, cad2) {
    const resultadoConcat = cad1.concat(cad2);
    console.log("Resultado de la combinación:", resultadoConcat);

    const resultadoInterp = `${cad1} ${cad2}`;
    console.log("Resultado con plantilla:", resultadoInterp);
}

module.exports = combinarCadenas;