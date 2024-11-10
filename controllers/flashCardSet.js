const Flash_card_set = require('../models/Flash_card_set');

exports.renderForm = (req, res) => {
    res.render('cardsOverview', { title: 'User Input Form' });
  };
  
exports.sendCardSet = async (req, res) => {
  try {
    const flash_card_set = new Flash_card_set({
      name: req.body.name,
      topic: req.body.topic
    });
    await flashcard.save();
    res.redirect('/create_resource');
  } catch (error) {
    res.status(500).send("Error generating flash card set: " + error.message); // Send error response
  }
};