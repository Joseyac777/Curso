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

frutas.sort(); // Sort ordena ya sea por letra o por nuemros 
console.log(frutas);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); //Otra manera de podera representar sort mediante funciones para objetos
                                           //o arreglos o arrays que es lo mismo 
console.log(points);

let y = Math.max.apply(null,points);
let z = Math.min.apply(null,points);
console.log(y);
console.log(z);

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

cars.sort(function(a, b){return a.year - b.year});

// Si el resultado es negativo a se ordena antes b.

// Si el resultado es positivo b se ordena antes a.

console.log(cars);

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

console.log(cars);

//Metodo map para multiplicar y mostrando tambien con un for 

const numbers1 = [45, 4, 9, 16, 25];
const num2 = numbers1.map(funcionMulti);

function funcionMulti(value){
    return value * 2
}

console.log(num2);

for(x in numbers1){
    console.log(`${numbers1[x] * 2}`);
}

//usando filter y un for 
function MayorDeArray(value){
    return value > 15 ;
}

let result = numbers1.filter(MayorDeArray)

console.log(result);

for(Rec in numbers1){
    if(numbers1[Rec] > 15){
        console.log(numbers1[Rec]);
    }
}

//Metodo Reduce y mostrando un metodo for 

let sum = numbers1.reduce(myFunction);

function myFunction(total, value,) {
  return total + value;
}

console.log(sum);

let suma = 0;
for(let i of numbers1){
    suma += i;
}
console.log(suma);



