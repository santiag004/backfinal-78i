//importacion de express y dotenv
import "dotenv/config";
import express from 'express'
import userRouter from './routes/userRouter.js'
import cors from 'cors'
import connectDB from "./database/db.js";
import comprobacionJwt from "./middleware/comprobacionJwt.js";
import privateRoute from './routes/privateRoute.js'
import classesRouter from './routes/classesRouter.js'
import servicesRouter from './routes/servicesRouter.js'

//creacion de la constante del puerto
const PORT = process.env.PORT || 4000


//instancio express
const app = express()

app.use(express.json())
app.use(cors())


app.use("/api", userRouter)
app.use("/api", classesRouter)
app.use("/api", servicesRouter)
// app.use("/api", comprobacionJwt, privateRoute)




//Inicio de servidor
const initApp = () => {
    try {
        connectDB()
        app.listen(PORT, () => {
            console.info(`
            \x1b[1m\x1b[35m======================================
            \x1b[33mHTMLift GYM Database <> (2024 build)
            \x1b[35m======================================
                
            \x1b[32mServidor iniciado en el puerto ${PORT}
            \x1b[0m
            `)
        })
    } catch (error) {
        console.log(error)
    }
}
initApp()