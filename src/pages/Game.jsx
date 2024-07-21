import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hexagon from '../components/Hexagon';
import { motion } from 'framer-motion';
import '../styles/game.scss';
import QuestionBox from '../components/QuestionBox';

function Game() {
  const [showQuestionBox, setShowQuestionBox] = useState(false);
  const [clickedHexagon, setClickedHexagon] = useState(null);
  const [hexagonStatuses, setHexagonStatuses] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState('p1');
  const [player1Hexagons, setPlayer1Hexagons] = useState([]);
  const [player2Hexagons, setPlayer2Hexagons] = useState([]);

  const containerVariants = {
    visible: {
      opacity: 0.75,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const handleOpenQuestionBox = (key) => {
    console.log("handleOpenQuestionBox called with key:", key);
    if (!hexagonStatuses[key]) {
      setClickedHexagon(key);
      setShowQuestionBox(true);
    } else {
      console.log("This hexagon is already claimed");
    }
  };

  

  useEffect(() => {
    console.log('Player 1 Hexagons:', player1Hexagons);
  }, [player1Hexagons]);

  useEffect(() => {
    console.log('Player 2 Hexagons:', player2Hexagons);
  }, [player2Hexagons]);

  const handleSubmitAnswer = (correct) => {
    console.log("Answer submitted for hexagon:", clickedHexagon);
    if (correct) {
      const newColor = currentPlayer === 'p1' ? '#ff9800' : '#4caf50';
      setHexagonStatuses(prev => ({
        ...prev,
        [clickedHexagon]: { color: newColor }
      }));
  
      if (currentPlayer === 'p1') {
        setPlayer1Hexagons(prev => [...new Set([...prev, clickedHexagon])]);
      } else {
        setPlayer2Hexagons(prev => [...new Set([...prev, clickedHexagon])]);
      }
    }
  
    setShowQuestionBox(false);
    setCurrentPlayer(prev => prev === 'p1' ? 'p2' : 'p1');
    setClickedHexagon(null);
  };

  const generateHexGrid = () => {
    const grid = [];
    const rows = 7;
    const cols = [1, 2, 3, 4, 5, 6, 7];
    let index = 0;
  
    for (let y = 1; y <= rows; y++) {
      for (let x = 1; x <= cols[y - 1]; x++) {
        const key = `y${y}x${x}`;
        const className = `hexagon ${key}`;
        const status = hexagonStatuses[index] || {};
        grid.push(
          <Hexagon
            key={key}
            className={className}
            index={index}
            onClick={(i) => {
              console.log("Hexagon clicked in grid with index:", i);
              handleOpenQuestionBox(i);
            }}
            status={status}
            color={status.color}
          >
            {index}
          </Hexagon>
        );
        index++;
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