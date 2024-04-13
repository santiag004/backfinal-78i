import mongoose from "mongoose";

const URI = process.env.MONGO_URI
const db = process.env.MONGO_DB

const connectDB = async () => {
    try {
        await mongoose.connect(`${URI}/${db}`)
        console.log('Conectado correctamente a la base de datos')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB