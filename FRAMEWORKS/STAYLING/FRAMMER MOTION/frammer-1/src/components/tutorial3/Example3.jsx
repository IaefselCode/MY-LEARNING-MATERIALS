import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Example3() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], //Means the animation starts when the start of our element meets the end of the screen and it will end when the end of the element meets the start of the screen
    // offset: ["start start", "end start"],
    //You can also add single values like center also 25% eg
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);
  return (
    <>
      <motion.div
        ref={targetRef}
        style={{ rotate }}
        className="mx-auto size-48 bg-indigo-500"
      ></motion.div>
      <div className="h-screen"></div>
    </>
  );
}

export default Example3;
