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