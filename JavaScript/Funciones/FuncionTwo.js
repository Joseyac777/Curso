let resultado = SumarTodo(5,7,2,6,1,3,9)

function SumarTodo(){
    let suma = 0;

    for(let i=0; i<arguments.length; i++){
        suma += arguments[i]; //* Suma = suma + arguments[i]
    }
    return suma;
}

console.log(resultado)