import React, { useEffect, useState } from 'react';
import QuestionManager from './QuestionManager';

function QuestionBox({ onSubmit }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentQuestionNum, setCurrentQuestionNum] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);
  
  const fetchRandomQuestion = () => {
    let availableQuestions = QuestionManager.questions.filter((_, index) => !usedQuestions.includes(index));
    
    if (availableQuestions.length === 0) {
      setUsedQuestions([]);
      availableQuestions = QuestionManager.questions;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    const questionNum = QuestionManager.questions.indexOf(question);
    
    setCurrentQuestion(question);
    setCurrentQuestionNum(questionNum);
    setUserAnswer('');
    setUsedQuestions(prev => [...prev, questionNum]);
    setTimeLeft(15); // Reset timer when fetching a new question
  };

  const handleAnswerSubmit = () => {
    const correct = QuestionManager.checkAnswer(currentQuestionNum, userAnswer);
    onSubmit(correct);
  };
 
  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerSubmit(); 
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Calculate the border color based on time left
  const borderColor = `rgb(${255 * (1 - timeLeft / 15)}, ${255 * (timeLeft / 15)}, 0)`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div 
        className="p-6 rounded-lg shadow-lg relative w-2/4 max-w-2xl transition-all duration-1000 ease-linear"
        style={{
          backgroundColor: '#717787',
          border: '4px solid',
          borderColor: borderColor,
          boxShadow: `0 0 10px ${borderColor}, 0 0 20px ${borderColor}`
        }}
      >
        <p className='z-50 text-white text-xl mb-4'>{currentQuestion}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer"
          className="border p-2 w-full mt-4 mb-2 bg-slate-700 text-white rounded"
          autoFocus
        />
        <button 
          onClick={handleAnswerSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuestionBox;