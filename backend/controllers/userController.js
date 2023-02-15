const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const validator = require('validator')

const { createUser } = require('../userAuthentication/signup')

//innlogging av bruker
const userLogin = async (req, res) => {
    res.json({mssg: "innlogging endepunkt"})
}

//oppretting av bruker
const userSignup = async (req, res) => {
    const {username, password} = req.body

    //validering
    if(!(username && password)){
        res.status(400).json({error: "Passord eller brukernavn er ugyldig eller ikke oppgitt"})
    }
    else if (!validator.isEmail(username)){
        res.status(400).json({error: "Email er ikke gyldig"})
    }
    else if (!validator.isStrongPassword(password)){
        res.status(400).json({error: "Passord er er for svakt"})
    }
    else if(await User.findOne({username})){
        res.status(400).json({error: "Brukernavn/mail allerede registrert"})
    }

    //opprette bruker
    else{
        
        const newUser = await User.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
        });

        res.status(200).json({username, newUser})
       
}
} 

module.exports = {userLogin, userSignup}