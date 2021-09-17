let result = (3>2) ? "Verdadero": "Falso"; //Mode Ternario el if 

console.log(result);

//Convertir tipo String a Tipo Int

let miNumero = "21";

let edad = Number(miNumero);

if(isNaN(edad)){
    console.log("No es un numero");
}else{
    if(edad >=18){
        console.log("Puede Votar");
    }else{
        console.log("Aun es joven");
    }
}

//Clase 32 Precencia de operadores

let x = 5;
let y = 10;

let z = ++x + y--;

console.log(z);

let resultado = 4 + 5 * 6 / 3

console.log(resultado);

