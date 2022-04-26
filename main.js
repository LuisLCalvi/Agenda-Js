//Algoritmo Simple
alert("Bienvenido, buena jornada laboral")

let nombre = prompt ("Ingrese su nombre ");

let apellido = prompt ("Ingrese su apellido");

let resultado = nombre + " " + apellido;

//Algoritmo con condicional
if (nombre == "") { alert("No ingresaste tu nombre")};

if (apellido == "") { alert("No ingresaste tu apellido")};


if ((nombre !="") && (apellido !="")){
    alert ("Bienvenido" + " " + resultado + " " + "listo para comenzar a gestionar turnos")
    };

    //funcion



solicitarDatos ();


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

const traumatologia = ['Dr. Lombardo Mauro', 'Dr. Almeida Julio']
const endocrinologia = ['Dra. Ramirez, Mercedes', 'Dra. Gadea Monica']
const ginecologia = ['Dra. Altamirano Liz', 'Dr. Sirimarco, Federico']
const neurologia = ['Dr. Falco Nicolas', 'Dr. Euler Javier']
const clinica = ['Dr. Mones Ruiz Matias', 'Dra. Ramirez Yamila']
const gastroenterologia = ['Dr. Garcia Pinasco Oscar', 'Dra. Notari Lorena' ]
const cirugia = ['Dr. Parra Eduardo', 'Dra. Castro Ivana']
const cardiologia = ['Dr. Gadea Jose', 'Dr. Navaja Ricardo']
const oftalmologia = ['Dr. Grecco Diego', 'Dra. Navarro Guillermo']
const psiquiatria = ['Dr. Gianello Federico', 'Dr. Peretti Diego']

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
        alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")
        nombrePaciente = prompt ("Ingrese nombre del paciente")

    break;

    case "3": 
        console.log (ginecologia [0])
        console.log (ginecologia [1])
        let  = prompt ("Seleccionar Medico"),
        alert("Estimado " + " " + paciente.nombrePaciente  + " " + paciente.apellidoPaciente + " " + "Se guardo su turno")
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

}
};






















