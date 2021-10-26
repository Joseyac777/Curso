const PersonasCine = [
    new Cine('Adolfo Yac',456123789,25,'SalaA'),
    new Cine('Alexa Yac',456123789,25,'SalaC'),
    new Cine('Jose Yac',456123789,21,'SalaC')
]

let vaciar = ()=>{
    let vacio = ''
    document.getElementById('menu').innerHTML = vacio;
}

let CargarMenu = ()=>{
    let menuBacio =`
    <form id="forma" onsubmit="return false">
            
    </form>
    
    <div class="agregar_contenedor">
        <div class="ingreso">
            <div id='lista-ingresos'>
                
            </div>
        </div>            
    </div>
    <div id="VerCineinfo" class="Cineinfo">
        <div id="informacionCineVer" class="datosCine">
        </div>
    </div>
    `;
    document.getElementById('menu').innerHTML = menuBacio;
}


let CargarCine = ()=>{
    CargarMenu();
    let cabecero = `
        <div class="titulo">
            <h1 class="titulo">Cine</h1>
        </div>
        <div class="agregar">
            <div class="agregar_contenedor">
                <h2 class="titulo">El cine por momentos de pandemia solo cuenta con 20 asientos por sala</h2>
                <select class="agregar_tipo" id="tipo">
                    <option value="SalaA">SALA A</option>
                    <option value="SalaB">SALA B</option>
                    <OPtion value="SalaC">SALA C</OPtion>
                </select>
                <input type="text" class="agregar_descripcion" placeholder="NOMBRE & APELLIDO" id="nombre">
                <input type="number" class="agregar_valor" placeholder="DPI" id="dpi" step="any">
                <input type="number" class="agregar_temp" placeholder="TEMP" id="valor" step="any">
                <button class="agregar_btn" onclick="agregarDato()">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </button>
            </div>
            <h2 class='ingreso_titulo'>Ingresos</h2><br>
                <h3 class="tituloNombre">Nombre</h3>
                <h3 class="tituloDpi">DPI</h3>
                <h3 class="tituloSala">Sala</h3>
                <h3 class="tituloTemp">Temp</h3>
                <h3 class="tituloAsiento">#Asiento</h3>
        </div>
        <div class="personasCine">
                <h1 id='nan'></h1>
            </div> 
        
    `;
    document.getElementById('forma').innerHTML = cabecero;
}

let idPersonaCine = (value)=>{
    document.getElementById('nan').innerHTML = value.idPersonas
}

let cargarPersonas = ()=>{
    let personas = '';

    for(let recorrer of PersonasCine){
        personas += crearPersonaHtml(recorrer)
        idPersonaCine(recorrer)
        verPorSala(recorrer)
    }
    document.getElementById('lista-ingresos').innerHTML = personas
}

let crearPersonaHtml = (ingreso)=>{
    console.log(ingreso.idAsiento);

    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
                        <div class="elemento_descripcion">${ingreso.nombre}</div>
                            <div class="derecha limpiarEstilos">
                                <div class="elemento_valor">${ingreso.dpi}</div>
                            </div>
                            <div class="derecha_sala">
                                <div class="elemento_descripcion">${ingreso.sala}</div>
                            </div>
                            <div class="derecha_temp">
                                <div class="elemento_descripcion">${ingreso.temperatura}°</div>
                            </div>
                            <div class="derecha_aciento">
                                <div class="elemento_descripcion">${ingreso.idAsiento}°</div>
                            </div>
                    </div>
    `;

    return ingresoHTML 
}

let agregarDato = ()=>{
    let forma = document.getElementById('forma');
    let nombre = forma['nombre'];
    let dpi = forma['dpi'];
    let temperatura = forma['valor'];
    let tipo = forma['tipo']

    if(nombre.value !== '' && dpi.value !=='' && temperatura.value !==''){
        PersonasCine.push(new Cine(nombre.value,+dpi.value,+temperatura.value,tipo.value))
        cargarPersonas();    
    }
}


let verPorSala =(ingreeso)=>{
    if(ingreeso.sala == 'SalaB'){
        console.log(ingreeso.nombre);
    }
}
