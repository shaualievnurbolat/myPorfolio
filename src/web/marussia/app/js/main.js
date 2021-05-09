
$(document).ready(function(){
  
	$('.newitems__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<img class="slider-arrow slider-arrow__right" src="img/arrow-right.png" alt="arrow-right">',
		prevArrow: '<img class="slider-arrow" src="img/arrow-left.png" alt="arrow-left">',
  		variableWidth: true,
  // 		autoplay: true,
		// autoplaySpeed: 5000,
  		responsive: [
		    {
		      breakpoint: 1220,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		       	arrows: false,
		       	centerMode: true,
		      }
		    },
		    {
		    	breakpoint: 350,
		    	settings: {
		    		arrows: false,
		    	}
		    }
		]
	});

	$('.reviews__slider').slick({
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
	})

	$(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.menu-anchor').fadeIn();
        } else {
            $('.menu-anchor').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();

});

const btnMenu = document.querySelector('.hamburger'),
	  btnClose = document.querySelector('.menu__close'),
	  overlay = document.querySelector('.overlay'),
	  menu = document.querySelector('.menu'),
	  cart = document.querySelector('.cart'),
	  btnCart = document.querySelectorAll('.сart-request'),
	  cartClose = document.querySelector('.cart__close'),
	  cartClose2 = document.querySelector('.cart__form-btn'),
	  btnClose2 = document.querySelectorAll('.menu__wrapper-link');

btnMenu.addEventListener('click', function() {
	overlay.style.display = 'block';
	menu.style.transform = 'translateX(0)';
});

btnClose.addEventListener('click', function() {
	overlay.style.display = 'none';
	menu.style.transform = 'translateX(-200%)';
})

btnClose2.forEach(function (entry) {
  entry.addEventListener("click", function (event){
    overlay.style.display = 'none';
	menu.style.transform = 'translateX(-200%)';
  });
});

cartClose2.addEventListener('click', function() {
	cart.style.display = 'none';
})

btnCart.forEach(function (entry) {
  entry.addEventListener("click", function (event){
    cart.style.display = 'block';
  });
});

cartClose.addEventListener('click', function() {
	cart.style.display = 'none'
})

// var linkmap = document.querySelectorAll(".contacts-button-map");
