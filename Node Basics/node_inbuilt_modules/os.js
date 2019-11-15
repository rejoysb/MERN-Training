const os = require("os");

const fm = os.freemem();
const tm = os.totalmem();

console.log(tm);
