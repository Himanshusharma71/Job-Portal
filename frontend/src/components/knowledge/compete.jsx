import React, { useState } from 'react';
import Navbar from '../shared/Navbar';

function Compete() {
  // Initial set of questions categorized by levels
  const initialQuestions = {
    beginner: [
      "What is JavaScript?",
      "Explain the difference between `var`, `let`, and `const`.",
      "What are JavaScript data types?",
      "What is a closure in JavaScript?",
      "Explain event bubbling.",
    ],
    intermediate: [
      "What is the difference between `==` and `===` in JavaScript?",
      "Explain promises in JavaScript.",
      "What are arrow functions?",
      "What is the difference between `call()`, `apply()`, and `bind()`?",
      "Explain async/await in JavaScript.",
    ],
    advanced: [
      "What is memoization and how is it used in JavaScript?",
      "Explain the concept of currying in JavaScript.",
      "What are JavaScript Proxies?",
      "How does the event loop work in JavaScript?",
      "What is a WeakMap and how is it different from a Map?",
    ],
  };

  // State to manage questions
  const [questions, setQuestions] = useState(initialQuestions);

  // Function to add more questions
  const addQuestion = (level, newQuestion) => {
    setQuestions((prevQuestions) => ({
      ...prevQuestions,
      [level]: [...prevQuestions[level], newQuestion],
    }));
  };

  // Function to delete a question
  const deleteQuestion = (level, indexToDelete) => {
    setQuestions((prevQuestions) => ({
      ...prevQuestions,
      [level]: prevQuestions[level].filter((_, index) => index !== indexToDelete),
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4">
        {/* Header Section */}
        <header className="text-center py-8 bg-blue-600 text-white">
          <h1 className="text-4xl font-bold">Compete For Success</h1>
        </header>

        {/* Question Levels */}
        <section className="mt-8 max-w-6xl mx-auto bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Level-wise Questions</h2>
          {Object.keys(questions).map((level) => (
            <div key={level} className="mb-6">
              <h3 className="text-xl font-bold capitalize bg-gray-200 p-2 rounded-md">
                {level} Level
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-2">
                {questions[level].map((question, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{question}</span>
                    <button
                      onClick={() => deleteQuestion(level, index)}
                      className="ml-4 px-2 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Add Question Section */}
        <section className="mt-8 max-w-6xl mx-auto bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add New Question</h2>
          <AddQuestionForm addQuestion={addQuestion} />
        </section>
      </div>
    </div>
  );
}

// Form Component for Adding Questions
function AddQuestionForm({ addQuestion }) {
  const [level, setLevel] = useState('beginner');
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim() === '') {
      alert('Please enter a valid question.');
      return;
    }
    addQuestion(level, newQuestion);
    setNewQuestion('');
    alert(`Question added to ${level} level!`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block font-medium mb-2">Select Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-2">New Question</label>
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows="3"
          placeholder="Enter your JavaScript question here..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add Question
      </button>
    </form>
  );
}

export default Compete;
