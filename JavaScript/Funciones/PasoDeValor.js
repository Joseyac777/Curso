//Funcion de paso de valor
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);

console.log(x);

//Funcion para paso de referencia
//Objeto
const Persona = {
    nombre: 'Jose',
    Apellido: 'Yac'
}

function CambiarReferencia(p){
    p.nombre = 'Adolfo';
    p.Apellido = 'Piedrasanta';
}

CambiarReferencia(Persona)
console.log(Persona)


let Nei = "Alex";
let Ape = 'Per';
