/*global $, window*/
$(function () {
	'use strict';
	var wind = $(window),
		vBody = $('body'),
		header = $('.header'),
        navbar = $('.navbar'),
        headerBxWrapper = $('.header .bx-wrapper');
	// ajuste height and width withen resize window
	vBody.width($(wind).width());
	wind.resize(function () {
		//header
		vBody.width($(wind).width());
		header.height(wind.height() - navbar.height());
		
		// ajuster height bxslider
		headerBxWrapper.height((wind.height() - navbar.height()) / 2);
		headerBxWrapper.css({
			marginTop: (wind.height() - (navbar.height() + headerBxWrapper.height())) / 2
		});
		
		
		$('.header .bx-wrapper .slider').css({
			marginTop: (($('.slider').parent().height() / 2) - 60)
		});

		$('.header .bx-wrapper .bx-pager').css({
			bottom: ((headerBxWrapper.height() / 2) - 40)
		});
	});
	
	// remove and set class active for the navbar link
	$('.nav .link').on('click', 'li', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	// size header
	header.height(wind.height() - navbar.height());
	
	// trigger bxslider
	$('.slider').bxSlider({
		auto: true,
		controls: false
	});

	// ajuster height bxslider
	$('.header .bx-wrapper').height((wind.height() - $('.navbar').height()) / 2);
	$('.header .bx-wrapper').css({
		marginTop: (wind.height() - ($('.navbar').height() + $('.header .bx-wrapper').height())) / 2
    });
	
	$('.header .bx-wrapper .slider').css({
		marginTop: (($('.slider').parent().height() / 2) - 60)
	});

	$('.header .bx-wrapper .bx-pager').css({
		bottom: (($('.header .bx-wrapper').height() / 2) - 40)
	});
	
	// portfolio active link selector & item
	$('.portfolio .selector li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
    
    // trigger mixtup plugin
    $('#Container').mixItUp();
    
    // custom slider testimonial
    (function autoSlid() {
        $('.testimonial .slid .comment.active').each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlid();
                });
                
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slid div').eq(0).addClass('active').fadeIn();
                    autoSlid();
                });
            }
        });
    }());
    
    // pionter scrolling top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top-pionter').fadeIn(1000);
        } else {
            $('.top-pionter').fadeOut(1000);
        }
    });
    $('.top-pionter').click(function () {
        $('html, body').animate({
            scrollTop: '0'
        }, 3000);
    });
    
    // trigger niceScroll
    $("body").niceScroll();
    
    // smooth scrolling element inside
    $('.navbar .nav .link li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).parent().data('value')).offset().top
        }, 1000);
    });
    
    
});












