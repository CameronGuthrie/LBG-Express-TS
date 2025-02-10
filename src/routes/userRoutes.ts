import { Router, Request, Response } from "express";

const router = Router();

// GET /users
router.get("/", (req:Request, res:Response) => {
    
    const userId = req.query.id;

    if (!userId) {
        res.json({message: "list of all users"});
    } else {
        res.json({message:`user id: ${userId}`});
    }

});

// GET /users/:id
router.get("/:id", (req:Request, res:Response) => {
    const userId = req.params.id;
    res.json({ message: `User ID: ${userId}`});
});

export default router;