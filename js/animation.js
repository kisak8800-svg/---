/* ==================================================
   NOVA Atelier
   GSAP ANIMATIONS
================================================== */


/* Проверяем загрузку */

window.addEventListener(
    "load",
    () => {

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();



        /*
        HEADER
        */


        tl.from(
            ".header__logo",
            {

                y: -30,

                opacity: 0,

                duration: 1,

                ease: "power4.out"

            }
        );



        tl.from(
            ".header__menu",
            {

                y: -30,

                opacity: 0,

                duration: 1,

                ease: "power4.out"

            },

            "-=0.8"

        );



        /*
        HERO TEXT
        */


        tl.from(
            ".hero__eyebrow",
            {

                opacity:0,

                y:40,

                duration:1,

                ease:"power4.out"

            },

            "-=0.5"

        );



        tl.from(
            ".hero__title span",
            {

                y:120,

                opacity:0,

                stagger:0.15,

                duration:1.4,

                ease:"power4.out"

            },

            "-=0.6"

        );



        /*
        IMAGE
        */


       tl.from(
    ".hero__image",
    {

        scale:1.15,

        opacity:0,

        y:80,

        duration:1.8,

        ease:"power4.out"

    },

    "-=1"

);



        /*
        FOOTER
        */


        tl.from(
            ".hero__footer",
            {

                opacity:0,

                y:30,

                duration:1

            },

            "-=0.8"

        );


    }
);
/* ==================================================
   HERO PARALLAX
================================================== */


window.addEventListener("scroll", function () {


    const image = document.querySelector(".hero__image");

    const title = document.querySelector(".hero__title");


    if (!image || !title) return;


    let scroll = window.scrollY;


    image.style.transform =
    `translateY(calc(-40% + ${scroll * 0.08}px))`;


    title.style.transform =
    `translateY(${scroll * 0.03}px)`;


});
/* ==================================================
   STUDIO ANIMATION
================================================== */


window.addEventListener(
    "load",
    () => {


        gsap.from(
            ".studio__label",
            {

                scrollTrigger: {

                    trigger: ".studio",

                    start: "top 80%"

                },


                y:40,

                opacity:0,

                duration:1,

                ease:"power4.out"

            }
        );



        gsap.from(
            ".studio__title",
            {

                scrollTrigger: {

                    trigger: ".studio",

                    start:"top 70%"

                },


                y:100,

                opacity:0,

                duration:1.5,

                ease:"power4.out"

            }
        );



        gsap.from(
            ".studio__image img",
            {

                scrollTrigger: {

                    trigger: ".studio__image",

                    start:"top 80%"

                },


                scale:1.2,

                opacity:0,

                duration:1.8,

                ease:"power4.out"

            }
        );



        gsap.from(
            ".studio__content",
            {

                scrollTrigger: {

                    trigger: ".studio__content",

                    start:"top 80%"

                },


                x:80,

                opacity:0,

                duration:1.4,

                ease:"power4.out"

            }
        );


    }
);
/* ==================================================
   PROJECTS ANIMATION
================================================== */


window.addEventListener(
    "load",
    () => {


        gsap.from(
            ".projects__label",
            {

                scrollTrigger: {

                    trigger: ".projects",

                    start:"top 80%"

                },


                y:40,

                opacity:0,

                duration:1,

                ease:"power4.out"


            }
        );



        gsap.from(
            ".projects__title",
            {

                scrollTrigger: {

                    trigger: ".projects",

                    start:"top 70%"

                },


                y:120,

                opacity:0,

                duration:1.5,

                ease:"power4.out"


            }
        );





        const projects =
        document.querySelectorAll(".project");



        projects.forEach((project)=>{


            const image =
            project.querySelector("img");


            const info =
            project.querySelector(".project__info");



           gsap.from(
            project.querySelector(".project__image"),
             {


    scrollTrigger:{


        trigger:project,

        start:"top 85%"


    },


    clipPath:"inset(0 0 100% 0)",

    duration:1.5,

    ease:"power4.out"


 }
);



            gsap.from(
                info,
                {


                    scrollTrigger:{


                        trigger:project,


                        start:"top 70%"


                    },


                    y:60,

                    opacity:0,

                    duration:1,


                    ease:"power4.out"



                }
            );


        });



    }
);
/* ==================================================
   PHILOSOPHY ANIMATION
================================================== */


window.addEventListener(
"load",
()=>{


gsap.from(
".philosophy__label",
{


scrollTrigger:{


trigger:".philosophy",

start:"top 80%"


},


opacity:0,

y:50,

duration:1,


ease:"power4.out"


}

);




gsap.from(
".philosophy__title",
{


scrollTrigger:{


trigger:".philosophy",

start:"top 70%"


},


opacity:0,

y:120,


duration:1.5,


ease:"power4.out"


}

);




gsap.from(
".philosophy__bottom",
{


scrollTrigger:{


trigger:".philosophy__bottom",

start:"top 85%"


},


opacity:0,

y:60,


duration:1,


ease:"power4.out"


}

);



});
/* ==================================================
   SERVICES ANIMATION
================================================== */


window.addEventListener(
"load",
()=>{


gsap.from(
".services__label",
{


scrollTrigger:{


trigger:".services",

start:"top 80%"


},


opacity:0,

y:40,

duration:1


}

);




gsap.from(
".services__title",
{


scrollTrigger:{


trigger:".services",

start:"top 70%"


},


opacity:0,

y:100,

duration:1.4,


ease:"power4.out"


}

);





gsap.from(
".service-item",
{

scrollTrigger:{

trigger:".services__list",

start:"top 85%",

once:true

},

opacity:0,

y:40,

stagger:.12,

duration:1.2,

ease:"power4.out"

}

);



});

/* ==================================================
   PROCESS ANIMATION
================================================== */


window.addEventListener(
"load",
()=>{


gsap.from(
".process__label",
{


scrollTrigger:{

trigger:".process",

start:"top 80%",

once:true

},


opacity:.2,

y:40,

duration:1


}

);





gsap.from(
".process__title",
{


scrollTrigger:{

trigger:".process",

start:"top 70%",

once:true

},


opacity:.2,

y:80,

duration:1.3,

ease:"power4.out"


}

);






gsap.from(
".process-step",
{


scrollTrigger:{

trigger:".process__timeline",

start:"top 80%",

once:true

},


opacity:.2,

y:60,

stagger:.15,

duration:1,


ease:"power4.out"


}

);



});
