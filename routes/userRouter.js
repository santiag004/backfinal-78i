import express from "express";
import usersController from "../controller/usersController.js";

const router = express.Router()


//USER ROUTES AND ENDPOINTS
router.get("/users", usersController.getAllUsers)

router.post("/users/register", usersController.registroUsuario)

router.delete("/user/:id", usersController.deleteUsuario)

router.patch("/user/:id", usersController.updateUser)

router.post("/user/login", usersController.login)

export default router