(function(){
    Pace.start();
    var logo;
    var percentage;
    Pace.on('start', function() {
    logo = document.querySelector('.landing > .letters span > span');
    percentage = document.querySelector('.landing .progress-percentage');
    });
    Pace.on('progress', function(p) {
        logo.style.width = p +'%';
        percentage.innerHTML =  p.toFixed(2) + '%';
        document.querySelector('body').style.overflow = 'hidden';
    });
    Pace.on('done',function(){
        var landing = document.querySelector('.landing')
        setTimeout(function(){
            landing.classList.add('on');
            document.querySelector('body').style.overflow = 'auto';
        },1000)
    })
})();
