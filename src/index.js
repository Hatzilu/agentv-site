const element = document.getElementsByClassName("tvcat")[0];
const img = element.querySelector("img");
const zero = document.timeline.currentTime;
let start;

const duration = 5000;
let animation = [
    "/public/img/head.jpg",
    "/public/img/head_blink1.jpg",
    "/public/img/head_blink2.jpg"
]


function blink() {
    img.src = animation[1];
    setTimeout(() => img.src = animation[2], 100);
    setTimeout(() => img.src = animation[0], 200);
}


setInterval(blink, 3000)