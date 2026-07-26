import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function Example2() {
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: "all" });
  return (
    <>
      <motion.div
        ref={ref}
        className="relative mx-auto grid h-32 w-96 place-content-center"
      >
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show Me On Scroll
        </h1>
        <motion.div
          animate={{
            y: isInview ? "100%" : "0%",
          }}
          className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
        />
        <motion.div
          animate={{
            y: isInview ? "-100%" : "0%",
          }}
          className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
        />
        <motion.div
          animate={{
            y: isInview ? "100%" : "0%",
          }}
          className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
        />
      </motion.div>
      <div className="h-screen"></div>
    </>
  );
}

export default Example2;
