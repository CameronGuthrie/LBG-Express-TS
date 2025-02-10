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
// About route
app.get("/about", (req, res) => {
    res.send("This is the about page");
});
// Dynamic route
app.get("/user", (req, res) => {
    // const userId = req.params.id;
    // res.send(`User ID: ${userId}`);
    const userId = req.query.id;
    if (!userId) {
        res.status(400).send("need User ID");
    }
    else {
        res.send(`user id: ${userId}`);
    }
});
// start the server
app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:${PORT}`);
});
