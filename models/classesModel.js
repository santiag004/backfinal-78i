import mongoose from "mongoose";
import { Schema } from "mongoose";

const classesSchema = new Schema({
    profesor: String,
    detalle: String,
    fecha: String,
    hora: String
    },
    {versionKey: false}
)

const classesModel = mongoose.model("classes", classesSchema);

export default classesModel