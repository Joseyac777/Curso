db.Estudiantes.insertOne({Nombre:"Jose",Apellido:"Yac",Edad:21})

db.Estudiantes.find({})

//Creamos var para agregar los datos a un objeto dentro con el nombre datos
var dato = db.Estudiantes.findOne({Nombre:"Jose"})
dato.datos = {Nombre:dato.Nombre,Apellido:dato.Apellido}

db.Estudiantes.update({Nombre:"Jose"},dato)

//Borramos el documento 
db.Estudiantes.remove({Nombre:"Jose"})


//Creamos documento mas ordenado
db.Estudiantes.insertOne({Datos:{Nombre:"Jose",Apellido:"Yac"},Edad:21})

db.Estudiantes.update({Nombre:"Jose"}, {$set:{"Genero":"Masculino"}})

db.Estudiantes.find({})

db.webs.find({Nombre:"Twitter"})