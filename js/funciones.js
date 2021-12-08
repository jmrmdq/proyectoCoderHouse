// funcion para validar datos en formulario
let datoOk = null;
let numeroOk = 0;

function datoValido (nombre) {
    if (nombre == parseInt(nombre)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, ingresa un texto!',
            footer: '<a href="">Necesitas ayuda, ingresa aqui!!</a>'
          })
    } else {
        datoOk = nombre;
    }
   
}

function numeroValido(numero) {
    if (numero == parseInt(numero)) {
        numeroOk = numero;        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, ingresa numero sin puntos o comillas!',
            footer: '<a href="">Necesitas ayuda, ingresa aqui!!</a>'
        })
    }  
}
//