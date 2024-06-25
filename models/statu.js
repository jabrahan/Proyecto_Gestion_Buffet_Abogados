const mongoose = require("mongoose");
const statusRouter = require("../controllers/status");

const status = new mongoose.Schema({
    name: String,
    date: Date
});

const statuses = mongoose.model("Status", status);


module.exports = statuses