
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 3);

while(i < 10){
    console.log(i);
    i++
}

for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}

for(let p=0; p <=10; p++){
    if(p %2 !== 0 ){
        continue; //* Siguiente interaccion
    }else{
        console.log(p);
    }
}

console.log('Fin de ciclo');