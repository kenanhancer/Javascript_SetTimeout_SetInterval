const greeting = require("./greetingLib");

//setTimeout allows to run a function once after the interval of time.
const timerId1 = setTimeout(function() {
  console.log("HELLO WORLD");
}, 1000);

const timerId2 = setTimeout(() => greeting.sayHello(), 1000);

const timerId3 = setTimeout(greeting.sayHello, 1000);

//With arguments
const timerId4 = setTimeout(
  function(firstName, lastName) {
    console.log("HELLO", firstName, lastName);
  },
  1000,
  "KENAN",
  "HANCER"
);

const timerId5 = setTimeout(
  (firstName, lastName) => greeting.sayHelloV2(firstName, lastName),
  1000,
  "Name1",
  "Name1"
);

const timerId6 = setTimeout(greeting.sayHelloV2, 1000, "Kenan", "Hancer");

//Reqursive setTimeout
let timerId7 = setTimeout(function tick() {
  console.log("Reqursive setTimeout every 200ms");

  timerId7 = setTimeout(tick, 200);
}, 200);

//after 2 seconds stop all timers.
const timerId8 = setTimeout(() => {
  clearTimeout(timerId1);
  clearTimeout(timerId2);
  clearTimeout(timerId3);
  clearTimeout(timerId4);
  clearTimeout(timerId5);
  clearTimeout(timerId6);
  clearTimeout(timerId7);

  console.log(
    "Stop all setTimeouts after 2000ms",
    timerId1,
    timerId2,
    timerId3,
    timerId4,
    timerId5,
    timerId6,
    timerId7,
    timerId8
  );
}, 2000);
