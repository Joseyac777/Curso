//Obejtos
let persona = {
    nombre: 'Jose',
    apellido: 'Yac',
    correo: 'Joseyp75@gmail.com',
    edad: 21,

    NombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}
//Mostrar Datos de nuestro objeto 
console.log(persona['apellido']);

console.log(persona.NombreCompleto());

for(Recorre in persona){
    console.log(Recorre);
    console.log(persona[Recorre]);
}

let PersonaArr = Object.values(persona);

console.log(PersonaArr)

let SegundArr = JSON.stringify(persona)

console.log(SegundArr)

//Agregar datos a nuestro objeto
persona.tel = '51166123'
console.log(persona.tel);

