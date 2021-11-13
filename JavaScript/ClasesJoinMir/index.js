//Obtiene lo seleccionado por el usuario 
// setTimeout(()=>{
    //     console.log(document.getSelection().toString());
    // },4000)

//llama a todos los selectores .card que son clases y los muestra en consola
//document.querySelectorAll(".card").forEach(value => console.log(value))


//modificar el valor de un atributo 
document.documentElement.lang = "En";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang","Es-Gt")
console.log(document.documentElement.lang);

