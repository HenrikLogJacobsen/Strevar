const express = require('express')
//const { setFollow } = require('../controllers/profileController')

const router = express.Router()

const {userLogin, userSignup} = require("../controllers/userController")
const {setFollow, removeFollow} = require("../controllers/profileController")

//innlogging
router.post('/login', userLogin)


//oppretting av bruker
router.post('/signup', userSignup)

//følge ny bruker
router.post('/newfollow', setFollow)

//ta bort en følger
router.post('/removefollow', removeFollow)

module.exports = router