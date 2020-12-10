
var nbTours=prompt("Tapper le nombre de tour voulu");
//avec boucle while
var compteur=1;
if(nbTours<=10){
while(compteur<=nbTours){
    //tant  que compteur <=maxNb fait ceci.......
    document.write("c'est le tour n°: "+compteur+"<br>");
    compteur++;// j'incrément le compteur qui affiche le nombre de tour a chaque fois
    }
}else{
    document.write("Il faut tapper un chiffre inférieur ou égal à 10");
}


//avec boucle for
if(nbTours<=10){
    for(var tour=1; tour<=nbTours; tour++){
        document.write("c'est le tour de manège n°: "+tour+"<br>");
    }
}else{
    document.write("Il faut tapper un chiffre inférieur ou égal à 10");
}
