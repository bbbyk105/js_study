const child = document.querySelector(".child");
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("inview");
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);

        }else {
            entry.target.classList.remove('inview');
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    rootMargin: "0px";
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
