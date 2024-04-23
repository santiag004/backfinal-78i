import servicesModel from "../models/servicesModel.js";

const getAllServices = async (req, res) => {
    try {
        const services = await servicesModel.find()
        res.json(services)
    } catch (error) {
        throw new Error(error)
    }
}

//AGREGAR SERVICIO

const addService = async (req, res) => {
    try {
        const { url, titulo, descripcion } = req.body
        const servicio = new servicesModel({
            url,
            titulo,
            descripcion,
        })
        await servicio.save()
        res.status(201).json({ message: "Servicio agregado a la base de datos" })
    } catch (error) {
        res.status(400).json({ message: "Error al crear el servicio" })
        throw new Error(error)
    }
}

//DELETE

const deleteService = async (req, res) => {
    try {
        const { id } = req.params
        const services = await servicesModel.findByIdAndDelete(id)
        res.json(services)
    } catch (error) {
        throw new Error(error)
    }
}

//UPDATE
const updateService = async (req, res) => {
    try {
        const { id } = req.params
        const { url, titulo, descripcion } = req.body
        const servicio = await servicesModel.findByIdAndUpdate(
            id,
            { url, titulo, descripcion },
            { new: true }
        )
        res.json(servicio)
    } catch (error) {
        throw new Error(error)
    }
}


export default {
    getAllServices,
    addService,
    deleteService,
    updateService
}