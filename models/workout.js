const mongoose = require("mongoose");
const Schema = mongoose.Schema
const workoutSchema = new Schema(
    {
    Date: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
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

const Workout = mongoose.model("Training", workoutSchema );
module.exports = Workout;