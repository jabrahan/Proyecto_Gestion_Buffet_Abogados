const mongoose = require("mongoose");
const genderClient = require("../controllers/genders");

const gender = new mongoose.Schema({
    name: String,
    date: Date
});
 

const genders = mongoose.model("Gender", gender);


module.exports = genders