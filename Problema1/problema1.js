var divhtml=document.getElementById("div_msg");
var boton=document.getElementById("esfera_btn");


boton.addEventListener("click", formula);

function formula()
{
    var n=document.getElementById("radio");
    var r=parseInt(n.value);
    
    var volumen = (4/3.0)*3.14159*(r*r*r);
    volumen=volumen.toFixed(3);
    
    div_msg.innerHTML=volumen;
   
}