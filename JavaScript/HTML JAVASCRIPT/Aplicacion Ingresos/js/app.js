const ingresos =[
    new Ingreso('salario',2000),
    new Ingreso('Venta',1500),
    new Ingreso('Frelancer',800)
]

const egresos =[
    new Egreso('Renta',500),
    new Egreso('Ropa',1200)
]

let cargarCabecero = ()=>{
    let presupuesto = totalIngreso() - totalEgresos();
    let porcentaje = totalEgresos()/totalIngreso();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto) ;
    document.getElementById('porcentaje').innerHTML = formatoporcentaje(porcentaje);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngreso());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngreso();
    cargarEgresos();
}

let totalIngreso = ()=>{
    let total = 0;

    for(let recorrer of ingresos){
        total += recorrer.valor;
    }
    return total;
}

let totalEgresos = ()=>{
    let total = 0;

    for(let rec of egresos){
        total += rec.valor;
    }
    return total
}

//Dar formato a nuestro archivo con js
let formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-Gt',{style:'currency', currency:'GTQ', minimumFractionDigits:'2'});
}

let formatoporcentaje = (value)=>{
    return value.toLocaleString('en-Us',{style:'percent', minimumFractionDigits:2})
}
//Funcion para los ingresos
let cargarIngreso = ()=>{
    let ingresosHtml = '';

    for(let recorre of ingresos){
        ingresosHtml += crearIngresoHtml(recorre);
    }
    document.getElementById('lista-ingresos').innerHTML =ingresosHtml;
}

let crearIngresoHtml = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class='elemento_eliminar--btn'>
                                <ion-icon name="trash"
                                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return ingresoHTML;
}

let eliminarIngreso = (id)=>{
    let eliminar = ingresos.findIndex(ingreso => ingreso.id === id)

    ingresos.splice(eliminar,1);

    cargarCabecero();
    cargarIngreso();
} 


//Funcion para Egresos
let cargarEgresos = ()=>{
    let egresosHtml = '';

    for(let recorre of egresos){
        egresosHtml += crearEgresosHtml(recorre);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHtml;
}

let crearEgresosHtml = (value)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${value.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(value.valor)}</div>
                        <div class="elemento_porcentaje">21%</div>
                        <div class="elemento_eliminar">
                            <button class='elemento_eliminar--btn'>
                                <ion-icon name="trash"
                                onclick='eliminarEngreso(${value.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}

let eliminarEngreso = (id)=>{
    let eliminar = egresos.findIndex((egreso)=> {egreso.id === id});

    egresos.splice(eliminar,1)

    cargarCabecero();
    cargarEgresos();
}

let agregarDato = ()=>{
    let forma = document.getElementById('forma')
    let tipo = forma['tipo']
    let descripcion = forma['descripcion']
    let valor = forma['valor']

    if(descripcion.value !== '' && valor.value !==''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value))
            cargarCabecero();
            cargarIngreso();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value,Number(valor.value)))
            cargarCabecero();
            cargarEgresos();
        }
    }
}
