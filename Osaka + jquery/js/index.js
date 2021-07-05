// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/



/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input
.attr();//html attribute => src , href , id
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
// */


// NAVBAR SCROLL CHANGE COLOR AND BUTTON
let aboutOffset = $('#about').offset().top;
$(window).scroll(function(){
  let wScroll = $(window).scrollTop();
  if(wScroll > aboutOffset -50){
    $('#main-nav').css('backgroundColor','#ff206ea8');
    $('#btnUp').fadeIn(500);
  }
  else{
    $('#main-nav').css('backgroundColor','transparent');
    $('#btnUp').fadeOut(500);
  }
})
$('#btnUp').click(function(){
    // $(window).scrollTop(0);
    $('html,body').animate({scrollTop:0},2000)
})


//CLICK ON LINKS IN NAVBAR
$('a').click(function(e){
  let aherf = $(e.target).attr('href')
  let sectionOffset = $(aherf).offset().top;
  $('html,body').animate({scrollTop:sectionOffset},1000)
})

$('#toggleIcon').click(function(){
  let colorBoxWidth = $('#colorsBox').innerWidth();
  if($('#sideBar').css('left')=='0px'){
    $("#sideBar").animate({left:`-${colorBoxWidth}`},500);
  }
  else{
    $("#sideBar").animate({left:'0'},500);
  }
})

let colorsBox = $('.color-box');
colorsBox.eq(0).css('backgroundColor','red')
colorsBox.eq(1).css('backgroundColor','teal')
colorsBox.eq(2).css('backgroundColor','aqua')
colorsBox.eq(3).css('backgroundColor','orange')
colorsBox.eq(4).css('backgroundColor','yellow')
colorsBox.eq(5).css('backgroundColor','purple')

$(".color-box").click(function(e){
  let colorBox= $(e.target).css('backgroundColor')
  $('.change').css('color',colorBox);
})

$(document).ready(function(){
  $('#loading').fadeOut(1000,function(){
    $('body').css('overflow','auto')
  });
})