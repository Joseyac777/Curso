const PersonasCine = [
    new Cine('Adolfo Yac',456123789,25,'SalaC'),
    new Cine('Jose Yac',456123789,21,'SalaC')
]

const PersonasRestaurante = [
    new restaurante('Alfonso hernandez',321456987,30,'Mesa3')
]

const PersonasGym = [
    new Gym('Brian lopez',654789321,30,'Pierna')
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
        <div class="contenedor_Restaurante">
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
        </div>   
        
    `;
    document.getElementById('forma').innerHTML = cabecero;
}

let CargarRestaurante = ()=>{
    CargarMenu();
    let cargarMenuRes = `
        <div class="contenedor_Restaurante">
                <div class="titulo">
                    <h1 class="titulo">Restaurante</h1>
                </div>
                <div class="agregar">
                    <div class="agregar_contenedor">
                        <h2 class="titulo">El restaurante por momentos de pandemia solo atiende a 20 personas por hora</h2>
                        <select class="agregar_tipo" id="tipo">
                            <option value="Mesa1">MESA 1</option>
                            <option value="Mesa2">MESA 2</option>
                            <OPtion value="Mesa3">MESA 3</OPtion>
                            <option value="Mesa4">MESA 4</option>
                            <OPtion value="Mesa5">MESA 5</OPtion>
                        </select>
                        <input type="text" class="agregar_descripcion" placeholder="NOMBRE & APELLIDO" id="nombreRes">
                        <input type="number" class="agregar_valor" placeholder="DPI" id="dpiRes" step="any">
                        <input type="number" class="agregar_temp" placeholder="TEMP" id="valorRes" step="any">
                        <button class="agregar_btn" onclick="agregarDatoRes()">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </button>
                    </div>
                    <h2 class='ingreso_titulo'>Ingresos</h2><br>
                        <h3 class="tituloNombre">Nombre</h3>
                        <h3 class="tituloDpi">DPI</h3>
                        <h3 class="tituloSala">Mesa</h3>
                        <h3 class="tituloTemp">Temp</h3>
                </div>
                <div class="personasCine">
                    <h1 id='nan'></h1>
                </div>
            </div>
    `;
    document.getElementById('forma').innerHTML = cargarMenuRes;
}

let cargarGym = ()=>{
    CargarMenu();
    let html = `
        <div class="contenedor_Restaurante">
                <div class="titulo">
                    <h1 class="titulo">GYM</h1>
                </div>
                <div class="agregar">
                    <div class="agregar_contenedor">
                        <h2 class="titulo">El gym solo esta haceptando a 5 personas por 3 horas</h2>
                        <select class="agregar_tipo" id="tipo">
                            <option disabled selected>RUTINA</option>
                            <option value="Pierna">PIERNA (7:00 AM A 8:00 AM)</option>
                            <OPtion value="Abdomen">ABDOMEN (10:00 am a 11:00 am)</OPtion>
                            <option value="Brazo">BRAZO (13:00 pm a 14:00 pm)</option>
                            <OPtion value="Pectoral">PECTORALES (16:00 pm a 17:00 pm)</OPtion>
                            <OPtion value="Espalda">ESPALDA (19:00 pm a 20:00 pm)</OPtion>
                        </select>
                        <input type="text" class="agregar_descripcion" placeholder="NOMBRE & APELLIDO" id="nombreGym">
                        <input type="number" class="agregar_valor" placeholder="DPI" id="dpiGym" step="any">
                        <input type="number" class="agregar_temp" placeholder="TEMP" id="valorGym" step="any">
                        <button class="agregar_btn" onclick="agregarDatoGym()">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </button>
                    </div>
                    <h2 class='ingreso_titulo'>Ingresos</h2><br>
                        <h3 class="tituloNombre">Nombre</h3>
                        <h3 class="tituloDpi">DPI</h3>
                        <h3 class="tituloSala">RUTINA</h3>
                        <h3 class="tituloTemp">Temp</h3>
                </div>
                <div class="personasCine">
                    <h3 id="nen"></h3>
                    <h1 id='nan'></h1>
                </div>
            </div>
    `;

    document.getElementById('forma').innerHTML = html;
}

let idPersonaCine = ()=>{
    let id = '';
    for(let value of PersonasCine){
        id = value.idPersonas
    }

    document.getElementById('nan').innerHTML = id;
}
//Cargar y mostrar datos de personas Cine 
let cargarPersonas = ()=>{
    let personas = '';

    for(let recorrer of PersonasCine){
        personas += crearPersonaHtml(recorrer);
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
        idPersonaCine(); 
    }
}
//Termina datos de cine

//Cargar y mostrar Datos personas Restaurante 
let idPersonasRes =()=>{
    let id = '';
    for(let value of PersonasRestaurante){
        id = value.idMesa
    }

    document.getElementById('nan').innerHTML = id;
}

let CargarPersonasRestaurante = ()=>{
    let personas = '';

    for(let recorre of PersonasRestaurante){
        personas += restauranteHtml(recorre);
    }
    document.getElementById('lista-ingresos').innerHTML = personas
}

let restauranteHtml =(ingreso)=>{
    console.log(ingreso.nombre);
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
                            <div class="elemento_descripcion">${ingreso.nombre}</div>
                                <div class="derecha limpiarEstilos">
                                    <div class="elemento_valor">${ingreso.dpi}</div>
                                </div>
                                <div class="derecha_sala">
                                    <div class="elemento_descripcion">${ingreso.mesa}</div>
                                </div>
                                <div class="derecha_temp">
                                    <div class="elemento_descripcion">${ingreso.temperatura}°</div>
                                </div>
                        </div>
    `;

    return ingresoHTML
}

