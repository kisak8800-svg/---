/* ==================================================
   NOVA Atelier
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   MENU
================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const menuButton = document.querySelector(".header__menu");

    const menu = document.querySelector(".menu");

    const menuClose = document.querySelector(".menu__close");

    const menuLinks = document.querySelectorAll(".menu__nav a");



    if (!menuButton || !menu || !menuClose) {

        console.log("Menu elements not found");

        return;

    }



    function openMenu() {


        menu.classList.add("active");

        document.body.style.overflow = "hidden";


        console.log("Menu opened");


    }



    function closeMenu() {


        menu.classList.remove("active");

        document.body.style.overflow = "";


    }



    menuButton.addEventListener(
        "click",
        openMenu
    );



    menuClose.addEventListener(
        "click",
        closeMenu
    );



    menuLinks.forEach(link => {


        link.addEventListener(
            "click",
            closeMenu
        );


    });



    document.addEventListener(
        "keydown",
        (event)=>{


            if(event.key === "Escape"){

                closeMenu();

            }


        }
    );


});