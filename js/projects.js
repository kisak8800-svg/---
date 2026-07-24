/* ==================================================
   PROJECT HOVER
================================================== */


window.addEventListener("load",()=>{


const cards =
document.querySelectorAll(".project-card");



cards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{


gsap.to(card,{

scale:1.02,

duration:.6,

ease:"power3.out"

});


});



card.addEventListener(
"mouseleave",
()=>{


gsap.to(card,{

scale:1,

duration:.6,

ease:"power3.out"

});


});


});


});