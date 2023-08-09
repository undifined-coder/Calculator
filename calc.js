var button=document.getElementsByClassName("btn");
var display=document.getElementById("screen");

var num1=0;
var num2=null;
var op=null;

for(var i=0; i<button.length; i++)
{
    button[i].addEventListener('click',function()
    {
        var value = this.getAttribute('data-value');

        if(value==="+" || value==="*" || value==="/" || value==="%" || value==="-")
        {   op=value;
            num1=parseFloat(display.textContent);
            display.innerText=null;
        }
      

       else if(value=="AC")
       {
        display.innerText=null;
       }
        else if(value=="=")
        {
            num2=parseFloat(display.textContent);
            var result=eval(num1+op+num2);
            
            if(typeof result===NaN || result===Infinity)
            {
                display.innerText="Error";
            }
            else
            {display.innerText=result;}
        }

        else{
            display.innerText +=value;
        }
    });
}