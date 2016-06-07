function Sala() {
  this.capacidad = 10;

  this.llena = function () { return this.capacidad == 0 ? true : false };

  this.ingresar = function (alumno) {
    if (alumno.mayorDeEdad()) {
      if (!this.llena()) {
        this.capacidad --;
      }else {
        console.log("La Sala esta llena, debe crear otra");
      }
    }else {
      console.log("Es muy joven para ingresar al aula");
    }
  }
}

function alumno(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad || 1;

  this.mayorDeEdad = function () { return this.edad >= 18 ? true : false };
}
