db.getCollection("Segundo").find({}).pretty()

//Agrega genero mediante set asi mismo se puede actualizar
db.Segundo.update({"Nombre":"Adolfo"},{"$set":{"Genero":"Masculino"}})