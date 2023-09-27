// Events  Module
// Node js has a built in module, called Events
// where you can create fire and listen for your won events
//

// /Examplw -1 :- Registring for the events to fired only one time using once

// example 2:- Create an event emitter instance and register a couple of callbacs

// example 3:- Registring for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("Your Name is tribhuwan");
});
event.on("sayMyName", () => {
  console.log("Your Name is Kumar");
});
event.on("sayMyName", () => {
  console.log("Your Name is badal");
});

event.on("checkpage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("sayMyName", 200, "ok");
event.emit("checkpage", 200, "ok");
