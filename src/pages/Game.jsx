import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hexagon from '../components/Hexagon';
import { motion } from 'framer-motion';
import '../styles/game.scss';
import QuestionBox from '../components/QuestionBox';

function Game() {
  const [showQuestionBox, setShowQuestionBox] = useState(false);
  const [clickedHexagon, setClickedHexagon] = useState(null);
  const [hexagonStatus, setHexagonStatus] = useState({});
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
    if (!hexagonStatus[key]) {
      setClickedHexagon(key);
      setShowQuestionBox(true);
    } else {
      console.log("This hexagon is already claimed");
    }
  };

  //check if somebody won
  const checkIfWon = (playerHexagons, requiredMatchCount = 3) => {
    console.log(playerHexagons);
  
    // Define winning combinations
    const winningCombinations = [
      [22, 23, 24, 25, 26, 27, 28], // Top row
      [1, 2, 4, 7, 11, 16, 22],     // Left diagonal
      [1, 3, 6, 10, 15, 21, 28],    // Right diagonal
      // Add more winning combinations as needed
    ];
  
    // Check if playerHexagons contains a subset of any winning combination
    for (let combination of winningCombinations) {
      // Check if there are enough matching elements in the player's hexagons
      const matchCount = combination.filter(hex => playerHexagons.includes(hex)).length;
      if (matchCount >= requiredMatchCount) {
        return true; // Player has a winning subset
      }
    }
  
    return false; // No winning combination found
  };
  


  const handleSubmitAnswer = (correct) => {
    if (correct) {
      const newColor = currentPlayer === 'p1' ? '#ff9800' : '#4caf50';
      setHexagonStatus(prev => ({
        ...prev,
        [clickedHexagon]: { color: newColor }
      }));
  
      if (currentPlayer === 'p1') {
        setPlayer1Hexagons(prev => [...new Set([...prev, clickedHexagon])]);
        console.log(checkIfWon(player1Hexagons))
        if(checkIfWon(player1Hexagons)){
          console.log('P1 WON')
        }
      } else {
        setPlayer2Hexagons(prev => [...new Set([...prev, clickedHexagon])]);
        console.log(checkIfWon(player2Hexagons))
        if(checkIfWon(player2Hexagons)){
          console.log('P2 WON')
        }
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
    let index = 1;
  
    for (let y = 1; y <= rows; y++) {
      for (let x = 1; x <= cols[y - 1]; x++) {
        const key = `y${y}x${x}`;
        const className = `hexagon ${key}`;
        const status = hexagonStatus[index] || {};
        grid.push(
          <Hexagon
            key={key}
            className={className}
            index={index}
            onClick={(i) => {
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