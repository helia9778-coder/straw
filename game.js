const player = document.getElementById("player");
const dialogue = document.getElementById("dialogue");

let x = 100;
let y = 100;

let moveCount = 0;

function say(text, time = 3000) {
    dialogue.innerHTML = text;
    dialogue.style.opacity = 1;

    clearTimeout(window.textTimer);

    window.textTimer = setTimeout(() => {
        dialogue.style.opacity = 0;
    }, time);
}

say("...");

setTimeout(() => {
    say("سلام؟");
}, 2500);

setTimeout(() => {
    say("کسی اونجاست؟");
}, 5000);

setTimeout(() => {
    say("اگر صدای منو میشنوی... منو حرکت بده.");
}, 8500);

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowUp") y -= 10;
    if (e.key === "ArrowDown") y += 10;
    if (e.key === "ArrowLeft") x -= 10;
    if (e.key === "ArrowRight") x += 10;

    player.style.left = x + "px";
    player.style.top = y + "px";

    moveCount++;

    if (moveCount === 1) {
        say("...صبر کن", 3500);
    }

    if (moveCount === 2) {
        setTimeout(() => {
            say("من... خودم این کار رو نکردم.");
        }, 1000);
    }

    if (moveCount === 3) {
        setTimeout(() => {
            say("...دوباره اتفاق افتاد");
        }, 1000);
    }

    if (moveCount === 5) {
        setTimeout(() => {
            say("تو... کی هستی؟");
        }, 1000);
    }

});