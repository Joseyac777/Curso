// Generar el nombre de las propiedades de los objetos de manera dinamica

const ObjUsuarios = {}

console.log(ObjUsuarios);

const usuarios = ['jose','alex','miguel','karla']

//Asigna su id alos datos del array y le aplica su propio indice
usuarios.forEach((usuario,index)=> ObjUsuarios[`id_${index}`] = usuario)


console.log(ObjUsuarios);

//Metodo call, apply y bind
function Saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien} desde ${this.lugar}`);
}

const obj = {
    lugar: 'Contexto Objeto',
}

Saludar.call(obj,'Hola','Jose')
Saludar.apply(obj,['Adios','Adolfo'])


const pers = {
    nombre: 'Alex',

    DecirSaludo: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

pers.DecirSaludo();

const OtraPersona = {
    saludo: pers.DecirSaludo.bind(pers)
}

OtraPersona.saludo()
