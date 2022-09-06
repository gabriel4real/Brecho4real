const nav = (document.getElementById("navmenu"));
const main = (document.getElementById("main"));
const header = (document.getElementById("header"));
const footer = (document.getElementById("footer"));
var width = (window. screen. width);

function abrirMenu(){
    if (width<1400)
    {
        nav.style.width = "250px";
    }
    else{
        nav.style.width = "500px";
    }
}

function fecharMenu(){
    nav.style.width = "0px";
    
}