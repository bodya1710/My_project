jQuery(window).scroll(function() {
  console.log(jQuery(this).scrollTop());
  if (jQuery(this).scrollTop() > 40){
    jQuery('nav').addClass("sticky");
  }
  if (jQuery(this).scrollTop() < 10){
    jQuery('nav').removeClass("sticky");
  }
});

jQuery(".mobile_toggle ").on("click",function() {
      jQuery(".mobile_toggle").toggleClass('active');
      jQuery(".navigation").toggleClass('active');
    });
