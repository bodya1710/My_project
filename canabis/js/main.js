(function($) {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const scrollTop =
            $($(this).attr('href')).position().top;
        $('html, body').animate({ scrollTop }, 'slow');
    });
})(jQuery);
