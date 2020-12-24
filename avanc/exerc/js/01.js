/*
Exercice-1:
// L'internaute met dans son panier 0.8kg de pommes et 0.7kg de poires.
// Vous déclarez des variables, une pour chaque fruit, une pour chaque poids.
// Puis vous affichez la phrase "Votre panier contient des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids sont des variables.

let monFruit1 = "pommes",
 monFruit2 = "poires", 
 poid1=0.8,
 poid2=0.7,
 poid=poid1+poid2;
 document.write("Votre panier contient des "+monFruit1+" et des "+monFruit2+" pour un poids total de "+poid+" kg");
................................................

// Exercice-2 :
// Demandez l'âge de l'internaute dans un prompt.
// Si la réponse est vide (on compare avec des quotes vides sans espace), on affiche "Vous n'avez pas répondu".
// Si la réponse n'est pas nombre, on affiche "Vous n'avez pas indiqué un nombre."
// Si la réponse est valide, on affiche "Vous avez indiqué avoir X ans." où X est l'âge de l'internaute.

let age=prompt("Quel est votre age ?");
if(age == "" || age == null){
    document.write("Vous n'avez pas répondu");
}else if(isNaN(age)){
    document.write("Vous n'avez pas indiqué un nombre.");
}else{
    document.write("Vous avez indiqué avoir "+ age +" ans.");
}
......................................
//Exercice-3: stocker toutes les couleurs recueillies dans un prompt et ne les afficher que lorsque l'utilosateur aura écrit "stop"
//on commence par créer nos variables (ici on a besoin de deux variables)
//mise en place de la boucle avec des conditions à l'intérieur 
//La boucle while(true): s'arrete avec, à l'intérieur, une condition qui déclenche un "break" qui permet de sortir de la boucle.
var stock="";
var color=prompt("Saisir un nom de coleur ou écrivez stop");
while(true){
    if(color!="stop"){
        stock+=color+"<br>";
        color=prompt("Saisir une autre coleur");    
    } else {
       break; 
    }  
}
document.write("Liste de toutes les couleurs : <br>"+ stock);
..................................................

//Boucle imbriquée
document.write("<table border=5 style='border-color: blue'<tr>");
for(var z=1;z<=100;z+=10){
    console.log(z);
    for(var m=z;m<=z+9;m++){
    document.write("<td>"+m+"</td>");
    }
    document.write("</tr>");  
}
document.write("</table>");

*/


//-------------------------------
// Commentaires
//-------------------------------

// pour faire un commentaire sur 1 seule ligne

/*
   pour faire
   un commentaire
   sur plusieurs lignes
*/



//-------------------------------
// Affichage
//-------------------------------

document.write('mon premier message');   // permet d'afficher un message dans le navigateur

document.write('<h1>Les bases du JavaScript</h1>');  // on peut mettre des balises HTML : elles sont interprétées (insérées dans le code HTML)

// Toutes les instructions JavaScript se finissent par un ";".

// Les boîtes de dialogues :
//alert('Salut');  // affiche un message 
//confirm('Etes-vous sûr ?');  // affiche un message avec des boutons de confirmation "ok" et "annuler"
//prompt('Quel est votre code postal ?');  // affiche une boîte de dialogue avec un champ à remplir

// Afficher dans la console :
console.log('message affiché dans la console');  // message écrit dans la console de débugage : F12 > onglet console ou Clic droit > inspecter > onglet console




//-------------------------------
// Variables
//-------------------------------
document.write('<h2>Variables</h2>');
// Une variable est un espace mémoire qui porte un nom et dans lequel nous stockons une donnée, une valeur. Cette donnée peut être de n'importe quel type : nombre, chaîne de caractères, un élément HTML, etc...

// Déclaration d'une variable :
var maBoite;  // le mot clé "var" permet de déclarer (= créer) la variable nommée "maBoite". Caractères acceptés dans le nom de la variable : a à z, A à Z, de 0 à 9 (jamais au début), et le "_" (jamais au début ni à la fin). Par convention, on met une minuscule au début, puis une majuscule à chaque mot.

// Attention : le JS est sensible à la casse : maBoite est différente de maboite.

// Affectation de la variable :
maBoite = 10;  // on affecte (= donner une valeur) une valeur à une variable avec le signe "=".
document.write(maBoite);  // on affiche le contenu de la variable en l'écrivant sans quotes.

var maBoite = 10;  // on peut déclarer et affecter une variable en même temps.

monAutreBoite = 'Bonjour';  // cette écriture est possible (sans "var"), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "portée des variables").

document.write('<br>');  // saut de ligne

//------
// Le mot clé "let" : depuis ES6 (2015) il est recommandé dans les bonnes pratiques JS de déclarer les variables avec "let" car cela limite leur portée (= l'endroit où la variable pourra être utilisée) au bloc dans lequel elles sont définies (voir chapitre "portée des variables"). Un bloc est délimité par des {}.
let maBoite2 = 10;


//------
// Déclarer et affecter plusieurs variables en même temps :
let prenom = 'Harry',
    nom = 'Potter',
    profession = 'magicien';  // on peut déclarer plusieurs variables en même temps avec un seul "let". Il suffit de les séparer par une virgule, et de finir par un ";".
document.write(prenom);  // affiche Harry
document.write('<br>');

// Changer la valeur d'une variable :
prenom = 'Pierre';  // ici nous supprimons la valeur "Harry" et mettons "Pierre" à la place.
document.write(prenom); // affiche Pierre
document.write('<br>');

// Ajouter une valeur à la valeur d'une variable :
let message = 'Bonjour ';
message += 'tout le monde';  // l'opérateur += ajoute une valeur sans remplacer le contenu d'origine
document.write(message);  // affiche "Bonjour tout le monde"
document.write('<br>');

