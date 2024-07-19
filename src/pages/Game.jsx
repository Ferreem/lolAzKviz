import React from "react";
import Navbar from "../components/Navbar";
import Hexagon from "../components/Hexagon";
import { motion } from "framer-motion";
import '../styles/game.scss'
import QuestionBox from "../components/QuestionBox";
import { useState } from "react";

function Game() {
  const [showQuestionBox, setShowQuestionBox] = useState(false);
    const containerVariants = {

        visible: {
            opacity: 0.75,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const handleOpen = () => {
      setShowQuestionBox(true);
    };

    const handleClose = () =>{
      setShowQuestionBox(false);
    }

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
                        onClick={handleOpen}
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
            {showQuestionBox && <QuestionBox onClose={handleClose} />}
                <div id="container">
                    
                    <div id="player1"></div>
                    <motion.div 
                        id="board"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {generateHexGrid()}
                    </motion.div>
                    <div id="player2"></div>
                </div>
            </div>
            
        </>
    );
}

export default Game;