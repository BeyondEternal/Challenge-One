/**
 * 
 * @param {*} string 
 * @returns 
 */


// Algoritmo de encriptación O(n)
// Finalizado
function encriptador(string) {
    let stringEncriptado = '';
    for (let i = 0; i < string.length; i++) {
        // Valindando que solo sean letras
        // FIXED: Error de lógica
        // TODO: Mejorar la validación
        if ((string.charCodeAt(i) < 97 && string.charCodeAt(i) != 32) || (string.charCodeAt(i) > 122 && string.charCodeAt(i) != 32)) {
            return document.getElementById("returnCript").value = "Error: Solo se aceptan letras";
        }
        // Encriptando
        stringEncriptado += string.charAt(i);
        switch (string.charAt(i)) {
            case "a":
                stringEncriptado+= "i"
                break;
            case "e":
                stringEncriptado+= "nter"
                break;
            case "i":
                stringEncriptado+= "mes"
                break;
            case "o":
                stringEncriptado+= "ber"
                break;
            case "u":
                stringEncriptado+= "fat"
                break;
            default:
                break;
        }
    }
    document.getElementById("encriptar").value = "";
    return document.getElementById("returnCript").value = stringEncriptado;
}


    
function desencriptador(string) {
    let stringDesencriptado = '';
    // Valindando que solo sean letras
    for (let i = 0; i < string.length; i++) {
        if ((string.charCodeAt(i) < 97 && string.charCodeAt(i) != 32) || (string.charCodeAt(i) > 122 && string.charCodeAt(i) != 32)) {
            return document.getElementById("returnCript").value = "Error: Solo se aceptan letras";
        }
        // Desencriptando
        switch (string.charAt(i)) {
            case "a":
                stringDesencriptado+= string.charAt(i);
                i++;
                break;
            case "e":
                stringDesencriptado+= "e"
                i+=4;	
                break;
            case "i":
                stringDesencriptado+= "i"
                i+=3;
                break;
            case "o":
                stringDesencriptado+= "o"
                i+=3;
                break;
            case "u":
                stringDesencriptado+= "u"
                i+=3;
                break;
            default:
                stringDesencriptado += string.charAt(i);
                break;
        }
    }
    document.getElementById("encriptar").value = "";
    return document.getElementById("returnCript").value = stringDesencriptado;
}

function copiar(){
    let copyText = document.getElementById("returnCript");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
}

// Path: index.html
// Logica de la pagina