//------
// Utilisation avec prompt :
//let reponse1 = prompt('Quelle est la capitale de la France ?');  // nous pouvons stocker ce que va saisir l'internaute
//document.write(reponse1); 




//-------------------------------
// Types de données
//-------------------------------
document.write('<h2>Type de données</h2>');
// On commence par les 3 principaux types de données dits primitifs :

// Le type numérique : NUMBER
let chiffre = 20;  // affectation tel quel sans quotes ni guillemets. Tous les types d'écritures numériques sont possibles (négatifs, positifs, décimaux...).


//------
// Le type chaîne de caractères : STRING
let monTexte = "une phrase écrite entre guillemets";
let apostrophe = 'pour utiliser une apostrophe dans les quotes simples, il faut mettre un caractère d\'échappement'; // altGR + 8
// Les quotes ou les guillemets indiquent que le type est un STRING.
let numero = '10'; // si nous écrivons un chiffre entre quotes ou guillemets, il sera de type string.


//------
// Le type booléen : BOOLEAN
// Ce type ne prends que 2 valeurs : true ou false.
let choix = true;  // ou alors false


//------
// La fonction prédéfinie typeof() permet de vérifier le type d'une variable :
document.write(typeof(chiffre));  // number
document.write('<br>');

document.write(typeof(monTexte));  // string
document.write('<br>');

document.write(typeof(numero));  // string 
document.write('<br>');

document.write(typeof(choix));  // boolean 
document.write('<br>');



//-------------------------------
// Constantes
//-------------------------------
document.write('<h2>Constantes</h2>');
// Les constantes sont comme des variables mais dont la valeur ne peut pas être modifiée.

const TAUX = 6.55957;  // déclare une constante nommée TAUX. Par convention, les constantes s'écrivent en majuscules.
document.write(TAUX);  // affiche la valeur 6.55957

// TAUX = 'autre valeur';  // impossible car génère une erreur : on ne peut pas modifier la valeur d'une constante.



//-------------------------------
// Concaténation
//-------------------------------
document.write('<h2>Concaténation</h2>');
// En JavaScript on fait suivre les strings avec le signe "+" : cela s'appelle concaténer.

let personnage_prenom = 'Bruce',
    personnage_nom = 'Wayne';

document.write('Bonjour ' + personnage_prenom + ' ' + personnage_nom);  // on concatène "Bonjour" avec le prénom puis un espace puis le nom.
document.write('<p>Bonjour ' + personnage_prenom + ' ' + personnage_nom + '</p>');  // on peut mettre des balises HTML sous forme de strings et les concaténer.



//-------------------------------
// Les opérateurs arithmétiques
//-------------------------------
document.write('<h2>Les opérateurs arithmétiques</h2>');

let resultat;

resultat = 10 + 5;  // addition
document.write(resultat + '<br>');  // 15

resultat = 10 - 5;  // soustraction
document.write(resultat + '<br>');  // 5

resultat = 10 * 5;  // multiplication
document.write(resultat + '<br>');  // 50

resultat = 10 / 5;  // division
document.write(resultat + '<br>');  // 2

resultat = 10 % 3;  // modulo = reste de la division entière (j'ai 10 billes et je les répartis équitablement sur 3 personnes, il m'en reste 1)
document.write(resultat + '<br>');  // 1


//------
// On peut appliquer les opérateurs aux variables :
let chiffre1 = 10,
    chiffre2 = 5;

resultat = chiffre1 + chiffre2;
document.write(resultat + '<br>');  // 15


let chiffre3 = 10;
chiffre3 = chiffre3 + 5;  // au final de cette opération chiffre3 vaut 15. Mais on utilise la syntaxe suivante :
chiffre3 += 5;  // on ajoute 5 à la valeur actuelle de chiffre3. On obtient donc 20.
document.write(chiffre3 + '<br>');  // 20
// Fonctionne avec tous les opérateurs : +=, -=, /=, *= et %=

//-------
// Incrémenter et décrémenter :
let i = 0;

i++;  // incrémenter : on ajoute 1 à la valeur de i
document.write(i + '<br>');  // 1

i--;  // décrémenter : on soustrait 1 à la valeur de i
document.write(i + '<br>');  // 0


// Exercice :
// L'internaute met dans son panier 0.8kg de pommes et 0.7kg de poires.
// Vous déclarez des variables, une pour chaque fruit, une pour chaque poids.
// Puis vous affichez la phrase "Votre panier contient des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids sont des variables.
let monFruit1 = 'pommes',
    monFruit2 = 'poires',
    poids1 = 0.8,
    poids2 = 0.7,
    poidsTotal = poids1 + poids2;

document.write('Votre panier contient des ' + monFruit1 + ' et des ' + monFruit2 + ' pour un poids total de ' + poidsTotal + 'Kg.');



//-------------------------------
// Les structures conditionnelles
//-------------------------------
document.write('<h2>Les structures conditionnelles</h2>');

let a = 10,
    b = 5,
    c = 2;

// if ... else :
if (a > b) {  // si a est supérieur à b, alors on entre dans les accolades qui suivent :
    document.write ('a est supérieur à b <br>');
} else {  // sinon, si la condition est fausse, on entre dans le else :
    document.write('b est supérieur à a <br>');
}  

// if avec AND qui s'écrit && :
if (a > b && b > c) { // si a est supérieur à b ET que dans le même temps b est supérieur à c, on entre alors dans les accolades :
    document.write('Vrai pour les 2 conditions <br>');
}

// FALSE && FALSE  => FALSE
// TRUE && FALSE   => FALSE


// if avec OR qui s'écrit || :
if (a == 9 || b > c) {  // si a est égal (==) à 9 ou alors si b est supérieur c, dans ce cas on entre dans les accolades :
    document.write('Vrai pour au moins une des 2 conditions <br>');
}


