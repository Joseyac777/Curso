use consulta

//insertar en la base de datos documentos 
db.logicoUno.insertMany([
    {Nombre:"Registro1", Cantidad:40},
    {Nombre:"Registro2", Cantidad:20},
    {Nombre:"Registro3", Cantidad:60}
]);

db.logicoUno.find({})

//El gte trae datos mayor o igual al dato establecido
db.logicoUno.find({Cantidad:{$gte:40}})

db.logicoDos.insertMany([
    {Nombre:"Rodrigo", Edad:18},
    {Nombre:"Pedro", Edad:21},
    {Nombre:"Jessica", Edad:15}
]);

//El gt nos devuelve datos mayores alo especificado
db.logicoDos.find({Edad:{$gt:18}})

//El lt nos devuelve datos menores alo especificado
db.logicoDos.find({Edad:{$lt:20}})

//Sentencia que nos edad > 18 && edad < 22
db.logicoDos.find({Edad:{$gt:18, $lt:22}})

use SitiosWeb

db.webs.find({})

//Consulta que nos muestra menor o igual alo especificado
db.webs.find({Vistas:{$lte:5500}})

//Consulta que nos devulve vistas >= 5400 && vistas <= 7500
db.webs.find({Vistas:{$gte:5400, $lte:7500}})