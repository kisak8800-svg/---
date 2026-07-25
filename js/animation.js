/* ==================================================
   NOVA Atelier
   GSAP ANIMATIONS
================================================== */

window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    /* ==========================
       HERO INTRO
    ========================== */

    const tl = gsap.timeline();

    tl.from(".header__logo", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })

    .from(".header__menu", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.8")

    .from(".hero__eyebrow", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.6")

    .from(".hero__title span", {
        y: 120,
        opacity: 0,
        stagger: 0.15,
        duration: 1.4,
        ease: "power4.out"
    }, "-=0.7")

    .from(".hero__image", {
        scale: 1.1,
        y: 80,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out"
    }, "-=1")

    .from(".hero__footer", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=0.8");


   /* ==================================================
   HERO PARALLAX
================================================== */

if (window.innerWidth > 768) {

    window.addEventListener("scroll", () => {

        const image = document.querySelector(".hero__image");
        const title = document.querySelector(".hero__title");

        if (!image || !title) return;

        const scroll = window.scrollY;

        image.style.transform =
            `translateY(calc(-40% + ${scroll * 0.08}px))`;

        title.style.transform =
            `translateY(${scroll * 0.03}px)`;

    });

}


    /* ==========================
       STUDIO
    ========================== */

    gsap.from(".studio__label", {
        scrollTrigger: {
            trigger: ".studio",
            start: "top 80%",
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 1
    });

    gsap.from(".studio__title", {
        scrollTrigger: {
            trigger: ".studio",
            start: "top 75%",
            once: true
        },
        y: 80,
        opacity: 0,
        duration: 1.4
    });

    gsap.from(".studio__image img", {
        scrollTrigger: {
            trigger: ".studio__image",
            start: "top 80%",
            once: true
        },
        scale: 1.1,
        opacity: 0,
        duration: 1.5
    });

    gsap.from(".studio__content", {
        scrollTrigger: {
            trigger: ".studio__content",
            start: "top 80%",
            once: true
        },
        x: 60,
        opacity: 0,
        duration: 1.2
    });


    /* ==========================
       PROJECTS
    ========================== */

    gsap.from(".projects__label", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 1
    });

    gsap.from(".projects__title", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 75%",
            once: true
        },
        y: 80,
        opacity: 0,
        duration: 1.4
    });

    gsap.utils.toArray(".project").forEach(project => {

        gsap.from(project.querySelector(".project__image"), {
            scrollTrigger: {
                trigger: project,
                start: "top 85%",
                once: true
            },
            clipPath: "inset(0 0 100% 0)",
            duration: 1.4,
            ease: "power4.out"
        });

        gsap.from(project.querySelector(".project__info"), {
            scrollTrigger: {
                trigger: project,
                start: "top 80%",
                once: true
            },
            y: 50,
            opacity: 0,
            duration: 1
        });

    });


    /* ==========================
       PHILOSOPHY
    ========================== */

    gsap.from(".philosophy__label", {
        scrollTrigger: {
            trigger: ".philosophy",
            start: "top 80%",
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 1
    });

    gsap.from(".philosophy__title", {
        scrollTrigger: {
            trigger: ".philosophy",
            start: "top 75%",
            once: true
        },
        y: 80,
        opacity: 0,
        duration: 1.4
    });

    gsap.from(".philosophy__bottom", {
        scrollTrigger: {
            trigger: ".philosophy__bottom",
            start: "top 85%",
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 1
    });


    /* ==========================
       SERVICES
    ========================== */

    gsap.from(".services__label", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 1
    });

    gsap.from(".services__title", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 75%",
            once: true
        },
        y: 80,
        opacity: 0,
        duration: 1.4
    });

    gsap.from(".service-item", {
        scrollTrigger: {
            trigger: ".services__list",
            start: "top 85%",
            once: true
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1
    });


    /* ==========================
       PROCESS
    ========================== */

    gsap.from(".process__label", {
        scrollTrigger: {
            trigger: ".process",
            start: "top 80%",
            once: true
        },
        y: 40,
        opacity: 0,
        duration: 1
    });

    gsap.from(".process__title", {
        scrollTrigger: {
            trigger: ".process",
            start: "top 75%",
            once: true
        },
        y: 80,
        opacity: 0,
        duration: 1.4
    });

    gsap.from(".process-step", {
        scrollTrigger: {
            trigger: ".process__timeline",
            start: "top 85%",
            once: true
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1
    });

    /* ==========================
       REFRESH
    ========================== */

    ScrollTrigger.refresh();

});