// if ... else if ... else :
if (a == 8) {  // si a est égal à 8
    document.write('a est égal à 8 <br>');
} else if (a != 10) {  // sinon si a est différent (!=) de 10
    document.write('a est différent de 10 <br>');
} else { // sinon c'est que ni le if est vrai, ni le else if. Je tombe alors dans le else.
    document.write('Les 2 conditions précédentes sont fausses <br>');
}

// Note : jamais de () après un else. Le else n'est pas obligatoire en fin de condition.


//------
// Comparaison avec == et === :
let varA = 1,  // number
    varB = '1';  // string

if (varA == varB) {  // avec le == on compare en valeur uniquement. Ici la condition est donc vraie.
    document.write('varA est égal à varB en VALEUR uniquement <br>');
}

if (varA === varB) {  // avec le === on compare en valeur et en type (strictement égal). Ici la condition est fausse car le type est différent.
    document.write('varA est égal à varB en VALEUR et en TYPE <br>');
} else {
    document.write('varA est différent de varB en VALEUR et/ou en TYPE <br>');
}


//------
// Condition ternaire :
// La syntaxe ternaire est une autre syntaxe du if...else.
let voiture = 'bmw';
let origine = (voiture == 'bmw') ? 'origine allemande <br>' : 'autre origine <br>'; // dans la ternaire, le "?" remplace if, et le ":" remplace else. Si la condition est vraie, on affecte à origine la première expression, sinon la seconde.
document.write(origine); 


//------
// isNaN() :
// NaN pour Not a Number. C'est utilisé pour représenter une quantité qui n'est pas un nombre. Exemple : 2 * 'lettres' ne peut s'effectuer et est NaN :
console.log(2 * 'lettres'); // NaN

let age_membre = '18';  // string
if (isNaN(age_membre)) {  // cette fonction vérifie si la variable n'est pas un nombre après conversion. Ici la condition est fausse car '18' est bien un nombre après conversion.
    document.write('Ce n\'est pas un nombre après conversion <br>');
} else {
    document.write('C\'est un nombre après conversion <br>');
}


//------
// L'opérateur NOT qui s'écrit "!" :
age_membre = 25;
if (!isNaN(age_membre)) {  // on teste si age_membre est bien un number. Le "!" est l'opérateur NOT qui est une négation. Il inverse donc ce qui est true en false, et ce qui est false en true.
    document.write('Le membre a bien indiqué un âge <br>');
}


//------
// Exercice :
// Demandez l'âge de l'internaute dans un prompt.
// Si la réponse est vide (on compare avec des quotes vides sans espace), on affiche "Vous n'avez pas répondu".
// Si la réponse n'est pas nombre, on affiche "Vous n'avez pas indiqué un nombre."
// Si la réponse est valide, on affiche "Vous avez indiqué avoir X ans." où X est l'âge de l'internaute.

//let age = prompt('Quel est votre âge ?');
/*console.log(age);

if (age == '' || age == null) {  // on a laissé le champ vide ou cliqué sur échap.
    document.write("Vous n'avez pas répondu");
} else if (isNaN(age)) {
    document.write("Vous n'avez pas indiqué un nombre.");
} else {
    document.write('Vous avez répondu avoir ' + age + ' ans.');
}
*/



//-------------------------------
// Synthèse de opérateurs
//-------------------------------
document.write('<h2>Synthèse de opérateurs</h2>');

/*
Les opérateurs de comparaison :
==      égal en valeur
!=      différent en valeur

===     strictement égal en valeur ET en type
!==     strictement différent en valeur ET/OU en type

>       supérieur à
<       inférieur à
>=      supérieur ou égal à
<=      inférieur ou égal à

Les opérateurs logiques :
AND qui s'écrit && :
true && true    => true
true && false   => false
false && true   => false
false && false  => false

OR qui s'écrit || :
true || true    => true
true || false   => true
false || true   => true
false || false  => false

NOT qui s'écrit ! :
!true   => false
!false  => true
*/


//-------------------------------
// Commentaires
//-------------------------------

// pour faire un commentaire sur 1 seule ligne

/*
   pour faire
   un commentaire
   sur plusieurs lignes
*/



//-------------------------------
// Affichage
//-------------------------------

document.write('mon premier message');   // permet d'afficher un message dans le navigateur

document.write('<h1>Les bases du JavaScript</h1>');  // on peut mettre des balises HTML : elles sont interprétées (insérées dans le code HTML)

// Toutes les instructions JavaScript se finissent par un ";".

// Les boîtes de dialogues :
//alert('Salut');  // affiche un message 
//confirm('Etes-vous sûr ?');  // affiche un message avec des boutons de confirmation "ok" et "annuler"
//prompt('Quel est votre code postal ?');  // affiche une boîte de dialogue avec un champ à remplir

// Afficher dans la console :
console.log('message affiché dans la console');  // message écrit dans la console de débugage : F12 > onglet console ou Clic droit > inspecter > onglet console




//-------------------------------
// Variables
//-------------------------------
document.write('<h2>Variables</h2>');
// Une variable est un espace mémoire qui porte un nom et dans lequel nous stockons une donnée, une valeur. Cette donnée peut être de n'importe quel type : nombre, chaîne de caractères, un élément HTML, etc...

// Déclaration d'une variable :
var maBoite;  // le mot clé "var" permet de déclarer (= créer) la variable nommée "maBoite". Caractères acceptés dans le nom de la variable : a à z, A à Z, de 0 à 9 (jamais au début), et le "_" (jamais au début ni à la fin). Par convention, on met une minuscule au début, puis une majuscule à chaque mot.

// Attention : le JS est sensible à la casse : maBoite est différente de maboite.

// Affectation de la variable :
maBoite = 10;  // on affecte (= donner une valeur) une valeur à une variable avec le signe "=".
document.write(maBoite);  // on affiche le contenu de la variable en l'écrivant sans quotes.

var maBoite = 10;  // on peut déclarer et affecter une variable en même temps.

