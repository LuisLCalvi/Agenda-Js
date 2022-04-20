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
    prompt ("Ingresar Nombre completo y Apellido del paciente");


    }

seleccionarMedico ()


function seleccionarMedico () {
    console.log ("1: traumatologia")
    console.log ("2: endocrinologia")
    console.log ("3. radiologia")
    console.log ("4: neurologia")
    console.log ("5: clinica")
    console.log ("6. gastroenterologia")
    console.log ("7: cirugia")
    console.log ("8: cardiologia")
    console.log ("9. oftalmologia")
    console.log ("10: psiquiatria")
    console.log ("--------")

}


let op = prompt("Ingresar opcion")


switch (op){     
    case "1":     
    alert ("Se guardo turno")


    break;

    case "2":
    alert ("Se guardo turno")

    break;

    case "3":
    alert ("Se guardo turno")

    break;

    case "4":
        alert ("Se guardo turno")

        break;
    
    case "5":
        alert ("Se guardo turno")

        break;

    case "6":
        alert ("Se guardo turno")

        break;

    case "7":
        alert ("Se guardo turno")

        break;

    case "8":
        alert ("Se guardo turno")

        break;

    case "9":
        alert ("Se guardo turno")

        break;
    
    case "10":
        alert ("Se guardo turno")

        break;

    default:
        console.log("Operacion Invalida")
        break;
};
























