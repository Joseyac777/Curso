//los set son estilo arreglos que solo asepta datos unicos
let set = new Set([1,2,3,3,4,5,true,false,false])

console.log(set);
console.log(set.size);
console.log(set.has(5));

set.forEach(value => console.log(value))

//El metodo Array.from hace que un objeto o un set se comporte como un arreglo
let arr = Array.from(set);

console.log(arr[0]);

//Mapas son colecion de dato estilo un mapa con conjunto a un set

let Mapa = new Map();

Mapa.set('Nombre','Jose')
Mapa.set('Apellido','Yac')
Mapa.set('Edad',21)

console.log(Mapa);

Mapa.forEach(value => console.log(value))

for(let [key,value] of Mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const Mapa2 = new Map([
    ['Nombre','Adolfo'],
    ['Edad',15],
    ['Animal','perro']
]);

let llavesMapa2 = [...Mapa2.keys()]
let valoresMapa2 = [...Mapa2.values()]

console.log(llavesMapa2);
console.log(valoresMapa2);

//Rest nos permite separar y concanetar valores infinitos 
//Asi mismo nos permite recivir datos infinitamente 
//accede alos valores de nuestro arreglo 
let sumar = (a,b,...c)=>{
    let resultado = a + b;
    
    c.forEach((n)=>{
        resultado += n
    })

    return resultado
}

let numeros1 = [1,2,3,4,5,6];

let numeros2 = [7,8,9,10,11,12];
//Se concatenan los dos array a un array
let numeros3 = [...numeros1,...numeros2]

console.log(numeros3);

console.log(sumar(...numeros3));

