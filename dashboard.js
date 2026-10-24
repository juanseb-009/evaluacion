
/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.

let torneos = [];


/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {

    // 13. Obtener los valores de todos los campos con document.getElementById()
    let torneo = recuperaraTexto("NombreT");
    let categoria = recuperaraTexto("categoria");
    let participantes = recuperaraTexto("Participantes");
    let valorTexto = recuperaraTexto("valordeins");
    let valorInscripcion = recuperarFloat("valordeins");
    let email = recuperaraTexto("email");

    let hayErrores = false;

    mostrarTexto("errorNombre", "");
    mostrarTexto("errorCategoria", "");
    mostrarTexto("errorParticipante", "");
    mostrarTexto("errorValor", "");
    mostrarTexto("errorEmail", "");

    // 14. Validar que el nombre tenga al menos 4 caracteres
    if (!validarCampoObligatorio(torneo) || torneo.trim().length < 4) {
        mostrarTexto("errorNombre", "El nombre debe tener al menos 4 caracteres.");
        hayErrores = true;
    }

    // 15. Validar que se haya seleccionado una categoría
    if (!validarCampoObligatorio(categoria)) {
        mostrarTexto("errorCategoria", "Debes seleccionar una categoría.");
        hayErrores = true;
    }

    // 16. Validar que los participantes sean un entero entre 1 y 100
    if (
        !validarCampoObligatorio(participantes) ||
        !validarNumero(participantes) ||
        !validarEntero(participantes) ||
        !validarRango(participantes, 1, 100)
    ) {
        mostrarTexto("errorParticipante", "Ingresa un número entero entre 1 y 100.");
        hayErrores = true;
    }

    // 17. Validar que el valor de inscripción sea mayor que 0
    // Validar valor de inscripción
    if (
        !validarCampoObligatorio(valorTexto) ||
        !validarNumero(valorTexto) ||
        valorInscripcion <= 0
    ) {
        mostrarTexto("errorValor", "El valor de inscripción debe ser mayor que 0.");
        hayErrores = true;
    }

    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    if (!validarCampoObligatorio(email)) {
        mostrarTexto("errorEmail", "Debes ingresar el email del organizador.");
        hayErrores = true;
    }

    // Si alguna validación falla, mostrar mensajes de error y detener la ejecución
    if (hayErrores) {
        return;
    }

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    let cantidadParticipantes = recuperarInt("Participantes");
    let recaudacion = cantidadParticipantes * valorInscripcion;

    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
    let nuevoTorneo = {
        nombre: torneo,
        categoria: categoria,
        participantes: cantidadParticipantes,
        valorInscripcion: valorInscripcion,
        email: email,
        recaudacion: recaudacion
    };

    // 21. Agregar el objeto al arreglo con push()
    torneos.push(nuevoTorneo);

    // 22. Llamar a mostrarTorneos() y limpiarFormulario()
    mostrarTorneos();
    limpiarFormulario();

    // 23. Mostrar un mensaje de registro exitoso
    mostrarTexto("mensajeGeneral", "¡Torneo registrado correctamente!");
    document.getElementById("mensajeGeneral").style.color = "#86efac";
}


/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
function mostrarTorneos() {

    // 25. Crear una variable vacía para concatenar el HTML
    let html = "";

    // 26. Recorrer el arreglo torneos utilizando obligatoriamente un ciclo for
    for (let i = 0; i < torneos.length; i++) {

        let torneo = torneos[i];

        // 27. En cada vuelta, obtener el objeto actual y construir una fila de la tabla (<tr>...</tr>)
        html += `
            <tr>
                <td>${torneo.nombre}</td>
                <td>${torneo.categoria}</td>
                <td>${torneo.participantes}</td>
                <td>$${torneo.valorInscripcion.toFixed(2)}</td>
                <td>${torneo.email}</td>
                <td>$${torneo.recaudacion.toFixed(2)}</td>
            </tr>
        `;
    }

    // 28. Mostrar todos los datos y la recaudación calculada

    // 29. Insertar el HTML final en el cuerpo de la tabla sin duplicar filas (usando innerHTML)
    document.getElementById("tablaTorneo").innerHTML = html;
}


/**
 * Actividad 6. Limpiar el formulario (5 puntos)
 * 30. Crear la función limpiarFormulario().
 */
function limpiarFormulario() {

    // 31. Vaciar los campos del formulario, restablecer la categoría y limpiar los mensajes de error
    limpiarCampos();

    mostrarTexto("errorNombre", "");
    mostrarTexto("errorCategoria", "");
    mostrarTexto("errorParticipante", "");
    mostrarTexto("errorValor", "");
    mostrarTexto("errorEmail", "");
}


function limpiarCampos() {

    mostrarTextoEnCaja("NombreT", "");
    document.getElementById("categoria").value = "";
    mostrarTextoEnCaja("Participantes", "");
    mostrarTextoEnCaja("valordeins", "");
    mostrarTextoEnCaja("email", "");
}
