 // Agrega animaciones sutiles utilizando jQuery
    $(document).ready(function() {
      // Transiciones suaves al hacer clic en los enlaces del menú de navegación
      $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function() {
            window.location.hash = hash;
          });
        }
      });

      // Animaciones al pasar el cursor sobre los botones
      $('.btn-primary').hover(function() {
        $(this).animate({ backgroundColor: '#ff8f8f' }, 'fast');
      }, function() {
        $(this).animate({ backgroundColor: '#ff6b6b' }, 'fast');
      });
    });