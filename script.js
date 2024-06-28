const menu = document.getElementById("menu");
const boton = document.getElementById("boton__hamburguesa");

console.log(menu);

boton.onclick = function(){
    if(menu.classList.contains("mostrar")){
        menu.classList.remove('mostrar');
        menu.classList.add('ocultar');
    }else{
        menu.classList.remove('ocultar');
        menu.classList.add('mostrar');
    }
}
