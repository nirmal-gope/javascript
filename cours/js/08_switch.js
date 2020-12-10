/*
Syntaxe switch
var semaine=prompt("donnez un chiffre entre 1 et 7");
switch(semaine){//selon la valeur de la variable semaine
    case 1: //cas numero 1(c'est la premier valeur de semain)
    instruction1;
    break;
    case 2:
        instruction2;
        break;
    case 3:
        instruction3;
        break;//break pour sortir de  ce cas la
    default://on fait d'autres possiblités , on traite les cas d'erreurs de l'utilisateur

}
*/
/*
var semaine=parseInt(prompt("donnez un chiffre entre 1 et 7"));
switch(semaine){
    case 1:
        console.log("le chiffre tapper correspand a Lundi");
        break;
    case 2:
        console.log("le chiffre tapper correspand a mardi");
        break;
    case 3:
            console.log("le chiffre tapper correspand a mercredi");
            break;
    case 4:
        console.log("le chiffre tapper correspand a jeudi");
        break;
    case 5:
        console.log("le chiffre tapper correspand a vendredi");
        break;
    case 6:
        console.log("le chiffre tapper correspand a samedi");
        break;
    case 7:
        console.log("le chiffre tapper correspand a dimanche");
        break;
    default:
        console.log("le chiffre tappez ne correspand pas a un jour de semaine");
}
*/

/*
//demander a l'utilisateur de tapper le premier caractére de son navigateur préferé

var browser=prompt("Tappez le premier caractère de ton navigateur en MAJUSCULE");
switch(browser){
    case "C":
        document.write("votre navigateur préferé Chrome");
        break;
    case "M":
        document.write("votre navigateur préferé Mozilla");
        break;
    case "E":
        document.write("votre navigateur préferé Edge");
        break;
    case "O":
        document.write("votre navigateur préferé Opera");
        break;
    case "S":
        document.write("votre navigateur préferé Safari");
        break;
    default:
        document.write("Le caractère ne correspand pas de votre nevigateur");
}
*/
var nb=prompt("Donner un opérateur arithmétique");
var a=10;
var b=5;
switch(nb){
    case "+":
        document.write("l'adition de "+a+" et "+b+" = "+(a+b));
        break;
    case "-":
        document.write("la soustraction de "+a+" et "+b+" = "+(a-b));
        break;
    case "*":
        document.write("la multiplication de "+a+" et "+b+" = "+(a*b));
        break;
    case "/":
        document.write("la division de "+a+" et "+b+" = "+(a/b));
        break;
    case "%":
        document.write("la modulo de "+a+" et "+b+" = "+(a%b));
        break;
    default:
        document.write("l'opérateur saisir n'existe pas")
}