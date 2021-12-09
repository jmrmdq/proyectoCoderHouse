// armar la clase para los usuarios nuevos
class Usuarios{
    constructor(nombre, apellido, osocial, edad, celu, documento){
        this.nombre=nombre.toUpperCase();
        this.apellido=apellido.toUpperCase();
        this.osocial=osocial.toUpperCase();
        this.edad= parseInt(edad);
        this.celu= parseInt(celu);
        this.documento= parseInt(documento);
    }
}

// generar un array vacio donde luego se ingresaran los datos de usuario
const UsuariosRegistrados = [];

// primer paso para obtener inputs
let formulario = document.getElementById("formularioContacto");

// escucho el submit, boton enviar del formulario
formulario.addEventListener("submit", procesarFormulario);

// comienzo a leer info del formulario recibido, y lo pusheo en mi array de usuarios
function procesarFormulario(e) {
    e.preventDefault();
    let obtenerFormulario = e.target;

    // Valido si los campos contienen texto y numero segu corresponda c/u y genero la constante para mi array
    datoValido(obtenerFormulario.children[1].value);
    const nombre = datoOk;
    datoValido(obtenerFormulario.children[3].value);
    const apellido = datoOk;
    datoValido(obtenerFormulario.children[5].value);
    const osocial = datoOk;
    numeroValido(obtenerFormulario.children[7].value);
    const edad = numeroOk;
    numeroValido(obtenerFormulario.children[9].value);
    const celu = numeroOk;
    numeroValido(obtenerFormulario.children[11].value);
    const documento = numeroOk;
    
    // comienzo a volcar esta info a mi array de usuarios
    UsuariosRegistrados.push(new Usuarios (nombre, apellido, osocial, edad, celu, documento));
    console.log(UsuariosRegistrados);

    // Guardo el usuario en el local Storage, previo, lo paso a JSON
    const URegistradoEnJSON = (clave, valor)=> {localStorage.setItem(clave, valor)};

    for (const usuarioReg of UsuariosRegistrados){
        URegistradoEnJSON(usuarioReg.documento, JSON.stringify(UsuariosRegistrados));
    }
}


//for (const medico of Medicos){
//     MedicosEnJSON(Medicos.id, JSON.stringify(medico));
// }
//