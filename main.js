console.log("hello");

/* Consegna
1)Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
2)Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

3)BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno del metodo string.includes()*/

const white_lamp_element = document.getElementById("div_white_lamp");
console.log(white_lamp_element);

const button_element = document.getElementById("button")

button_element.addEventListener("click", my_function)

function my_function (){
    if (button_element.innerHTML === ("accendi")) {
        white_lamp_element.className = "div_yellow_lamp";
        button_element.innerHTML = ("spegni");
    } else {
        white_lamp_element.className = "div_white_lamp";
        button_element.innerHTML = ("accendi");
    }   
}


