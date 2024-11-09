const mongoose = require('mongoose');

const sstudy_guideSchema = new mongoose.Schema({
    userID: String,
    study_guideID: {type: Number, unique: true},
    name: String,
    topic: String

})

const Study_guide = mongoose.model('Study_guide', study_guideSchema);

module.exports = Study_guide;