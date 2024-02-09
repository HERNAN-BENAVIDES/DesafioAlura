function encriptarTexto() {
    const mensaje = document.getElementById('cajaEntrada').value
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

    document.getElementById('cajaSalida').value = mensaje;
}
function desencriptarTexto() {
    const mensajeEncriptado = document.getElementById('cajaEntrada').value
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('cajaSalida').value = mensajeEncriptado;
}


  
function limpiarSalida() {
    document.getElementById('cajaSalida').value = '';
    document.getElementById('cajaEntrada').value = '';
}
  
function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById("cajaSalida").value);
    limpiarSalida();
}
  