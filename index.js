const ejercicio1 = require("./modules/ej1");
const ejercicio2 = require("./modules/ej2");
const ejercicio3 = require("./modules/ej3");
const ejercicio4 = require("./modules/ej4");
const ejercicio5 = require("./modules/ej5");
const ejercicio6 = require("./modules/ej6");
const ejercicio7 = require("./modules/ej7");

// EJ 1
ejercicio1("cebolla", "cortada");

// EJ 2
ejercicio2.suma(1, 2);
ejercicio2.resta(1, 2);
ejercicio2.producto(1, 2);
ejercicio2.cociente(1, 2);

// EJ 3
let persona = new ejercicio3("Alon", 1);
persona.verDatos();

// EJ 4
ejercicio4("./entrada.txt", "./salida.txt");

// EJ 5
let resultado1 = ejercicio5("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log("Ejercicio 5:", resultado1);

// EJ 6
let resultado2 = ejercicio6("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log("Ejercicio 6:", resultado2);

// EJ 7
let divisa = ejercicio7("AR");
console.log("Moneda:", divisa);