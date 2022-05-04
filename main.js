//DOM


const encabezado = document.getElementById("titulop")
console.log(titulop)
console.log(encabezado.innerHTML)




encabezado.innerText = " Se modifico el nombre"

encabezado.innerHTML = "<strong> Nuevamente modificamos el nombre </strong>"

encabezado.style.color = "blue"

const menu = document.getElementById("navegacion")

console.log(menu)

const link = document.createElement ('a')

link.textContent = "Nueva opcion"

link.href = (/nuevo/enlace.html)

link.classList.add ('link')

menu.appendChild (link)