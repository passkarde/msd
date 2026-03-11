const fs = require("fs").promises;

fs.readFile("sample.txt", "utf8")
  .then(data => {
      console.log("Promise Output:", data);
  })
  .catch(err => {
      console.log("Error:", err);
  });