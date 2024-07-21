import React from "react";
import { motion } from "framer-motion";

function Hexagon({ className, children, onClick, index, color }) {
    const hexStyle = {
        height: '120%',
        width: '92%',
        margin: '0 10px',
        clipPath: 'polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        backgroundColor: color || '#3498db',
        transition: '0.3s',
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 0.8,
            scale: 1,
            transition: {
                duration: 0.1,
                ease: [0, 0.68, 0.2, 1.01],
            },
        },
    };

    return (
        <motion.div
          style={hexStyle}
          className={className}
          onClick={() => {
            console.log("Hexagon clicked with index:", index);
            onClick(index);
          }}
          whileHover={{ opacity: 1 }}
          variants={itemVariants}
        >
          {children}
        </motion.div>
    );
}

export default Hexagon;