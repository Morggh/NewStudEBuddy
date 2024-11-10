exports.renderForm = (req, res) => {
    res.render('/flashCard_New', { title: 'User Input Form' });
  };
  
  // Handle form submission (you can expand this with your own logic)
  exports.handleFormSubmit = (req, res) => {
    const userInput = req.body.userInput; // Access the user input from the form
  
    // Here, you could process the user input (e.g., save to a database, etc.)
    console.log('User Input:', userInput);
  
    // Redirect to a confirmation page or render a response
    res.send(`<h1>Thank you for your input: ${userInput}</h1>`);
  };