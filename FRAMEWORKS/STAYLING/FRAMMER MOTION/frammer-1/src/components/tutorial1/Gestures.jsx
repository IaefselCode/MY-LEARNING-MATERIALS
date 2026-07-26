// Motion Config
import React from "react";
import { motion, MotionConfig } from "framer-motion";

function Gestures() {
  return (
    <>
      <div className="block">
        <p className="font-serif text-2xl">Gestures</p>

        {/* creating the same transition for different components */}
        <MotionConfig
          transition={{
            duration: 0.125,
            ease: "easeInOut",
          }}
        >
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              className="bg-blue-800 text-lg text-white p-3 m-2 rounded-lg cursor-pointer"
            >
              Hover Me
            </motion.button>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "-2.5deg" }}
              className="bg-red-800 text-lg text-white p-3 m-2 rounded-lg cursor-pointer"
            >
              Hover Me
            </motion.button>
          </div>
        </MotionConfig>
      </div>
    </>
  );
}

export default Gestures;
