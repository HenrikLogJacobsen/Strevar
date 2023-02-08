//definerer strukturen til dokumentene vi lagrer

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    tittel: {
        type: String,
        required: true
    },
    sett: {
        type: Number,
        required: true
    },
    repetisjoner: {
        type: Number,
        required: true
    },
    vekt: {
        type: Number,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)

//workoutSchema.find*