//Algoritmo Simple


//Algoritmo con condicional
//const error = alert ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados");

const formulario = document.querySelector ('#formulario')


formulario.addEventListener ("submit", agregarRegistro)


function agregarRegistro (evt) {
    evt.preventDefault();
    const nombreU = document.querySelector ('#ingresarN').value
    const apellidoU = document.querySelector ('#ingresarA').value
    let usuario = nombreU + " " + apellidoU

        //OPERACIONES AVANZADAS 
        nombreU === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

        apellidoU === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

        nombreU !="", apellidoU !="" && mostrarMensaje ("Bienvenido" + " " + usuario + " " + "se ha registrado con éxito, ya puede seleccionar la especialidad para adquirir el turno")        

        function mostrarError(error) {
            const mensajeError = document.createElement('p')
            mensajeError.textContent = error;
            mensajeError.classList.add('error')

            //const contenido = document.querySelector('.contenido')
            //contenido.appendChild(mensajeError)

}

//LIBRERIA
        Swal.fire({
            title: 'Error!',
            text: 'No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados',
            icon: 'error',
            confirmButtonText: 'Volver a intentar'
            })

        function mostrarMensaje (inicio) {
            const mensajeInicio = document.createElement ('p')
            mensajeInicio.textContent = inicio;
            mensajeInicio.classList.add ('inicio')
            const contenido = document.querySelector('.contenido')
            contenido. appendChild (mensajeInicio)

            setTimeout (()=> {
                mensajeInicio.remove ()
            }, 4000 )

        }
        localStorage.setItem (nombreU, apellidoU)





}