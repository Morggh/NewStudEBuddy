const mongoose = require('mongoose');

const question_answerSchema = new mongoose.Schema({
    study_guideID: {type: mongoose.Schema.Types.ObjectId, ref: 'Study_guide'},
    question_answerID: {type: Number, unique: true},
    question_text: String,
    answer_text: String
})

const Question = mongoose.model('Question', question_answerSchema);

module.exports = Question;