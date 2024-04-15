import express from "express";
import classesController from "../controller/classesController.js";


const router = express.Router()


//USER ROUTES AND ENDPOINTS
router.get("/classes", classesController.getAllClasses)

router.post("/classes/add", classesController.addClass)

router.delete("/classes/:id", classesController.deleteClass)

router.put("/classes/:id", classesController.updateClass)

export default router