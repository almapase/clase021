function Perrera(capacidad) {
  this.CAPACIDAD_MAX = capacidad;
  this.MAXIMO_POR_HUMANO = 2;
  this.perros = [];

  this.llena = function () { return this.perros.length >= this.CAPACIDAD_MAX ? true : false };

  this.ingresar = function (perro) {
    if (this.llena) {
        console.log("no caben mas perros");
        return;
    }
    if (perro instanceof Perro) {
        this.perros.push(perro);
        console.log("Perro ingresado");
    }else {
      console.log("Solo Perros en la perrera");
    }
  }

  this.darEnAdopcion = function (humano) {
    if (this.perros.length <= 0) {
      console.log("NO hay perros");
      return;
    }
    if (humano.cantMascotas >= this.MAXIMO_POR_HUMANO) {
      console.log("Solo 2 mascotas por usuario");
      return;
    }

    humano.adoptar(this.perros.unshift());
    console.log("Adoptado con exito");
  }
}

function Humano() {
  this.mascotas = [];

  this.cantMascotas = function () { return this.mascotas.length };

  this.adoptar = function (perro) {
      this.mascotas.push(perro);
  }
}

function Perro() {

}
