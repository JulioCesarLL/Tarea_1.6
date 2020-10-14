var divhtml=document.getElementById("div_msg");
var boton=document.getElementById("coordenadas_btn");


boton.addEventListener("click", formula);

function formula()
{
    var a=document.getElementById("x");
    var b=document.getElementById("y");
    var x=parseInt(a.value);
    var y=parseInt(b.value);
    var coordenadas;

    if(x >0 && y>0){
        coordenadas="Q1";
    }
    else if(x<0 && y>0){
        coordenadas = "Q2";
    }
    else if(x<0 && y<0){
        coordenadas="Q3";
    }
    else if(x>0 && y<0){
        coordenadas="Q4";
    }
    else{
        coordenadas="Origen";
    }
    
    div_msg.innerHTML=coordenadas;
   
}