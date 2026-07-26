import React from "react";
import { motion, useAnimation } from "framer-motion";

function UseAnimation() {
  const control = useAnimation();
  return (
    <div>
      <h2 className="mt-25 ml-25">UseAnimation Here !!!</h2>
      <button
        onClick={() => {
          control.start({
            x: 1500,
            transition: {
              duration: 2,
            },
          });
        }}
        className="bg-blue-500 text-2xl text-white p-2 m-3 rounded-lg cursor-pointer"
      >
        Move Right
      </button>

      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
        className="bg-blue-500 text-2xl text-white p-2 m-3 rounded-lg cursor-pointer"
      >
        Move Left
      </button>

      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 1,
            },
          });
        }}
        className="bg-blue-500 text-2xl text-white p-2 m-3 rounded-lg cursor-pointer"
      >
        Circle
      </button>

      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: {
              duration: 2,
            },
          });
        }}
        className="bg-blue-500 text-2xl text-white p-2 m-3 rounded-lg cursor-pointer"
      >
        Square
      </button>

      <button
        onClick={() => {
          control.stop();
        }}
        className="bg-blue-500 text-2xl text-white p-2 m-3 rounded-lg cursor-pointer"
      >
        Stop
      </button>

      <motion.div
        animate={control}
        className="w-[300px] h-[300px] bg-black rounded-lg shadow-2xl shadow-blue-900 m-2 cursor-pointer block justify-items-center p-2"
      ></motion.div>
    </div>
  );
}

export default UseAnimation;
