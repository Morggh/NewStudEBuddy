
exports.flashcardCreate = (req, res) => {
    flashcard.find((err, docs) =>{
    res.render('flashCard_New', {
        title: 'New Study Set'
    });
});
};

const card = require('../models/Flash_card');


exports.getCards = (req, res) => {
    card.find((err, docs) => {
        res.render('flashcard_New' , {title: 'New Study Set'})
    });
};

