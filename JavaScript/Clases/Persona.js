class Persona {
    static ContadorPersona = 0;

    constructor(nombre,apellido,edad){
        this._nombre = nombre,
        this._apellido = apellido,
        this._edad = edad
        this._IdPersona = Persona.ContadorPersona ++;
    }

    get DPersona(){
        return 'Numero de persona:' + this._IdPersona;
    }

    get Nombre(){
        return 'Nombre:' + this._nombre;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Apellido(){
        return 'Apeliido:' + this._apellido;
    }

    set Apellido(apellido) {
        this._apellido = apellido;
    }

    get Edad(){
        return 'Edad:' + this._edad;
    }

    set Edad(edad) {
        this._edad = edad;
    }
    
    toString(){
        return `${this.Nombre}
                ${this.Apellido}
                ${this.Edad}`; 
    }
}

class Empleado extends Persona{
    static Contador = 1;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad),
        this._Sueldo = sueldo,
        this._IdEmpleado = Empleado.Contador ++;
    }

    get DEmpleado(){
        return 'Id: ' + this._IdEmpleado
    }

    get Sueldo() {
        return 'Sueldo: ' + this._Sueldo;
    }

    set Sueldo(sueldo) {
        this._Sueldo = sueldo;
    }

    toString(){
        return `${this.DEmpleado} 
                ${super.toString()}
                ${this.Sueldo}`;
    }
}

class Cliente extends Persona{
    static ContadorC = 1;

    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad),
        this._Fecha = new Date(),
        this._IdCliente = Cliente.ContadorC ++;
    }

    get DCliente() {
        return 'Id:' + this._IdCliente;
    }

    get FechaRegistro() {
        return 'Fecha:' + this._Fecha;
    }

    set FechaRegistro(date) {
        this._Fecha = date;
    }

    toString(){
        return `${this.DCliente}
                ${super.toString()}
                ${this.FechaRegistro}`
    }

}

//Tipo Empleado
let empleado1 = new Empleado('Jose','Yac','21','12,000')

console.log(empleado1.toString());

let empleado2 = new Empleado('Adolfo','Piedrasanta','20','10,000')

console.log(empleado2.toString());


//Tipo Cliente
let cliente1 = new Cliente('Alex','Santa','19')

console.log(cliente1.toString());

let cliente2 = new Cliente('Arnoldo','Lopez','22')

console.log(cliente2.toString());

console.log(Persona.ContadorPersona);