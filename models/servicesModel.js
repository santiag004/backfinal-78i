import mongoose from "mongoose";
import { Schema } from "mongoose";

const servicesSchema = new Schema({
    url: String,
    titulo: String,
    descripcion: String,
    },
    {versionKey: false}
)

const servicesModel = mongoose.model("services", servicesSchema);

export default servicesModel