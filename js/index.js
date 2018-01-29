$('.down').on('click',function(){
  $('html,body').animate({
     scrollTop: $(".slide-1").offset().top
   },500);
});
function parallax(){
  scrollPos=$(this).scrollTop();
  contpos=$('.bg-slow').scrollTop();
  if(scrollPos >= contpos){
    $('.bg-slow').css({
      'transform':'translateY('+((scrollPos-contpos)/2)+'px)'
    });
  }
}
$(window).scroll(function(){parallax();});


$(window).scroll(function(){
  if($(window).scrollTop() >= ($('.slide-1').offset().top - ($('.nav-fix').height() + 20))){
    $('.nav-fix').css({'background':'rgba(0, 0, 0, 0.5)'});
  }
  else{
    $('.nav-fix').css({'background':'none'});
  }
});
$('.menu').on('click',function(){
  $('.nav-hide').css({'transform':'translateX(0)'});
  $('.menu').css({'transform':'translateX(-100%)'});
});
