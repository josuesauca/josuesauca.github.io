document.addEventListener("DOMContentLoaded", function() {
    verificarTexto(); 
});

/**
 * En caso de que el text area de la segunda columna no tenga texto
 * va a aparecer una imagen que diga que ingrese el texto y el boton
 * va a desaparecer, si ingresa texto ya va a aparecer el textares 
 * y el boton de copiar texto
 */
function verificarTexto() {
    var textarea = document.getElementById("texto");
    var contenedorTexto = document.getElementById("contenedorTexto");
    var imagenPersonalizada = "<img src='imagen.jpg' alt='Imagen personalizada' style='width: 500px; height: auto;'>"; 

    if (textarea.value.trim() === "") {
        contenedorTexto.innerHTML = imagenPersonalizada;
        botonCopiar.style.display = "none";
    } else {
        contenedorTexto.innerHTML = "<textarea id='resultado' style='width: 400px; height: 400px;'readonly> </textarea>";
        botonCopiar.style.display = "block";
    }
}

//Cada vez que tipee una tecla, va a verificar si ingresa un numero
// en caso de hacerlo le va a salir un mensaje de que solo ingrese
// letras minusculas
function validarMinusculas(input) {
    var texto = input.value;
    var soloMinusculas = /^[a-z\s]*$/; // Expresión regular para permitir solo letras minúsculas.
    verificarTexto();
    if (!soloMinusculas.test(texto)) { 
        input.value = texto.replace(/[^a-z\s]/g, '');
        alert("Por favor, ingresa solo letras minúsculas");
    }
}

//Metodo para encriptar el texto 
function encriptar() {
    var textoIngresado = document.getElementById("texto").value;
    var arrayCaracteres = textoIngresado.split("");

    for (let i = 0; i < arrayCaracteres.length; i++) {
        var aux = arrayCaracteres[i];
        
        if(aux == "e"){
            arrayCaracteres[i] = "enter";
        }
        if(aux == "a"){
            arrayCaracteres[i] = "ai";
        }
        if(aux == "i"){
            arrayCaracteres[i] = "imes";
        }
        if(aux == "o"){
            arrayCaracteres[i] = "ober";
        }
        if(aux == "u"){
            arrayCaracteres[i] = "ufat";
        }
    }
    var aux = arrayCaracteres.join("");
    document.getElementById("resultado").value = aux;
}

//Metodo para desencriptar
function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value;
    textoEncriptado = textoEncriptado.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    document.getElementById("resultado").value = textoEncriptado;
}

//Metodo para copiar texto a portapapeles 
function copiar() {
    var copyText = document.getElementById("resultado");
    copyText.select();
    document.execCommand("copy");
}
