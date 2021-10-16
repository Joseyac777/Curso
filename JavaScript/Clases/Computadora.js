class DispositivoEntrada{
    constructor(entrada,marca){
        this._TipoEntrada = entrada;
        this._Marca = marca;
    }

    get Entrada() {
        return this._TipoEntrada;
    }

    set Entrada(value) {
        this._TipoEntrada = value;
    }

    get Marca() {
        return this._Marca;
    }

    set Marca(value) {
        this._Marca = value;
    }
}

//Clases hija de DispositivosEntrada
class Raton extends DispositivoEntrada{
    static ContadorRaton = 0;

    constructor(entrada,marca) {
        super(entrada,marca) 
        this._IdRaton = ++ Raton.ContadorRaton;
    }

    toString(){
        return `Id: ${this._IdRaton}, Tipo Entrada: ${super.Entrada}, Marca: ${super.Marca}`;
    }
}

//Clases hija de DispositivosEntrada
class Teclado extends DispositivoEntrada{
    static ContadorTeclado = 0;

    constructor(entrada,marca){
        super(entrada,marca)
        this._IdTeclado = ++ Teclado.ContadorTeclado;
    }

    toString(){
        return `Id: ${this._IdTeclado}, TipoEntrada: ${super.Entrada}, Marca: ${super.Marca}`
    }
}

//Clase no Hija de DispositivosEntrada
class Monitor{
    static ContadorMonitor = 0;

    constructor(marca,tamanio){
        this._Marca = marca,
        this._Tamanio = tamanio,
        this._IdMonitor = ++Monitor.ContadorMonitor;
    }

    get Marca() {
        return this._Marca;
    }

    set Marca(value) {
        this._Marca = value;
    }

    get Tamanio() {
        return this._Tamanio;
    }

    toString(){
        return `Id: ${this._IdMonitor}, Marca: ${this.Marca}, Tamanio: ${this.Tamanio}`
                
    }
}

class Computadora{
    static ContadorPC = 0;

    constructor(nombre,monitor,teclado,raton){
        this._NombreCompu = nombre,
        this._Monitor = monitor,
        this._Teclado = teclado,
        this._Raton = raton,
        this._IdComputadora = ++Computadora.ContadorPC;
    }

    get NombreComputadora() {
        return this._NombreCompu;
    }

    set NombreComputadora(value) {
        this._NombreCompu = value;
    }

    get MonitorPc() {
        return this._Monitor;
    }

    set MonitorPc(value) {
        this._Monitor = value;
    }

    get TecladoPc() {
        return this._Teclado;
    }

    set TecladoPc(value) {
        this._Teclado = value;
    }

    get RatonPc() {
        return this._Raton;
    }

    set RatonPc(value) {
        this._Raton = value;
    }

    toString(){
        return `Computadora ${this._IdComputadora}: ${this.NombreComputadora}
                Monitor: ${this.MonitorPc}
                Teclado: ${this.TecladoPc}
                Raton: ${this.RatonPc}`;
    }
}

class Orden{
    static ContadorOrden = 0;

    constructor() {
        this._IdORden = ++Orden.ContadorOrden;
        this._Computadoras = [];
    }

    get IdOrden() {
        return this._IdORden;
    }

    AgregarComputadora(Computadora){
        this._Computadoras.push(Computadora);
    }

    MostrarComputadora(){
        let pcArmada = '';
        for(let pc of this._Computadoras){
            pcArmada += `\n${pc}`;
        }
        console.log(`Id Orden: ${this.IdOrden}
                     ${pcArmada}`);
    }

}

let Monitor1 = new Monitor('HP','15');

let Raton1 = new Raton('USB','Touch');

let Teclado1 = new Teclado('Blutu','Mice');

let Computadora1 = new Computadora('Dell',Monitor1,Teclado1,Raton1);

//console.log(Computadora1.toString());

let Monitor2 = new Monitor('Dell','14');

let Raton2 = new Raton('Cable','Moes');

let Teclado2 = new Teclado('USB','HP');

let Computadora2 = new Computadora('HP',Monitor2,Teclado2,Raton2);

//console.log(Computadora2.toString());

let Pc = new Orden();

Pc.AgregarComputadora(Computadora1);


Pc.AgregarComputadora(Computadora2);

Pc.MostrarComputadora();

let Pc2 = new Orden();

Pc2.AgregarComputadora(Computadora2);
Pc2.AgregarComputadora(Computadora1);

Pc2.MostrarComputadora()








