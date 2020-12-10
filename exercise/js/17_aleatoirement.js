// var solution=Math.floor(Math.random()*100)+1; //c'est valeur generer aleatoirement
var solution=Math.floor(Math.random()*100)+1;
console.log(solution);
/*
var compteur=0;
while(nb!=solution && compteur<7){
   var nb=prompt("tappez un chiffre");
   compteur++;
    if(nb>solution){
        alert("tappez un chiffre petit");
    }else if(nb<solution){
        alert("tappez un chiffre grand");
    }
}alert("Bravo! La solution était "+solution);
*/

for(var compteur=1;compteur<=6;compteur++){
    var nb=prompt("Tappez un chiffre");
    if(compteur<6){
        if(nb==solution){
            document.write("Bravo! tu as trouvé la solution au bout de "+compteur+" tours");
            compteur=6;
        }else{
            if(nb>solution){
                alert("ton chiffre est plus grand");
            }else{
                alert("ton chiffre est plus petite");
            }
        } 
    }else{
        document.write("Dommage la partie est terminée, le nombre chercher est "+solution);
    }
  
}
