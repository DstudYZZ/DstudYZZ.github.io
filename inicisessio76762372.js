function accedir(){

    acces = false;
    var TextAccesBooleana = JSON.stringify(acces);
        localStorage.setItem('acces', TextAccesBooleana);
var nomUsuari = localStorage.getItem("nomusuariacces")
var contrasenyaUsuari = localStorage.getItem("contrasenyaUsuari")
var nomUsuariIntroduit = document.getElementById("IDaccesUsuari").value;
var contrasenyaIntroduida = document.getElementById("IDaccesContrasenya").value;
var UsuarisBloquejats = [
  "Llista d'usuaris bloquejats",
]
if (UsuarisBloquejats.includes(nomUsuariIntroduit)){
  alert ("Accés denegat. \nÉs posible que hagis violat les nostres normes, si creus que és un error, contacta'ns.")
  return;
}else{
if (nomUsuari == nomUsuariIntroduit){
    if (contrasenyaIntroduida == contrasenyaUsuari){
        window.location.href= "inici.html";
        acces = true;
        var TextAccesBooleana = JSON.stringify(acces);
            localStorage.setItem('acces', TextAccesBooleana);
    }else{
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.style.display = "block";
        
        var enlaceRestablecer = document.getElementById("restablecer-contrasena");
        enlaceRestablecer.addEventListener("click", function(e) {
            e.preventDefault(); // Evitar que el enlace siga el enlace por defecto
            window.location.href = "restablir.html"
        });
    }
}else{
    alert("No s'ha trobat l'usuari")
}

}
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
  
  

