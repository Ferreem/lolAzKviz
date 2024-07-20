import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hexagon from '../components/Hexagon';
import { motion } from 'framer-motion';
import '../styles/game.scss';
import QuestionBox from '../components/QuestionBox';

function Game() {
  const [showQuestionBox, setShowQuestionBox] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [clickedHexagon, setClickedHexagon] = useState(null);
  const [hexagonStatuses, setHexagonStatuses] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState('null');

  const containerVariants = {
    visible: {
      opacity: 0.75,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const handleOpenQuestionBox = (index) => {
    setClickedHexagon(index);
    setShowQuestionBox(true);
  };

  const handleSubmitAnswer = (correct) => {
    setIsCorrect(correct);
    setShowQuestionBox(false);
    setHexagonStatuses((prevStatuses) => ({
      ...prevStatuses,
      [clickedHexagon]: correct ? 'correct' : 'incorrect',
    }));
    setCurrentPlayer((prevPlayer) => (prevPlayer === 'p1' ? 'p2' : 'p1'));
  };

  const generateHexGrid = () => {
    const grid = [];
    const rows = 7;
    const cols = [1, 2, 3, 4, 5, 6, 7];
    let i = 1;
    for (let y = 1; y <= rows; y++) {
      for (let x = 1; x <= cols[y - 1]; x++) {
        const className = `y${y}x${x}`;
        grid.push(
          <Hexagon 
            key={`y${y}x${x}`}
            className={className}
            index={i}
            onClick={() => handleOpenQuestionBox(i)}
            status={hexagonStatuses[i]}
          >
            {i}
          </Hexagon>
        );
        i++;
      }
    }
    return grid;
  };

  return (
    <>
      <Navbar />
      <div id="main">
        {showQuestionBox && <QuestionBox onSubmit={handleSubmitAnswer} />}
        <div id="container">
          <div id="player1" className='player'>player1</div>
          
            <motion.div 
                id="board"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {generateHexGrid()}
            </motion.div>
          
          <div id="player2" className='player' >player2</div>
        </div>
      </div>
    </>
  );
}

export default Game;
