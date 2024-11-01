"use strict";

// ===== init =====
const init = () => {
    // # app-height
    appHeight();
    // # lenis
    initLenis();
    // # firstview
    const swiperFv = new Swiper("[data-fv-swiper]", {
        effect: "fade",
        speed: 2000,
        autoplay: {
            delay: 1500,
        },
    });
}

const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty(
        "--app-height",
        `${document.documentElement.clientHeight}px`
    );
};
window.addEventListener("resize", appHeight);

const initLenis = () => {
    const lenis = new Lenis({});
    lenis.on('scroll', (e) => { });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

window.addEventListener('DOMContentLoaded', init);