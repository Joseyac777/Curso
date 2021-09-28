//let autos = new Array('Mazda','Toyota','Nissan');

const autos = ['Mazda','Toyota','Nissan'];

console.log(autos);

for(let i = 0; i < autos.length; i++){ // length muestra la longitud de una cadena
    console.log(i + ': ' + autos[i]);
}

autos.push('Volvo'); // funcion para agregar al final del arreglo 
console.log(autos);

autos[autos.length] = 'Audi';

console.log(autos);

console.log(Array.isArray(autos));

let frutas = ['Mango','Banano','Naranja','Manzana']

console.log(frutas.join('-')); // Metodo para separar 

frutas.pop(); // Funcion que borra el ultimo elemento del array 

console.log(frutas);

frutas.push('Kiwi'); // push nos agrega ala cadena en el ultimo de la cadena 

console.log(frutas);

frutas.shift(); // remueve el primero de la cadena 

console.log(frutas);

frutas.unshift('Limon'); // Agrega al inicio de la cadena

console.log(frutas);

frutas[0] = 'Prue'

console.log(frutas);

let x = frutas.splice(1,2,'Pera') // Metodo splice remueve mediante indicadores y eliminadores

console.log(x); 
console.log(frutas);

frutas.splice(1,0,'Banano','Naranja')

console.log(frutas);