monAutreBoite = 'Bonjour';  // cette écriture est possible (sans "var"), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "portée des variables").

document.write('<br>');  // saut de ligne

//------
// Le mot clé "let" : depuis ES6 (2015) il est recommandé dans les bonnes pratiques JS de déclarer les variables avec "let" car cela limite leur portée (= l'endroit où la variable pourra être utilisée) au bloc dans lequel elles sont définies (voir chapitre "portée des variables"). Un bloc est délimité par des {}.
let maBoite2 = 10;


//------
// Déclarer et affecter plusieurs variables en même temps :
let prenom = 'Harry',
    nom = 'Potter',
    profession = 'magicien';  // on peut déclarer plusieurs variables en même temps avec un seul "let". Il suffit de les séparer par une virgule, et de finir par un ";".
document.write(prenom);  // affiche Harry
document.write('<br>');

// Changer la valeur d'une variable :
prenom = 'Pierre';  // ici nous supprimons la valeur "Harry" et mettons "Pierre" à la place.
document.write(prenom); // affiche Pierre
document.write('<br>');

// Ajouter une valeur à la valeur d'une variable :
let message = 'Bonjour ';
message += 'tout le monde';  // l'opérateur += ajoute une valeur sans remplacer le contenu d'origine
document.write(message);  // affiche "Bonjour tout le monde"
document.write('<br>');

//------
// Utilisation avec prompt :
//let reponse1 = prompt('Quelle est la capitale de la France ?');  // nous pouvons stocker ce que va saisir l'internaute
//document.write(reponse1); 




//-------------------------------
// Types de données
//-------------------------------
document.write('<h2>Type de données</h2>');
// On commence par les 3 principaux types de données dits primitifs :

// Le type numérique : NUMBER
let chiffre = 20;  // affectation tel quel sans quotes ni guillemets. Tous les types d'écritures numériques sont possibles (négatifs, positifs, décimaux...).


//------
// Le type chaîne de caractères : STRING
let monTexte = "une phrase écrite entre guillemets";
let apostrophe = 'pour utiliser une apostrophe dans les quotes simples, il faut mettre un caractère d\'échappement'; // altGR + 8
// Les quotes ou les guillemets indiquent que le type est un STRING.
let numero = '10'; // si nous écrivons un chiffre entre quotes ou guillemets, il sera de type string.


//------
// Le type booléen : BOOLEAN
// Ce type ne prends que 2 valeurs : true ou false.
let choix = true;  // ou alors false


//------
// La fonction prédéfinie typeof() permet de vérifier le type d'une variable :
document.write(typeof(chiffre));  // number
document.write('<br>');

document.write(typeof(monTexte));  // string
document.write('<br>');

document.write(typeof(numero));  // string 
document.write('<br>');

document.write(typeof(choix));  // boolean 
document.write('<br>');



//-------------------------------
// Constantes
//-------------------------------
document.write('<h2>Constantes</h2>');
// Les constantes sont comme des variables mais dont la valeur ne peut pas être modifiée.

const TAUX = 6.55957;  // déclare une constante nommée TAUX. Par convention, les constantes s'écrivent en majuscules.
document.write(TAUX);  // affiche la valeur 6.55957

// TAUX = 'autre valeur';  // impossible car génère une erreur : on ne peut pas modifier la valeur d'une constante.



//-------------------------------
// Concaténation
//-------------------------------
document.write('<h2>Concaténation</h2>');
// En JavaScript on fait suivre les strings avec le signe "+" : cela s'appelle concaténer.

let personnage_prenom = 'Bruce',
    personnage_nom = 'Wayne';

document.write('Bonjour ' + personnage_prenom + ' ' + personnage_nom);  // on concatène "Bonjour" avec le prénom puis un espace puis le nom.
document.write('<p>Bonjour ' + personnage_prenom + ' ' + personnage_nom + '</p>');  // on peut mettre des balises HTML sous forme de strings et les concaténer.



//-------------------------------
// Les opérateurs arithmétiques
//-------------------------------
document.write('<h2>Les opérateurs arithmétiques</h2>');

let resultat;

resultat = 10 + 5;  // addition
document.write(resultat + '<br>');  // 15

resultat = 10 - 5;  // soustraction
document.write(resultat + '<br>');  // 5

resultat = 10 * 5;  // multiplication
document.write(resultat + '<br>');  // 50

resultat = 10 / 5;  // division
document.write(resultat + '<br>');  // 2

resultat = 10 % 3;  // modulo = reste de la division entière (j'ai 10 billes et je les répartis équitablement sur 3 personnes, il m'en reste 1)
document.write(resultat + '<br>');  // 1


//------
// On peut appliquer les opérateurs aux variables :
let chiffre1 = 10,
    chiffre2 = 5;

resultat = chiffre1 + chiffre2;
document.write(resultat + '<br>');  // 15


let chiffre3 = 10;
chiffre3 = chiffre3 + 5;  // au final de cette opération chiffre3 vaut 15. Mais on utilise la syntaxe suivante :
chiffre3 += 5;  // on ajoute 5 à la valeur actuelle de chiffre3. On obtient donc 20.
document.write(chiffre3 + '<br>');  // 20
// Fonctionne avec tous les opérateurs : +=, -=, /=, *= et %=

//-------
// Incrémenter et décrémenter :
let i = 0;

i++;  // incrémenter : on ajoute 1 à la valeur de i
document.write(i + '<br>');  // 1

i--;  // décrémenter : on soustrait 1 à la valeur de i
document.write(i + '<br>');  // 0


// Exercice :
// L'internaute met dans son panier 0.8kg de pommes et 0.7kg de poires.
// Vous déclarez des variables, une pour chaque fruit, une pour chaque poids.
// Puis vous affichez la phrase "Votre panier contient des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids sont des variables.
let monFruit1 = 'pommes',
    monFruit2 = 'poires',
    poids1 = 0.8,
    poids2 = 0.7,
    poidsTotal = poids1 + poids2;

