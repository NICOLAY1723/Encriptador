// Elementos Principales
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const respuesta = document.querySelector(".evaluar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");

// Función de Encriptación
function encriptar(texto) {
    return texto.replaceAll('e', 'enter')
                .replaceAll('i', 'imes')
                .replaceAll('a', 'ai')
                .replaceAll('o', 'ober')
                .replaceAll('u', 'ufat');
}

// Función de Desencriptación
function desencriptar(texto) {
    return texto.replaceAll('enter', 'e')
                .replaceAll('imes', 'i')
                .replaceAll('ai', 'a')
                .replaceAll('ober', 'o')
                .replaceAll('ufat', 'u');
}

// Evento de Encriptar
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    const textoEncriptado = encriptar(txtEncriptar.value);
    respuesta.value = textoEncriptado;
    document.body.style.backgroundImage = "url('./imagenes/OIG4.jpeg')";
});

// Evento de Desencriptar
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    const textoDesencriptado = desencriptar(txtEncriptar.value);
    respuesta.value = textoDesencriptado;
    document.body.style.backgroundImage = "url('./imagenes/azul.png')";
});

// Evento de Copiar
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    if (respuesta.value !== "") {
        respuesta.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    }
});
