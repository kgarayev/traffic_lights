// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

const { log } = console;

// a function to turn off all the lights
const turnOff = () => {
  const turnedOn = document.querySelectorAll(".on");

  if (turnedOn.length) {
    turnedOn.forEach((element) => {
      element.classList.remove("on");
    });
  }
};

// create a delay function
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

document.addEventListener("DOMContentLoaded", () => {
  // selecting buttons
  const stopButton = document.getElementById("stop");
  const cautionButton = document.getElementById("caution");
  const goButton = document.getElementById("go");
  const autoStartButton = document.getElementById("autoStart");
  const autoStopButton = document.getElementById("autoStop");
  let shouldStop = false;

  // selecting lights
  const lights = document.querySelectorAll(".light");

  // a function loop over infinitely with a delay in the loop
  const autoStart = async (iterable = lights, ms = 500) => {
    shouldStop = false;
    while (!shouldStop) {
      for (let i = 0; i < iterable.length; i++) {
        turnOff();
        iterable[i].classList.add("on");
        await delay(ms);
        turnOff();
      }
    }
    turnOff();
  };

  //   a function to stop the infinite loop
  const autoStop = () => {
    shouldStop = true;
  };

  autoStartButton.addEventListener("click", () => {
    log("start");
    autoStart();
  });

  autoStopButton.addEventListener("click", () => {
    log("stop");
    autoStop();
  });

  // listening to clicks and turning lights on/off
  //   red light
  stopButton.addEventListener("click", (e) => {
    log("red on", e);
    turnOff();
    lights[0].classList.add("on");
  });

  //   yellow light
  cautionButton.addEventListener("click", (e) => {
    log("yellow on", e);
    turnOff();
    lights[1].classList.add("on");
  });

  // green light
  goButton.addEventListener("click", (e) => {
    log("green on", e);
    turnOff();
    lights[2].classList.add("on");
  });

  //   listening to hover events
  //   red light
  lights[0].addEventListener("mouseover", () => {
    lights[0].classList.add("on");

    lights[0].addEventListener("mouseout", () => {
      lights[0].classList.remove("on");
    });
  });

  //   yellow light
  lights[1].addEventListener("mouseover", () => {
    lights[1].classList.add("on");

    lights[1].addEventListener("mouseout", () => {
      lights[1].classList.remove("on");
    });
  });

  //   green light
  lights[2].addEventListener("mouseover", () => {
    lights[2].classList.add("on");

    lights[2].addEventListener("mouseout", () => {
      lights[2].classList.remove("on");
    });
  });
});
