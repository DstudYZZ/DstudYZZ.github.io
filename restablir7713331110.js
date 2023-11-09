function restablir(){
    alert("Missatge enviat \n L'equip tècnic es posarà amb contacte amb tu el més ràpid possible.")
    window.location.href = "index.html"
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
  
  