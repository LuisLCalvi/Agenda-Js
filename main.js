
    //funcion

let paciente = nombre + " " + apellido;

solicitarTurno ();

function solicitarTurno () {
    let turno = confirm ("pedir turno")
    solicitarDatos (datos)
}

function solicitarDatos (d) {
    if (d) {
        let nombre = prompt ("Ingresar Nombre completo");
        let apellido = prompt ("Ingresar Apellido")
        especialidadMedica (medico)

    } else{
        alert("Es requerimiento completar los datos solicitados")
    }

}

function especialidadMedica () {
    console.log ("1: traumatologia")
    console.log ("2: endocrinologia")
    console.log ("3. clinica")
    console.log ("4: neumonologia")
    console.log ("5: neurologia")
    console.log ("6. radiologia")
}

let op = prompt("Ingresar opcion")

switch (op){
    case "1":     for (let i = 1; i <= 10; i++) {
        console.log (" Turno N° "+i+ paciente);

    };
    break;


}




















