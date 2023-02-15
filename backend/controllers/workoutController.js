//Funksjoner som refereres til i router fil

const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
const { response } = require('express')

//Lage en ny treningsokt
const createWorkout = async (req, res) => {
    const {tittel, sett, repetisjoner, vekt} = req.body


    //legg dokument til i database
    try {
        const workout = await Workout.create({vekt, tittel, sett, repetisjoner})
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
    const { id } = req.params

    //om id ikke har en viss minimum lengde krasjer program, validerer derfor dette i hht. mongoose.
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Ikke gyldig treningsoktID"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "Fant ikke okten med id %s", id})
    }
    res.status(200).json(workout)
}

//Slette en treningsokt

//Oppdatere en treningsokt

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout
}