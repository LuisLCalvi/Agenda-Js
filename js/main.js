//FETCH
const obtenerDatos = () =>{
    fetch ("datos/data.json")
    .then ((respuesta) => {
      //  console.log (respuesta)
        return respuesta.json ()
    })
    .then ((dato) => {
        console.log (dato)
    })

    .catch ((err) =>{
        console.log ("Ha ocurrido un error:", err)
    })

}


const btn3 = document.querySelector ('.btn3')


btn3.addEventListener ('click', obtenerDatos)


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
//LIBRERIA            
                Swal.fire({
                title: 'Error!',
                text: 'No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados',
                icon: 'error',
                confirmButtonText: 'Volver a intentar'
                })

            // const mensajeError = document.createElement('p')
            // mensajeError.textContent = error;
            // mensajeError.classList.add('error')

            //const contenido = document.querySelector('.contenido')
            //contenido.appendChild(mensajeError)

}



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