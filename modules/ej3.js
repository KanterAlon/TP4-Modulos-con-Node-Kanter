class Estudiante {
  constructor(nombreUsuario, documento) {
      this.nombreUsuario = nombreUsuario;
      this.documento = documento;
  }

  verDatos() {
      console.log(`Usuario: ${this.nombreUsuario}, Documento: ${this.documento}`);
  }
}

module.exports = Estudiante;