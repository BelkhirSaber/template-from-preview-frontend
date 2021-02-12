/*global $, window */
$(function () {
    'use strict';
    //navbar in window scroll
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > 20) {
            $('.navbar').fadeOut("slow");
        } else {
            $('.navbar').fadeIn();
        }
    });
});
