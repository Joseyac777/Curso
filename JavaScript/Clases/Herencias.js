//Clase padre 
class Persona{
    static Contador = 1;

    static get MAXOBJS(){
        return 5;
    }

    constructor(nombre,apellido ){
        this._nombre = nombre,
        this._apellido = apellido
        if(Persona.Contador < Persona.MAXOBJS){
            this._IdPersona = Persona.Contador ++;
        }else{
            console.log('Se a superaro el numero de objetos maxico');
        }
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    //Metodo
    NombreCompleto(){
        return 'Id: ' + this._IdPersona + ' ' + 'Nombre: ' + this._nombre + ' ' + 'Apellido: ' + this._apellido 
    }
    //ToString se aplica como polimorfismo(Multiples formas de tiempo de ejecucion)
    toString(){
        return this.NombreCompleto();
    }

    static Saludar(){
        console.log("Saludando desde padre");
    }

    static Saludar2(persona){
        console.log('Saludandos: ' + persona.nombre);
    }

}

//Clase Hija
class empleado extends Persona {
    constructor(nombre,apellido,departamento) {
        super(nombre,apellido)
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(depa) {
        this._departamento = depa;
    }

    //Sobreescritura
    NombreCompleto(){
        return super.NombreCompleto() + ' ' +'Area: '+ this._departamento
    }
}

let persona1 = new Persona('Jose', 'Yac');

console.log(persona1.toString());

let empleado1 = new empleado('adolfo','piedrasanta', 'sistemas');

console.log(empleado1.toString());

let empleado2 = new empleado('Alex','Coyoy','Recursos Humanos');

console.log(empleado2.toString());

let empleado3 = new empleado('Mariano', 'Lara', 'Medico');

console.log(empleado3.toString());

let empleado4 = new empleado('Gladys','Perez','Secretaria');

console.log(empleado4.toString());

