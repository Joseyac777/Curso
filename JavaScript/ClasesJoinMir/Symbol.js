//Simbol nos muestra las propiedades privadas para no mostrar 
//informacion que no deceamos que se muestre al usuario 

const NOMBRE = Symbol('name')

const persona = {
    [NOMBRE]: 'Jose',
    edad: 21
}

console.log(persona);
console.log(persona[NOMBRE]);

const SALUDAR = Symbol()

persona[SALUDAR] = ()=>{
    console.log('Hola');
}

console.log(persona);
persona[SALUDAR]();

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));