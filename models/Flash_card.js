const cardID = 0;
const mongoose = require('mongoose');

const flash_cardSchema = new mongoose.Schema({
    cardID: {type: Number,
    required: [true, 'cardID is required'], 
    validate: {
      validator: function(value) {
        return value !== 0; // Ensure cardID is not 0
      },
      message: 'cardID cannot be 0'
    }


    },
    //cardsetID: {type: mongoose.Schema.Types.ObjectId, ref: 'Flash_card_set'},
    term: String,
    content: String
});

const Flashcard = mongoose.model('flashcards', flash_cardSchema);

module.exports = Flashcard;