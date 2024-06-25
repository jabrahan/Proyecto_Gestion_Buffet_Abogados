const mongoose = require("mongoose");
const languageRouter = require("../controllers/languages");

const language = new mongoose.Schema({
    name: String,
    date: Date
});


const languages = mongoose.model("Language", language);

module.exports = languages