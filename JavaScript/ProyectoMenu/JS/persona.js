class Persona{
    static idPersona = 0;
    constructor(nombre,dpi,temp){
        this._nombre = nombre;
        this._dpi = dpi;
        this._temperatura = temp;
        this._idPersona = ++Persona.idPersona;
    }

    get idPersonaE() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get dpi() {
        return this._dpi;
    }
    set dpi(value) {
        this._dpi = value;
    }

    get temperatura() {
        return this._temperatura;
    }

    set temperatura(value) {
        this._temperatura = value;
    }
}