// enunciado
// ejercicio01
// Un usuario ingresa la cantidad de elementos que luego va ingresar
// Después ingresa los elementos que quiere "pizza, cerveza"
// Finalmente el programa le entrega la información en orden inverso.
document.write("<h1>ejercicio01</h1><ul><li>Un usuario ingresa la cantidad de elementos que luego va ingresar</li><li>Después ingresa los elementos que quiere 'pizza', 'cerveza', ...</li><li>Finalmente el programa le entrega la información en orden inverso.</li></ul>");

var cantidad = prompt("Cuantos elemetos ingresará");
var elementos = [];
for (var i = 0; i < cantidad; i++) {
  elementos[i] = prompt("Ingrese elemento Nro: "+i+1);
}

document.write("<h1>Elementos en orden inverso</h1>");
document.write("<ul>");
elementos.reverse().forEach(function(e){ document.write("<li>"+e+"</li>") });
document.write("<ul>");
