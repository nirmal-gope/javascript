
/* var prixHT=prompt("saisir le prix Hors taxe");
prixHT=parseInt(prixHT);
var prixTTC=prixHT + (prixHT*0.2);
alert("Votre TTC "+prixTTC+"€"); */


var prixTTC=prompt("saisir le en TTC");
var prixHT=prixTTC/1.2;
alert("Votre HT "+prixHT+"€");
document.write(prixHT+"€");
