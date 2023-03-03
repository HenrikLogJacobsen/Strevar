const mongoose = require('mongoose');

//username equals email
const userSchema = new mongoose.Schema({
  username: { type: String, minlength: 1, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);