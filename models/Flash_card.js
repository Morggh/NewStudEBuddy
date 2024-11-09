const mongoose = require('mongoose');

const flash_cardSchema = new mongoose.Schema({
    cardID: {type: Number, unique: true},
    cardsetID: {type: mongoose.Schema.Types.ObjectId, ref: 'Flash_card_set'},
    term: String,
    content: String
})

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;