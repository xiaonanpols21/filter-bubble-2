import '../styles/style.css'

/*
Play vid if vid is on screen
Bron: https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
Play video's when video is on screen. Volume doesn't work
*/

// Variables
const chooseGereedBtn = document.querySelector(".tiktok-vid button");
const duikPopUp = document.querySelector(".duik-pop-up");
const loading  = document.querySelector(".loading");
const uitleg = document.querySelector(".uitleg-sim");

// Duik Pop Up
duikPopUp.classList.add("none");
loading.classList.add("none");
uitleg.classList.add("none");

function showDuikPopUp() {
    duikPopUp.classList.remove("none");
    setTimeout(function() {
        loading.classList.remove("none");

        setTimeout(function() {
            uitleg.classList.remove("none");
        }, 3000);
    }, 2000);
}
chooseGereedBtn.addEventListener("click", showDuikPopUp);
