// se agrega una base de datos para insertarle objetos mediante un push 
// podemos recrear como si estubieramos recibiendo datos y enviando a una base de datos
// como mongodb que usa documentos que son objetos o json objeto dentro de un array

//Creamos la base de o el array donde se almacenara
let DataBase = []

//Funcion para agregar personas a un objeto y retornarlo
function AgregarPersona(nombre,apellido){
    let obj = {};
    obj.Nombre = nombre;
    obj.Apellido = apellido;

    return obj
}

//Funcion para salur estilo callback
function Saludar(saludo,aQuien){
    //Recibimos el saludo y con la funcion estilo callback llamamos parametros del obj
    console.log(`${saludo} ${aQuien.Nombre}`);
}

//Agregar un documento
let persona1 = new AgregarPersona('jose','yac')

//Agregamos otro documento
let persona2 = new AgregarPersona('alex','yac')

//Subimos ala Database
DataBase.push(persona1,persona2)
//llamamos nuestra funcion saludar recorriendo la database
DataBase.map(valor => Saludar('Hola',valor))

