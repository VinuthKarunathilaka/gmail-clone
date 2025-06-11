var div = document.getElementById("main");
var display = 0;

function hideshow()
{
    if (display == 1) {
        div.style.display = "block";
        display = 0;
          document.getElementById("More").innerHTML="Less";
    
        
    } else {
        div.style.display = "none";
        display = 1;
        document.getElementById("More").innerHTML="More";
    }

}
