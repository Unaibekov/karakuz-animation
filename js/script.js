$( () => {

    // Modal =====================
    const modals = $("[data-modal]");
    const modalsClose = $(".modal-close");
    modals.on('click', function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).removeClass('modal-hide').addClass('modal-show');
        setTimeout(function() {
            $(modalId).find('.modal-content').addClass('modal-content-active');
        }, 10);
        $('body').addClass('no-scroll');
    });
    modalsClose.on('click', function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.closest('.modal');
        modalParent.find('.modal-content').removeClass('modal-content-active');
        modalParent.addClass('modal-hide');
        setTimeout(function() {
            modalParent.removeClass('modal-show modal-hide');
            $('body').removeClass('no-scroll');
        }, 500);
    });
    $('.modal').on('click', function(event) {
        let $this = $(this);
        $this.find('.modal-content').removeClass('modal-content-active');
        $this.addClass('modal-hide');
        setTimeout(function() {
            $this.removeClass('modal-show modal-hide');
            $('body').removeClass('no-scroll');
        }, 500);
    });
    $('.modal-content').on('click', function(event) {
        event.stopPropagation();
    });

	// On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-scroll') : $('.header').removeClass('header-scroll');
		windowTop > 150 ? $('.header-container').addClass('header-container-scroll') : $('.header-container').removeClass('header-container-scroll');
        windowTop > 150 ? $('.logo-full').addClass('logo-full-scroll') : $('.logo-full').removeClass('logo-full-scroll');
		windowTop > 150 ? $('.logo-texts').addClass('logo-texts-scroll') : $('.logo-texts').removeClass('logo-texts-scroll');
		windowTop > 150 ? $('.logo-karakuz-text').addClass('logo-karakuz-text-scroll') : $('.logo-karakuz-text').removeClass('logo-karakuz-text-scroll');
		windowTop > 150 ? $('.logo-karakuz-number').addClass('logo-karakuz-number-scroll') : $('.logo-karakuz-number').removeClass('logo-karakuz-number-scroll');
		windowTop > 150 ? $('.logo-bftn').addClass('logo-bftn-scroll') : $('.logo-bftn').removeClass('logo-bftn-scroll');
        windowTop > 150 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#hero, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});

    // Smooth scroll
    $('nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60
            }, 500);
            $('nav a').removeClass('active');
            $(this).addClass('active');
            $('.nav').removeClass('nav-open');
            $('.overlay').fadeOut(300); // Управление оверлеем
            $('body').css('overflow','auto');
        }
    });
	// Mobile menu
	$('.menu-open').click(function() {
		$('.nav').toggleClass('nav-open');
		$('.overlay').fadeToggle(300); // Управление оверлеем
		$('body').toggleClass('no-scroll');
		$('.header-scroll').addClass('no-blur');
	});
	$('.close-menu, .overlay').click(function() {
		$('.nav').removeClass('nav-open');
		$('.overlay').fadeOut(300); // Управление оверлеем
		$('body').removeClass('no-scroll');
		$('.header-scroll').removeClass('no-blur');
	});
	$('li > a').click(function() {
		$('.top-nav').removeClass('is-active');
		$('.close-menu').removeClass('is-active');
		$('.nav').removeClass('nav-open');
		$('.overlay').fadeOut(300); // Управление оверлеем
		$('body').removeClass('no-scroll');
	});

    // tabs =================

    $('.tab').on('click', function() {
        $('.tab').removeClass('active');
        $('.tab-content').removeClass('active').css('opacity', '0');

        $(this).addClass('active');
        $('#' + $(this).data('tab')).addClass('active');

        setTimeout(function() {
            $('#' + $('.tab.active').data('tab')).css('opacity', '1');
        }, 10); 
    });

    // show more =======================

    $('.show-less').hide();
    let cardsToShow = 4;
    let totalCards = $('.all-friends .friends').length;
    let cardsShown = 0;

    function showCards() {
        let $cards = $('.all-friends .friends').slice(cardsShown, cardsShown + cardsToShow);
        $cards.each(function(index, card) {
            $(card).show();
            setTimeout(function() {
                $(card).css('opacity', '1');
            }, index * 100); // задержка между появлениями карточек
        });
        cardsShown += cardsToShow;
        if (cardsShown >= totalCards) {
            $('.show-more').fadeOut(100);
        }
        if (cardsShown > cardsToShow) {
            $('.show-less').fadeIn(100);
        }
    }

    function hideCards() {
        let $cards = $('.all-friends .friends').slice(cardsToShow, totalCards);
        $cards.each(function(index, card) {
            setTimeout(function() {
                $(card).css('opacity', '0');
            }, index * 100); // задержка между скрытиями карточек
        });
        setTimeout(function() {
            $cards.hide();
            cardsShown = cardsToShow;
            $('.btns-more').fadeOut(100, function() {
                $('.show-more').fadeIn(100);
                $('.show-less').hide();
                $('.btns-more').fadeIn(100);
            });
        }, $cards.length * 100 + 10); // общее время анимации
    }
    showCards();
    $('.show-more').on('click', function() {
        showCards();
    });
    $('.show-less').on('click', function() {
        hideCards();
    });
 
});