var monImg = document.getElementById("monImage");
monImg.addEventListener("mouseover", function () {
    monImg.src = "img/chien.jpg";
})
monImg.addEventListener("mouseout", function () {
    monImg.src = "img/chat.jpg";
})


var imgBtn = document.getElementById("changerBtn");
imgBtn.addEventListener("click", function () {
   alert("Cliquez ici");
})

var bg= document.getElementById("bodyBg");
var btnNuit = document.getElementById("nuit");
btnNuit.addEventListener("click", function(){
    bg.style.backgroundColor = "black";
})

var btnNuit = document.getElementById("jour");
btnNuit.addEventListener("click", function () {
    bg.style.backgroundColor = "white";
})