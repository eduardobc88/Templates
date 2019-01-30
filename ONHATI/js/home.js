$(document).ready(function() {
    $('#home-slides').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        autoplaySpeed: 4000,
        prevArrow: '<img class="slick-arrow-prev" src="./assets/arrow-prev.png">',
        nextArrow: '<img class="slick-arrow-next" src="./assets/arrow-next.png">',
    });

})
