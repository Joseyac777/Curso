print("Saludos desde Python") 

fecha = '05/04/2021/2022'        #input("Introduce la fecha de tu nacimiento en formato día/mes/año: ")
dia = fecha[:fecha.find('/')]

mesaño = fecha[fecha.find('/')+1:]
mes = mesaño[:mesaño.find('/')]

newYear = mesaño[mesaño.find('/')+1:]
año = newYear[:newYear.find('/')]
YearNew =newYear[newYear.find('/')+1:]
#Se tendra que ir creando nuevas variables para almacenar el resde 
#Despues de '/' el +1: da al siguiente despues de '/' 
#En el [los dos puntos es el nuevo dato a almacenar ] 

print('Día', dia)
print('Mes', mes)
print('Año', año)
print('New Year', YearNew)