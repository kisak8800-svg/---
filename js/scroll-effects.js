/* ==================================================
   NOVA Atelier
   SCROLL EFFECTS
================================================== */


gsap.registerPlugin(ScrollTrigger);



window.addEventListener("load",()=>{


/* ==============================
   SECTION TITLES
============================== */


gsap.utils.toArray(".section-title").forEach(title=>{


    gsap.from(title,{

        scrollTrigger:{

            trigger:title,

            start:"top 85%",

            once:true

        },


        y:40,

        opacity:0,

        duration:1.2,

        ease:"power3.out"


    });


});





/* ==============================
   TEXT BLOCKS
============================== */


gsap.utils.toArray(".section-text").forEach(text=>{


    gsap.from(text,{


        scrollTrigger:{

            trigger:text,

            start:"top 85%",

            once:true

        },


        y:25,

        opacity:0,

        duration:1,

        ease:"power2.out"


    });


});





/* ==============================
   IMAGES
============================== */


gsap.utils.toArray(
".project-image, .hero__image"
)

.forEach(image=>{


    gsap.from(image,{


        scrollTrigger:{

            trigger:image,

            start:"top 80%",

            once:true

        },


        scale:.96,

        opacity:0,

        duration:1.4,

        ease:"power3.out"


    });


});

});
