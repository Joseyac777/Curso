//los proxy funcionan estilo orientada a objetos el proxy
//recive el objeto y el manejador en el manejador recivimos
//el objeto su propiedad y el valor asignado en el manejador podemos 
//hacer validaciones antes de hacer su asignacion

const persona = {
    Nombre:'',
    Apellido:'',
    Edad:0
}

const manejador = {
    set(obj,prop,valor){
        //Este if valida la propiedad del objeto que se esta reciviendo en el objeto padre 
        // -1 ya que el indexOf nos devuelve un menos uno si no se encontro la propiedad
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el objeto `)
        }
        if((prop == 'Nombre' || prop == 'Apellido') && !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))){
            return console.error(`La propiedad ${prop} solo asepta letras y espacios en blanco`)
        }
        if((prop == 'Edad') && (valor >= 18)){
            console.log(`Es mayor de edad`);
        }
        obj[prop] = valor
    }
}

const jos = new Proxy(persona,manejador)

jos.Nombre = 'Jose'
jos.Apellido = 'Yac'
jos.Edad = 21


console.log(jos);
console.log(persona);

