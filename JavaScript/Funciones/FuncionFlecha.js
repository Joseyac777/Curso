//Funcion flecha 
//En funciones flechas no se hace hosting ya que se tiene que declarar primero la funcion para poder declarar 
let miFuncion = function(){}

let miFuncionFlecha = () => {
    console.log(`Hola desde mi funcion flecha`);
}

miFuncionFlecha();

const Saludar = (n,a) => {
    console.log(({Nombre: n, Apellido: a}));
    console.log(`Se te saluda desde funcion flecha: ${n} ${a}`);
    
}

Saludar('Jose','Yac');

//Cuenta los caracteres de un objeto
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
console.log(materials.map(material => material.length));

function ParaSaludar(name){
    console.log(`Saludos: ${name}`);
}

let Nombres = ['Jose','Adolfo','Alex','Arnold']

Nombres.map(value => ParaSaludar(value))

//Cuenta las letras de cada palabra de un array

const Materiales = ['Martillo','Casa']

console.log(Materiales.map(value => value.length));

//reiniverte cada palabra del array

console.log(Materiales.map(mat => mat.split('').reverse().join('')));
