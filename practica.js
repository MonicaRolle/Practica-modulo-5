const bookings = [
    {
        id: 1, price: 45.30, count: 3, room: "standard", prepaid: false,
        succeeded: true
    },
    {
        id: 2, price: 92.45, count: 4, room: "superior", prepaid: false,
        succeeded: true
    },
    {
        id: 3, price: 63.50, count: 7, room: "standard", prepaid: true,
        succeeded: false
    },
    {
        id: 3, price: 37.50, count: 2, room: "standard", prepaid: true,
        succeeded: true
    },
    {
        id: 5, price: 87.90, count: 5, room: "superior", prepaid: true,
        succeeded: false
    }
];

//Listar las reservar
// for (i = 0; i < bookings.length; i++) {
//     imprimir(bookings[i]);
// }
// for(reserva of bookings){
//     imprimir(reserva);
// }

//Imprimir la reserva

// function imprimir(reserva){
//     console.log("----Reserva "+ reserva.id + "----");
//     console.log("Price: " + reserva.price);
//     console.log("Nights; " + reserva.count);
//     console.log("Room's type: " + reserva.room);
//     console.log("Prepaid: " + reserva.prepaid);
//     console.log("Error: " + !reserva.succeeded); //Seria la negacion de reserva
// }

// for..in
function imprimir(reserva) {
    console.log("---------")
    for (propiedad in reserva) { //
        console.log(propiedad + ": " + reserva[propiedad])
    }
}

//Si al menos una reserva a fallado
// function existeError(){
//     var succeeded = true;
//     var i = 0;
//     while(succeeded){
//         console.log("Comprobando reserva en posición: "+ i);
//         console.log("Exito vale "+ succeeded + " y la reserva "+ bookings[i].succeeded);
//         succeeded = succeeded && bookings[i].succeeded;
//         console.log("Resultado de exito " + succeeded)
//         i++;
//     }

//     return !succeeded; //Cuando encuentra un fallo deja de revisar las reservas.
// }
// console.log("Existe reserva con error: " + existeError())

//Listar las reservas que han tenido exito
// for (reserva of bookings) {
//     if(reserva.succeeded == true) imprimir(reserva);
// }

// function imprimir(booking) {
//     console.log("---------")
//     for (propiedad in booking) { //
//         console.log(propiedad + ": " + booking[propiedad])
//     }
// }

//Mostrar reservar ya pagadas

// for(reserva of bookings){
//     if(reserva.prepaid == true){
//         imprimir(reserva)
//     }
// }

//Calcular la suma total de sus precios
// var total = 0;

// for(reserva of bookings){
//      total += reserva.price * reserva.count
// }
// console.log("Total: " + total);

//Aplicar un descuento del 10% a todas las reservas

// for(reserva of bookings){
//     reserva.price = reserva.price * 0.9
// }

//Buscar reservas pagadas que han fallado

// for( booking of bookings){
//     if(!booking.succeeded && booking.prepaid) imprimir(booking)
// }

//Buscar si existe algun identificador repetido (bucle anidado)
var repetido = false;

for (i = 0; i < bookings.length; i++) {
    var reserva = bookings[i];

    for (j = i + 1; j < bookings.length; j++) {
        var reserva2 = bookings[j];
        repetido = repetido || reserva2.id === reserva.id;

    }
}
console.log("Hay identificadores repetidos: " + repetido)

//Otra forma de realizarlo
// for (i = 0; i < bookings.length; i++) {
//     var id = bookings[i].id;
//     repetido = repetido || buscarId(id);
// }
// function buscarId(id) {
//     var encontrado = false;
//     for (k = 0; k < bookings.length; k++) {
//         encontrado = encontrado || bookings[k].id == id;
//     }
// }