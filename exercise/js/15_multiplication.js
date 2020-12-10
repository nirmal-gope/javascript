var nb=parseInt(prompt("tappez un chiffre entre 2 et 9"));
var result;
if(nb>=2 && nb<=9){
    for(var i=1;i<=10;i++){
        result=i*nb;
        document.write(nb+"*"+i+"="+result+"<br>");
    }
}else{
    document.write("Il faut tappez un chiffre entre 2 et 9");
    }