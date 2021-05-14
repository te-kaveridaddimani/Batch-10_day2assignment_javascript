var keypress=document.getElementById("fname");

keypress.addEventListener("keyup",onkeyup);
keypress.addEventListener("keydown",onkeydown);


function onkeyup(event) {
    document.getElementById("status").innerHTML +='keyup:+event.key+  <br>'
   
}
function onkeydown(event) {
    document.getElementById("status").innerHTML +="keydown:+event.key+  <br>";
   
}