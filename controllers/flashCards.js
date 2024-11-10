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

exports.getCardSets = async (req, res) => {
  try {
    // Check if the user is authenticated
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Get the userId from the logged-in user
    const userId = req.user._id;

    // Find flash card sets that belong to the logged-in user
    const flashCardSets = (await FlashCardSet.find({ userId })) || [];

    // Render the Pug template and pass the data (ensure it's always an array)
    res.render('flashCardSets', { flashCardSets });

    res.status(200).json(flashCardSets);
  }catch (error) {
    res.render('cardsOverview', { flashCardSets: [] });
  }
}

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

