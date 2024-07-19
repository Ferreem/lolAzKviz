import React, { useState } from 'react';
import QuestionManager from './QuestionManager';

function QuestionBox({ onClose }){
    const [answer, setAnswer] = useState('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-2/4 max-w-2xl">
                <button 
                    onClick={onClose}
                    className="text-xl font-bold color text-black"
                > 
                  submit
                </button>
                
            </div>
        </div>
    );
}

export default QuestionBox;