var ouiNon="";
var compteur=1;
while(ouiNon!=="oui" && ouiNon!=="non"){
    ouiNon=prompt("Dis mois oui ou non");
    document.write(ouiNon+" pour la "+compteur+" fois, dis mois oui ou non! <br>");
    compteur++;
    }document.write("<h1 style='background-color:cyan; text-align:center;'> FINI! </h1>");


