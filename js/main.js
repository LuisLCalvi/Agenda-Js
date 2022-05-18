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

        nombreU !="", apellidoU !="" && mostrarMensaje ("Bienvenido" + " " + usuario + " " + "se ha registrado con éxito, ya puede ingresar")        

        function mostrarError (error) {
            const mensajeError = document.createElement ('p')
            mensajeError.textContent = error;
            mensajeError.classList.add ('error')

            const contenido = document.querySelector('.contenido')
            contenido. appendChild (mensajeError)

            setTimeout (()=> {
                mensajeError.remove ()
            }, 2000 )

        }

        function mostrarMensaje (inicio) {
            const mensajeInicio = document.createElement ('p')
            mensajeInicio.textContent = inicio;
            mensajeInicio.classList.add ('inicio')
            const contenido = document.querySelector('.contenido')
            contenido. appendChild (mensajeInicio)

            setTimeout (()=> {
                mensajeInicio.remove ()
            }, 3000 )

        }
        localStorage.setItem (nombreU, apellidoU)





}