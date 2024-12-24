import React, { useState } from "react";
import Navbar from "../shared/Navbar";

function Practice() {
  const [questions, setQuestions] = useState([
    {
      question: "Which programming language is known as the backbone of web development?",
      answers: [
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true },
        { text: "Java", correct: false },
        { text: "C++", correct: false },
      ],
    },
    {
      question: "What is the time complexity of binary search?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n^2)", correct: false },
        { text: "O(1)", correct: false },
      ],
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answers: [{ text: "", correct: false }, { text: "", correct: false }, { text: "", correct: false }, { text: "", correct: false }],
  });

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const handleNewQuestionChange = (e) => {
    setNewQuestion({ ...newQuestion, question: e.target.value });
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...newQuestion.answers];
    updatedAnswers[index].text = value;
    setNewQuestion({ ...newQuestion, answers: updatedAnswers });
  };

  const handleCorrectAnswerChange = (index) => {
    const updatedAnswers = newQuestion.answers.map((answer, i) => ({
      ...answer,
      correct: i === index,
    }));
    setNewQuestion({ ...newQuestion, answers: updatedAnswers });
  };

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({
      question: "",
      answers: [{ text: "", correct: false }, { text: "", correct: false }, { text: "", correct: false }, { text: "", correct: false }],
    });
    setShowAddForm(false);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen flex bg-white-900 justify-center text-center items-center">
        <div className="bg-white w-11/12 max-w-lg rounded-lg p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-blue-900 border-b pb-4 mb-6">Simple Quiz</h1>
          {showScore ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                You scored {score} out of {questions.length}!
              </h2>
              <button
                onClick={resetQuiz}
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Play Again
              </button>
            </div>
          ) : showAddForm ? (
            <div>
              <h2 className="text-lg font-semibold mb-4">Add a New Question</h2>
              <input
                type="text"
                placeholder="Enter question"
                value={newQuestion.question}
                onChange={handleNewQuestionChange}
                className="w-full border border-gray-400 px-4 py-2 mb-4 rounded-lg"
              />
              {newQuestion.answers.map((answer, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={answer.text}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg mb-2"
                  />
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="correctAnswer"
                      checked={answer.correct}
                      onChange={() => handleCorrectAnswerChange(index)}
                      className="mr-2"
                    />
                    <span>Mark as correct</span>
                  </label>
                </div>
              ))}
              <button
                onClick={addQuestion}
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mr-2"
              >
                Add Question
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4">
                {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answer.correct)}
                    className="block w-full bg-white border border-gray-400 text-left px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          )}
          {!showScore && !showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500"
            >
              Add New Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Practice;
