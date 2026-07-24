/* ==================================================
   PRELOADER
================================================== */

window.addEventListener("load", () => {

    const tl = gsap.timeline();

    tl.to(".preloader__logo",{

        opacity:1,

        y:0,

        duration:1,

        ease:"power4.out"

    })

    .to(".preloader__line",{

        width:220,

        duration:.8

    },"-=.5")

    .to(".preloader__text",{

        opacity:1,

        duration:.7

    },"-=.4")

    .to(".preloader",{

        yPercent:-100,

        duration:1.2,

        ease:"power4.inOut",

        delay:.5

    });

});
