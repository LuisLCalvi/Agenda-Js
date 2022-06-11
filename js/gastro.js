//Calendario
const mesNombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Novimbre', 'Dicimbre'];

let fechaHoy = new Date();
let diaHoy = fechaHoy.getDate();
let mesNumero = fechaHoy.getMonth();
let añoHoy = fechaHoy.getFullYear();

let fecha = document.getElementById('fecha');
let mes = document.getElementById('mes');
let año = document.getElementById('año');

let prevMonthDOM = document.getElementById('mes-antes');
let nextMonthDOM = document.getElementById('mes-sig');

mes.textContent = mesNombre[mesNumero];
año.textContent = añoHoy.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (mes) => {

    for(let i = comienzoDia(); i>0;i--){
        fecha.innerHTML += ` <div class="calendario__fecha calendario__item calendario__diasatras">
            ${getTotalDias(mesNumero-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDias(mes); i++){
        if(i===diaHoy) {
            fecha.innerHTML += ` <div class="calendario__fecha calendario__item calendario__hoy">${i}</div>`;
        }else{
            fecha.innerHTML += ` <div class="calendario__fecha calendario__item">${i}</div>`;
        }
    }
}

const getTotalDias = mes => {
    if(mes === -1) mes = 11;

    if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
        return  31;

    } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((añoHoy % 100 !==0) && (añoHoy % 4 === 0) || (añoHoy % 400 === 0));
}

const comienzoDia = () => {
    let comienzo = new Date(añoHoy, mesNumero, 1);
    return ((comienzo.getDay()-1) === -1) ? 6 : comienzo.getDay()-1;
}

const lastMonth = () => {
    if(mesNumero !== 0){
        mesNumero--;
    }else{
        mesNumero = 11;
        añoHoy--;
    }

    setNuevaFecha();
}

const nextMonth = () => {
    if(mesNumero !== 11){
        mesNumero++;
    }else{
        mesNumero = 0;
        añoHoy++;
    }

    setNuevaFecha();
}

const setNuevaFecha = () => {
    fechaHoy.setFullYear(añoHoy,mesNumero,diaHoy);
    mes.textContent = mesNombre[mesNumero];
    año.textContent = añoHoy.toString();
    fecha.textContent = '';
    writeMonth(mesNumero);
}

writeMonth(mesNumero);


//Gestion de Turnos


const formularioP = document.querySelector ('#formularioPG')

formularioP.addEventListener ("submit", agregarPaciente)

const listaPacientesG = document.querySelector ('#listaHorariosgastro')

let listadoG = [];
        

        formularioP.addEventListener('submit', agregarPaciente)

        document.addEventListener("DOMContentLoaded", () => {
            listadoG = JSON.parse(localStorage.getItem('listadoG')) || [];
            incorporandoLista()
        })

        listaPacientesG.addEventListener('dblclick', borrarPaciente)


function agregarPaciente (evt){
    evt.preventDefault();
    const nombrePaciente = document.querySelector ('#nombrePG').value
    const apellidoPaciente = document.querySelector('#apellidoPG').value
    const obraSocial = document.querySelector ('#obrasocialPG').value
    const dniPaciente = document.querySelector ('#dniPG').value
    const telefonoPaciente = document.querySelector ('#telPG').value
    const direccionPaciente = document.querySelector ('#dirPG').value
    const paciente ={ 
        id: Date.now (),
        texto: nombrePaciente + " " + apellidoPaciente + " " + obraSocial + " " + dniPaciente}


    nombrePaciente === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

    apellidoPaciente === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

    dniPaciente === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

    direccionPaciente === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

    telefonoPaciente === "" && mostrarError ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados")

    nombrePaciente !="", apellidoPaciente !="", obraSocial != "", dniPaciente != "", telefonoPaciente !="", direccionPaciente != "" && mostrarMensaje ("Estimado" + " "+  paciente.texto + " " + "se ha guardado su turno" ) 


    function mostrarError (error) {
        const mensajeError = document.createElement ('p')
        mensajeError.textContent = error;
        mensajeError.classList.add ('error2')

        const turnera = document.querySelector('.turneraG')
        turnera. appendChild (mensajeError)

        setTimeout (()=> {
            mensajeError.remove ()
        }, 2000 )

    }

    function mostrarMensaje (inicio) {
            const mensajeInicio = document.createElement ('p')
            mensajeInicio.textContent = inicio;
            mensajeInicio.classList.add ('inicio2')
            const turnera = document.querySelector('.turneraG')
            turnera. appendChild (mensajeInicio)

            setTimeout (()=> {
                mensajeInicio.remove ()
            }, 3000 )


        

}



listadoG.push(paciente)

incorporandoLista()

formularioP.reset ()
}
function incorporandoLista() {

    limpiar();


    if (listadoG.length > 0) {
        listadoG.forEach(paciente => {
            const btnBorrar = document.createElement('a');
            btnBorrar.classList = "borrar-paciente";
            btnBorrar.innerText = ' ° '

            const li = document.createElement('li');
            li.classList = "lista__pacientes"

            li.innerText = paciente.texto
            li.appendChild(btnBorrar)
            li.dataset.pacienteId = paciente.id

            listaPacientesC.appendChild(li)
        })
    }
    sincroStorage();
}

function sincroStorage() {
    localStorage.setItem('listado', JSON.stringify(listadoG))
}

function limpiar() {
    while (listaPacientesG.firstChild) {
        listaPacientesG.removeChild(listaPacientesG.firstChild)
    }
}

function borrarPaciente(evt) {
    const id = evt.target.parentElement.dataset.pacienteId
    listadoG = listadoG.filter(paciente => paciente.id != id)
    incorporandoLista()
    
}
