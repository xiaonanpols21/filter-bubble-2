import '../styles/style.css'
import * as d3 from 'd3';
import { interpolateMagma } from 'd3';

/*
Play vid if vid is on screen
Bron: https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
Play video's when video is on screen. Volume doesn't work
*/

// Variables
const chooseGereedBtn = document.querySelector(".tiktok-vid button");
const duikPopUp = document.querySelector(".duik-pop-up");
const loading  = document.querySelector(".loading");

// Duik Pop Up
duikPopUp.classList.add("none");

function showDuikPopUp() {
    duikPopUp.classList.remove("none");
    setTimeout(function() {
        loading.classList.remove("none");

        setTimeout(function() {
            // info screen
        }, 3000);
    }, 3000);
}
chooseGereedBtn.addEventListener("click", showDuikPopUp);

// Loading
loading.classList.add("none");