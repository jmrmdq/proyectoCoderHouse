// armar la clase para los usuarios nuevos
class Usuarios{
    constructor(nombre, apellido, osocial, edad, celu, documento){
        this.nombre=nombre;
        this.apellido=apellido;
        this.osocial=osocial;
        this.edad=edad;
        this.celu=celu;
        this.documento=documento;
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
    // genero constantes con los datos obtenidos
    const nombre = obtenerFormulario.children[1].value;
    const apellido = obtenerFormulario.children[3].value;
    const osocial = obtenerFormulario.children[5].value;
    const edad = obtenerFormulario.children[7].value;
    const celu = obtenerFormulario.children[9].value;
    const documento = obtenerFormulario.children[11].value;
    // comienzo a volcar esta info a mi array de usuarios
    UsuariosRegistrados.push(new Usuarios (nombre, apellido, osocial, edad, celu, documento));
    console.log(UsuariosRegistrados);
    // Guardo el usuario en el local Storage, previo, lo paso a JSON
    const URegistradoEnJSON = (clave, valor)=> {localStorage.setItem(clave, valor)};

    for (const usuarioReg of UsuariosRegistrados){
        URegistradoEnJSON(usuarioReg.documento, JSON.stringify(UsuariosRegistrados));
    }
}
// tion validarFormulario (e){

// //Cancelamos el comportamiento del evento
// e.preventDefault ();

// //Obtenemos el elemento desde el cual se disparó el evento
// let formulario = e.target

// //Obtengo el valor del primero hijo <input type="text">
// console.log(formulario.children[ 0].value);

// //Obtengo el valor del segundo hijo <input type="number">
// console.log(formulario.children[ 1].value);
// }ut type="number">
// console.log(formulario.children[ 1].value);
// }