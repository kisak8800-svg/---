/* ==================================================
   NOVA Atelier
   CUSTOM CURSOR
================================================== */

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

if (cursor && dot) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

    });

    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    const hoverElements = document.querySelectorAll(

        "a, button, .service-item, .project-card, .hero__image"

    );

    hoverElements.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");

        });

    });

}