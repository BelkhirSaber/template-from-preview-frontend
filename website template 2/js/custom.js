/*global $, window*/

$(function () {
	'use strict';
	var wind = $(window),
		header = $('.header'),
		headerSlider = $('.header .slider'),
		navbarLi_A = $('.navbar li a'),
		pointerScrollTop = $('.scrolling');
	
	//Set active class for link clicked
	navbarLi_A.click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	//Set height for header
	header.height(wind.height());
	
	//Adjust height in resize window
	wind.resize(function () {
		//header slider
		header.height(wind.height());
		headerSlider.each(function () {
			$(this).css("paddingTop", (wind.height() - $('.header .slider div').height()) / 2);
		});
		
		//window scrolling
		wind.on('scroll', function () {
			if (wind.scrollTop() > wind.height() / 2) {
				pointerScrollTop.fadeIn("slow");
			} else {
				pointerScrollTop.fadeOut("fast");
			}
		});
	});
	
	//Adjust align the slider to center
	headerSlider.each(function () {
		$(this).css("paddingTop", (wind.height() - $('.header .slider div').height()) / 2);
	});
	
	//trigger slider
	$('.slider').bxSlider({
		pager: false,
		auto: true
	});
	
	//smooth scrolling
	navbarLi_A.click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).parent().data('value')).offset().top
		}, 1000);
	});
	
	//testimonial self slider code
	(function autoSlider() {
		$('.testim .slid .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slid div').eq(0).addClass('active').fadeIn(1000);
					autoSlider();
				});
			}
		});
	}());
	
	//trigger the shuffle animation in project section
	$('#Container').mixItUp();
	
	// change active class in project section
	$('.portf li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	// scrolling top for window
	wind.on('scroll', function () {
		if (wind.scrollTop() > wind.height() / 2) {
			pointerScrollTop.fadeIn("slow");
		} else {
			pointerScrollTop.fadeOut("fast");
		}
	});
	
	// action click pointer scrolling
	pointerScrollTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	// trigger niceScroll
	$("html, body").niceScroll();
});











