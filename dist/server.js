import express from "express";
const app = express();
const PORT = 3000;
// Root route
app.get("/", (req, res) => {
    res.send("Hello! Express with TypeScript :)");
});
// start the server
app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:${PORT}`);
});
