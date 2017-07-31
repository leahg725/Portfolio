//(function($) {
    $('[data-smoothscroll]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var height = $('.Navigation').outerHeight(true);
            var siteHeaderOffset = $('.Navigation').outerHeight(true) * 2;
            var targetOffset = $target.offset().top;

            $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
//}(jQuery));
