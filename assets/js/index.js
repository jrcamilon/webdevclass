"use strict";

$('#menu-contact').on('click', function() {

    var offset = 20;

    $('html, body').animate({
        scrollTop: $("#contactForm").offset().top + offset
    }, 1000);

});

$('#menu-interest').on('click', function() {

    var offset = 20;

    $('html, body').animate({
        scrollTop: $("#main").offset().top + offset
    }, 1000);

});




$(function(){
    // See if this is a touch device
    if ('ontouchstart' in window)
    {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');

        // Add the touch toggle to show text
        $('div.boxInner img').click(function(){
            $(this).closest('.boxInner').toggleClass('touchFocus');
        });
    }
});