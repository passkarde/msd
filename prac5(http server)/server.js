const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to Home Page");
    } else if (req.url === "/about") {
        res.write("This is About Page");
    } else {
        res.write("404 Page Not Found");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

