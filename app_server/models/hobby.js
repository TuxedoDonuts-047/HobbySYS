const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
username: String,
password: String,
email: String,
selectGame: String,
armyPoints: String,
armyList: String
});

const Hobby = mongoose.model('hsobbies', hobbySchema);
module.exports = hobby;
