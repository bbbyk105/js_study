document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
    so.destroy();

    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     });
    // };
    
});

class ScrollObserver  {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
    };
    this.cb = cb;
    this.options =Object.assign(defaultOptions, options);
    this.once =this.options.once;
    this._init();
}
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        const io = new IntersectionObserver(callback.bind(this), this.options);

        this.io.POLL_INTERVAL = 100;
        this.els.forEach(el => io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}
