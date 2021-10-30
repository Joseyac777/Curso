let CargarListado =()=>{
    CargarMenu()
    console.log(`entro a listado`);
    let Listado = `
    <div class="titulo">
        <h1 class="titulo">Listado para centro de salud</h1>
        </div>
        <div class="agregar">
            <div class="agregar_contenedor">
                <h2 class="titulo">Encontrara la informacion que desee</h2>
                <select class="agregar_tipoSalud" id="tipo">
                    <option disabled selected >Informacion De.</option>
                    <option value="Cine">CINE</option>
                    <option value="Restaurante">RESTAURANTE</option>
                    <OPtion value="Gym">GYM</OPtion>
                </select>
                <button class="btnN" onclick="MostrarInfoSeleccionada()">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </button>
            </div>
    </div>

    `;

    document.getElementById('forma').innerHTML = Listado
}

let MostrarInfoSeleccionada =()=>{
    let info = `
        <form id="formaCina" onsubmit="return false">
            <h1 style="text-align: center;">Datos Cine</h1>
                <select id="tipoVerCine" class="agregar_tipoSalud">
                    <option disabled selected>Ver por</option>
                    <option value="sala">Sala</option>
                    <option value="nombre">Nombre</option>
                    <option value="dpi">Dpi</option>
                </select>
                <div id="premioNombre" class="verdatos">
                    <input type="text" class="stnombre" id="verNombre" placeholder="NOMBRE">   
                </div>
                <div id="premioDpi" class="verdatos1">
                    <input type="text" class="stnombre" id="verDpi" placeholder="DPI">
                </div>
                <div id="premioSala" class="verdatos2">
                    <input type="text" class="stnombre" id="verSala" placeholder="SALA">
                </div>
                <button class="btn" onclick="seleciono()">
                   <ion-icon name="checkmark-circle"></ion-icon>
                </button>
                <div id="botonS" class="botonS">
                    <button class="btn2" onclick="mostrarDatosCine()">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </button>
                </div>
                <h2 class='ingreso_titulo'>Datos</h2><br>
                    <h3 class="tituloNombre">Nombre</h3>
                    <h3 class="tituloDpi">DPI</h3>
                    <h3 class="tituloAsiento">#Asiento</h3>
                <div class="ingreso">
                    <div id='mostrarLista'>

                    </div>
                </div>
        </form>
    `;

    let seleccion = document.getElementById('tipo');
    if(seleccion.value == 'Cine'){
        document.getElementById('informacionCineVer').innerHTML = info
    }
}

let operador = document.getElementById('tipoVerCine');



let seleciono =()=>{
    let eligio = document.getElementById('tipoVerCine');   
    if(eligio.value == 'nombre'){
        console.log(`entro a nombre`);
        document.getElementById('premioNombre').style.display = 'block'
        document.getElementById('premioDpi').style.display = 'none'
        document.getElementById('premioSala').style.display = 'none'
        
    }else if(eligio.value == 'dpi'){
        document.getElementById('premioDpi').style.display = 'block'
        document.getElementById('premioNombre').style.display = 'none'
        document.getElementById('premioSala').style.display = 'none'
    }else if(eligio.value == 'sala'){
        document.getElementById('premioSala').style.display = 'block'
        document.getElementById('premioDpi').style.display = 'none'
        document.getElementById('premioNombre').style.display = 'none'
    }
    document.getElementById('botonS').style.display = 'block'
}

let cargarDatos =()=>{
    let datos = '';

    for(let recorre of PersonasCine){
        datos += crearDatosHtml(recorre)
    }

    document.getElementById('mostrarLista').innerHTML = datos;
}

let crearDatosHtml = (ingreso)=>{
    let formaCine = document.getElementById('formaCina');
    let sala = formaCine['verSala'];

    if(sala.value == ingreso.sala ){
        console.log(ingreso.nombre);
        let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.nombre}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${ingreso.dpi}</div>
            </div>
            <div class="derecha_NAsiento">
                <div class="elemento_descripcion">${ingreso.idAsiento}</div>
            </div>
        </div>
        `;
        return ingresoHTML
    }
}

let mostrarDatosCine = ()=>{
    cargarDatos();
}

