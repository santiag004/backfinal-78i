import mongoose from "mongoose";
import { Schema } from "mongoose";

const classesSchema = new Schema({
    profesor: String,
    detalle_clase: String,
    fecha: Date,
    hora: Date
    },
    {versionKey: false}
)

const classesModel = mongoose.model("classes", classesSchema);

export default classesModel