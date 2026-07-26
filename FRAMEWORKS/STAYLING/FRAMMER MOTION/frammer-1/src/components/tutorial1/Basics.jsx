import React from "react";
import { backInOut, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Basics() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className='justify-content-center h-["100vh"] gap-["0.8rem"] w-full'>
        <p className="font-serif text-2xl">Basics</p>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-blue-800 text-lg text-white p-2 m-2 rounded-lg cursor-pointer"
          layout
        >
          Show/Hide
        </button>
          <AnimatePresence mods="popLayout">
            {isVisible && (
              <motion.div
                initial={{
                  rotate: "0deg",
                  scale: 0,
                  y: 0,
                }}
                animate={{
                  rotate: "360deg",
                  scale: 1,
                  y: [0, 150, -150, -150, 0],
                }}
                exit={{
                  rotate: "0deg",
                  scale: 0,
                  y: 0,
                }}
                transition={{
                  duration: 2,
                  ease: "backInOut",
                  times: [0, 0.25, 0.5, 0.85, 1],
                }}
                className="w-[150px] h-[150px] bg-black rounded-2xl shadow-2xl shadow-blue-900"
              ></motion.div>
            )}
          </AnimatePresence>
      </div>
    </>
  );
}

export default Basics;
