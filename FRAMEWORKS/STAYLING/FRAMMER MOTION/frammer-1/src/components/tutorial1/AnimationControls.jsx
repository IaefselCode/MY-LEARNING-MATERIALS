import React from "react";
import { motion, useAnimationControls } from "framer-motion";

function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = () => {
    //Do something that is targeting our div and change its variant from "initial" to "flip"
    controls.start("flip");
  };

  return (
    <div className="block justify-center">
      <p className="font-serif text-2xl">AnimationControls</p>
      <button
        onClick={handleClick}
        className="bg-blue-800 text-lg text-white p-2 m-2 rounded-lg cursor-pointer"
      >
        Flip it!
      </button>
      
        <motion.div
          variants={{
            initial: {
              rotate: "0deg",
            },
            flip: {
              rotate: "360deg",
            },
          }}
          //   whileTap="flip"
          initial="initial"
          animate={controls}
          className="w-[150px] h-[150px] bg-black rounded-2xl shadow-2xl shadow-blue-900"
        ></motion.div>
    </div>
  );
}

export default AnimationControls;
