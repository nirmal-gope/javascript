/*FizzBuzz
Ecrivez un programme fizzbuzz.js qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
Ensuite, améliorez votre programme pour qu'il affiche "FizzBuzz" à la place des nombres divisibles à la fois par 3 et par 5.
*/
for(var compteur=1;compteur<=100;compteur++){
    if((compteur%5===0) && (compteur%3===0)){
       document.write("FizzBuzz<br>");
    }else if((compteur%5===0) && (compteur%3!==0)){
        document.write("Buzz<br>");
    }else if(compteur%3===0){
         document.write("Fuzz<br>");
    }else{
        document.write(compteur+"<br>");
    }
}