import React from "react";
import { motion } from "framer-motion";

function KeyFrames() {
  return (
    <div>
      <h2 className="mt-25 ml-25">KeyFrames Here</h2>
      <motion.div
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
        className="w-[300px] h-[300px] bg-black rounded-lg shadow-2xl shadow-blue-900 m-2 cursor-pointer block justify-items-center p-2"
      ></motion.div>
    </div>
  );
}

export default KeyFrames;
