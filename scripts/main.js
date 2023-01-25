import '../styles/style.css';
import * as v from "./variables";

/*
Play vid if vid is on screen
Bron: https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
Play video's when video is on screen. Volume doesn't work
*/

// Duik Pop Up
v.duikPopUp.classList.add("none");
v.loading.classList.add("none");
v.uitleg.classList.add("none");

function showDuikPopUp() {
    v.duikPopUp.classList.remove("none");
    setTimeout(function() {
        v.loading.classList.remove("none");

        setTimeout(function() {
            v.uitleg.classList.remove("none");
        }, 3000);
    }, 2000);
}
v.chooseGereedBtn.addEventListener("click", showDuikPopUp);
