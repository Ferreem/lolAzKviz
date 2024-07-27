import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.1 + i * 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Header() {
  return (
    <motion.svg
      width="525"
      height="75"
      viewBox="0 0 525 75"
      initial="hidden"
      animate="visible"
    >
      {/*L*/}
    <motion.line 
      x1="5"
      y1="0"
      x2="5"
      y2="100"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={2}
    />
    {/*L*/}
    <motion.line 
      x1="0"
      y1="70"
      x2="40"
      y2="70"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />
        {/*O*/}
    <motion.circle
        cx="68"
        cy="55"
        r="20"
        stroke="#ff0055"
        strokeWidth={5}
        variants={draw}
        custom={1}
        fill="none"
    />

      {/*L*/}
    <motion.line 
      x1="100"
      y1="0"
      x2="100"
      y2="75"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />
    {/*L*/}
    <motion.line 
      x1="100"
      y1="70"
      x2="140"
      y2="70"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={2}
    />

    {/*A*/}
    <motion.line 
      x1="180"
      y1="50"
      x2="210"
      y2="50"
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={5}
    />
    <motion.line 
      x1="170"
      y1="80"
      x2="195"
      y2="0"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={4}
    />
    <motion.line 
      x1="195"
      y1="0"
      x2="220"
      y2="80"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={3}
    />
      
    {/*Z*/}
    <motion.line 
      x1="232"
      y1="80"
      x2="287"
      y2="0"
      
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={2}
    />
    <motion.line 
      x1="290"
      y1="5"
      x2="230"
      y2="5"
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={3}
    />
    <motion.line 
      x1="230"
      y1="70"
      x2="290"
      y2="70"
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />

      {/*-*/}
    <motion.line 
      x1="300"
      y1="50"
      x2="335"
      y2="50"
      
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />

    {/*K*/}
    <motion.line 
      x1="350"
      y1="80"
      x2="350"
      y2="0"
      
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />
    <motion.line 
      x1="380"
      y1="0"
      x2="350"
      y2="50"
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={3}
    />
    <motion.line 
      x1="350"
      y1="45"
      x2="380"
      y2="80"
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />

    {/*V*/}
    <motion.line 
      x1="415"
      y1="80"
      x2="400"
      y2="30"
      
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />
    <motion.line 
      x1="415"
      y1="80"
      x2="430"
      y2="30"
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={3}
    />

    {/*I*/}
    <motion.line 
      x1="450"
      y1="30"
      x2="450"
      y2="80"
      
      stroke="#00cc88"
      strokeWidth={10}
      variants={draw}
      custom={1}
    />
    <motion.line 
      x1="450"
      y1="15"
      x2="457"
      y2="-5"
      stroke="#ff0055"
      strokeWidth={10}
      variants={draw}
      custom={3}
    />

    {/*Z*/}
    <motion.line 
      x1="465"
      y1="80"
      x2="510"
      y2="30"
      
      stroke="#ff0055"
      strokeWidth={8}
      variants={draw}
      custom={1}
    />
    <motion.line 
      x1="515"
      y1="30"
      x2="465"
      y2="30"
      stroke="#ff0055"
      strokeWidth={8}
      variants={draw}
      custom={3}
    />
    <motion.line 
      x1="465"
      y1="71"
      x2="515"
      y2="71"
      stroke="#00cc88"
      strokeWidth={8}
      variants={draw}
      custom={1}
    />

    </motion.svg>
  );
}