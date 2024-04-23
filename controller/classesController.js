import classesModel from "../models/classesModel.js";

const getAllClasses = async (req, res) => {
    try {
        const classes = await classesModel.find()
        res.json(classes)
    } catch (error) {
        throw new Error(error)
    }
}

//AGREGAR CLASES

const addClass = async (req, res) => {
    try {
        const { profesor, detalle, fecha, hora } = req.body
        const clase = new classesModel({
            profesor,
            detalle,
            fecha,
            hora,
        })
        await clase.save()
        res.status(201).json({ message: "Clase agregada a la base de datos" })
    } catch (error) {
        res.status(400).json({ message: "Error al crear la clase" })
        throw new Error(error)
    }
}

//DELETE

const deleteClass = async (req, res) => {
    try {
        const { id } = req.params
        const classes = await classesModel.findByIdAndDelete(id)
        res.json(classes)
    } catch (error) {
        throw new Error(error)
    }
}

//UPDATE
const updateClass = async (req, res) => {
    try {
        const { id } = req.params
        const { profesor, detalle, fecha, hora } = req.body
        const clase = await classesModel.findByIdAndUpdate(
            id,
            { profesor, detalle, fecha, hora },
            { new: true }
        )
        res.json(clase)
    } catch (error) {
        throw new Error(error)
    }
}


export default {
    getAllClasses,
    addClass,
    deleteClass,
    updateClass
}