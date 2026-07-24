/* ==================================================
   NOVA Atelier
   MAGNETIC BUTTONS
================================================== */


window.addEventListener("load", ()=>{


    const buttons = document.querySelectorAll(
        ".hero-button, .headermenu, .menuclose"
    );


    buttons.forEach(button=>{


        button.addEventListener(
            "mousemove",
            (e)=>{


                const rect = button.getBoundingClientRect();


                const x =
                e.clientX - rect.left - rect.width / 2;


                const y =
                e.clientY - rect.top - rect.height / 2;



                gsap.to(button,{

                    x:x * 0.25,

                    y:y * 0.25,

                    duration:.4,

                    ease:"power3.out"

                });


            }
        );



        button.addEventListener(
            "mouseleave",
            ()=>{


                gsap.to(button,{

                    x:0,

                    y:0,

                    duration:.7,

                    ease:"elastic.out(1,.3)"

                });


            }
        );


    });


});