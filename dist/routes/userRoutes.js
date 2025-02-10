import { Router } from "express";
const router = Router();
//DATASTORE
const users = [
    { id: 1, name: "Hugh Mann", age: 25 },
    { id: 2, name: "Firstname Lastname", age: 99 }
];
// GET /users
router.get("/", (req, res) => {
    // const userId = req.query.id;
    // if (!userId) {
    //     res.json({message: "list of all users"});
    // } else {
    //     res.json({message:`user id: ${userId}`});
    // }
    res.json(users);
});
//  READ - GET /users/:id 
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    else {
        res.json(user);
    }
});
// CREATE - POST /users
router.post("/", (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(404).json({ message: "User not found" });
    }
    else {
        const newUser = {
            id: users.length + 1,
            name,
            age: parseInt(age)
        };
        users.push(newUser);
        res.status(201).json(newUser);
    }
});
// UPDATE - PUT /users/:id
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, age } = req.body;
    const user = users.find((u) => u.id === userId);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    }
    else {
        user.name = name || user.name;
        user.age = age ? parseInt(age) : user.age;
        res.json(user);
    }
});
// DELETE - DELETE /users/:id
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.findIndex((u) => u.id === userId);
    if (user === -1) {
        res.status(404).json({ message: "User not found" });
    }
    else {
        users.splice(user, 1);
        res.status(204).send(); // no content
    }
});
export default router;
