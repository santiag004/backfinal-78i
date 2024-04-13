import classesModel from "../models/classesModel.js";

const getAllClasses = async (req, res) => {
    try {
        const classes = await classesModel.find()
        res.json(classes)
        console.log(classes)
    } catch (error) {
        console.log(error)
    }
}

//AGREGAR CLASES

const addClass = async (req, res) => {
    console.log(req.body, "body")
    try {
        const { profesor, detalle_clase, fecha, hora } = req.body
        const clase = new classesModel({
            profesor,
            detalle_clase,
            fecha,
            hora,
        })
        await clase.save()
        res.status(201).json({ message: "Clase agregada a la base de datos" })
    } catch (error) {
        res.status(400).json({ message: "Error al crear la clase" })
        console.log(error)
    }
}

//DELETE

const deleteClass = async (req, res) => {
    try {
        const { id } = req.params
        const classes = await classesModel.findByIdAndDelete(id)
        res.json(classes)
    } catch (error) {
        console.log(error)
    }
}

//UPDATE
const updateClass = async (req, res) => {
    try {
        const { id } = req.params
        const { profesor, detalle_clase, fecha, hora } = req.body
        const clase = await classesModel.findByIdAndUpdate(
            id,
            { profesor, detalle_clase, fecha, hora },
            { new: true }
        )
        res.json(clase)
    } catch (error) {
        console.log(error)
    }
}


export default {
    getAllClasses,
    addClass,
    deleteClass,
    updateClass
}