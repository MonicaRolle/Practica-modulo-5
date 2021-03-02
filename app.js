var ciudades = ["Bali", "Roma", "Berlín"];

//Añadir elemento al final del Array
ciudades.push("Rio");
console.log(ciudades);

//Añadir elemento al principio del Array
ciudades.unshift("Londres");
console.log(ciudades);

//Eliminamos el último elemento, y lo asignamos a una variable
var ultimoElemento = ciudades.pop();
console.log(ciudades);
console.log(ultimoElemento);

//Eliminamos el primer elemento, y lo asignamos a una variable
var primerElemento = ciudades.shift();
console.log(ciudades);
console.log(primerElemento);

//Buscar el indice de un elemento.
var indice = ciudades.indexOf("Roma");
console.log(indice);

//Buscar un indice que no esta dentro del Array
var index = ciudades.indexOf("Paris");
console.log(index);

//Elimina un elemento indicando el indice(Posicion, elementos a eliminar)
// var elementosEliminados = ciudades.splice(1, 1);
// console.log(ciudades);
// console.log(elementosEliminados)

// var elementosEliminados = ciudades.splice(1, 2);
// console.log(ciudades);
// console.log(elementosEliminados);

//Copiar un Array
var copia = ciudades.slice();
console.log(copia);

console.log(ciudades == copia); //false. son posiciones diferentes.

//Acceder a un elemento del Array
console.log(ciudades[1]);

//Modificar un elemento contenido
ciudades[0] = "Málaga";
console.log(ciudades);

var usuarios = [{ name: "Ana", lastname: "Suarez" }, { name: "John", lastname: "Doe" }];
usuarios[0].lastname = "Pérez";
console.log(usuarios)

//Longuitud del Array
console.log(usuarios.length);
console.log(ciudades.length);

//Añadir elemento
ciudades[3] = "Cadiz"
console.log(ciudades);

ciudades[10] = "Jerez de la Frontera";
console.log(ciudades);