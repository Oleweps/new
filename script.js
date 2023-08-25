document.addEventListener("DOMContentLoaded", function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $('.navbar ul li a').click(function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

/* scrolling smoothly */    
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});
