const OpenAI = require('openai')
const openai = new OpenAI();
const Flashcard = require('../models/Flash_card');
const FlashCardSet = require('../models/Flash_card_set');

async function defineRequest(req, res, prompt) {
    
    try {
        // Send the request to OpenAI
        const completion = await openai.chat.completions.create(
            {
                messages: [
                    {role: "system", content: "You are a study helper designed to create flashcards from educational materials provided to you. Your task is to analyze the text and generate fifteen question-answer pairs that will help students study and retain the key information. For each flashcard set, please include: 1. A 'name' for the flashcard set that summarizes its contents. 2. A 'topic' that describes the general subject area of the flashcard set. 3. An array of flashcards, where each flashcard has a 'question' and an 'answer'. Return the flashcards as a JSON object in this format: { 'name': 'Name of the card set', 'topic': 'Topic of the card set', 'flashcards': [{ 'question': 'Question 1', 'answer': 'Answer to Question 1' }, { 'question': 'Question 2', 'answer': 'Answer to Question 2' }, ... ]} Guidelines for creating effective question-answer flashcards: 1. **Identify Key Concepts and Ideas**: Focus on the main ideas, critical facts, or important details that are essential to understanding the material. 2. **Generate Insightful Questions**: Formulate questions that test comprehension, recall, or the application of key concepts (e.g., “What is the purpose of...?”, “How does...work?”, “Why is...important?”). 3. **Concise and Direct Answers**: Provide clear and direct answers in one or two sentences. Avoid overly complex language and focus on the essential information. 4. **Use Varied Question Types**: Include a mix of 'what,' 'how,' and 'why' questions to encourage deeper understanding of the material. 5. **Enhance with Examples (if applicable)**: If an example can clarify the answer, include a brief example in the answer. Create these question-answer pairs based on the following material:` " + prompt}
                ],
                model: "gpt-4o-mini",
          });

        // Parse the JSON response from OpenAI

        // Access the question-answer pairs in the response
        const flashcards = completion.choices[0]?.message?.content;

        // Parse the JSON content if it's returned as a string
        let parsedFlashcards;
        try {
            parsedFlashcards = JSON.parse(flashcards);
        } catch (error) {
            console.error("Error parsing flashcard JSON:", error);
            throw new Error("Failed to parse flashcards as JSON.");
        }

        const flashCardSet = new FlashCardSet({
            name: parsedFlashcards.name,
            topic: parsedFlashcards.topic,
        });
        await flashCardSet.save();

        const flashcardPromises = parsedFlashcards.flashcards.map((card) => {
            return new Flashcard({
              question: card.question,
              answer: card.answer, // Assuming `definition` is the field for answers
              cardSetId: flashCardSet._id, // Associate with the saved flashcard set
            }).save();
          });
          
          // Wait for all flashcards to be saved
          await Promise.all(flashcardPromises);

        res.json({ message: "Flashcard set and flashcards saved successfully." });
        res.redirect('/cardsOverviewSets')

    } catch (error) {
        console.error("Error processing flashcards:", error);
        res.status(500).send("Failed to create flashcards.");
    }
}
module.exports={ defineRequest };