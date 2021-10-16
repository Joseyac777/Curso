// usamos una funcion tipo flecha
let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//setInterval sirve para que una funcion se ejecute denuevo en cada sierto tiempo
//setInterval(reloj,1000);

//Ejercicios 
// Programa una función que invierta las palabras de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertir(value){
    return value.split("").reverse().join('')
}

let prueba = invertir('Hola mundo')

console.log(prueba);

//Funcion que cuenta los caracteres de una cadena de texto 
function ContarCaracteres(value){
    let arr = []
    arr.push(value)
    return arr.map(rec => rec.length)
}
    
    let prueba2 = ContarCaracteres('Hola mundo')

console.log(prueba2);

// Programa una función que te devuelva el texto recortado
// según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function Recortar(value,dato){
    return value.slice(0,dato);
}

console.log(Recortar('Hola mundo',4));

