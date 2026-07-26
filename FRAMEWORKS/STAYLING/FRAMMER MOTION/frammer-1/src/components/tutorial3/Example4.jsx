import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Example4() {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: targetRef,
    container: containerRef,
    axis: "x",
    // offset: ["end start", "start start"],
  });

  return (
    <>
      <div
        ref={containerRef}
        className="flex w-screen overflow-x-scroll bg-indigo-500/50 py-8"
      >
        <div className="w-screen shrink-0" />
        <motion.div
          ref={targetRef}
          style={{ opacity: scrollXProgress }}
          className="mx-auto size-48 shrink-0 bg-zinc-50"
        ></motion.div>
        <div className="w-screen shrink-0"></div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default Example4;
