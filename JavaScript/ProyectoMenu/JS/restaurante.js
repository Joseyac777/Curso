class restaurante extends Persona{
    static numeroMesa = 0;

    constructor(nombre,dpi,temp,mesa){
        super(nombre,dpi,temp);
        this._mesa = mesa;
        this._idMesa = ++restaurante.numeroMesa; 
    }

    get idMesa() {
        return this._idMesa;
    }

    get mesa() {
        return this._mesa;
    }

    set mesa(value) {
        this._idMesa = value;
    }
}