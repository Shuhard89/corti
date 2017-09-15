'use strict';
$(function() {
	// Header shadow on scroll
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 0 ){
			$('.main-header').addClass('scroll');
		} else {
			$('.main-header').removeClass('scroll');
		}
	});

	// Menu
	function modalMenu(){
		var $burger = $('.menu-burger'),
			$modalMenu = $('.modal-main-menu'),
			$closeBtn = $('.modal-main-menu-close-btn'),
			$links = $('.header-nav a, .modal-menu-large-list > li > a, .modal-menu-small-list > li > a'),
			$html = $('html');

		// Events
		$burger.click(function() {
			if ( !$modalMenu.hasClass('visible') ){
				$modalMenu.addClass('visible');
				$html.addClass('overflow-hidden');
			}
		});

		$closeBtn.click(function() {
			$modalMenu.removeClass('visible');
			$html.removeClass('overflow-hidden');
		});

		$links.click(function(event) {
			if ( $html.find('#blog').length > 0 ){
				var thisHref = $(this).attr('href'),
					hash = thisHref.substr(thisHref.indexOf("#"));

				if ( !hash.indexOf("#") ){
					event.preventDefault();

				if ( $modalMenu.hasClass('visible') ){
					$modalMenu.removeClass('visible');
					$html.removeClass('overflow-hidden');
				}

				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - $('.main-header').outerHeight()
				}, 1500);
			}
			}
		});
	}

	modalMenu();

	// Fix object fit
	objectFitImages();
});