/*Bucles
 - For */
var ciudades = ["Bali", "Roma", "Berlín", "Madrid", "Paris"];

/**Inicializacion
 * let indice = 0;
 * console.log(ciudades[indice]);
 * indice++;
 * console.log(ciudades[indice]);
 * indice++;
 * console.log(ciudades[indice]);
 * indice++;
 * console.log(ciudades[indice]);
 * indice++;
 * console.log(ciudades[indice]);
 */

for (var i = 0; i < ciudades.length; i++){
    console.log(ciudades[i]);
}

var reserva1 = { id: 1, price: 24.50, client: "Caroline" };
var reserva2 = { id: 2, price: 61.50, client: "Liam" };
var reserva3 = { id: 3, price: 49.85, client: "Andrew" };
var reserva4 = { id: 4, price: 37.10, client: "John" };

var reservas = [reserva1,reserva2,reserva3,reserva4];

var total = 0;
console.log(reservas);

for(var i = 0; i < reservas.length; i++){
    total = total + reservas[i].price;
    //total += reservas[i].price
}
console.log(total);

//For...of Acceso a los valores del objeto
var Total = 0;
for(reserva of reservas){
    Total += reserva.price;
}
console.log(Total);

//For...in Acceso a los atributos del objeto
for( propiedad in reserva){
    console.log(propiedad + " " + reserva1[propiedad])
}

var array =["hola", "adios", "bye"];

for( propiedad in array){
    console.log(propiedad + " " + array[propiedad])
}

//While (evalua la expresion de la condicion y ejecuta la primera iteración)
var j = 0;
while ( j < ciudades.length) {
    console.log("Estamos visitando " + ciudades[j]);
    j++;
}

//do...while (bloque de código o iteracion se ejecuta antes de ver la condición)
var totalSuma = 0;
var h = 0;
do{
    totalSuma += reservas[h].price;
    h++;
}while(h < reservas.length);
console.log(totalSuma)

