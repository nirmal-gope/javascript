/*
var nb1=123,nb2="123"; 
//l'operatoeur de comparaison == signifie égal à
if(nb1==nb2){//teste est ce que les valeurs des variables sont égaux, == test que sur les valeurs
console.log("les deux valeurs sont égaux");
}
//en tester sur la valeurs et le type
if(nb1===nb2){// === signifie que les deux variables sont strictment egaux(égaux en valeur et égaux en type)
    //puisque nb1 n'est pas strictment égal a nb2, donc la condition n'est pas vrai et il va pas executer ce que est entre les {}
    console.log("les deux variables sont identiques en valeurs et en types");
}
*/
/*
if(true){

}else{

}
En gros si la condition est verifee donc retourne true, si non retourne false
*/

//l'opérateur different à != , on apple not egal par --différent à--
/*
if(nb1!=nb2){//retourne false, donc il vas pas éxecuter ce bloc la, il passe au else suivante
console.log("ces deux variables sont pas égaux");
}else{
    console.log("les deux variables sont égaux");
}
//l'opérateur strictment différent !== , ici il teste sur la valeur et type
if(nb1!==nb2){//retourne true, parce que ici deux variables sont pas identique en terme de valeurs et type(ici ce qui valide la condition c'est le type qui est différent(l'une est number l'autre est de type string))
    console.log("les deux variables sont strictment differents");
}
/*
on a 4 opérateurs de comparaison
== égal à(si la valeur égal à)
!= not égal à(si la valeur est différent)
=== strictment égal à(si il est égal à en terme de valeur et type)
!== strictment différent à(si la variable est différent à l'autre à variavle(soit en type, soit en valeur, soit en les deux))
*/ 

/*         
Exercice
var prenom,age;
prenom="Amal";
age=60;
tu arrive sur un systeme sécurisé, ou il te demande de saisir ton prenom et ton age pour que tu puisse y accéder.
Au debut il te demande de saisir le prenom(a verfier avec la variable prenom en haut), si le prenom est valider je demande l'age qui est aussi verifier avec la varibale age en haut.
si tout va bien , il affiche un message de bienvenue dans votre espace sécurisé, si non des messages d'echec...
*/

var prenom="Amal",age=60,pass=12345;
var votrePrenom=prompt("Saisir votre prenom");
if(votrePrenom.toLowerCase()==prenom.toLowerCase()){//toLowerCase for Amal/amal/AMAL...
    var votreAge=prompt("Saisir votre age");
    if(votreAge==age){
        var motPass=prompt("Saisir votre mot de pass");
        if(motPass==pass){
            alert("Bienvenue dans votre espace sécurisé");
        }else{
            alert("Votre mot de pass n'est pas correct");
        }
    }else{
        alert("Votre age n'est pas correct");
    }
}else{
    alert("Prenom n'est pas correct");

}



//la boite de dialogue confirm
var dev=confirm("Aimez-vous le dévelopment");
if(dev==true){
    console.log("c'est génial");
}else{
    console.log("Quel Dommage!")
}


var dev=confirm("Aimez-vous le dévelopment");
if(dev==true){
    console.log("c'est génial");
    var javascript=confirm("La programation en js sussi, js suppose")
    if(javascript=true){
        document.write("C'est génial, bienvenue dans le jungle")
    }else{
        document.write("Dommage la javascript vous permet d'animer votre page web")
    }
}else{
    console.log("Quel Dommage!");
}



