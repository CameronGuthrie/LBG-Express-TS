import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction): void {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Pass control to the next middleware
}