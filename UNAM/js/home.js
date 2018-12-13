$(document).ready(function() {
    console.log('== ready ==');
    var bibliographicSlick = $('.bibliographic-alert-caroucel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<img class="slick-arrow-prev" src="./assets/arrow-prev.png">',
        nextArrow: '<img class="slick-arrow-next" src="./assets/arrow-next.png">',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }],
    });
});
