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

//obtener inputs de RegistrarUsuario.html 
let formulario = document.getElementById("formularioContacto");

// obtener inputs de logueo en especialidades.html
let usuarioRegistrado = document.getElementById("formularioUsuarioRegistrado");

//escucho el submit, boton enviar del formulario en RegistrarUsuario.html 
formulario.addEventListener("submit", procesarFormulario);

// escucho el boton ingresar de especialidades.html
formulario.addEventListener("submit", procesarEntrada);

//leer info del formulario recibido, y lo pusheo en mi array de usuarios, pagina RegistrarUsuario.html
function procesarFormulario(e) {
    e.preventDefault();
    let obtenerFormulario = e.target;

    // Validar si los campos contienen texto y numero segun corresponda c/u y genero la constante para mi array
    datoValido(obtenerFormulario.children[1].value);
    const nombre1 = datoOk;
    datoValido(obtenerFormulario.children[3].value);
    const apellido1 = datoOk;
    datoValido(obtenerFormulario.children[5].value);
    const osocial1 = datoOk;
    numeroValido(obtenerFormulario.children[7].value);
    const edad1 = numeroOk;
    numeroValido(obtenerFormulario.children[9].value);
    const celu1 = numeroOk;
    numeroValido(obtenerFormulario.children[11].value);
    const documento1 = numeroOk;
    
    // comienzo a volcar esta info a mi array de usuarios
    UsuariosRegistrados.push(new Usuarios (nombre1, apellido1, osocial1, edad1, celu1, documento1));
    console.log(UsuariosRegistrados);

    // Guardo el usuario en el local Storage, previo, lo paso a JSON
    const URegistradoEnJSON = (clave, valor)=> {localStorage.setItem(clave, valor)};

    URegistradoEnJSON("UsuariosRegistrados", JSON.stringify(UsuariosRegistrados));
    
}


// function procesarEntrada(e) {
//     e.preventDefault();
//     let obtenerFormulario = e.target;

//     const Documento = obtenerFormulario.children[1].value;
//     const ApellidoReg = obtenerFormulario.children[3].value;
// }

////edicos){
//     MedicosEnJSON(Medicos.id, JSON.stringify(medico));
// }
//////