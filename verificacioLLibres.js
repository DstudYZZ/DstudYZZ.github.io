var TextAccesBooleana = localStorage.getItem("acces")
var acces =  JSON.parse(TextAccesBooleana)
if (acces){

}else{
    window.location.href = "404.html"
}