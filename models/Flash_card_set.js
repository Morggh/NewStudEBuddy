const mongoose = require('mongoose');

const flash_card_setSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    cardsetID: {type: Number, unique: true},
    name: String,
    topic: String
})

const Flash_card_set = mongoose.model('Flash_card_set', flash_card_setSchema);

module.exports = Flash_card_set;