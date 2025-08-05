"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let year = 2000;
let month = 1;
let day = 0;
const MONTHLENGTH = 30;
const YEARLENGTH = 12;
const calendar = document?.querySelector("#calendar");
const increase = document?.querySelector("#increase");
const decrease = document?.querySelector("#decrease");
const play = document?.querySelector("#play");
let playing = false;
let timePointer = 2;
const TIMING = [250, 500, 1000, 1500, 2000];
let time = TIMING[timePointer];
function main() {
    console.log("this is the main function");
    day++;
    if (day === MONTHLENGTH) {
        month++;
        day = 1;
    }
    if (month === YEARLENGTH) {
        year++;
        month = 1;
    }
    console.log(`${day}/${month}/${year}`);
    calendar.innerText = `${day}/${month}/${year}`;
}
main();
let gameLoop;
increase?.addEventListener("click", () => {
    if (timePointer > 0) {
        console.log("game speed INCREASE");
        timePointer--;
        time = TIMING[timePointer];
    }
    if (timePointer === 0) {
        increase.disabled = true;
    }
    if (timePointer > 0) {
        decrease.disabled = false;
    }
    console.log(time);
    console.log(timePointer);
    main();
    clearInterval(gameLoop);
    gameLoop = setInterval(main, time);
});
decrease?.addEventListener("click", () => {
    if (timePointer < TIMING.length - 1) {
        console.log("game speed DECREASE");
        timePointer++;
        time = TIMING[timePointer];
    }
    if (timePointer === TIMING.length - 1) {
        decrease.disabled = true;
    }
    if (timePointer < TIMING.length) {
        increase.disabled = false;
    }
    console.log(time);
    console.log(timePointer);
    clearInterval(gameLoop);
    gameLoop = setInterval(main, time);
});
play?.addEventListener("click", () => {
    playing = !playing;
    if (playing) {
        console.log("game starting");
        clearInterval(gameLoop);
        gameLoop = setInterval(main, time);
        play.innerText = "STOP";
    }
    else {
        console.log("stopping game");
        clearInterval(gameLoop);
        play.innerText = "PLAY";
    }
    console.log(`game time ${time}`);
});
//# sourceMappingURL=index.js.map