const Session = require('../models/sessionModel')
const mongoose = require('mongoose')
const { response } = require('express')

//Lage en ny treningsokt


const createSession = async (req, res) => {
  try {
    const sessionDetails = {
      title: req.body.title,
      exercises: [...req.body.exercises], // remove the JSON.parse method
    };

    console.log(sessionDetails)
    // create a new session using the Session model
    const newSession = new Session(sessionDetails);
    
    // save the new session to the database
    await newSession.save();

    res.status(200).json(newSession);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

  


//Hente alle treningsokter
const getAllSessions = async (req, res) => {
    const Sessions = await Session.find({})
    res.status(200).json(Sessions)
}

//Hente spesifikk treningsokt
const getSession = async (req, res) => {
    const {id} = req.params

    //om id ikke har en viss minimum lengde krasjer program, validerer derfor dette i hht. mongoose.
    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const Session = await Session.findById(id)

    if (!Session) {
        return res.status(404).json({error: "Fant ikke okten med id %s", id})
    }
    res.status(200).json(Session)
}

//validering av ID
function validateID (id, message, res) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: message})
    } else return null
}

//`DELTETE  /treningsokter/:id`
//Slette en treningsokt
const deleteSession = async (req, res) => {
    const {id} = req.params

    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const Session = await Session.findOneAndDelete({_id: id})
    
    if (!Session) {
      return res.status(400).json({error: 'Treningsokt finnes ikke'})
    }
  
    res.status(200).json(Session)
  }

//Oppdatere en treningsokt
module.exports = {
    createSession,
    getAllSessions,
    getSession,
    deleteSession
}