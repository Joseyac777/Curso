let persona1 = {
    nombre: 'Jose',
    apellido: 'Yac',

    nombreCompleto: function(titulo,tel){
        //return this.nombre + ' ' + this.apellido
        return titulo +': ' + this.nombre + ' ' + this.apellido + ', ' + tel
    }
}

let persona2 = {
    nombre: 'Adolfo',
    apellido: 'Piedranta'
}

console.log(persona1.nombreCompleto());
//Call 
console.log(persona1.nombreCompleto.call(persona2,'Ing','56497812'));
//Apply
console.log(persona1.nombreCompleto.apply(persona2));

let arreglo = ['lic','89457832'];

console.log(persona1.nombreCompleto.apply(persona2,arreglo))

