import express, { Request, Response } from "express";
import { logger } from "./middleware.js"
import { errorHandler } from "./errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/userRoutes.js"

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Apply middleware
app.use(logger);
app.use(express.json());
app.use("/users", userRoutes);


// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/error", (req: Request, res: Response) => {
    throw new Error("This is a test error!");
});

// Root route
app.get("/", (req: Request, res: Response) => {
    // res.send("Hello! Express with TypeScript :)");
    res.send("Hello! Express with Middleware");
});

// About route
app.get("/about", (req: Request, res: Response) => {
    res.send("This is the about page");
});

// // Dynamic route - Params
// app.get("/user/:id", (req: Request, res: Response) => {

//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);

// });


// // Dynamic route - Query
// app.get("/user", (req: Request, res: Response) => {

//     const userId = req.query.id;

//     if (!userId) {
//         res.status(400).send("need User ID");
//     } else {
//         res.send(`user id: ${userId}`);
//     }

// });

app.use(errorHandler);

// start the server
app.listen(PORT, () => {
    console.log(`server is running at http://127.0.0.1:${PORT}`);
});