let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton() {

    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    actualizarListaDeGastos();
    limpiarCampos();
}

function actualizarListaDeGastos() {

    let lista = '';
    let total = 0;

    listaNombresGastos.forEach((nombreGasto, posicion) => {
        lista += `<li>${nombreGasto}: Bs. ${Number(listaValoresGastos[posicion]).toFixed(2)}<button id="botonEliminar${posicion}" onclick="eliminarGasto(${posicion})">Eliminar</button></li>`;
        total += Number(listaValoresGastos[posicion]);
    });

    const listaDeGastos = document.getElementById('listaDeGastos');
    listaDeGastos.innerHTML = lista;

    const totalGastos = document.getElementById('totalGastos');
    totalGastos.innerHTML = total.toFixed(2);
}

function limpiarCampos() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(index) {
    
    listaNombresGastos.splice(index,1);
    listaValoresGastos.splice(index,1);

    actualizarListaDeGastos();
}