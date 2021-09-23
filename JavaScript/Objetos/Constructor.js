//Funcion tipo objeto
function Persona(firstName,lastName,age,email){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.email = email,

    this.nombreCompleto = function(){
        return this.firstName + ' ' + this.lastName
    }

}

//Crear Varios objetos con el constructor
let Padre = new Persona('Adolfo','Piedrasanta','20','jose12@');

console.log(Padre.nombreCompleto());

let Madre = new Persona('Gladys','Yac','21','Gla21@')

console.log(Madre);
