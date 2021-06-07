function validarinformacion(){
  var nombre = document.getElementById("name_contact").value;
  var correo = document.getElementById("email_contact").value;
  var telefono = document.getElementById("tel_contact").value;
  

  if(nombre.lenght < 5){
      document.getElementById("msgnombre").innerText = "";
  } else{
    document.getElementById("msgnombre").innerText = "ingrese un nombre correcto";
 
  }

  if(correo.lenght > 0){
     var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if(!regex.test(correo)){
       document.getElementById("msgmail").innerText = "";

     } else{
      document.getElementById("msgmail").innerText = "ingrese correo valido";
     }
   }

   if(telefono.lenght < 8){
    document.getElementById("msgtel").innerText = "";
} else{
  document.getElementById("msgtel").innerText = "ingrese un telefono valido";
}

}
  



document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
