// program Année bissextile.............

var year=parseInt(prompt("Tapez une année"));

if(!isNaN(year)){
    if((year%4==0 && year%100!=0) || year%400==0){
        document.write("C'est une année bissextile");
}else{
    document.write("Ce n'est pas une année bissextile");
}

}else{
    document.write("Tapez une année correcte");
}