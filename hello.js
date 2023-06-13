const fs = require("fs");

fs.appendFile(
  "HelloWorld.txt",
  "Hello world, this is from nodejs and github actions",
  function (err) {
    if (err) throw err;
    console.log("Saved");
  }
);
