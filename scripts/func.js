import * as v from "./variables";
import gsap from "gsap";

// Legenda
v.legenda.classList.add("none");

function showLegenda() {
    v.legenda.classList.toggle("show");
}
v.legendaBtn.addEventListener("click", showLegenda);

// Filter
v.filter.classList.add("none");
v.gereed2Btn.classList.add("none");

function showFilter() {
    v.filter.classList.add("show");

    gsap.to(".jij", {
        opacity: 0,
        duration: 1
    });
}
v.filterBtn.addEventListener("click", showFilter);

function closeFilter() {
    v.filter.classList.remove("show");

    setTimeout(function() {
        v.popUp.classList.remove("none");
    }, 2000);

    v.gereedBtn.classList.add("none");
    v.gereed2Btn.classList.remove("none");
    
}
v.gereedBtn.addEventListener("click", closeFilter);

function closeFilter2() {
    v.filter.classList.remove("show");
}
v.gereed2Btn.addEventListener("click", closeFilter2);

// Popup 
v.popUp.classList.add("none");

function closePopup() {
    v.popUp.classList.add("none");
}
v.cross.addEventListener("click", closePopup);

