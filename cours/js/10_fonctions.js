//les fonctions contienent des  fontionnalités qui sont réutilisables plusieurs fois dans un programme(site web, applications,...), les fonctions sont utilisés par la grandes majorités des languages de programmations 
//les fonctions on peut l'appeler partout dans un programme
//la syntaxe de fonction 
/*
function nomFonction(arguments(optionel)) {
    //ici on va mettre les instructions
}
*/
function  hello(){//c'est une fonction sans arguments
    console.log("hello World!");
}
//appel d'une fonction, l'execution d'une fonction se déclenche que lorsqu'on appel la fonction
hello();
/*
fonction avec des arguments
function multiplication(a,b){
    
}
*/
var tabs=["Rafael", "Alexandre"];//c'est une décalaration d'une variable global
function mult(a,b){//(a et b sont les entrées pour que la fonction tourne)
    var result=a*b;//déclaration d'une variable local
    return result;
    
}
//appel d'une fonction avec parametres
console.log(mult(30,2));
//creer une fonction prixTTC(prixHt,tva)

//tva
function prixTTC=prixHT + (prixHT*0.2){
    var prixHT=prixTTC/1.2;
    return prixHT;
}

prixTTC=prompt("saisir le en TTC");
document.write(prixHT+"€");