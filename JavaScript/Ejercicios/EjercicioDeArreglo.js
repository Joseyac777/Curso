//Combinar 2 array y ordenarlos 

//Creamos la funcion para realizar el algoritmo
function Orden(arr1, arr2){
    let UnirArray = []; //Barriable que va unir los 2 array 

    while(arr1.length && arr2.length){ // Hasta que los array queden vacios 
        let RemoverElemento;    //Variable para alistar elementos para moverlos al array de unir 

        if(arr1[0] < arr2[0]){  //Validar si el dato de arr1 es menor al de arr2 mediante el indice
            RemoverElemento = arr1.shift(); //Funcion shift Remueve el dato [0] del array y lo almacena en Remov
        }else{
            RemoverElemento = arr2.shift(); //Funcion shift Remueve el dato [0] del array y lo almacena en Remov
        }
        UnirArray.push(RemoverElemento); //Se va agregando los datos removidos en el nuevo array 
    }

    UnirArray = UnirArray.concat(arr1).concat(arr2); // Unimos los 2 array mediante concat cuando uno quede vacio
    return UnirArray;       //Mostramos el array 
}
//Mostrar y pruebas del algoritmo
//Declaramos los array que se van a utilizar 
const arr1 = [1,2,3,4,10,21];

const arr2 = [3,5,7,8,9,20];

let arreglo = Orden(arr1,arr2);

console.log(arreglo);



