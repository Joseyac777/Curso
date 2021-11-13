var dato = db.Segundo.findOne({"Nombre":"Juan"})
dato.Nombre = "Jose"
db.Segundo.save(dato) 

db.Segundo.find({})

//En la consola agrega un objeto al documento 
var nuevo = db.Segundo.findOne({"Nombre":"Juan"})
nuevo.Estudio = {"Noveno Grado": true, "Bach":true}
db.Segundo.update({Nombre:"Juan"},nuevo)

//Cargamos datos ala propiedad que se asigne
db.Segundo.update({"Nombre":"Juan"}, {$inc:{"Edad":21}})

//Agrega a todos los datos con el tipo juan cantidad
db.Segundo.update({Nombre:"Juan"},{$set:{cantidad:10}},{multi:true})

db.Segundo.update({"Nombre":"Adolfo"}, {"$set":{"Pais":"Guatemala"}})

db.Segundo.drop()


db.webs.find({})

//Nodifica una propiedad de un documento
var nuevo = db.webs.findOne({Nombre:"Facebook"})
nuevo.Nombre = "Tesla"
db.webs.update({Nombre:"Facebook"},nuevo)


//Agrega una nuevo propiedad de un documento 
db.webs.update({Nombre:"Tesla"}, {$set:{Color:"Gris"}})