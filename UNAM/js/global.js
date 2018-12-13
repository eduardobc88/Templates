$(document).ready(function() {
    $('.mobile .header-menu').on('click', function() {
        $('.menu-mobile-wrapper').toggleClass('show');
    });

    $(window).resize(function(el) {
        if($(window).width() >= 1024)
            $('.menu-mobile-wrapper').removeClass('show');
    });
});
