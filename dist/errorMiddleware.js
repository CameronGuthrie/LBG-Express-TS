export function errorHandler(err, req, res, next) {
    console.error("Error:", err);
    if (err instanceof Error) {
        res.status(500).json({ message: err.message });
    }
    else {
        res.status(500).json({ message: "An unknown error occurred." });
    }
    next();
}
