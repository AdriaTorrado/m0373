console.log("Hola desde index2.js")

let frutas = ["naranja", "pera", "fresas"]
console.log("Mi fruta favorita es: ",frutas[2])

for(let i = 0; i<3; i++){
    console.log("fruta")
    frutas[i]
}
const botonContenido3 = document.querySelector("#contenido3")
console.log("El contenido del boton es: ",botonContenido3)
botonContenido3.classList.add("colorVerde")
botonContenido3.addEventListener("Click", alertaClick)

function alertaClick(){
    
}