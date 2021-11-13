use SitiosWeb

db.webs.insertMany([
    {"ID":1,"Nombre":"Youtube","URL":"www.Youtube.com","Vistas":5000},
    {"ID":2,"Nombre":"Facebook","URL":"www.Facebook.com","Vistas":7000},
    {"ID":3,"Nombre":"Twitter","URL":"www.Twitter.com","Vistas":8000},
    {"ID":4,"Nombre":"Discord","URL":"www.Discord.com","Vistas":4000},
])

db.webs.find({})

//Busco por mediante ID
db.webs.findOne({"ID":2})

//Incremento vistas mediante $inc
db.webs.update({"Nombre":"Discord"},{$inc:{"Vistas":2000}})

db.webs.update({Nombre:"Youtube"},{$inc:{Vistas:-2500}})

//Mayor a menor 
db.webs.find().sort({"Vistas":-1})

//Menor a mayor
db.webs.find().sort({"Vistas":1})

