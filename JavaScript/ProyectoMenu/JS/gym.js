class Gym extends Persona{
    static contador = 0;

    static get MAXOBJS(){
        return 5;
    }
    
    constructor(nombre,dpi,temp,rutina){
        super(nombre,dpi,temp);
        this._rutina = rutina;
        if(Gym.contador < Gym.MAXOBJS){
            this._Personas = ++Gym.contador;
        }else{
            console.log(`Se supero el maximo por las 3 horas`);
        }
    }

    get PersonasGym() {
        if(Gym.contador < 5){
            return this._Personas;
        }else if(Gym.contador == 5){
            return 5
        }
    }

    get rutina() {
        return this._rutina;
    }

    set rutina(value) {
        this._rutina = value;
    }
}