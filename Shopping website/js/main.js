$(document).on('click', '.search', function() {
	$('.search_bar').addClass('search_bar_active')
});

$(document).on('click', '.serch_cancel', function() {
	$('.search_bar').removeClass('search_bar_active')
});


$(document).on('click', '.user,.alredy_acount', function() {
	$('.form').addClass('login_active').removeClass('sing_up_active')
});

$(document).on('click', '.sing_up_btn', function() {
	$('.form').addClass('sing_up_active').removeClass('login_active')
});

$(document).on('click', '.form_cansel', function() {
	$('.form').removeClass('login_active').removeClass('sing_up_active')
});


$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
				auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

$(document).ready(function() {
	$('#autoWidth').lightSlider({
			autoWidth:true,
			loop:true,
			onSliderLoad: function() {
					$('#autoWidth').removeClass('cS-hidden');
			}
	});
});

$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$('.navigation').addClass('fix_nav');
	}
	else {
		$('.navigation').removeClass('fix_nav');
	}
});

$(document).ready(function () {
	$('.toggle').click(function () {
		$('.toggle').toggleClass('active')
		$('.navigation').toggleClass('active')
	})
})
