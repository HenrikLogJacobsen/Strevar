//Funksjoner som refereres til i router fil

const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
const { response } = require('express')

//Lage en ny treningsokt
const createWorkout = async (req, res) => { 
    const {title, sets, reps, weight} = req.body


    //legg dokument til i database
    try {
        const workout = await Workout.create({title, sets, reps, weight})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Hente alle treningsokter
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({})
    res.status(200).json(workouts)
}

//Hente spesifikk treningsokt
const getWorkout = async (req, res) => {
    const {id} = req.params

    //om id ikke har en viss minimum lengde krasjer program, validerer derfor dette i hht. mongoose.
    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "Fant ikke okten med id %s", id})
    }
    res.status(200).json(workout)
}

//validering av ID
function validateID (id, message, res) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: message})
    } else return null
}

//`DELTETE  /treningsokter/:id`
//Slette en treningsokt
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const workout = await Workout.findOneAndDelete({_id: id})
    
    if (!workout) {
      return res.status(400).json({error: 'Treningsokt finnes ikke'})
    }
  
    res.status(200).json(workout)
  }

//Oppdatere en treningsokt
const updateWorkout = async (req, res) => {
    const {id} = req.params
    const {title, sets, reps, weight} = req.body

    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const workout = await Workout.findByIdAndUpdate(id, {
        title: title,
        sets: sets,
        reps: reps,
        weight: weight
    })
    
    if (!workout) {
      return res.status(400).json({error: 'Feil i endring av øvelse'})
    }
  
    res.status(200).json(workout)
  }

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}