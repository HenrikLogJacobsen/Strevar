const User = require('../models/userModel')
const bcrypt = require('bcrypt');

const { createUser } = require('../userAuthentication/signup')

//innlogging av bruker
const userLogin = async (req, res) => {
    res.json({mssg: "innlogging endepunkt"})
}

//oppretting av bruker
const userSignup = async (req, res) => {

    const {username, password} = req.body
    const user = await User.findOne({username})

    if (user) {
        res.status(400).json({error: "Username is already registred"})
    }

    const newUser = new User({
        username: username,
        password: bcrypt.hashSync(password, 10),
      });

    try {
        res.status(200).json({username, newUser})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

module.exports = {userLogin, userSignup}