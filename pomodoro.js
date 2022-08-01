const timer = document.getElementById("timer");
const modeButtons = document.querySelector("[class=modeSelector]");
const pomodoroButton = document.getElementById("pomodoroButton");
const shortButton = document.getElementById("shortButton");
const longButton = document.getElementById("longButton");
const mainButton = document.getElementById("toggle");
const bell = document.querySelector("audio");
let seconds = 0;

const TIMER = {
  POMODORO: 25,
  SHORTBREAK: 5,
  LONGBREAK: 15,
};

function changeMode(e) {
  mainButton.classList.replace("fa-stop", "fa-play");
  mainButton.dataset.paused = "true";

  for (let i = 0; i < 3; i++) {
    e.path[1].children[i].classList.remove("active");
  }
  e.target.classList.add("active");

  let mode = e.target.dataset.mode;
  timer.dataset.mode = mode;

  if (timer.dataset.mode === "pomodoro") {
    timer.innerHTML = `${TIMER.POMODORO}:00`;
  } else if (timer.dataset.mode === "short") {
    timer.innerHTML = `0${TIMER.SHORTBREAK}:00`;
  } else {
    timer.innerHTML = `${TIMER.LONGBREAK}:00`;
  }
}

function pomodoro() {
  function setTimer() {
    if (timer.dataset.mode === "pomodoro") {
      seconds = TIMER.POMODORO * 60;
    } else if (timer.dataset.mode === "short") {
      seconds = TIMER.SHORTBREAK * 60;
    } else {
      seconds = TIMER.LONGBREAK * 60;
    }
  }

  if (mainButton.classList.contains("fa-play")) {
    mainButton.classList.replace("fa-play", "fa-stop");
    mainButton.dataset.paused = "false";

    setTimer();

    /*START TIMER WITH FUNCTION WHICH RUNS EVERY SECOND REDUCING NO. OF SECONDS AND DISPLAYING IT */
    interval = setInterval(() => {
      let timeRemaining =
        ("0" + Math.floor(seconds / 60)).slice(-2) +
        ":" +
        ("0" + (seconds % 60)).slice(-2);

      timer.innerHTML = timeRemaining;
      document.title = `${timeRemaining} - ${
        timer.dataset.mode === "pomodoro" ? "Work" : "Break"
      }`;

      /*TO END TIMER AND STOP setInterval FUNCTION.
      No pause option so pomodoro is ruined to keep spirit of this concentration activity alive*/
      if (mainButton.dataset.paused === "true" || seconds === 0) {
        clearInterval(interval);
        if (seconds === 0) {
          bell.play();
        }
      }
      seconds--;
    }, 1000);
  } else {
    mainButton.classList.replace("fa-stop", "fa-play");
    mainButton.dataset.paused = "true";
  }
}

/*START POMODORO WITH TOGGLE BUTTON*/
mainButton.addEventListener("click", pomodoro);

/*CHANGE MODE OF TIMER */
modeButtons.addEventListener("click", changeMode);
