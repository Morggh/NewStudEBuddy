/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.flashCardCreate = (req, res) => {
  res.render('flashCard_New', {
      title: 'New Study Set'
  });
};