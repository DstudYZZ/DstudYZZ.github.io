acces = false;
        var TextAccesBooleana = JSON.stringify(acces);
            localStorage.setItem('acces', TextAccesBooleana);

function guardarusuari() {
    var usuariacces = document.getElementById("IDnomusuarinici").value; // Obtener el valor del input
    var contrasenya1 = document.getElementById("IDcontrasenya1").value;
    var contrasenya2 = document.getElementById("IDcontrasenya2").value;
    var mailusuari  = document.getElementById("IDmailusuari").value;
    var cognomusari = document.getElementById("IDcognomusuari").value
     var nomUsuari  = document.getElementById("IDnomusuari").value
    var curs = document.getElementById("curs").value

     if ((usuariacces=="")||(contrasenya1=="")||(contrasenya2=="")||(mailusuari=="")||(cognomusari=="")||(nomUsuari=="")){
      alert("Has d'omplenar tots els camps")
     }else{

     
        if (contrasenya2 == contrasenya1){
            var usuaricreat = true;
            var TextUsuariCreatBooleana = JSON.stringify(usuaricreat);
            localStorage.setItem('usuaricreat', TextUsuariCreatBooleana);
            localStorage.setItem("nomUsuari", nomUsuari);
            localStorage.setItem("nomusuariacces",usuariacces);
            localStorage.setItem("contrasenyaUsuari",contrasenya1);
            localStorage.setItem("mailusari",mailusuari);
            localStorage.setItem("cognomusuari",cognomusari);
           localStorage.setItem("curs",curs);

             window.location.href = "inici.html";
             acces = true;
             var TextAccesBooleana = JSON.stringify(acces);
            localStorage.setItem('acces', TextAccesBooleana); 
        }else{
            alert ("Les contrasenyes no coincideixen")
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



