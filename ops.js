function sumar(){
   var n1=document.getElementById("num1").value; 
   var n2=document.getElementById("num2").value; 
   var res=parseInt(n1)+parseInt(n2);

   document.getElementById("r").innerHTML=res
}

function restar(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value; 
    var res=parseInt(n1)-parseInt(n2);

    document.getElementById("r").innerHTML=res
 }

function multiplicacion(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value; 
    var res=parseInt(n1)*parseInt(n2);

    document.getElementById("r").innerHTML=res
}

function division(){
    var n1=document.getElementById("num1").value; 
    var n2=document.getElementById("num2").value; 
    var res=parseFloat(n1)/parseFloat(n2);

    document.getElementById("r").innerHTML=res
 }
