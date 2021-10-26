class Cine extends Persona{
    static contadorAsiento = 0;
    static personas = 0;
    static idSalaA = 0;
    static idSalaB = 0;
    static idSalaC = 0;
    constructor(nombre,dpi,temperatura,sala){
        super(nombre,dpi,temperatura);
        this._sala = sala;
        this._idAsiento = Cine.contadorAsiento +=5;
        this._idPersona = ++Cine.personas;

        if(sala === 'SalaA'){
            this._idSalaA = ++Cine.idSalaA;
        }else if(sala === 'SalaB'){
            this._idSalaB = ++Cine.idSalaB;
        }else if(sala === 'SalaC'){
            this._idSalaC = ++Cine.idSalaC;
        }
    }

    get sala() {
        return this._sala;
    }

    set sala(value) {
        this._sala = value;
    }

    get idAsiento() {
        return this._idAsiento;
    }

    get idPersonas() {
        return this._idPersona;
    }

    get idSalaA() {
        return this._idSalaA;
    }

    get idSalaB() {
        return this._idSalaB;
    }
    get idSalaC() {
        return this._idSalaC;
    }
}
