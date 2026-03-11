const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request received at:", new Date());
    next();
});


app.get("/", (req, res) => {
    res.send("Welcome to Express Home Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});
