var TextAccesBooleana = localStorage.getItem("acces")
var acces =  JSON.parse(TextAccesBooleana)
if (acces){
  
    

 function seleccioassignaturamitjana() {
    var assignaturaTriadaMitjana = document.getElementById("assignaturaMitjana").value; // Obtiene el valor seleccionado del select
  
    switch (assignaturaTriadaMitjana) {
      case "mates":
        window.location.href="matesmitjana.html"
        break;
      case "historia":
        window.location.href="historiamitjana.html"
        break;
      case "catala":
        window.location.href="catalamitjana.html"
        break;
      case "castella":
        window.location.href="castellamitjana.html"
        break;
      case "angles":
        window.location.href="anglesmitjana.html"
        break;
   
    }
  }
  function enrere(){
    window.location.href = "inici.html"
  }
  
}else{
    
   window.location.href="404.html"
}

document.oncontextmenu = function () {
 
  return false;
};

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
   
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
   
    return false;
  }
  if (e.ctrlKey && e.keyCode == 85){
   
    return false;
  }
};


document.onmousedown = function (e) {
  if (e.button === 2) {
   
    return false;
  }
};

