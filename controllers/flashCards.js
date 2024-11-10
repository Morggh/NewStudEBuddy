const Flashcard = require('../models/Flash_card');

exports.renderForm = (req, res) => {
    res.render('flashCard_New', { title: 'User Input Form' });
  };
  
exports.sendCard = async (req, res) => {
  try {
    const flashcard = new Flashcard({
      term: req.body.term,
    });
    await flashcard.save();
    res.redirect('/')
  } catch (error) {
    res.status(500).send("Error saving flashcard: " + error.message); // Send error response
  }
};