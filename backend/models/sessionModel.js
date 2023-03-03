const Exercise = require('../models/workoutModel')
const mongoose = require('mongoose')


const sessionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    exercises: [
        {
          type: Exercise.schema,
          ref: 'Exercise',
        },
      ],
  }, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema)