document.write('Votre panier contient des ' + monFruit1 + ' et des ' + monFruit2 + ' pour un poids total de ' + poidsTotal + 'Kg.');



//-------------------------------
// Les structures conditionnelles
//-------------------------------
document.write('<h2>Les structures conditionnelles</h2>');

let a = 10,
    b = 5,
    c = 2;

// if ... else :
if (a > b) {  // si a est supérieur à b, alors on entre dans les accolades qui suivent :
    document.write ('a est supérieur à b <br>');
} else {  // sinon, si la condition est fausse, on entre dans le else :
    document.write('b est supérieur à a <br>');
}  

// if avec AND qui s'écrit && :
if (a > b && b > c) { // si a est supérieur à b ET que dans le même temps b est supérieur à c, on entre alors dans les accolades :
    document.write('Vrai pour les 2 conditions <br>');
}

// FALSE && FALSE  => FALSE
// TRUE && FALSE   => FALSE


// if avec OR qui s'écrit || :
if (a == 9 || b > c) {  // si a est égal (==) à 9 ou alors si b est supérieur c, dans ce cas on entre dans les accolades :
    document.write('Vrai pour au moins une des 2 conditions <br>');
}


// if ... else if ... else :
if (a == 8) {  // si a est égal à 8
    document.write('a est égal à 8 <br>');
} else if (a != 10) {  // sinon si a est différent (!=) de 10
    document.write('a est différent de 10 <br>');
} else { // sinon c'est que ni le if est vrai, ni le else if. Je tombe alors dans le else.
    document.write('Les 2 conditions précédentes sont fausses <br>');
}

// Note : jamais de () après un else. Le else n'est pas obligatoire en fin de condition.


//------
// Comparaison avec == et === :
let varA = 1,  // number
    varB = '1';  // string

if (varA == varB) {  // avec le == on compare en valeur uniquement. Ici la condition est donc vraie.
    document.write('varA est égal à varB en VALEUR uniquement <br>');
}

if (varA === varB) {  // avec le === on compare en valeur et en type (strictement égal). Ici la condition est fausse car le type est différent.
    document.write('varA est égal à varB en VALEUR et en TYPE <br>');
} else {
    document.write('varA est différent de varB en VALEUR et/ou en TYPE <br>');
}


//------
// Condition ternaire :
// La syntaxe ternaire est une autre syntaxe du if...else.
let voiture = 'bmw';
let origine = (voiture == 'bmw') ? 'origine allemande <br>' : 'autre origine <br>'; // dans la ternaire, le "?" remplace if, et le ":" remplace else. Si la condition est vraie, on affecte à origine la première expression, sinon la seconde.
document.write(origine); 


//------
// isNaN() :
// NaN pour Not a Number. C'est utilisé pour représenter une quantité qui n'est pas un nombre. Exemple : 2 * 'lettres' ne peut s'effectuer et est NaN :
console.log(2 * 'lettres'); // NaN

let age_membre = '18';  // string
if (isNaN(age_membre)) {  // cette fonction vérifie si la variable n'est pas un nombre après conversion. Ici la condition est fausse car '18' est bien un nombre après conversion.
    document.write('Ce n\'est pas un nombre après conversion <br>');
} else {
    document.write('C\'est un nombre après conversion <br>');
}


//------
// L'opérateur NOT qui s'écrit "!" :
age_membre = 25;
if (!isNaN(age_membre)) {  // on teste si age_membre est bien un number. Le "!" est l'opérateur NOT qui est une négation. Il inverse donc ce qui est true en false, et ce qui est false en true.
    document.write('Le membre a bien indiqué un âge <br>');
}


//------
// Exercice :
// Demandez l'âge de l'internaute dans un prompt.
// Si la réponse est vide (on compare avec des quotes vides sans espace), on affiche "Vous n'avez pas répondu".
// Si la réponse n'est pas nombre, on affiche "Vous n'avez pas indiqué un nombre."
// Si la réponse est valide, on affiche "Vous avez indiqué avoir X ans." où X est l'âge de l'internaute.

//let age = prompt('Quel est votre âge ?');
/*console.log(age);

if (age == '' || age == null) {  // on a laissé le champ vide ou cliqué sur échap.
    document.write("Vous n'avez pas répondu");
} else if (isNaN(age)) {
    document.write("Vous n'avez pas indiqué un nombre.");
} else {
    document.write('Vous avez répondu avoir ' + age + ' ans.');
}
*/



//-------------------------------
// Synthèse de opérateurs
//-------------------------------
document.write('<h2>Synthèse de opérateurs</h2>');

/*
Les opérateurs de comparaison :
==      égal en valeur
!=      différent en valeur

===     strictement égal en valeur ET en type
!==     strictement différent en valeur ET/OU en type

>       supérieur à
<       inférieur à
>=      supérieur ou égal à
<=      inférieur ou égal à

Les opérateurs logiques :
AND qui s'écrit && :
true && true    => true
true && false   => false
false && true   => false
false && false  => false

OR qui s'écrit || :
true || true    => true
true || false   => true
false || true   => true
false || false  => false

NOT qui s'écrit ! :
!true   => false
!false  => true
*/


//-------------------------------
// La condition switch
//-------------------------------
document.write('<h2>La condition switch</h2>');
// La condition switch est une autre syntaxe pour écrire un if...else if...else quand on veut comparer une variable à une multitude de valeurs.

let couleur = 'jaune';

switch (couleur) {
    case 'bleu' :  // chaque "case" représente une valeur que peut prendre la variable. Si elle vaut "bleu", on exécute alors le code qui suit le case :
        document.write('Vous avez choisi le bleu <br>');
    break;  // obligatoire pour quitter le switch une fois un "case" exécuté
    case 'rouge' :
        document.write('Vous avez choisi le rouge <br>');
    break;
    case 'vert' :
        document.write('Vous avez choisi le vert <br>');
    break;    
    default :  // cas par défaut si on n'entre pas dans l'un des "case" précédents
        document.write('Vous n\'avez choisi ni le bleu, ni le vert, ni le rouge... <br>');
    break;
}

