const fs = require("fs");

fs.appendFile(
  `${new Date().toISOString()}.txt`,
  `From NodeJS and GitHub Actions
  ${new Date().toISOString()}  
  `,
  (err) => {
    if (err) throw err;
    console.log("Saved");
  }
);
