//Algoritmo Simple

let nombre = prompt ("Ingrese su nombre completo");
let apellido = prompt ("Ingrese su apellido");
let resultado = nombre + " " + apellido;

//Algoritmo con condicional
if (nombre == "") { alert("No ingresaste tu nombre")};

if (apellido == "") { alert("No ingresaste tu apellido")};


if ((nombre !="") && (apellido !="")){
    alert ("Bienvenido" + " " + resultado + " " + "listo para ordenar turnos")
    };

//Ciclo

    for (let i = 1; i <= 10; i++) {
        let ingresarNombre = prompt("Ingresar paciente")
        console.log (" Turno N° "+i+" Paciente: "+ingresarNombre);

    };



















