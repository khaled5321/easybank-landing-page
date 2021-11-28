const hamMenu=document.getElementById("ham-menu");
const body=document.querySelector('body');
const faders=document.querySelectorAll('[id=overlay],[id=menu]');
hamMenu.addEventListener("click",function(){
    hamMenu.classList.toggle("open");
    body.classList.toggle("no-scroll");

    if(hamMenu.classList.contains("open")){
        faders.forEach(function(element){
            element.classList.remove("fade");
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        })
    }
    else{
        faders.forEach(function(element){
            element.classList.add("fade");
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
    }
} );