var valorTicket = 200
var cantidad = document.getElementById("FormControlInputCantidad")
var categoria = document.getElementById("FormControlInputCategoria")
var spanTotalImporte = document.getElementById("spanTotalImporte")
var nombre = document.getElementById("FormControlInputNombre")
var apellido = document.getElementById("FormControlInputApellido")
var mail = document.getElementById("FormControlInputMail")

function validarFormulario(){
    console.log("entro")
    if (!validarPalabras(nombre.value)){
        alert("Atención: El nombre solo puede contener letras")
        nombre.focus()
        return
    } else if (!validarPalabras(apellido.value)){
        alert("Atención: El apellido solo puede contener letras")
        apellido.focus()
        return
    } else if (!validarEmail(mail.value)){
        alert("Atención: El correo ingresado no es correcto")
        mail.focus()
        return
    } else if (cantidad.value == 0){
        alert("Atención: Debe ingresar una cantidad de entradas")
        cantidad.focus()
        return
    }
    console.log("salio")
    calcularImporte()
}

function calcularImporte () {
    let descuento = 1
    switch (categoria.value) {
        case "1":
            descuento = 0.2
        break
        case "2":
            descuento = 0.5
        break
        case "3":
            descuento = 0.85
        break
    }
    let total = cantidad.value * valorTicket * descuento
    spanTotalImporte.textContent = total
}

function validarPalabras(palabra){
    let letras = /^[A-Za-z\s]+$/
    return letras.test(palabra)
}

function validarEmail(email){
    let testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return testEmail.test(email)
}

function limpiar(){
    spanTotalImporte.textContent = ""
}