
var nb=parseInt(prompt("Veuillez saisir votre moyenne"));
if(isNaN(nb)){
    document.write("il faut tapper un chiffre");
}else{
    if(nb<10){
        document.write("votre moyenne est de "+nb+". Vous êtes recalé");
    }else if(nb>=10 && nb<12){
        document.write("Votre moyenne est de "+nb+". vous êtes reçu");
    }else if(nb>=12 && nb<=20){
        document.write("votre moyenne est de "+nb+": Félicitations!! Vous êtes reçu avec mention");
    }else{
        document.write("le chiffre est grand");
    }
}

