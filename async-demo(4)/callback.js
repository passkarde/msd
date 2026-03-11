const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        return console.log("Error reading file:", err);
    }
    console.log("Callback Output:", data);
});