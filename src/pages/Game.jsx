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
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const handleOpenQuestionBox = (index) => {
    
    const key = `${index[0]},${index[1]}`;
    if (!hexagonStatus[key]) {
      setClickedHexagon(key);
      setShowQuestionBox(true);
    }
  };

  /*check if somebody won

  const checkIfWon = (playerHexagones) => {
    console.log(player1Hexagons.map())

  }*/
  
  useEffect(() => {console.log('hexagonStatus updated:', hexagonStatus)}, [hexagonStatus]);


  const handleSubmitAnswer = (correct) => {
    if (correct) {
      const newColor = currentPlayer === 'p1' ? '#0D4B8C' : '#862941';
      setHexagonStatus(prev => ({
        ...prev,
        [clickedHexagon]: { color: newColor }
      }));
  
      if (currentPlayer === 'p1') {
        setPlayer1Hexagons(prev => [...new Set([...prev, clickedHexagon])]);
        /*if(checkIfWon(player1Hexagons)){
          console.log('P1 WON')
        }*/
      } else {
        setPlayer2Hexagons(prev => [...new Set([...prev, clickedHexagon])]);
        /*if(checkIfWon(player2Hexagons)){
          console.log('P2 WON')
        }*/
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
    let currentIndex = 1;
  
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols[y]; x++) {
        const key = `${x},${y}`;
        const className = `hexagon y${y + 1}x${x + 1}`;
        const status = hexagonStatus[key] || {};
        grid.push(
          <Hexagon
            key={key}
            className={className}
            index={[x, y]}
            onClick={(i) => handleOpenQuestionBox(i)}
            status={status}
            color={status.color}
          >
            {currentIndex}
          </Hexagon>
        )
        currentIndex++;
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