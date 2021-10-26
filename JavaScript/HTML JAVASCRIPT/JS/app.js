
let operador = document.getElementById('operador');

let eligio = '';

operador.addEventListener('change',seleccion);

function seleccion(){
    var selectedOption = this.options[operador.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
    eligio = selectedOption.value;
}

function resulta(){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    
    console.log(eligio);
    if(eligio == 'sumar'){
        console.log('entro a suma');

        let resultadoSuma = parseInt(operandoA.value) + parseInt(operandoB.value);
        document.getElementById('resultado').innerHTML = `Resultado de suma: ${resultadoSuma}`
    }else if(eligio == 'multiplicar'){
        console.log('entro a multiplicar');

        let resultadoMulti = parseInt(operandoA.value) * parseInt(operandoB.value);
        document.getElementById('resultado').innerHTML = `Resultado de multiplicar: ${resultadoMulti}`
    }else if(eligio == 'resta'){
        console.log('entro a resta');

        let resultadoResta = parseInt(operandoA.value) - parseInt(operandoB.value);
        document.getElementById('resultado').innerHTML = `Resultado de multiplicar: ${resultadoResta}`
    }
}
