document.addEventListener('DOMContentLoaded', function () {
    new MobileMenu;

    new Main;
});

class Main {
    constructor() {
        this.header = document.querySelector(".header");
        this.hero = new HeroSlider('.swiper');
        this._observers = [];
        this._scrollInit();
    }

    _init() {
        new  MobileMenu;
        this._scrollInit();
    }

    destroy() {
        this._observers.forEach(so => so.destroy());
    }

    _scrollInit() {
        this._observers.push(
            new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false }),
            new ScrollObserver('.swiper', this._toggleSlideAnimation.bind(this), { once: false }),
            new ScrollObserver('.cover-slide', this._inviewAnimation),
            new ScrollObserver('.tween-animate-title', this._textAnimation)
        )
        // console.log(this._observers);
    }

    _toggleSlideAnimation(el, inview) {
        if (inview) {
            this.hero.start();
        }else {
            this.hero.stop();
        }
    }

    _textAnimation(el, inview) {
        if (inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _navAnimation(el, inview) {
        if (inview) {
            this.header.classList.remove("triggered")
        } else {
            this.header.classList.add("triggered")
        }
    }
    _inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add("inview")
        } else {
            el.classList.remove("inview")
        }
    }
}

