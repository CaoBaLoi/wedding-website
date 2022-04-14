$(document).ready(function(){
    $('.bethany-homepage-slider .bethany-slider').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        speed: 3000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})
$('.slide-2 .owl-carousel').owlCarousel({
    loop: true
    , margin: 30
    , mouseDrag: true
    , autoplay: true
    , dots: false
    , responsiveClass: true
    , responsive: {
        0: {
            margin: 10
            , items: 2
        }
        , 600: {
            items: 4
        }
        , 1000: {
            items: 5
        }
    }
});
$(document).ready(function(){
    $('.client-love .testim').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})
$('.price .owl-carousel').owlCarousel({
    loop: true
    , margin: 30
    , dots: true
    , mouseDrag: true
    , autoplay: false
    , responsiveClass: true
    , responsive: {
        0: {
            items: 1
        }
        , 600: {
            items: 2
        }
        , 1000: {
            items: 3
        }
    }
});
$('.Creative .owl-carousel').owlCarousel({
    loop: true
    , margin: 30
    , dots: true
    , mouseDrag: true
    , autoplay: false
    , responsiveClass: true
    , responsive: {
        0: {
            items: 1
        }
        , 600: {
            items: 2
        }
        , 1000: {
            items: 2
        }
    }
});