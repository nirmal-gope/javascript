//Affichage de la liste des produits d'un tableau
var fruits=['Mangue','Fraise','Figue','Kiwi'];
//première methode sans l'utilisation d'une boucle
//affichage du premier produit
document.write(fruits[0]+"<br>");
document.write(fruits[1]+"<br>");
document.write(fruits[2]+"<br>");
document.write(fruits[3]+"<br>");
//deuxieme méthode avec boucle
document.write("<h4>--------------------Affichage des élements du tableau avec une boucle---------</h4>");
var fruit =prompt("Saisir un nom de produit");
// boucle for pour afficher la liste des produits
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }
//déclaration d'une variable booléane
var reponse=false;//je déclare une variable qui indique que le produit n'existe pas
var nomFruit="";
for(var i=0;i<fruits.length;i++){
    //demandez a l'utilisateur de saisir un nom de fruit
    if(fruit==fruits[i]){
       reponse=true;
       nomFruit=fruits[i];//pour récupérer le nom du produit existe dans le tableau
    }
}
if(reponse==true){
    document.write("le produit "+ nomFruit+ " existe");
}else{
    document.write("le produit n'existe pas");
}