// Exercice : réécrivez ce switch avec des conditions if... afin d'obtenir le même résultat.
let couleur1 = 'jaune';

if (couleur1 == 'bleu') {
    document.write('Vous avez choisi le bleu <br>');
} else if (couleur1 == 'rouge') {
    document.write('Vous avez choisi le rouge <br>');
} else if (couleur1 == 'vert') {
    document.write('Vous avez choisi le vert <br>');
} else {
    document.write('Vous n\'avez choisi ni le bleu, ni le vert, ni le rouge... <br>');
}



//-------------------------------
// Les boucles
//-------------------------------
document.write('<h2>Les boucles</h2>');
// Les boucles sont destinées à répéter des lignes de codes de façon automatique.

// while :
document.write('<h3>La boucle while</h3>');
let j = 0;  // on initialise une variable à 0 qui sert de compteur

while (j < 3) {  // condition d'entrée dans la boucle. "tant que j < 3" on entre dans la boucle
    document.write(j + '<br>');
    j++; // on incrémente j. On n'oublie pas de varier la valeur de j sinon on se trouve dans une boucle infinie.
}

var z = 0;
while (z <= 5) {
    document.write(z + '---');
    z++;
}
document.write("<br>");

//Exercice: Retirer les tirets à la fin (derriere le chiffre 5)
var k = 0;
while(k <= 5) {
    if(k !=5) {
        document.write(k + "---");
    }else {
        document.write(k);
    }
    k++;
}
document.write("<br>");

var z = 0;
while (z <= 5) {
	if (z === 5)
		document.write(z);
	else
		document.write(z + '---');
	z++;
}
document.write("<br>");
//VOCABULAIRE
// i++ veut dire i = i + 1
// i-- veut dire i = i - 1

//Exercice : stocker toutes les couleurs recueillies dans un prompt et ne les afficher que lorsque l'utilisateur aura écrit "stop"

/*var color = prompt('Veuillez saisir une couleur ou écrivez stop');
var stock = "";

while(true) { // boucle infini
    if (color != 'stop') {
        stock += color + '<br>';
        color = prompt("veuillez saisir une Autre couleur");
    } else {
        break;
    }
}
document.write("Liste de toutes les couleurs : <br>" + stock);
*/
//La boucle while(true): s'arrete avec, à l'intérieur, une condition qui déclenche un "break" : c'est le break qui permet de sortir de la boucle.

// boucle for :
document.write('<h3>La boucle for</h3>');
// La boucle for est une autre syntaxe de la boucle while. Ici on réécrit la while précédente en for.
for (let j = 0; j < 3; j++) {  // dans les parenthèses on trouve : initialisation de la variable qui sert de compteur; la condition d'entrée dans la boucle; l'incrémentation
    document.write(j + '<br>');
}

//boucle imbriquée
document.write("<table border=5 style='border-color: Pink;'><tr>");
for(var z=1; z<=100; z+=10) { //j'incrémente 10 fois / boucle pour les lignes
    for(var m=z; m <= z+9; m++) { // boucle des cellules
        document.write('<td>' + m + '</td>'); 
    }
    document.write("</tr>");
}
document.write("</table>");

//Boucle Do...While
document.write('<h3>La boule DO While</h3>');

var z = 5;
do {
    document.write("ce code s'executera 1 fois seulement<br>");
    document.write(z);
    z++;
} while (z > 10); 

document.write("<h2>Fonctions PREDEFINIES</h2>");

//Comme dans tous les langages de programmation, le JS possède des fonctions. Ce sont des morceaux de code encapsulés qu'on appelle au besoin pour éxécuter une action précise.
//On distingue les fonctions prédéfinies et les fonctions utilisateurs

//Déclaration d'une variable
var phrase = "salut je m'appelle Eddy";
document.write(phrase + "<br>");
//Cette variable contient du texte. C'est en réalité un objet String qui possède plusieurs méthodes et 1 propriété.

//indexOF
document.write("Eddy se trouve à la position: " + phrase.indexOf("Eddy") + "<br>");
// Retourne la position de la 1ere lettre de "Eddy" dans la phrase.
//on commence à compter à partir de 0
// arguments = parameters : tout ce qui se trouve à l'intérieur des () d'une fonction

//substr
var phrase = "Bonjour Pierre comment vas-tu ?";
var decoupe = phrase.substr(8, 6);
document.write(decoupe + "<br>"); // retourne Pierre
//la fonction substr permet de récupérer un morceau de la chaine de caracteres.
// 1er argument: où commence la découpe, 2eme arg: combien de caracteres ?

//substring
var decoupe2 = phrase.substring(8, 14); 
//Fait la même chose que substr() sauf que le deuxieme arg est la position d'arret
document.write(decoupe2 + "<br>"); // retourne Pierre

//Divers : valueOf / toLowerCase / toUpperCase
document.write(phrase.valueOf() + "<br>"); // valueOf() retourne la valeur de la variable "phrase". Elle n'a pas besoin d'arguments

document.write(phrase.toLowerCase() + "<br>"); // passe toute la chaine de caracteres en minuscule
document.write(phrase.toUpperCase() + "<br>"); // passe toute la chaine de caractere en majuscule
document.write(phrase.length + "<br>"); // il n'y a pas de parenthèses car il s'agit d'une propriété. Retourne 31 cela calcul le nombre total de caracteres. on ne commence pas à zéro.

// Liste des fonctions et méthodes Javascript : 
// - http://msdn.microsoft.com/en-us/library/ie/6fw3zxcx%28v=vs.94%29.aspx 
// - http://msdn.microsoft.com/en-us/library/ie/c6hac83s%28v=vs.94%29.aspx 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

