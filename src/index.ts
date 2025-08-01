let year = 2000;
let month = 1;
let day = 0;

const MONTHLENGTH = 30;
const YEARLENGTH = 12;

const calendar = document?.querySelector<HTMLHtmlElement>("#calendar");
const increase = document?.querySelector<HTMLButtonElement>("#increase");
const decrease = document?.querySelector<HTMLButtonElement>("#decrease");
const play = document?.querySelector<HTMLButtonElement>("#play");

let playing = true;

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
  calendar!.innerText = `${day}/${month}/${year}`;
}

main();
let gameLoop = setInterval(main, time);

increase?.addEventListener("click", () => {
  if (timePointer > 0) {
    console.log("game speed INCREASE");
    timePointer--;
    time = TIMING[timePointer];
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
    play!.innerText = "STOP";
  } else {
    console.log("stopping game");
    clearInterval(gameLoop);
    play!.innerText = "PLAY";
  }
  console.log(`game time ${time}`);
});
