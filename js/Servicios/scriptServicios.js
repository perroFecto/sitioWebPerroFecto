$(document).ready(function() {
  // Agregar efecto de desplazamiento suave al hacer clic en los enlaces de navegación
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Agregar efecto de zoom al pasar el cursor sobre las tarjetas de servicios
  $('.card').hover(function() {
    $(this).addClass('hover');
    $(this).find('img').addClass('zoom');
  }, function() {
    $(this).removeClass('hover');
    $(this).find('img').removeClass('zoom');
  });
});
