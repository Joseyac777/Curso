//Polimorfismo llamar una accion en distintas clases de la misma forma

class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    ObtenerDetalles(){
        return `Nombre: ${this.nombre} Sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }

    ObtenerDetalles(){
        return `Gerente: ${super.ObtenerDetalles()} Departamento: ${this.departamento}`
    }
}

//Polimorfismo en esta funcion
function Mostrar(tipo){
    console.log(tipo.ObtenerDetalles());
    if(tipo instanceof Empleado){
        console.log(`Es tipo objeto Empleado`);
    }
}

let empleado1 = new Empleado('Jose',4500);

let gerente1 = new Gerente('Adolfo',5000,'Sistemas');

Mostrar(empleado1);

Mostrar(gerente1);
 

