function sayHello() {
  console.log("Hello world");
}

function sayHelloV2(firstName, lastName) {
  console.log("Hello", firstName, lastName);
}

function sayGoodbye() {
  console.log("Good Bye", new Date().toLocaleString());
}

module.exports = { sayHello, sayHelloV2, sayGoodbye };
