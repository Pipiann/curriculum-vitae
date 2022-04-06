// console.log ("controlFormulario.js funciona");
const valores =window.location.search;

// Mostramos los valores en consola:
console.log (valores)

var campoNombre=false;
// var campoTelefono=false;
// var campoCorreo=false;
// var campoCampo=false;

// // Resultado
// nombre=algo&telefono=algo&correo=algo%40algo&campo=algo

// Creamos la Instancia
const urlParams = new URLSearchParams (valores);

// Accedemos a los valores
var Nombre= urlParams.get("Nombre");
var Telefono= urlParams.get("Telefono");
var Correo= urlParams.get("Mail");
var Campo= urlParams.get("Campo");
console.log(Nombre);
console.log(Telefono);
console.log(Correo);
console.log(Campo);

if(Nombre != null && Telefono !=null && Correo!=null && Campo !=null){
    alert("los campos han sido completados correctamente se ejecutara el codigo");
}else{
    alert("los campos no han sido completados correctamente")
}

function validateFormContacto() {
    let Nombre=document.getElementById("Nombre");
    console.log(Nombre);
    console.log(Nombre.value);
    if(Nombre.value.length > 2) {
      campoNombre=true;
      document.getElementById("Nombre").classList.remove("error");
      validarFormulario();
    }else{
        campoNombre=false;
        document.getElementById("Nombre").classList.add("error");
        validarFormulario();
    }
}
function validarFormulario(){
    if(campoNombre){
        document.getElementById("botonSubmit").removeAttribute("disabled");
        document.getElementById("botonSubmit").classList.remove("cursorDeshabilitado");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }else{
        document.getElementById("botonSubmit").setAttribute("disabled","disabled");
        document.getElementById("botonSubmit").classList.add("cursorDeshabilitado");
        // buscamos en el dom el boton del formulario y lo habilitamos
    }
}

function validarCampos(){
    if(campoNombre){

    }
}

// // var Correo = document.getElementById("Mail");

// Correo.addEventListener("Mail", function ValidarMail() {
//   if (Mail.validity.typeMismatch) {
//     Mail.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
//   } else {
//     Mail.setCustomValidity("");
//   }
// });

