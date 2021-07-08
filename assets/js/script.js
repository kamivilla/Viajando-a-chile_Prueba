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
