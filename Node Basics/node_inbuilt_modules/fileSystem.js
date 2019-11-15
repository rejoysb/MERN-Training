const fs = require("fs");

// windows only
const data = fs.readFileSync("./csv/test.csv", { encoding: "UTF-8" });
