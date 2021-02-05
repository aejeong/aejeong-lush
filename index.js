(function(){
    headerAction();;
    initialSwiper();
    toggleAction();
    appear();
})();

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
    var mainSwiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    var bestSwiper = new Swiper('.swiper-container.best',{
        loop: false,
        initialSlide: 0,
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: {
          nextEl: '.best-next',
          prevEl: '.best-prev',
        },
        pagination: {
            el: '.swiper-pagination'
          },
    })

    var partnerSwiper = new Swiper('.swiper-container.partner',{
        initialSlide: 0,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        autoplay:{
            delay:3300
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
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

function appear(){
    var boxElement;
    var boxElement2;
    var options={
        root:null,
        rootMargin:'200px',
        threshold: 0.5
    }
        boxElement = document.querySelector('#cardsScrollArea')
        boxElement2 = document.querySelector('#brandScrollArea')
        var cardsObserver = new IntersectionObserver(cardIntersect,options);
        var brandObserver = new IntersectionObserver(brandIntersect,options);
        cardsObserver.observe(boxElement)
        brandObserver.observe(boxElement2)
}

  function cardIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.children[1].classList.add('active');
    }else{
        entry.target.children[1].classList.remove('active');
    }
    });
  }
  
  function brandIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.children[0].classList.add('active');
          entry.target.children[1].classList.add('active');
    }else{
        entry.target.children[0].classList.remove('active');
        entry.target.children[1].classList.remove('active');
    }
    });
  }
