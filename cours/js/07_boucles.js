//les boucles permettent de répéter des actions n fois
//on a la boucle for(pour ....), la boucle while(tant que ....), la boucle do while()
/**
 * syntaxe de boucle for
 * for(la valeur de démarrage de boucle ; la limite de la boucle; le chiffre d'incrémentation)
 * for(var i=0;i<10;i++), la boucle va commencer de 0 jusqu'au 9, on s'incrémentant a chque fois de 1
 */
/*------Exemple pour boucle for-----*/
for(var i = 0; i<10; i++){//la boucle commence a 0 et s'incrémente a chque fois de 1
    document.write(i+"<br>");
    
}
//incrémentation par 2 ou plus
for(var i = 0; i<10; i=i+2){//la boucle commence a 0 et s'incrémente a chque fois de 2
    document.write(i+"<br>");
    
}
//creer une boucle de 0 a 5, on s'incrémente de 1 qui calcule et affiche a chaque fois le carré de valeur courante de i
for(var i=0;i<=5;i++){
    document.write(i+"*"+i+"="+i*i+"<br>");
}
document.write("<h3>---------------boucle while----------------------------</h3>");
/*-------la boucle while(tant que)-------*/
/*
    while(condition){
        //des instructions
    }
*/
var nb=5;
while(nb<10){//tant que la valeur de la variable nb est inferieur a 10 exécute moi ces instructions
    document.write(nb+"<br>");
    nb++;
}
document.write("------------------------------------------------------<br>");
//exercice boucle while
//j'ai 1000 euro dans mon compte; chaque mois j'ajoute 50 euro, combien de mois me faut il pour atteindre la valeur maximal donné par l'utilisateur euro
var compte=1000;//j'intialise mon compte a 1000 euro
var maxCompte=prompt("Donnez moi la valeur maximale a atteindre sur ton compte");
var temps=0;//j'initilise un compteur a 0 qui va s'incrémenter a chaque fois lorsque j'ajoute 50 euro
while(compte<maxCompte){//la valeur maxCompte c'est la limite de condition pour sortir de la boucle, elle va s'arreter de faire l'exécution
     compte=compte+50;//compte+=50;//on va incrémenter notre compte de 50 euro a chque itération
 //document.write(compte+"<br>");
    temps++;
 //document.write(temps+"<br>");
}
document.write("Il me faut "+temps+" mois pour atteindre "+maxCompte+" euro");
/*
syntaxe de do while

do{
    instruction1...
    var nb=1;
}while(condition);
*/
document.write("<h3>..............Boucle while..........</h3>")

var nb1=10;
while(nb1<10){
    document.write(nb1+ "<br>");
    nb1++;
}

document.write("<h3>.........Boucle do while.....</h3>");
//avec do while, on exécute au mois une fois les instructions avant de vérifié la condition
var nb2=10;
do{
document.write(nb2+"<br>");
nb1++;
}while(nb2<10);
