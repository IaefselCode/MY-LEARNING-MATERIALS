import { motion } from "framer-motion";
import React, { Children } from "react";

function Variants() {
  const boxVariant = {
    david: {
      x: -1000,
      scale: 1,
      opacity: 0,
    },
    james: {
      x: 0,
      scale: 2,
      opacity: 1,
      transition: {
        ease: "backInOut",
        delay: 0.5,
        // if you dont wanna use a delay
        // when: "beforeChildren",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      // making each Children animate by its own one by one
      staggerChildren: 0.2,
      transition: {
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      variants={boxVariant}
      initial="david"
      animate="james"
      transition={{
        duration: 1,
      }}
      className="w-[150px] h-[150px] bg-black rounded-lg shadow-2xl shadow-blue-900 mt-25 ml-20 cursor-pointer block justify-items-center p-2"
    >
      {[1, 2, 3].map((box, index) => {
        return (
          <motion.li
            variants={listVariant}
            initial="hidden"
            animate="visible"
            key={index}
            className="bg-white w-[30px] h-[30px] m-3 text-center rounded-sm"
          >
            {index + 1}
          </motion.li>
        );
      })}
    </motion.div>
  );
}

export default Variants;