let agregarDatoRes =()=>{
    let forma = document.getElementById('forma');
    let nombre = forma['nombreRes']
    let dpi = forma['dpiRes'];
    let temp = forma['valorRes'];

    let tipo = forma['tipo']

    if(nombre.value !== '' && dpi.value !=='' && temp.value !==''){
        PersonasRestaurante.push(new restaurante(nombre.value,+dpi.value,temp.value,tipo.value))
        CargarPersonasRestaurante();
        idPersonasRes();
    }
}

//Terminacion de agregacion de Restaurante
let idPersonasGym =()=>{
    let id = '';
    for(let value of PersonasGym){
        id = value.PersonasGym
    }
    console.log(id);
    document.getElementById('nan').innerHTML = id;
}

let CargarPersonasGym = ()=>{
    let personas = '';

    for(let recorre of PersonasGym){
        personas += gymHtml(recorre);
    }
    document.getElementById('lista-ingresos').innerHTML = personas
}


let gymHtml = (value)=>{
    let html = `
        <div class="elemento limpiarEstilos">
                        <div class="elemento_descripcion">${value.nombre}</div>
                            <div class="derecha limpiarEstilos">
                                <div class="elemento_valor">${value.dpi}</div>
                            </div>
                            <div class="derecha_sala">
                                <div class="elemento_descripcion">${value.rutina}</div>
                            </div>
                            <div class="derecha_temp">
                                <div class="elemento_descripcion">${value.temperatura}°</div>
                            </div>
                    </div>
    `;

    return html
}
let contador = 0;
let agregarDatoGym =()=>{
    let forma = document.getElementById('forma');
    let nombre = forma['nombreGym']
    let dpi = forma['dpiGym'];
    let temp = forma['valorGym'];

    let tipo = forma['tipo']

    if(contador < 5){
        if(nombre.value !== '' && dpi.value !=='' && temp.value !==''){
            PersonasGym.push(new Gym(nombre.value,+dpi.value,temp.value,tipo.value))
            CargarPersonasGym();
            idPersonasGym();
            
        }
        contador++;
        console.log(`Conta ingre ${contador}`);
    }

}