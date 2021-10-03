const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const footprintSchema = new Schema({
    category1: {type: String, required: true },
    name: {type: String, required:true },
    value1: {type: Number, required: true },
});

module.exports = mongoose.model("footprint")