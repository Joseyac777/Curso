let valor1 = {'valor 1': 1};
let valor2 = {'valor 2': 2};
let valor3 = {'valor 3': 3};

const ws = new WeakSet();

ws.add(valor1);
ws.add(valor2);


console.log(ws);


const mp = new WeakMap();
let llave1 = {};
let llave2 = {};

mp.set(llave1,1);
mp.set(llave2,2);

console.log(mp);

setInterval(()=> console.log(mp),2000);

setTimeout(()=>{
    llave1 = null;
    llave2 = null;
},5000)