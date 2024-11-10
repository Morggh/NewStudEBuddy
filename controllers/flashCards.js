const Flashcard = require('../models/Flash_card');
const Flash_card_set = require('../models/Flash_card_set');
  

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

exports.renderOverviewForm = (req, res) => {
  res.render('cardsOverview', { title: 'Data Sets' });
};

