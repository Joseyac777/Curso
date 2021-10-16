'use strict'
//Usando Try Catch con un ejercicio de array de contar numeros repetidos
let Arr = [1,2,2,3,1,6,5,10]

let NewArr = {}

try {
    for(let i=0; i < Arr.length; i++){
        console.log(Arr[i]);
        if(NewArr[Arr[i]] == undefined){
           NewArr[Arr[i]]  = 1;
           
        }else{
           NewArr[Arr[i]]++       
        } 
    }
   
    

 } catch (error) {
     console.log(error);
 }

 console.log(NewArr);

