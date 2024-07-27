import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hexagon from '../components/Hexagon';
import { motion } from 'framer-motion';
import '../styles/game.scss';
import QuestionBox from '../components/QuestionBox';
import WinBox from '../components/WinBox';
import TimeSlider from '../components/TimeSlider';

function Game() {
  const [showQuestionBox, setShowQuestionBox] = useState(false);
  const [clickedHexagon, setClickedHexagon] = useState(null);
  const [hexagonStatus, setHexagonStatus] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState('p1');
  const [player1Hexagons, setPlayer1Hexagons] = useState([]);
  const [player2Hexagons, setPlayer2Hexagons] = useState([]);
  const [showWinBox, setShowWinBox] = useState({show: false, player: null});
  const [timeLeft, setTimeLeft] = useState(720); // timer
  const [timeLeftQuestion, setTimeLeftQuestion] = useState(30);

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const durationGame = 720;
  const durationQuestion = 15;

  useEffect(() => {
    if (timeLeft === 0) {
      if (player1Hexagons.length === player2Hexagons.length) {
        setShowWinBox({ show: true, player: 'Draw' });
      } else if (player1Hexagons.length > player2Hexagons.length) {
        setShowWinBox({ show: true, player: 'Player 1' });
      } else {
        setShowWinBox({ show: true, player: 'Player 2' });
      }
      return;
    }
  
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
  
    return () => clearInterval(timerId);
  }, [timeLeft, player1Hexagons.length, player2Hexagons.length]);

  const handleOpenQuestionBox = (index) => {
    
    const key = `${index[0]},${index[1]}`;
    if (!hexagonStatus[key]) {
      setClickedHexagon(key);
      setShowQuestionBox(true);
    }
  };

  const checkIfWon = (playerHexagons) => {
    // Check for [n,6]
    const hasN6 = playerHexagons.some(hexagon => hexagon.split(',')[1] === '6');
  
    // Check for [x,x]
    const hasXX = playerHexagons.some(hexagon => {
      const [x, y] = hexagon.split(',');
      return x === y;
    });
  
    // Check for [0,x]
    const has0X = playerHexagons.some(hexagon => hexagon.split(',')[0] === '0');
  
    if (hasN6 && hasXX && has0X) {
      // Check if connected
      const connected = areHexagonsConnected(playerHexagons);
      return connected;
    }
  
    return false;
  };
  
  const areHexagonsConnected = (hexagons) => {
    if (hexagons.length === 0) return false;
  
    const visited = new Set();
    const stack = [hexagons[0]];
  
    while (stack.length > 0) {
      const current = stack.pop();
      if (!visited.has(current)) {
        visited.add(current);
        const neighbors = getNeighbors(current, hexagons);
        stack.push(...neighbors);
      }
    }
  
    return visited.size === hexagons.length;
  };
  
  const getNeighbors = (hexagon, allHexagons) => {
    const [x, y] = hexagon.split(',').map(Number);
    const potentialNeighbors = [
      `${x-1},${y-1}`, `${x},${y-1}`, //y-1
      `${x+1},${y}`, `${x-1},${y}`, //same y
      `${x},${y+1}`, `${x+1},${y+1}`, // y+1
    ];
    return potentialNeighbors.filter(neighbor => allHexagons.includes(neighbor));
  };


  


  const handleSubmitAnswer = (correct) => {
    if (correct) {

      const newColor = currentPlayer === 'p1' ? '#0D4B8C' : '#862941';
      setHexagonStatus(prev => ({
        ...prev,
        [clickedHexagon]: { color: newColor }
      }));
  
      if (currentPlayer === 'p1') {
        setPlayer1Hexagons(prev => {
          const updatedHexagons = [...new Set([...prev, clickedHexagon])];
          if(checkIfWon(updatedHexagons)){
            setShowWinBox({ show: true, player: currentPlayer });
          }
          return updatedHexagons;
        });
      } else {
        setPlayer2Hexagons(prev => {
          const updatedHexagons = [...new Set([...prev, clickedHexagon])];
          if(checkIfWon(updatedHexagons)){
            setShowWinBox({ show: true, player: currentPlayer });
          }
          return updatedHexagons;
        });
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
      const row = [];
      for (let x = 0; x < cols[y]; x++) {
        const key = [x,y];
        const className = `hexagon y${y + 1}x${x + 1}`;
        const status = hexagonStatus[key] || {};
        row.push(
          <Hexagon
            key={key}
            className={className}
            index={[x, y]}
            onClick={() => handleOpenQuestionBox([x, y])}
            status={status}
            color={status.color}
          >
            {currentIndex}
          </Hexagon>
        );
        currentIndex++;
      }
      grid.push(row);
    }
    return grid;
  };

  return (
    <>
      <Navbar />
      <div id="main">
        {showQuestionBox && <QuestionBox onSubmit={handleSubmitAnswer} />}
        {showWinBox.show && <WinBox player={showWinBox.player} />}
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
      <TimeSlider timeLeft={timeLeft} duration={durationGame}/>
    </>
  );
}

export default Game;