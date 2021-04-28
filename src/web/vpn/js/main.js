$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<div class="arrow prev"><div></div></div>',
        nextArrow: '<div class="arrow next"><div></div></div>',
        asNavFor: '.reviews__box',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });
    $('.reviews__box').slick({
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.reviews__slider',
    });

  });