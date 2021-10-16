function miFuncion(a, b){
    return 'Suma: ' + (a+b);
}

let resultado = miFuncion(2,3);

console.log(resultado)

let sumar = function (a,b) {return a+b};

let res = sumar(6,7)
console.log(res)

console.log(sumar(8,9))

//* Funciones tipo flecha

const FuncionFlecha = (a,b) => a+b;

console.log(FuncionFlecha(4,6))

let resultadoFlecha = FuncionFlecha(4,4)

console.log(resultadoFlecha)

//Funciones Anonimas 
(function(abs){
    console.log(`Hola: ${abs}`);
}('Jose'))