const mostrarReloj = ()=>{
    let fecha = new Date();
    let hora = formato(fecha.getHours());
    let minutos = formato(fecha.getMinutes());
    let segundos = formato(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    let diaSeman = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    
    let FechaTexto = `${diaSeman},${dia} ${mes}`

    document.getElementById('fecha').innerHTML = FechaTexto

    document.getElementById('contenedor').classList.toggle('animar')
    //Classlist llama todo estilo que se le este haciendo a ese id y toggle
    //se llama una ves la otra no como apagador 
}

const formato = (hora)=>{
    if (hora < 10){
        hora = '0' + hora;
    }
    return hora
}

setInterval(mostrarReloj,1000);