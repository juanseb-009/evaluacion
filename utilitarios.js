function recuperaraTexto(idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

function recuperarInt(idComponente) {
    let valorCaja = recuperaraTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
function recuperarFloat(idComponente) {
    let valorCaja = recuperaraTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
function mostrarTexto(idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
function mostrarTextoEnCaja(idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

function mostrarImagen(idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;

}

// VALIDACIONES

function validarCampoObligatorio(valor) {
    if (valor.trim() === "") {
        return false;
    }
    return true;
}


function validarNumero(valor) {
    let numero = Number(valor);

    if (!Number.isFinite(numero)) {
        return false;
    }

    return true;
}


function validarRango(valor, minimo, maximo) {
    let numero = Number(valor);

    if (numero < minimo || numero > maximo) {
        return false;
    }

    return true;
}


function validarEntero(valor) {
    let numero = Number(valor);

    if (!Number.isInteger(numero)) {
        return false;
    }

    return true;
}


function validarCorreo(valor) {
    if (valor.includes("@") && valor.includes(".")) {
        return true;
    }

    return false;
}
