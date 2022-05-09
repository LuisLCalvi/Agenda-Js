//Algoritmo Simple
const nombre = document.querySelector ("#nombre")
const apellido = document.querySelector ("#apellido")
const nombreApellido = nombre + " " + apellido;
const btnIngresar = document.querySelector ("#btnPrincipal")
const btnRegistro = document.querySelector ("#btn")
const miformulario = document.getElementsByClassName("formulario")

//Algoritmo con condicional

console.log (miformulario)
if (nombre == " ") { alert("No ingresaste tu nombre")};

if (apellido == " ") { alert("No ingresaste tu apellido")};

if ((nombre!=" ") && (apellido !=" ")){
    btnIngresar.addEventListener("click", solicitarDatos)
    };

btnRegistro.addEventListener("click", ()=>{
console.log ("Se registro con exito")
})

    //funcion

function solicitarDatos (d) {

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

            nombrePaciente = prompt ("Ingrese nombre del paciente")

    break;

    case "2":
        console.log (endocrinologia [0])
        console.log (endocrinologia [1])
        let  = prompt ("Seleccionar Medico"),

        
        alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno" )
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


}


