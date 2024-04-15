import usuarioModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const getAllUsers = async (req, res) => {
    try {
        const usuarios = await usuarioModel.find()
        res.json(usuarios)
        console.log(usuarios)
    } catch (error) {
        console.log(error)
    }
}

//REGISTRAR USUARIO

const registroUsuario = async (req, res) => {
    console.log(req.body, "body")
    try {
        const { nombre, apellido, email, telefono, password } = req.body
        console.log(password)
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        const usuario = new usuarioModel({
            nombre,
            apellido,
            email,
            telefono,
            password: passwordHash,
        })
        await usuario.save()
        res.status(201).json({ message: "Usuario creado" })
    } catch (error) {
        res.status(400).json({ message: "Error al crear usuario" })
        console.log(error)
    }
}

//DELETE

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await usuarioModel.findByIdAndDelete(id)
        res.json(usuario)
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellido, email, telefono, admin } = req.body
        const usuario = await usuarioModel.findByIdAndUpdate(
            id,
            { nombre, apellido, email, telefono, admin },
            { new: true }
        )
        res.json(usuario)
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const usuario = await usuarioModel.findOne({ email })

        if (!usuario) {
            return res
                .status(400)
                .json({ message: "Usuario y/o Password incorrecto" });
        }

        const comparePass = await bcrypt.compare(password, usuario.password)

        if (!comparePass) {
            return res
                .status(400)
                .json({ message: "Usuario y/o Password incorrecto" });
        }

        const token = jwt.sign(
            {
                id: usuario._id,
                nombre: usuario.nombre,
                admin: usuario.admin
            },
            process.env.SECRET_KEY,
            {
                expiresIn: 86400,
            }
        )

        res.header(token).json({token})
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAllUsers,
    registroUsuario,
    deleteUsuario,
    updateUser,
    login,
}