//Une fonction comporte TOUJOURS des ()

document.write("<h2>Fonctions UTILISATEUR, déclaration et exécution</h2>");

// "Don't repeat yourself Dry" (philosophie informatique pour éviter la redondance d'actions. A chaque fois qu'on répete une action, il faut voir s'il n'est pas possible de créer une fonction). On peut créer nos propres fonctions avec nos propres paramètres.

//la manière appelée Function statment (déclaration de fonction)
function maFonction() {
    //ici notre code à exécuter
    return document.write("<p>Nous avons une belle journée ensoleillée</p>");
}

//la manière appelée Function operator (opérateur de fonction)
var maFonction2 = function () {
    //ici notre code à exécuter
    return document.write("<p>Nous avons une belle journée pluvieuse</p>");
}

// EXECUTION DES FONCTIONS :
maFonction();
maFonction2();
//en exécutant une fonction, on exécute tout le code qui s'y trouve

// Fonctions avec arguments
function direBonjour(prenom) {
	var message = document.write('<p>Bonjour ' + prenom + ' comment vas-tu ?ligne 561</p>');
	return message;
}
direBonjour('Alice');

// var prenom1 = prompt("Bonjour, quel est votre prénom ?");
// direBonjour(prenom1);

// Return
//Lorsqu'une instruction return est utilisée dans une fonction, l'exécution de la fonction se termine. Si une valeur est fournie, elle sera renvoyée à l'appelant de la fonction. Si l'expression définissant la valeur de retour de la fonction est absente, la valeur undefined sera renvoyée.
// Exercice: créez une fonction test qui prendra deux arguments: width et height. Si ces arguments sont supérieurs à 0, ca nous retourne width*height sinon la fonction nous renverra 0.
function test(width, height) {
    if (width > 0 && height > 0) {
        return width * height;
    }
    return 0;
}
document.write(test(3, 4) + "<br>");
// Renverra: 12
document.write(test(-3, 4) + "<br>");
// renverra output: 0


// Exercice Météo
meteo("été", 30);
meteo("hiver", 0);
meteo("automne", 5);
meteo("printemps", 21);
//il est possible d'appeler une fonction avant sa déclaration uniquement si la façon de la déclarer est function statment (voir debut du chapitre) Voir aussi la notion d'Hoisting (javascript va déplacer la déclaration avant lexécution)

function meteo(saison, temperature) {
    var message = "nous sommes en " + saison + " et il fait " + temperature + " degrés<br>";
    return document.write(message);
}

// faire une fonction meteo2() permettant de gérer le s à degrè(s), les valeurs 0, 1 et -1 n'ont pas de s
// et gérer aussi le "en" ou le "au" selon la saison
document.write("<hr>");

meteo2("été", 30);
meteo2("hiver", 0);
meteo2("automne", 5);
meteo2("printemps", 21);
function meteo2(saison, temperature) {
    var degre = "";
    if (temperature == -1 || temperature == 0 || temperature == 1) {
        degre = "degré";
    } else {
        degre = "degrés";
    }
    if (saison == "printemps") {
        var message = "Nous sommes au printemps et il fait " + temperature + " " + degre ;
    } else {
        var message = "Nous sommes en " + saison + " et il fait " + temperature + " " + degre + "<br>";
    }
    return document.write(message);
}
document.write("<hr>");
meteo3("été", 30);
meteo3("hiver", 0);
meteo3("automne", 5);
meteo3("printemps", 21);
function meteo3(saison, temperature) {
    var article = "en ";
    var s = "s";
    if(saison == "printemps") {
        article = "au ";
    }
    if (temperature == 0 || temperature == 1 || temperature == -1
    ) {
        s = "";
    }
    var message = "Nous sommes " + article + saison + " et il fait " + temperature + " degré" + s + "<br>";
    return document.write(message);
}

// ESPACE GLOBAL ET LOCAL
/*
Selon l'endroit où une variable est déclarée et affectée, elle pourra être accessible (visible) de partout dans le script OU dans une zone bien définie.
On parle de portée d'un variable

Une variable est déclarée SANS le mot clé VAR, (de façon implicite):
peu importe l'endroit où elle est déclarée (dans une fonction ou pas), elle est ACCESSIBLE DE PARTOUT dans le script. On parle alors de variable GLOBALE

Une variable est déclarée AVEC le mot clé VAR (de façon explicite):
    - a l'extérieur de la fonction: elle sera GLOBALE
    - à l'intérieur de la fonction: elle sera LOCALE (accessible uniquement dans la fonction)
*/

var animal = "Loup"; // variable Externe donc GLOBALE

function jungle() {
    var animal = "Tigre"; // variable LOCALE
    return animal;
}
document.write(animal); // affichera Loup
jungle(); // en executant la fonction on ne change pas le contenu de la variable (car elle ne sont pas liées)
document.write(animal);// affiche Loup

document.write("<hr>");

var animal = "Loup"; // variable GLOBALE

function jungle2() {
    animal = "Tigre"; // variable GLOBALE
}

document.write(animal); // affiche Loup
jungle2();
document.write(animal); // affiche Tigre
//Comme on n'a pas mis le mot clé var devant animal dans la fonction jungle2, alors on reprend la variable globale deja déclarée et on assigne une nouvelle valeur. Donc après l'exécution de la fonction Tigre remplace Loup

document.write("<hr>");
function ocean() {
    poisson = "Requin"; //déclaration implicite (sans VAR avant poisson)
    return poisson;
}

ocean();
document.write(poisson); // affiche requin car la variable existe dans tout le script à condition d'avoir exécuté la fonction. 

document.write("<h2>Les types ARRAY</h2>");
var fruits = ["Banane", "Orange", "Pomme", "Mangue"];
console.log(fruits);

