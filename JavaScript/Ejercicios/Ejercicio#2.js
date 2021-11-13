//Ejercicio mostrar personas mayores de 18 anios de un array con objetos

//Creamos la Database
let personas = [
    {Id:1,Nombre:'Jose',Apellido:'Yac',edad:21,Sangre:'A'},//0
    {Id:2,Nombre:'Alex',Apellido:'Yac',edad:15,Sangre:'B'},//1
    {Id:3,Nombre:'Adolfo',Apellido:'flit',edad:11,Sangre:'A'},//2
    {Id:4,Nombre:'Fernando',Apellido:'Sanchez',edad:18,Sangre:'A'},//3
    {Id:5,Nombre:'Julia',Apellido:'Sanchez',edad:25,Sangre:'O'},//4
    {Id:6,Nombre:'Maria',Apellido:'Perez',edad:30,Sangre:'B'}//5
];

//Funcion que nos mostrara y contara mayores
function ContarMayores(obj){
    let i = 0; // contador
    let retornar = ''; // Donde guardaremos y retornaremos en return

    for(let rec of obj){ // recorremos el arr que nos establescan o document
        if(rec.edad > 18){ // Verificamos Si es mayor
            retornar += `Id:${rec.Id}=${rec.Nombre} ` // Agregamos los nombres y su id a retornar
            i++; // Contamos los mayores
        }
    }  
    //Retornamos para mostrar en consola
    return `Personas mayores ${retornar}  Total:${i}`
}

//Llamamos ala funcion con el arreglo que deseamos ver los mayores
console.log(ContarMayores(personas));

