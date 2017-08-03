$(document).ready(function() {
    $('.Navigation-menu_toggle').on('touchstart touchend click', function(e) {
        if($('.Navigation-link_list_wrapper').hasClass('closed')) {
            $('.Navigation-link_list_wrapper').removeClass('closed');
            $('.Navigation-link_list_wrapper').addClass('open');
        }
        else {
            $('.Navigation-link_list_wrapper').addClass('closed');
            $('.Navigation-link_list_wrapper').removeClass('open');
        }
    });
});
