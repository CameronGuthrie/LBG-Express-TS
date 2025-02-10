import express from "express";
import { logger } from "./middleware.js";
import { errorHandler } from "./errorMiddleware.js";
const app = express();
const PORT = 3000;
// Apply middleware
app.use(logger);
app.use(errorHandler);
app.get("/error", (req, res) => {
    throw new Error("This is a test error!");
});
// Root route
app.get("/", (req, res) => {
    // res.send("Hello! Express with TypeScript :)");
    res.send("Hello! Express with Middleware");
});
// About route
app.get("/about", (req, res) => {
    res.send("This is the about page");
});
// Dynamic route - Params
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
// Dynamic route - Query
app.get("/user", (req, res) => {
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
