exports.renderForm = (req, res) => {
    res.render('flashCard_New', { title: 'User Input Form' });
  };
  
exports.sendCard = async (req, res) => {
    const term = new flashcard({
      term: req.body.term,
    });
    await flashcard.save();
};