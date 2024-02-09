function encriptarTexto() {
    const mensaje = document.getElementById('cajaEntrada').value
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    document.getElementById('cajaSalida').value = mensaje;
    ocultarImagenYTexto();
}
function desencriptarTexto() {
    const mensajeEncriptado = document.getElementById('cajaEntrada').value
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('cajaSalida').value = mensajeEncriptado;
    ocultarImagenYTexto();
}


  
function limpiarSalida() {
    document.getElementById('cajaSalida').value = '';
    document.getElementById('cajaEntrada').value = '';
    ocultarImagenYTexto();
}
  
function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById("cajaSalida").value);
    limpiarSalida();
}
  
function ocultarImagenYTexto() {
    const cajaSalida = document.getElementById('cajaSalida');
    const imagenBuscar = document.getElementById('imagenBuscar');
    const textoPie = document.getElementById('textoPie');
    
    if (cajaSalida.value.trim() !== '') {
        imagenBuscar.style.display = 'none';
        textoPie.style.display = 'none';
    } else {
        imagenBuscar.style.display = 'inline';
        textoPie.style.display = 'inline';
    }
}
