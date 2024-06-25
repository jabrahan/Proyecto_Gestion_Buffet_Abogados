const mongoose = require("mongoose");
const typeOfCaseRouter = require("../controllers/typeofcases");

const typeOfCase = new mongoose.Schema({
    name: String,
    date: Date
});


const typeOfCases = mongoose.model("TypeOfCase", typeOfCase);


module.exports = typeOfCases