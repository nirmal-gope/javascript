//Selection Naturelle (sans getElement)

var monId2 = masection;
document.write(monId2 + "<br>"); //affiche [object HTMLElement]
document.write(monId2.innerHTML); //La propriété .innerHTML renvoir le contenu HTML de mon élément

document.write("<br>");
// console.log(document.body.innerHTML);
// avec le innerHTML sur le body, on a acces à tous les éléments ui composent notre body
//si on avait mis la propriété textContent, on aurait vu uniquement le texte des balises

//Selecttion ById
var monId = document.getElementById("masection");
document.write("Avec grtElementById : "+ monId + "<br>"); //affiche object HTMLElement

document.write("Avec innerHTML: "+ monId.innerHTML); //affiche span

document.write("<br>");

var maDiv = document.getElementById("carre");
console.log(maDiv.style);
console.log(maDiv.style.backgroundColor);

maDiv.onclick = function (){
    if(maDiv.style.backgroundColor == "deeppink"){
        maDiv.style.backgroundColor = "blue";
    }else{
        maDiv.style.backgroundColor = "deeppink";
    }
}

//Selection ByTagName
var maBalise = document.getElementsByTagName("span");
document.write("Ma balise : " + maBalise + "<br>");
document.write("mabalise : " +maBalise[0].innerHTML + "<br>");

document.write("<br>");

var mesBalisesP = document.getElementsByTagName("p");
console.log(mesBalisesP);

//Affichez le 2eme paragraphe dans la console
console.log(mesBalisesP[1].innerHTML);
 
//Au click, changer le contenu texte du paragraphe 2 en utilisant textContent

var par2 = mesBalisesP[1];
par2.onclick = function (){
    par2.textContent = "Nouveau texte blablabla";
    par2.style.color = "green";
}
/*

// EXO
//changez la color de texte les balises p (en rouge)
//indice: souvenez vous qu'on est dans une collection html (tableau) et qu'on a plusieurs éléments, il va donc falloir parcourir ce tableau. j'dis ça j'dis rien !

for(var i =0; i<mesBalisesP.length; i++){
    mesBalisesP[i].style.color = "red";
    mesBalisesP[i].style.backgroundColor = "yellow";
    mesBalisesP[i].style.border = "2px solid blue";
    mesBalisesP[i].style.textAlign = "center";
    mesBalisesP[i].style.fontSize = "30px";
    mesBalisesP[i].style.fontWeight = "bold";
}


//Selection ByClassName

var mesClasses = document.getElementsByClassName("avion");
console.log("type of : "+ typeof(mesClasses));
document.write("mes classes " + mesClasses[0].innerHTML);
document.write("<br>");

//affichez dans un document.write tout le contenu text des class "avion"
for(var i =0; i<mesClasses.length; i++){
    document.write("Boucle "+i+ " : " +mesClasses[i].innerHTML + "<br>");
}
*/
//querySelector et querySelectorAll
//Ces deux outils permetent de sélectionner un ou des éléments du document.
//Différence entre les deux:
//querySelector renvoi le premier élément répondant au selectur ( UN SEUL ELEMENT)
//querySelectorAll renvoi tous les élément répondant au sélécteur (une collection)

var monSpan = document.querySelector("#maselection span");
console.log(monSpan);
var mesBalisesP = document.querySelectorAll("p");
console.log(mesBalisesP);

for(var i = 0; i<mesBalisesP.length; i++){
    mesBalisesP[i].addEventListener("mouseover", function(){
        this.style.color = "orange";
    })
}