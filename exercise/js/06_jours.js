var jour=prompt("saisir un jour");
if(jour=="lundi"){
    document.write("Domain nous serons à Mardi");
}else if(jour=="mardi"){
   document.write("demain nous serons à mercredi");
}else if(jour=="mercredi"){
    document.write("demain nous serons à jeudi");
}else if(jour=="jeudi"){
    document.write("demain nous serons à vendredi");
}else if(jour=="vendredi"){
   document.write("demain nous serons à samedi");
}else if(jour=="samedi"){
   document.write("demain nous serons à Diananche");
}else if(jour=="dimanche"){
   document.write("demain nous serons à Lundi");
}else{
   document.write("C'est que vous avez tappez c'est un jour incorrect");
}