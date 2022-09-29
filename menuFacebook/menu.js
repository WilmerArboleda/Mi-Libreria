let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let Desplazar = window.pageYOffset;

    if(ubicacionPrincipal >= Desplazar){
        document.getElementById("navbar").style.top = "0";
    }
    else{
        document.getElementById("navbar").style.top = "-100px";
    }

    ubicacionPrincipal = Desplazar;
}

/**
 se otorga el valor de desplazar a ubicacionprincipal.
 para que al scrolear hacia arriba ubicacionprincipal sea mayor a el nuevo valor de desplazar
 y muestre el menu
 */