import express from "express";
import { logger } from "./middleware.js";
const app = express();
const PORT = 3000;
// Apply middleware
app.use(logger);
// Root route
app.get("/", (req, res) => {
    // res.send("Hello! Express with TypeScript :)");
    res.send("Hello! Express with Middleware");
});
// about route
app.get("/about", (req, res) => {
    res.send("This is the about page");
});
// start the server
app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:${PORT}`);
});
