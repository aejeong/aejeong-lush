(function(){
    headerAction();;
    initialSwiper();
    toggleAction();
})();

function headerAction(){
var header = document.querySelector('.header-container')
document.addEventListener('scroll',function(e){
    if(scrollY === 0){
        header.classList.remove('active');
    }else{
        header.classList.add('active');
    }
})
}

function initialSwiper(){
    var minSwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    var bestSwiper = new Swiper('.swiper-container.best',{
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: {
          nextEl: '.swiper-button-next.best',
          prevEl: '.swiper-button-prev.best',
        },
        pagination: {
            el: '.swiper-pagination'
          },
    })
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