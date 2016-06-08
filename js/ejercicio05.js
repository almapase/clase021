/****************************************************************************************
.- Crear una clase de usuario, el usuario debe recibir correo electrónico, contraseña, edad, estado de activo o inactivo (true-false), fecha de registro y nombre completo.
.- Crear 20 instancias de usuarios, 10 inactivos, 10 activos, 5 menores de edad, y 3 sin nombre.
.- Agregar todas las instancias de usuarios a un arreglo.
.- Una vez con todos los usuarios en el arreglo, crear 4 arreglos nuevos.
.- Estos cuatro arreglos deben contener a los usuarios sin nombre, activos, inactivos y menores de edad.
.- Para esto el arreglo de usuarios DEBE iterarse!, NO SE PUEDEN AGREGAR MANUALMENTE CADA USUARIO A SU RESPECTIVO ARREGLO!
****************************************************************************************/

function Usuario(email, password, edad, activo, fecha_reg, full_name) {
  this.email = email;
  this.password = password;
  this.edad = edad;
  this.activo = activo;
  this.fecha_reg = fecha_reg;
  this.full_name = full_name == undefined ? "" : full_name.trim();
}

var usuarios = [];

var usuario_a = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre a" );
usuarios.push(usuario_a);
var usuario_b = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre b" );
usuarios.push(usuario_b);
var usuario_c = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre c" );
usuarios.push(usuario_c);
var usuario_d = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre d" );
usuarios.push(usuario_d);
var usuario_e = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre e" );
usuarios.push(usuario_e);
var usuario_f = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre f" );
usuarios.push(usuario_f);
var usuario_g = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre g" );
usuarios.push(usuario_g);
var usuario_h = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre h" );
usuarios.push(usuario_h);
var usuario_i = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre i" );
usuarios.push(usuario_i);
var usuario_j = new Usuario("correo@domino.com","****", 21, true, "07/06/2016", "nombre j" );
usuarios.push(usuario_j);
var usuario_k = new Usuario("correo@domino.com","****", 21, false, "07/06/2016", "nombre k" );
usuarios.push(usuario_k);
var usuario_l = new Usuario("correo@domino.com","****", 21, false, "07/06/2016", "nombre l" );
usuarios.push(usuario_l);
var usuario_m = new Usuario("correo@domino.com","****", 21, false, "07/06/2016", "nombre m" );
usuarios.push(usuario_m);
var usuario_n = new Usuario("correo@domino.com","****", 21, false, "07/06/2016", "nombre n" );
usuarios.push(usuario_n);
var usuario_o = new Usuario("correo@domino.com","****", 21, false, "07/06/2016", "nombre o" );
usuarios.push(usuario_o);
var usuario_p = new Usuario("correo@domino.com","****", 17, false, "07/06/2016", "nombre p" );
usuarios.push(usuario_p);
var usuario_q = new Usuario("correo@domino.com","****", 17, false, "07/06/2016", "nombre q" );
usuarios.push(usuario_q);
var usuario_r = new Usuario("correo@domino.com","****", 17, false, "07/06/2016" );
usuarios.push(usuario_r);
var usuario_s = new Usuario("correo@domino.com","****", 17, false, "07/06/2016" );
usuarios.push(usuario_s);
var usuario_t = new Usuario("correo@domino.com","****", 17, false, "07/06/2016" );
usuarios.push(usuario_t);

var usuarios_activos = usuarios.filter(function(e) {
  return e.activo;
})

var usuarios_inactivos = usuarios.filter(function(e) {
  return !e.activos;
})

var usuarios_menores = usuarios.filter(function(e) {
  return e.edad < 18;
})

var usuarios_sin_nombre = usuarios.filter(function(e) {
  return e.full_name.length == 0;
})

// Imprimir resultados
// Inactivos
document.write("<h1>Inactivos</h1>");
document.write("<ul>");
usuarios_inactivos.forEach(function(e){document.write("<li>"+e.full_name+" "+e.estado+"</li>")});
document.write("</ul>");
// Activos
document.write("<h1>Activos</h1>");
document.write("<ul>");
usuarios_activos.forEach(function(e){document.write("<li>"+e.full_name+" "+e.estado+"</li>")});
document.write("</ul>");
//menoers
document.write("<h1>Menores</h1>");
document.write("<ul>");
usuarios_menores.forEach(function(e){document.write("<li>"+e.full_name+" "+e.edad+"</li>")});
document.write("</ul>");
//sin nombre
document.write("<h1>Sin Nombre</h1>");
document.write("<ul>");
usuarios_sin_nombre.forEach(function(e){document.write("<li>"+e.full_name+" "+e.estado+"</li>")});
document.write("</ul>");
// TODOS
document.write("<h1>todos</h1>");
document.write("<ul>");
usuarios.forEach(function(e){document.write("<li>"+e.full_name+" "+e.estado+"</li>")});
document.write("</ul>");
