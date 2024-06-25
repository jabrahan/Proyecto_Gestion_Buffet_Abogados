const mongoose = require('mongoose');
const clientss = require('../controllers/clients');

const client = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    address: String,
    state: String,
    city: String,
    zipCode: Number,
    gender: String,
    language: String,
    typeOfCase: String,
    status: String,
    marketingSource: String,
    legalRepresentative: String,
    date: Date,
    nameContact: String,
    phoneContact: Number,
    emailContact: String,
    notes: Array,
    userCreated: String,
    scgheduleDate: Date
});


const clients = mongoose.model("Client", client);


module.exports = clients