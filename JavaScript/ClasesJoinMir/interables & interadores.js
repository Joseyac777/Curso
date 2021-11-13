const interables = [1,2,3,4,5,6]


const interador = interables[Symbol.iterator]();

console.log(interables);
console.log(interador);
//console.log(interador.next());

let next = interador.next();
//done es el final de la iterable 
while(!next.done){ // next.done !== true
    console.log(next.value);
    next = interador.next();
}


