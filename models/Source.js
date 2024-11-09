const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text_data: String,
    description: String
})

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;