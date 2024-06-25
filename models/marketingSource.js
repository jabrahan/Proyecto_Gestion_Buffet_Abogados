const mongoose = require('mongoose');
const marketingSource = require('../controllers/marketings');
const marketingSourceSchema = new mongoose.Schema({
    name: String,
    date: Date
});


const marketingSources = mongoose.model("MarketingSource", marketingSourceSchema);


module.exports = marketingSources