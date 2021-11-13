//Funcion callback es que se pasa como parametro a otra funcion 
function resultado(value){
    console.log(`Dato de ${value}`);
}

function Sumar(dato1,dato2,callback){
    let sum = dato1 + dato2
    callback(`Resultado: ${sum}`);
}

Sumar(5,6,resultado);

//Llamada asincronas con uso setTimeout

function FuncionCallback(){
    console.log(`Mensaje de tipo callback`);
}

//setTimeout sirve para lanzar una funcion despues de un sierto tiempo 
setTimeout(FuncionCallback,3000);

function cuadradoCollback(value,callback){
    setTimeout(
        ()=>{
            callback(value,value*value);
        },0 | Math.random()*100);
}

cuadradoCollback(2,(value,result)=>{
    console.log(`Inicia ${value}, ${result}`);
    cuadradoCollback(3,(value,result)=>{
        console.log(`Inicia ${value}, ${result}`);
        cuadradoCollback(4,(value,result)=>{
            console.log(`Inicia ${value}, ${result}`);
        })
    })
})

