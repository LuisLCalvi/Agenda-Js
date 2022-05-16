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


//OBJETO
let nombrePaciente = prompt ("Ingrese Nombre del paciente");
while (nombrePaciente != "salir"){
let apellidoPaciente = prompt ("Ingrese Apellido del paciente");
let obraSocial = prompt ("Ingrese Obra Social del paciente");




    const paciente = { 
        nombrePaciente: (nombrePaciente),
        apellidoPaciente: (apellidoPaciente),
        obraSocial: (obraSocial),

    }
    


    console.log(paciente)

    alert(paciente.nombrePaciente + " " + paciente.apellidoPaciente + " " + paciente.obraSocial)



seleccionarEspecialidad ()


function seleccionarEspecialidad () {
    console.log ("1: traumatologia")
    console.log ("2: endocrinologia")
    console.log ("3. ginecologia")
    console.log ("4: neurologia")
    console.log ("5: clinica")
    console.log ("6. gastroenterologia")
    console.log ("7: cirugia")
    console.log ("8: cardiologia")
    console.log ("9. oftalmologia")
    console.log ("10: psiquiatria")
    console.log ("--------")

}

const traumatologia = [
    {medico: 'Dr. Lombardo Mauro', dias: ' lunes - miercoles - viernes'},
    {medico:'Dr. Almeida Julio',  dias: 'lunes - martes - miercoles - viernes'},]
const endocrinologia = [
    {medico: 'Dra. Ramirez, Mercedes', dias: 'martes - miercoles - jueves'}, 
    {medico: 'Dra. Gadea Monica', dias: 'lunes - viernes'},]
const ginecologia = [
    {medico: 'Dra. Altamirano Liz', dias: 'martes - jueves'}, 
    {medico: 'Dr. Sirimarco, Federico', dias: 'lunes - viernes'},]
const neurologia = [
    {medico: 'Dr. Falco Nicolas', dias: 'miercoles'},
    {medico: 'Dr. Euler Javier', dias: 'lunes - viernes'},]
const clinica = [
    {medico: 'Dr. Mones Ruiz Matias', dias: 'lunes - martes - miercoles - jueves'},
    {medico: 'Dra. Ramirez Yamila', dias: 'martes - viernes'},]
const gastroenterologia = [
    {medico: 'Garcia Pinasco Oscar', dias: 'lunes - miercoles'},
    {medico: 'Notari Lorena', dias: 'martes - jueves'}, ]
const cirugia = [
    {medico: 'Parra Eduardo', dias: 'lunes - jueves - viernes'},
    {medico: 'Castro Ivana', dias: 'martes - miercoles'},]
const cardiologia = [
    {medico: 'Gadea Jose', dias: 'lunes - miercoles - jueves'},
    {medico: 'Navaja Ricardo', dias: 'martes - viernes'},]
const oftalmologia = [
    {medico: 'Grecco Diego', dias: 'martes - viernes'},
    {medico: 'Navarro Guillermo', dias: 'lunes - miercoles - jueves'},]
const psiquiatria = [
    {medico: ' Gianello Federico', dias: 'lunes - martes - miercoles - jueves'},
    {medico: ' Peretti Diego', dias: 'viernes'},]





    let op = prompt("Seleccionar especialidad (numero)")


    switch (op){     
        case "1":
                console.log (traumatologia [0])
                console.log (traumatologia [1])
                let  = prompt ("Seleccionar Medico"),
                alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

                //LOCAL STORAGE
                let turno = localStorage.setItem (paciente.nombrePaciente, paciente.apellidoPaciente)

                //JSON
                const enJSON = JSON.stringify (traumatologia);
                
                console.log (enJSON)

            

                nombrePaciente = prompt ("Ingrese nombre del paciente")
    
        break;
    
        case "2":
            console.log (endocrinologia [0])
            console.log (endocrinologia [1])
            let  = prompt ("Seleccionar Medico"),
    
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno" )

               //SESSION STORAGE
            
            let cliente = sessionStorage.setItem (paciente.nombrePaciente, paciente.obraSocial)

            
            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
        break;
    
        case "3": 
            console.log (ginecologia [0])
            console.log (ginecologia [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno" )

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
        break;
    
        case "4":
            console.log (neurologia [0])
            console.log (neurologia [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
        
        case "5":
            console.log (clinica [0])
            console.log (clinica [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
    
        case "6":
            console.log (gastroenterologia [0])
            console.log (gastroenterologia [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
    
        case "7":
            console.log (cirugia [0])
            console.log (cirugia [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
    
        case "8":
            console.log (cardiologia [0])
            console.log (cardiologia [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
    
        case "9":
            console.log (oftalmologia [0])
            console.log (oftalmologia [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
        
        case "10":
            console.log (psiquiatria [0])
            console.log (psiquiatria [1])
            let  = prompt ("Seleccionar Medico"),
            alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")

            nombrePaciente = prompt ("Ingrese nombre del paciente")
    
    
            break;
    
        default:
            console.log("Su turno es Invalido")
            break;
    
    
    };
    
    
    
    };
    

    