var navbar = document.querySelector('.navbar');
var navlink = document.querySelector('.nav-link');
var line1 = document.querySelector('.line-1');
var line2 = document.querySelector('.line-2');
var line3 = document.querySelector('.line-3');
var line4 = document.querySelector('.line-4');
var line5 = document.querySelector('.line-5');
var line6 = document.querySelector('.line-6');
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed : 800
});
window.addEventListener('scroll', () => {
  if(window.scrollY > 557) {
     navbar.classList.add('nav-background-new');
     line1.classList.remove('line-width-home');
     line2.classList.add('line-width');
  }
  else {
     navbar.classList.remove('nav-background-new');
     line1.classList.add('line-width-home');
     line2.classList.remove('line-width');
  }
});
window.addEventListener('scroll', () => {
  if(window.scrollY > 950) {
     line2.classList.remove('line-width');
     line3.classList.add('line-width');
  }
  else {

     line3.classList.remove('line-width');
  }
});
window.addEventListener('scroll', () => {
  if(window.scrollY > 1540) {
     line4.classList.add('line-width');
     line3.classList.remove('line-width');
  }
  else {
     line4.classList.remove('line-width');
  }
});
window.addEventListener('scroll', () => {
  if(window.scrollY > 2500) {
     line4.classList.remove('line-width');
     line5.classList.add('line-width');
     line6.classList.remove('line-width');
  }
  else {

     line5.classList.remove('line-width');
  }
});
window.addEventListener('scroll', () => {
  if(window.scrollY > 3100) {
     line5.classList.remove('line-width');
     line6.classList.add('line-width');
  }
  else {

     line6.classList.remove('line-width');
  }
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 557) {
     navlink.classList.add('new-navlink-color');
  }
  else {
     navlink.classList.remove('new-navlink-color');
  }
});
console.log(window.scrollY);
$(document).ready(function(){
  $('#loading').fadeOut(1000,function(){
    $('body').css('overflow','auto')
  });
})