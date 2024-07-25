import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Button({ link, onClick, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
    }
  };

  return (
    <div className="flex justify-center align-middle">
      <motion.button
        onClick={handleClick}
        style={{backgroundColor:'#717787'}}
        className="mb-8  w-48 p-3 text-l rounded-lg"
        whileTap={{ scale: 0.95 }}
        whileHover={{ boxShadow: "0px 0px 8px rgb(0, 0, 0)" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
      >
        {children}
      </motion.button>
    </div>
  );
}

export default Button;