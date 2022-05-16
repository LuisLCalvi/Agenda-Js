//Algoritmo Simple
const nombre = document.querySelector ('#nombreu')
const apellido = document.querySelector ('#apellidou')
const nombreApellido = nombre + " " + apellido;
const btnRegistro = document.querySelector ("#btn")
const btningresaru = document.querySelector ('#btningresaru')

//Algoritmo con condicional
//const error = alert ("No se cargaron de manera correcta los datos, por favor ingrese los datos solicitados");
if (nombre === "") { alert ("error")};

if (apellido === "") { alert("error")};



btnRegistro.addEventListener("click", ()=>{
console.log ("Se registro con exito")
})

