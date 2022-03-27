(function(){
    headerAction();;
    initialSwiper();
    toggleAction();
    scaleAnimation();
    touchAnimation();
    AOS.init();
})();


function scaleAnimation(){
    var brandController = new ScrollMagic.Controller();
    var tween1 = TweenMax.to('#brandScrollArea img', 0.5, {
      scale: 1,
    });
    var brandScene = new ScrollMagic.Scene({
      triggerElement: "#brandScrollArea",
      duration: "100%"
    })
    .setTween(tween1)
    .addTo(brandController)
}

function touchAnimation(){
    var pics = document.querySelector('.instagram-pictures')
    pics.addEventListener('mousedown',function(e){
        if(e.target.nodeName !== 'IMG') return;
        e.target.style.transform = 'scale(1)';
    })
    pics.addEventListener('mouseup',function(e){
        if(e.target.nodeName !== 'IMG') return;
        e.target.style.transform = 'scale(1.2)';
    })

}

function headerAction(){
var header = document.querySelector('.header-container')
document.addEventListener('scroll',function(e){
    if(scrollY === 0){
        header.classList.remove('active');
    }else if(innerWidth >= 1024 && scrollY  > 0){
        header.classList.add('active');
    }
})
}

function initialSwiper(){
    var mainSwiper = new Swiper('.main-vis > .swiper-container', {
        speed:1500,
        parallax:true,
        initialSlide: 0,
        loop: true,
        navigation: {
          nextEl: '.main-vis > .swiper-container .swiper-button-next',
          prevEl: '.main-vis > .swiper-container .swiper-button-prev',
        },
    });


    var bests = document.querySelectorAll('.best .container .item')
    var bestSwiper = new Swiper('.swiper-container.best',{
        loop: false,
        initialSlide: 0,
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-container.best .best-prev',
            prevEl: '.swiper-container.best .best-next',
        },
        pagination: {
            el: '.swiper-container.best .swiper-pagination'
        },
        on:{
            touchStart: function(){
                bests.forEach(best=> best.classList.add('on'));
              },
              touchEnd: function(){
                bests.forEach(best=> best.classList.remove('on'))
              }
          }
    })

    var partnerSwiper = new Swiper('.swiper-container.partner',{
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        freeMode:true,
    })

    partnerSwiper.loopDestroy();
    partnerSwiper.loopCreate();
}

function toggleAction(){
    var hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click',function(){
        if(!hamburger.classList.contains('active')){
            hamburger.classList.add('active');
        }else{
            hamburger.classList.remove('active');
        }
    })
}
