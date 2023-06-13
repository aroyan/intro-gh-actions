const fs = require("fs");

fs.appendFile(
  `${new Date().toISOString().replaceAll(/[:\.]/g, "-")}.txt`,
  `From NodeJS and GitHub Actions
  ${new Date().toISOString()}  
  `,
  (err) => {
    if (err) throw err;
    console.log("Saved");
  }
);
