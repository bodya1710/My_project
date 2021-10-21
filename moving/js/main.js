jQuery( document ).ready(function() {
    jQuery(".form_faq_item").on("click",function() {
      if (jQuery(this).hasClass('active')) {

      } else {
        jQuery(".form_faq_item.active .answer").hide(300);
        jQuery(".form_faq_item.active").removeClass("active");
        jQuery(this).find(".answer").show(300);
        jQuery(this).addClass("active");
      }

    });
    jQuery(".mobile_toggle ").on("click",function() {
      jQuery(".mobile_toggle").toggleClass('active');
      jQuery("header ul").toggleClass('active');
    });
});
jQuery(window).scroll(function() {
  console.log(jQuery(this).scrollTop());
  if (jQuery(this).scrollTop() > 40){
    jQuery('header').addClass("sticky");
  }
  if (jQuery(this).scrollTop() < 10){
    jQuery('header').removeClass("sticky");
  }
});
