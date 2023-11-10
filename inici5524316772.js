var TextAccesBooleana = localStorage.getItem("acces")
var acces =  JSON.parse(TextAccesBooleana)
if (acces){
  
    
    var nomUsuari = localStorage.getItem("nomUsuari")
    document.getElementById("nomUsuari").textContent = ("Hola, "+nomUsuari)
    var curs = localStorage.getItem("curs")
    document.getElementById("curs").textContent = (curs)

    
    window.addEventListener("beforeunload", function () {
      // Modificar la variable 'acces' a false antes de cerrar la página
      localStorage.setItem("acces", JSON.stringify(false));
  });
    
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
  
