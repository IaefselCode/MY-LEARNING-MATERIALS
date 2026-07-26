import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //Showing if its firing
  useEffect(() => {
    console.log("Is it in View ->", isInView);
  }, [isInView]);
  //It Brings true when ever the div is in view

  return (
    <div className="block justify-center">
      <p className="font-serif text-2xl">View Based Animations</p>
      <div className="h-screen bg-none rounded-2xl m-2"></div>
      {/* First option Easiest */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="h-screen  bg-blue-950 rounded-2xl m-2"
      ></motion.div>

      {/* Second Option */}
      <div
        ref={ref}
        className="h-screen rounded-2xl m-2"
        style={{
          background: isInView ? "yellow" : "red",
          transition: "1s background",
        }}
      ></div>
    </div>
  );
}

export default ViewBasedAnimations;
