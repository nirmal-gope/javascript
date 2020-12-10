var hr=parseInt(prompt("tappez votre heure"));
var min=parseInt(prompt("tappez votre min"));
var sec=parseInt(prompt("tappez votre sec"));
if((hr>=0 && hr<=23) && (min>=0 && min<=59) && (sec>=0 && sec<=59)){
    sec++;
    if(sec==60){
        min++;
        sec=0;
        if(min==60){
            hr++;
            min=0;
            if(hr==24){
                hr=0;
            }
        }
    }
    document.write("Dans une seconde on sera a: "+hr+"hr"+":"+min+"min"+":"+sec+"sec");
}else{
    document.write("L'heure saisi n'est pas correcte");
}
