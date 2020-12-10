
var nb=prompt("Tapper un nombre inférieur ou égal à 10");
if(!isNaN(nb)){
    for(var compteur=1;compteur<=nb;compteur++){
        if(compteur%2===0){
            document.write("Le chiffre "+compteur+" est pair<br>")
        }else{
        document.write("Le chiffre "+compteur+" est unpair<br>")
        }
    }
}else{
    document.write("Tapper un number SVP!");
}

//on commence a partir de chiffre tapper par l'utilisateur on ajoutant 10

var nb1=parseInt(prompt("chaisir un numbre entier"));
for(var compteur1=nb1;compteur1<=(nb1+10);compteur1++){
            if(compteur1%2===0){
            document.write("Le chiffre "+compteur1+" est pair<br>")
        }else{
        document.write("Le chiffre "+compteur1+" est unpair<br>")
        }

}