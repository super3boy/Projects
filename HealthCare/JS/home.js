/*********************************************** NAVBAR START **********************************************/
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.nav').toggleClass('nav-toggle')
    });
});
let aboutOffset = $('#articles').offset().top;
$(window).scroll(function(){
  let wScroll = $(window).scrollTop();
  if(wScroll > aboutOffset -150){
    $('#navBar').css('backgroundColor','rgba(128, 128, 128, 0.400)');
    $('header a').css('color','#F50057');
  }
  else{
    $('#navBar').css('backgroundColor','transparent');
    $('header a').css('color','#354046');
  }
})
/*********************************************** NAVBAR END **********************************************/