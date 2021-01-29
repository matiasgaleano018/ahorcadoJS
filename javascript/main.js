const palabra1 = ['_', '_', '_', '_']
const palabra = document.getElementById("palabra");
const letra = document.getElementById("letra");
const imagen = document.getElementById("img");
const resultado = document.getElementById("resultado");
const botonVerificar = document.getElementById("botonVerificar");
let indice = 0;
let cantidadFallos = 0;
let iniciarJuego= true;
if(indice == 0){
    palabra.value = "_ _ _ _"
}else if(indice == 1){
    palabra.value = "_ _ _ _ _ _ _ _"
}


botonVerificar.addEventListener("click", ()=>{
    if(iniciarJuego == true){
        if(indice == 0){
            if(letra.value =="c"){
                palabra1[0] = "c"
            }else if(letra.value == "a"){
                palabra1[1] = "a"
                palabra1[3] = "a"
            }else if(letra.value == "s"){
                palabra1[2] = "s"
            }else{
                cantidadFallos++;
            }
        }
        if(cantidadFallos == 1){
            imagen.setAttribute("src", "img/img2.png")
        }else if(cantidadFallos == 2){
            imagen.setAttribute("src", "img/img3.png")
        }else if(cantidadFallos == 3){
            imagen.setAttribute("src", "img/img4.png")
        }else if(cantidadFallos == 4){
            alert("Haz perdido")
            iniciarJuego = false;
        }
        corroborarPalabra(palabra1)
        mostrarPalabra = palabra1.join(" ");
        palabra.value = mostrarPalabra;
    }
})
/*Corroboramos de que aun queden letras por jugar, en caso contrario finalizamos el juego*/
const corroborarPalabra = (e)=>{
    let contador = e.length;
    e.forEach(function(element){
        if(element != "_"){
            contador--;
        }
    })
    if(contador==0){
        alert("Haz ganado!!")
        iniciarJuego = false;
    }
}