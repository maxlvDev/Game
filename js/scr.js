const rab = document.getElementById("rabbit");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if(rab.classList !="jump") {
       rab.classList.add("jump") 
    }
    setTimeout (function (){
        rab.classList.remove("jump")
    },1000)
}

let isAlive = setInterval (function(){
    let rabTop = parseInt(window.getComputedStyle(rab).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 20 && cactusLeft > 0 && rabTop > 140) {
        alert("GAME OVER!");
    }

},10);