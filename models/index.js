const mongoose = require("mongoose");
const Schema = mongoose.Schema
const trainingSchema = new Schema(
    {
    Date: {
        type: Date,
        default: () => new Date(),
    },
    workouts: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter your workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter workout name"
            },
            duration: {
                type: Number, 
                required: "Enter duration"
            },
        }
    ]
})

const Training = mongoose.model("Training", trainingSchema );
module.exports = Training;