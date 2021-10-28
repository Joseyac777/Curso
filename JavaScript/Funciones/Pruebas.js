let Display = (value)=>{
    console.log(`La suma es: ${value}`);
}

let Calc = (dat1,dat2)=>{
    let sum = dat1 + dat2;
    return sum
}

let myPromise = new Promise((myResolve, myReject)=>{
    let x = Calc(10,11)
    
    if(x % 2 == 0){
        myResolve('PAR');
    }else{
        myReject('IMPAR');
    }
})

myPromise.then(
    (resolve) =>{
        Display(resolve)
    }
    ).catch(
    (err) =>{
        Display(err)
    }
);

class persona{
    static contador = 0;
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
}


let dato = [
    new persona('adolfo',21),
    new persona('jose',18),
    new persona('alex',18)
]

dato.map(value => Saludar(value))

function Saludar(dato){
    console.log(dato.edad == 18);
    if(dato.edad == 18){
        console.log(`${dato.nombre}`);
    }
}