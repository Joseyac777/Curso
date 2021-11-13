let promesa = new Promise((resolver,rechazar) => {
    let expresion = true;

    if(expresion){
        resolver(`Se resolvio correcto`);
    }else{
        rechazar(`Se rechazo`);
    }
})


promesa.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
)

let MiPromesa = new Promise((resolver) => {
    setTimeout(()=> resolver(`saludos desde promesa con setTimeout`),3000)
})

MiPromesa.then(
    valor => console.log(`${valor}`)
)

//*Usando funcion flecha y funcion normal con promesa  
let sumar = (a,b)=>{
    let sum = a+b;

    return sum
}

function Sumar(a,b){
    let resultado = a+b;

    return resultado;
}

let PromesaSuma = new Promise((resolver,error) => {

    if(Sumar(6,6) >= 10){
        resolver(`Dato mayor paso la prueba`);
    }else{
        error(`Dato menor es rechazado`)
    }
})

PromesaSuma.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
)

//* async y await
async function Prueba(){
    let miPromesa = new Promise((resolver)=>{
        resolver(`Saludos desde promesa y function`)
    });

    console.log(await miPromesa);
}

Prueba()

// * Usando async, await, promise, Settimeout

async function UsandoTodo(){
    let miPromesa = new Promise((resolver)=>{
        setTimeout(()=> resolver(`Saludando desde todo`),3000)
    });

    console.log(await miPromesa);
}

UsandoTodo()

let dato = (x)=>{
    return new Promise((resolver,reject)=>{
        resolver(x)
    })
}

dato(2)
    .then(x => {
        console.log(x)
        return dato(x + 5)
    })
    .then(x => console.log(x))