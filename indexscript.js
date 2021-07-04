$(document).scroll (function () {
    var header = document.querySelector("header");
    if ($(window).scrollTop() < 50) {
        header.style.opacity = "100%";
        } else {
            header.style.opacity = "0%";
            }
    })

function JogarWos() {
    window.location='jogarwos.html';
    }
function JogarNM() {
    window.location='jogarnm.html';
    }

function ToggleMenu() {
    var painel = document.querySelector(".menupainel");
    var button = document.getElementById("btmenu");
    var body = document.querySelector("body");
    if (painel.style.left == "100%") {
        painel.style.left = "50%";
        button.style.animation = "animbutton 300ms ease-out forwards";
        setTimeout(function () {
            button.style.animation = "none";
            button.style.backgroundImage = "url('xmenu.png')";
            button.style.backgroundRepeat = "no-repeat";
            button.style.backgroundSize = "85% 75%";
            button.style.backgroundPosition = "center";
            }, 300);
        body.style.overflow = "hidden";
    } else {
        painel.style.left = "100%";
        button.style.animation = "animbutton 300ms ease-out forwards reverse";
        setTimeout(function () {
            button.style.animation = "none";
            button.style.backgroundImage = "url('menubutton.png')";
            button.style.backgroundRepeat = "no-repeat";
            button.style.backgroundSize = "100% 100%";
            button.style.backgroundPosition = "center";
            }, 300);
        body.style.overflow = "visible";
        }
    }