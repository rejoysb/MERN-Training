const path = require("path");

const fs = require("fs");

const data = fs.readFileSync(path.join("csv", "test.csv"), {
  encoding: "UTF-8"
});

// "./csv/test.csv"
// ".\csv\test.csv"

console.log(data);
