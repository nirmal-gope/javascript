//le tableaux c'est un type de variable, servent a stocker plusieurs informations et de type différents dans une meme variable
//les tableaux sont des variables particulières qu'on retrouve dans presque tous les languages de programation
//un tableau est constitué d'une seule ligne et plusieurs colonnes(nombre de colonnes c'est infinie)
//les tableaux servent aussi a contenir les resultats des autres script dans un programme

/*
La déclaration d'un tableau
//Première méthode de déclaration d'un tableau
var apprenants=new Array("Ameli","Gope","Riad","Mona","Diana");
//Deuxiéme méthode
var apprenants= ["Nirmal","Omar","Alex","Gabrial"];
//les indices du tableau commence par 0 en tant que premier element, permettent d'accéder aux informations du tableau
*/
/*
var apprenants=["Jean","Nirmal","Omar","Alexis","Mona"];
document.write(apprenants[1]);

for(var i=0;i<apprenants.length;i++){
    document.write(apprenants[i]+"<br>");
}
*/
var chiffres=[1,5,8,7,9,45,12,32,55,14,91,22];
for(var i=0;i<chiffres.length;i++){
    if(chiffres[i]%2===0){
        document.write("Le chiffre "+chiffres[i]+" est pair<br>")
    }else{
    document.write("Le chiffre "+chiffres[i]+" est unpair<br>")
    }
}


document.write("<h4>-------Quelques fonctions sur les tableaux---------</h4>")
//quelques fonctions sur les tableaux
var tabs=['Mathilde','Rafael'];
//la fonction push(), ajoute un élement a la fin du tableau
tabs.push("Ahmad");
tabs.push("Alexandre");
console.log(tabs);
//la fonction pop(), permet de retirer le dernier élement du tableau
tabs.pop();
console.log(tabs);
//la fonction shift(), permet du retirer le premier élement du tableau
tabs.shift();
console.log(tabs);



