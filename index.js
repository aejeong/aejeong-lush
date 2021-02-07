(function(){
    headerAction();;
    initialSwiper();
    toggleAction();
    brandScrollAreaAnimation();
    extraAreaAnimation();
    AOS.init();
})();

function brandScrollAreaAnimation(){
    var controller = new ScrollMagic.Controller();
    var tween1 = TweenMax.to('#brandScrollArea img', 0.5, {
      scale: 1,
    });
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#brandScrollArea",
      duration: "100%"
    })
    .setTween(tween1)
    .addTo(controller)
}


function extraAreaAnimation(){
    var controller = new ScrollMagic.Controller();
    console.dir(TweenMax,'--tweentMax')
    var tween1 = TweenMax.to('#browse', 0.5, {
        y: 180
    });
    
    var scene = new ScrollMagic.Scene({
      triggerElement: "#browse",
      duration: "100%"
    })
    .setTween(tween1)
    .addTo(controller)
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });


    var bests = document.querySelectorAll('.best .container .item')
    var bestSwiper = new Swiper('.swiper-container.best',{
        loop: false,
        initialSlide: 0,
        slidesPerView: 3,
        navigation: {
            nextEl: '.best-next',
            prevEl: '.best-prev',
        },
        pagination: {
            el: '.swiper-pagination'
        },
        on:{
            touchStart: function(){
                console.dir(bests,'---best')
                bests.forEach(best=> best.classList.add('on'));
              },
              touchEnd: function(){
                bests.forEach(best=> best.classList.remove('on'))
              }
          }
    })

    var partnerSwiper = new Swiper('.swiper-container.partner',{
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        freeMode:true,
        autoplay:{
            delay:3300
        },
        slidesPerView: 'auto'
        // slidesPerGroup: 1,
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
