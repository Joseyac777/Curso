//generadores se convierte ponioendo * ala par de una function*
//yield es igual como un return en una funcion*

function* iterable(){
    yield 'Hola 1'

    yield 'Hola 2'

    yield 'Hola 3'
}

let interactor = iterable();

for(let rec of interactor){
    console.log(rec);
}  

const arr = [...iterable()]
const arr2 = [1,2,3,4,5]

console.log(arr[1]);

function cuadrado(value){
    setTimeout(()=>{
        console.log({value,resultado:value*value});
    },Math.random()*1000);
}

function* generador(){
    console.log(`Inicio de generator`);

    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log(`Final de generator`);
}

let gen = generador()

for(let int of gen){
    console.log(int);
}
//El for de arriba es lo mismo que este codigo de abajo con map
// let arrmap = arr2.map(cuadrado)