console.log(fruits.join()); // La méthode join() crée et renvoie une nouvelle chaine de caractere en concaténant tous les éléments d'un tableau

var monTableau = ['Emilie', 'Magalie', 'Zakir', 'Elric', 96];
document.write(monTableau); // affiche la totalité du tableau
document.write(monTableau[3]); // affiche Elric
console.log(typeof(monTableau));
document.write("<br>");
//Mini exo: Remplacement de Elric par Alphonse
monTableau[3] = "Alphonse";
console.log(monTableau[3]);

document.write(monTableau.length + "<hr>"); // Affiche 6

var monSuperTableau = ['Harry Potter', 'Draco Malfoy', 'Eren Jager', 'San Gohan', 'Ron Weasley', 'Bat Man', 'Rosa Parks', 'Mikasa Ackerman', 126, true, false]; // tous les types peuvent etre contenus dans un tableau

var max = monSuperTableau.length; // Nous stockons le nombre d'index dans une variable
console.log(max); //11

//Parcourir un tableau
for (var z=0; z < max; z++) {
    document.write(monSuperTableau[z]); 
}

document.write("<hr>");
var deuxDimensions = [['fraises', 'pommes', 'bananes'],['tomates', 'carottes', 'courgettes']];
//Exo: comment je fais pour afficher bananes ?
document.write(deuxDimensions[0][2] + "<br>");
//affiche bananes. Le 0 représente le premier tableau [fraises, pommes, bananes] et le 2 représente l'élément situé en position 2 de ce meme tableau
console.log(deuxDimensions[0]);

// EXERCICE Appolo 11
/*
Vous devez créer un compteur (countdown) qui parte de 12 jusqu'à 0
Quand on arrive au chiffre 7, afficher "ignition sequence start"
*/

document.write("<hr>");
document.write("Appolo 11 avec une boucle for");
for (let a=12;a>=0;a--){
    if (a==7) {
        document.write("ignition sequence start <br>");
    } else {
       document.write(a + '<br>');
    }
}

document.write("<hr>");
document.write("Appolo 11 avec une boucle while");
var z=12;
 while(z>=0){
    if (z==7) {
        document.write("ignition sequence start <br>");
    } else {
       document.write(z+ '<br>');
    } 
    z--;
 }

document.write("<h2>Les objets</h2>");
/*
Les personnes qui nous entourent possèdent des informations (nom, prénom, sexe, nationalité...) et peuvent effectuer des actions (manger, boire, parler, marcher...).
Il en va de meme pour les objets. Exemple: une voiture possède des informations (couleur, marque, modèle...) et peut effectuer des actions (rouler, freiner, tourner à droite...)
Les objets informatiques sont comme les objets réels. On va avoir un receptable qui va contenir des informations (données) et des actions (fonctions). 
La programmation orientée objet est le fait de faire interagir les objets entre eux.
*/

// Déclaration d'un objet
// pour un Array (tableau) on utilise [], pour un objet on utilise {}
var monAutreObjet = {}; // création appelée OBJECT LITERAL NOTATION
monAutreObjet.sonPrenom = 'Will'; // remplissage
monAutreObjet['sonNom'] = 'Smith'; // autre manière de remplir

var monObjet = new Object(); // création d'objet appelée CONSTRUCTOR
monObjet.sonPrenom = "Will"; //le remplissage
monObjet["sonNom"] = "Smith";

document.write(monObjet.sonNom); // affiche Smith
document.write("<br>");
document.write(monObjet['sonPrenom']); // affiche Will

document.write("<hr>");
var sangoku = {
    nom : "San", // clé : valeur
    prenom : "Goku",
    age : 35  // pas de point virgule pour la derniere information
};
sangoku.femme = "Chichi";
document.write(sangoku.femme); // affiche chichi


//EXERCICE
// Créez un objet maVoiture qui contient ces infos : marque, modele, couleur, optionsDeSerie (plusieurs), année, toitOuvrant, motorisation (sous forme d'objet : energie, puissance, etancheite)

var maVoiture = {
    marque: 'Mercedes', //info de type string
    modele: "Classe A",
    couleur: "noire",
    //creation d'une fonction qui me permettra de changer de couleur
    changerDeCouleur: function (nouvelle) {
        return this.couleur = nouvelle; // le mot this veut dire "lui meme", donc l'objet dans lequel on se trouve (maVoiture)
    },
    optionsDeSerie: ["clim", "autoradio", "park-assist", "cuir"], // type array
    annee: 2015, //type number
    toitOuvrant: true, //boolean

    infos: function () {
        var marque = this.marque,
            modele = this.modele,
            couleur = this.couleur,
            annee = this.annee,
            optionsDeSerie = this.optionsDeSerie;
            document.write('Les infos concernant cette voiture sont les suivantes : ' + "<br>");
            document.write('Marque : ' + marque + '<br>' + 'Modele : ' + modele + '<br>' + 'Couleur : ' + couleur + '<br>' + 'Année : ' + annee + '<br>' + 'Options de série : ' + optionsDeSerie);
    },

    motorisation: { // type objet
        energie: "diesel",
        puissance: "110 cv",
        etancheite: true
    },
    vide: null //information de type null 
};

document.write("<hr>");
document.write(maVoiture.marque + "<br>"); // affiche mercedes
document.write(maVoiture.couleur + "<br>"); //affiche noire
maVoiture.changerDeCouleur('bleu'); 
document.write(maVoiture.couleur + "<br>"); //affiche bleu
document.write(maVoiture.motorisation.energie + "<br>"); //affiche diesel

maVoiture.infos();

// La boucle FOR IN
document.write("<h3>La boucle FOR IN </h3>");

for (var monElement in maVoiture) {
    document.write(monElement); // syntaxe pour récupérer les éléments (proprietés et méthodes) de l'objet
}
document.write("<hr>");

for(var monElement in maVoiture) {
    document.write(maVoiture[monElement]);
}