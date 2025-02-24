console.log("Hola superheroe")

const bd=[
    {
        nombre : "magneto" ,
        url_imagen : https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png
    },
    {
        nombre : "CYCLOPS"
        url_imagen : https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png
    },
    {}
]

function mostrarSuperheroes(){

    for(let i=0;i<db.length; i++){
        console.log("i: ",bd[i].nombre,bd[i].url_imagen);
        tarjetas = 
        tarjetas +
       `
       <div class="tarjeta">
        <div class="imagen">
        <img
            src="$(bd[i].url_imagen)"
            alt=""
        />
        </div>
        <div class="nombre">$bd[i].nombre}</div>
        </div>

       `
    }
}

document.querySelector(".contenedor").innerHTML = tarjetas;

const boton = document.querySelector("button");
boton.addEventListener("click",function(){
    console.log("Se hizo click");

    //llamamos a la funcion para mostrar los superheroes
    mostrarSuperheroes();

})

//Llamamos a la función
mostrarSuperheroes();