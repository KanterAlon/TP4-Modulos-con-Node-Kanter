const countryToCurrency = require("country-to-currency");

function encontrarMoneda(pais) {
    try {
        const resultado = countryToCurrency[pais.toUpperCase()];
        return resultado || "No se encontró la moneda para ese país.";
    } catch (e) {
        console.error("Hubo un problema al buscar la moneda:", e.message);
        return null;
    }
}

module.exports = encontrarMoneda;