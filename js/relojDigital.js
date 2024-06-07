function actualizarReloj() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES', opcionesHora);

    document.getElementById('reloj').textContent = `${fecha}, ${hora}`;
}

setInterval(actualizarReloj, 1000); // Actualiza el reloj x segundo
 // <body onload="actualizarReloj()">
   // <div id="reloj"></div>
   
//</body>