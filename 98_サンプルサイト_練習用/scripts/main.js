document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper');
    hero.start();

    const _textAnimation = function (el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', _textAnimation);

    const _inviewAnimation = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.add("inview")
        }else{
            el.classList.remove("inview")
        }
    }

    const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);
});

