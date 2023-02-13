const user = require('../models/userModel')

//innlogging av bruker
const userLogin = async (req, res) => {
    res.json({mssg: "innlogging endepunkt"})
}

//oppretting av bruker
const userSignup = async (req,res) => {
    res.json({mssg: "oppretting endepunkt"})
}

module.exports = {userLogin, userSignup}