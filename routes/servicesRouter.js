import express from "express";
import servicesController from "../controller/servicesController.js"


const router = express.Router()


//USER ROUTES AND ENDPOINTS
router.get("/services", servicesController.getAllServices)

router.post("/services/add", servicesController.addService)

router.delete("/services/:id", servicesController.deleteService)

router.patch("/services/:id", servicesController.updateService)

export default router