// Scroll de link en navbar a sus respectivas secciones.
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
 
     //Animación de scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 850, function(){
      window.location.hash = hash;
    });
   } 
  });
});

// tooltip para agregar un pequeño texto a las imagenes de las card
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  