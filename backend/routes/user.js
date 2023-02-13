const express = require('express')

const router = express.Router()

const {userLogin, userSignup} = require("../controllers/userController")

//innlogging
router.post('/login', userLogin)


//oppretting av bruker
router.post('/signup', userSignup)

module.exports = router