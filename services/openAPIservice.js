import OpenAI from "openai";

const fetch = require('node-fetch');
const openai = new OpenAI();

async function defineRequest(prompt) {
    const requestData = {
        model: "gpt-4o-mini",
        response_format: {type: "json_object"
        },
        messages: [
            {role: "system", content: "You are a study helper designed to create flashcards from educational materials provided to you. Your task is to analyze the text and generate fifteen question-answer pairs that will help students study and retain the key information. For each flashcard set, please include: 1. A 'name' for the flashcard set that summarizes its contents. 2. A 'topic' that describes the general subject area of the flashcard set. 3. An array of flashcards, where each flashcard has a 'question' and an 'answer'. Return the flashcards as a JSON object in this format: { 'name': 'Name of the card set', 'topic': 'Topic of the card set', 'flashcards': [{ 'question': 'Question 1', 'answer': 'Answer to Question 1' }, { 'question': 'Question 2', 'answer': 'Answer to Question 2' }, ... ]} Guidelines for creating effective question-answer flashcards: 1. **Identify Key Concepts and Ideas**: Focus on the main ideas, critical facts, or important details that are essential to understanding the material. 2. **Generate Insightful Questions**: Formulate questions that test comprehension, recall, or the application of key concepts (e.g., “What is the purpose of...?”, “How does...work?”, “Why is...important?”). 3. **Concise and Direct Answers**: Provide clear and direct answers in one or two sentences. Avoid overly complex language and focus on the essential information. 4. **Use Varied Question Types**: Include a mix of 'what,' 'how,' and 'why' questions to encourage deeper understanding of the material. 5. **Enhance with Examples (if applicable)**: If an example can clarify the answer, include a brief example in the answer. Create these question-answer pairs based on the following material: " + prompt}
        ],
        max_completion_tokens: 20000
    }
};

try {
    // Send the request to OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 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` // Replace with your actual API key
        },
        body: JSON.stringify(requestData)
    });

    // Parse the JSON response from OpenAI
    const jsonResponse = await response.json();

    // Access the question-answer pairs in the response
    const flashcards = jsonResponse.choices[0]?.message?.content;

    // Parse the JSON content if it's returned as a string
    let parsedFlashcards;
      try {
          parsedFlashcards = JSON.parse(flashcards);
      } catch (error) {
          console.error("Error parsing flashcard JSON:", error);
          throw new Error("Failed to parse flashcards as JSON.");
      }

      // Return the parsed flashcards
      return parsedFlashcards;

  } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
      throw new Error("Failed to retrieve flashcards.");
  }

export { defineRequest };