
//program to check number of days.....

var nb=prompt("saisir un mois");

 if(nb==1 || nb==3 || nb==5 || nb==7 || nb==8 || nb==10 || nb==12){
    document.write("Ce mois contaient 31 jours");
}else if(nb==4 || nb==6 || nb==9 || nb==11){
    document.write("Ce mois contaient 30 jours")
}else if(nb==2){
    document.write("Ce mois contaient 28 jours")
}else{
    document.write("Le numéro de ce mois n'est pas correct");
 }
