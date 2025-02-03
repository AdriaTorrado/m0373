// ESTE ES EL ARCHIVO DE JAVASCRIPT
/*ESTE ES UN COMENTARIO*/

console.log("Hola desde index.js")

// Variables
let nombre = "Pepito"
let edad = 18
const CICLO = "DAW1"

let mensaje = "El señor " + nombre + "tiene " + edad + " años"

console.log(mensaje)

// Sumamos un año
edad = edad + 1
console.log(edad)
mensaje = "Ahora tengo: " + edad + " años y estudio " + CICLO
console.log(mensaje)

// Arrays
let arrayEstudios = ["informatica", "electricidad", "pfi"]
console.log("Este es el arrayEstudios: " , arrayEstudios)

console.log("El segundo elemento del array es: ",arrayEstudios[1])

// Objeto
let alumno = {
    nombre : "Paco",
    apellidos : "Sanchez Alcaraz",
    edad : 20
}

console.log("Este es el objeto alumno: ", alumno)

console.log("El nombre del alumno es: ", alumno.nombre)

// Capturamos en variables los elemetos del dom
const divcont1 = document.querySelector("#contenido1")
// Mostramos por consola el objeto del dom
console.log("Este es el objeto correspondiente al div #contenido1: ",divcont1)
// Mostramos por consola el objeto en forma de texto
console.log(divcont1.innerHTML)

// Cambiamos el contenido de un elemento del dom
divcont1.innerHTML = "<h2>Nuevo Contenido</h2>"

// Cambiamos el aspecto de una etiqueta
divcont1.classList.remove("colorAgua")
divcont1.classList.add("colorMarron")

// Capturando valores del imput
const miImput = document.querySelector("input")
console.log("El value del imput es: ",miImput.value)
miImput.value = "Otro texto"

// Consultar eventos
const botonEnviar = document.querySelector("#enviar")
botonEnviar.addEventListener("click", alertaClick)

// Declaramos funciones
function alertaClick(){
    console.log("has hecho click en el boton")
    alert("Has hecho click!!!!!")
}