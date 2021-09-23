//Obejtos
let persona = {
    nombre: 'Jose',
    apellido: 'Yac',
    correo: 'Joseyp75@gmail.com',
    edad: 21,
    idioma: 'mx',

    get Leng(){
        return this.idioma.toUpperCase(); // Metodo para pasar de minuscula a mayuscula
    },

    set Leng(lang){
        this.idioma = lang.toUpperCase();
    },

    get NombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.NombreCompleto)

console.log(persona.Leng)

persona.Leng = 'en'  // Metodo set se manda a llamar con un = 

console.log(persona.Leng)

