import { Router } from "express";
import * as petsController from "../controllers/pet.controller.js";

const router = Router();

router.get("/", petsController.getPets);

export default router;
