const mongoose = require('mongoose');
const flash_cardSchema = new mongoose.Schema({
    //cardsetID: {type: mongoose.Schema.Types.ObjectId, ref: 'Flash_card_set'},
    term: String,
    content: String
});
alert(term)
const Flashcard = mongoose.model('flashcards', flash_cardSchema);

module.exports = Flashcard;