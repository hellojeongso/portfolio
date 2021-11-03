// typed.js
var title = { 
  strings: ['정소영 포트폴리오'], 
  typeSpeed: 70, 
  backSpeed: 100, 
  fadeOut: false, 
  smartBackspace: true,  
  loop: true 
}; 
  
var typed = new Typed('.typed', title);


var $mePrev = $('.about-btn__set>.prev');
var $meNext = $('.about-btn__set>.next');
var $aboutme = $('.about__profile>ul>li');
var nowIdx = 0;

//about me
$mePrev.on('click',function(){
  if(nowIdx>0){
    nowIdx--;
    $mePrev.addClass('on');
  }else{
    $mePrev.removeClass('on');
    $meNext.addClass('on');
  }

  $aboutme.eq(nowIdx).fadeIn().siblings().fadeOut();
});

$meNext.on('click',function(){
  if(nowIdx<2){
    nowIdx++;
    $meNext.addClass('on');
  }else{
    nowIdx = 2;
    $meNext.removeClass('on');
    $mePrev.addClass('on');
  }

  $aboutme.eq(nowIdx).fadeIn().siblings().fadeOut();
});