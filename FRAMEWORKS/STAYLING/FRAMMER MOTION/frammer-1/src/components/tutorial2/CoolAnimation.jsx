import React, { useState } from "react";
import { motion } from "framer-motion";

function CoolAnimation() {
  const [isAnimate, setIsAnimate] = useState();
  return (
    <div>
      <h2>Cool Animation</h2>
      <motion.div
        onClick={() => setIsAnimate(!isAnimate)}
        style={{
        //   background: "blue",
          height: "80px",
          width: "80px",
          alignContent: "center",
          padding: "10px",
          margin: "10px",
          cursor: "pointer",
        //   borderRadius: "20px",
        }}
        animate={{
          background: isAnimate ? "red" : "blue",
          scale: isAnimate ? 2 : 1,
          x: isAnimate ? 500 : 0,
          y: isAnimate ? 50 : 0,
          rotate: isAnimate ? 360 : 0,
          borderRadius:isAnimate ? "0" : "100%",
          // opacity: isAnimate ? 1 : 0.5,
        }}
        transition={{
          duration: 1,
          ease:"backInOut",
        }}
      >
        Click me
      </motion.div>
    </div>
  );
}

export default CoolAnimation;
