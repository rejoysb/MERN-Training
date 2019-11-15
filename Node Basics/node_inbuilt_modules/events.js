const EventEmitter = require("events");

const eventemitter = new EventEmitter();

eventemitter.on("my_custom_event", () => {
  console.log("my_custom_event occured");
});

eventemitter.emit("my_custom_event");
