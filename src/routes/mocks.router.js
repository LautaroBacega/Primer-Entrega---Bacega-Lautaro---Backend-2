import { Router } from "express";
import { generateUsersMock } from "../utils/mock.utils.js";

const router = Router();

router.get("/mockingusers", async (req, res) => {
    try {
        const users = await generateUsersMock(50);  // Generar 50 usuarios
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al generar usuarios mockeados", details: error.message });
    }
});

export default router;
