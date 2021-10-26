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
    constructor(nombre){
        this._nombre = nombre;
        this._id = persona.contador +=5;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get id() {
        return this._id;
    }
}

let dato = new persona('jose')

console.log(dato);

let dato2 = new persona('adolfo')

console.log(dato2);