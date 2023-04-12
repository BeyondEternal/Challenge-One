function encriptador() {
    mensaje = document.getElementById("encriptar").value;
    const mensajeEncriptado = mensaje
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector(".init").style.display = "none";
    document.querySelector(".btnCopiar").style.display = "flex";
    document.getElementById("encriptar").value = "";
    return document.getElementById("returnCript").value = mensajeEncriptado + "\r\n";
}

function desencriptador() {
    mensaje = document.getElementById("encriptar").value;
    const mensajeDesencriptado = mensaje
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        document.getElementById("encriptar").value = "";
    return document.getElementById("returnCript").value = mensajeDesencriptado + "\r\n";
}

function copiar(){
    let copyText = document.getElementById("returnCript");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
}
