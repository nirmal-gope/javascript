
var nb1=parseInt(prompt("donner votre premier numero"));
var nb2=parseInt(prompt("donner votre deuxième numéro"));
if(nb1<nb2){
    document.write("Votre premier nombre " +nb1+ " est inférieur au deuxième nombre"+ nb2+" :"+nb1+"<"+nb2);
}else if(nb1>nb2){
    document.write("Votre premier nombre " +nb1+ " est supérieur au deuxième nombre "+ nb2+" :"+nb1+">"+nb2);
}else if(nb1==nb2){
    document.write("Votre premier nombre " +nb1+ " est égal au deuxième nombre "+ nb2+" :"+nb1+"="+nb2);
}else{
    alert("vous n'avez pas saisi de nombre. veuillez recommencer la saisie");
}

//..............correction avec vérifications de type des variables qu'il soit number................
//isNaN() renvoie true lorsque la variable  est n'est pas de type number

if((!isNaN(nb1)) && (!isNaN(nb2))){
    if(nb1<nb2){
        document.write("Votre premier nombre " +nb1+ " est inférieur au deuxième nombre"+ nb2+" :"+nb1+"<"+nb2);
    }else if(nb1>nb2){
        document.write("Votre premier nombre " +nb1+ " est supérieur au deuxième nombre "+ nb2+" :"+nb1+">"+nb2);
    }else if(nb1==nb2){
        document.write("Votre premier nombre " +nb1+ " est égal au deuxième nombre "+ nb2+" :"+nb1+"="+nb2);
    }

}else{
    alert("vous n'avez pas saisi de nombre. veuillez recommencer la saisie");
}




