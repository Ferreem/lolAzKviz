import React, { useEffect, useState } from 'react';
import QuestionManager from './QuestionManager';

function QuestionBox({ onSubmit }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentQuestionNum, setCurrentQuestionNum] = useState(null);
  
  const fetchRandomQuestion = () => {
    const question = QuestionManager.getRandomQuestion();
    const questionNum = QuestionManager.questions.indexOf(question);
    setCurrentQuestion(question);
    setCurrentQuestionNum(questionNum);
    setUserAnswer('');
  };

  const handleAnswerSubmit = () => {
    const correct = QuestionManager.checkAnswer(currentQuestionNum, userAnswer);
    onSubmit(correct);
  };
 
  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" p-6 rounded-lg shadow-lg relative w-2/4 max-w-2xl" style={{backgroundColor: '#717787'}}>
        <p className=' z-50'>{currentQuestion}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer"
          className="border p-2 w-full mt-4 mb-2 bg-slate-700"
        />
        <button 
          onClick={handleAnswerSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default QuestionBox;
