import express from "express";
import servicesController from "../controller/servicesController.js"


const router = express.Router()


//USER SERVICES AND ENDPOINTS
router.get("/services", servicesController.getAllServices)

router.post("/services/add", servicesController.addService)

router.delete("/services/:id", servicesController.deleteService)

router.put("/services/:id", servicesController.updateService)

export default router