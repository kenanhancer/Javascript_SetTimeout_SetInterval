const greeting = require("./greetingLib");

//setInterval allows to run a function reqularly with the interval between the runs.
const timerId1 = setInterval(() => greeting.sayGoodbye(), 3000);

//after 12 seconds stop timers
setTimeout(() => {
  clearInterval(timerId1);

  console.log("Stop all setIntervals", timerId1);
}, 12000);
