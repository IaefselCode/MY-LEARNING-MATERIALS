import React from "react";
import { motion } from "framer-motion";

function Example1() {
  return (
    <>
      <div className="h-screen"></div>
      <div className="relative mx-auto grid h-32 w-96 place-content-center">
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show Me On Scroll
        </h1>
        <motion.div
          initial={{
            // opacity: 1,
            width: "384px",
            height: "128px",
          }}
          whileInView={{
            // opacity: 0,
            width: "40px",
            height: "40px",
            borderBottomRightRadius: "100%",
          }}
          viewport={{
            amount: "all", //Helps that the animation triggers only when the full element enters on the screen
            // margin: "-200px", //The animation triggers when these margin is served
            // once: true, //Animation runs once
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          //Here we Can Hook Into These Enter and Exit Event using callback functions
          onViewportEnter={() => console.log("enter!")}
          onViewportLeave={() => console.log("Exit!")}
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500"
        ></motion.div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default Example1;
