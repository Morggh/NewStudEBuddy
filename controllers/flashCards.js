exports.renderForm = (req, res) => {
    res.render('flashCard_New', { title: 'User Input Form' });
  };
  
exports.sendCard = async (req, res) => {
    const flashcard = new Flashcard({
      term: req.body.term,
    });
    await flashcard.save();
};