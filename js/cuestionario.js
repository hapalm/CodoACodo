
function validarRespuestas(event) {
    event.preventDefault();  // Evita el envío del formulario
    let puntos = 0;

    // Respuestas correctas
    const respuestasCorrectas = {
        q1: "2",
        q2: "Analista de sistema",
        q3: "IFTS16",
        q4: "Chacarita",
        q5: "Alejo y Nahuel"
    };

    // Verificar respuestas
    for (let key in respuestasCorrectas) {
        const respuestaUsuario = document.getElementById(key).value.trim();
        if (respuestaUsuario.toLowerCase() === respuestasCorrectas[key].toLowerCase()) {
            puntos += 2;  // Asignar puntos por respuesta correcta
        }
    }

     // Determinar mensaje por el puntaje
     let mensaje;
    if (puntos === 10) {
        mensaje = "Obtuvo el máximo puntaje ¡Gracias por leer el blog!";
    } else if (puntos >= 7) {
        mensaje = "¡Muy bien! Lograste un buen puntaje.";
    } else if (puntos >= 5) {
        mensaje = "¡Buen trabajo! Puedes mejorar un poco más.";
    } else if (puntos >= 3) {
        mensaje = "¡Sigue intentando! Puedes mejorar.";
    } else {
        mensaje = "Tomate un tiempo para ver nuestro blog y conocernos mejor. ¡Hasta luego!";
    }

    // Mostrar puntaje con título y mensaje
    alert("Resultado del Cuestionario\n\nTu puntaje es: " + puntos + "\n" + mensaje);

}
