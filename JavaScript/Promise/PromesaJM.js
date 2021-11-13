function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject(`Error el dato "${value}" ingresado no es un numero`);
    }
    return new Promise((result,error)=>{
        setTimeout(()=>{
            result({
                value,
                resolver: value*value
            }
            )
        },0 | Math.random()*100)
    })
}

// cuadradoPromise(0).then(
//     (obj)=>{
//         console.log(`Inicia promesa`);
//         console.log(`Promise: ${obj.value}, ${obj.resolver}`);
//         return cuadradoPromise(1);
//     }
// ).then(//Este .then es del return de cuadradoPromise(1);
//     (obj)=>{
//         console.log(`Inicia promesa`);
//         console.log(`Promise: ${obj.value}, ${obj.resolver}`);
//         return cuadradoPromise(2);
//     }
// ).then(//Este .then es del return de cuadradoPromise(2);
//     (obj)=>{
//         console.log(`Inicia promesa`);
//         console.log(`Promise: ${obj.value}, ${obj.resolver}`);
//         return cuadradoPromise(3);
//     }
// ).then(//Este .then es del return de cuadradoPromise(3);
//     (obj)=>{
//         console.log(`Inicia promesa`);
//         console.log(`Promise: ${obj.value}, ${obj.resolver}`);
//     }
// ).catch(
//     err => console.error(err)
// )

// async function funcionAsyncrona()
const funcionAsyncrona = async ()=>{
    try {
        let obj = await cuadradoPromise(1);
        console.log(`Async fun: ${obj.value}, ${obj.resolver}`);

        obj = await cuadradoPromise(2);
        console.log(`Async fun: ${obj.value}, ${obj.resolver}`);

        obj = await cuadradoPromise(3);
        console.log(`Async fun: ${obj.value}, ${obj.resolver}`);
    } catch (error) {
        console.error(error)
    }
}

funcionAsyncrona()

