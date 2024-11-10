
exports.flashcardCreate = (req, res) => {
    flashcard.find((err, docs) =>{
    res.render('flashCard_New', {
        title: 'New Study Set'
    });
});
};


