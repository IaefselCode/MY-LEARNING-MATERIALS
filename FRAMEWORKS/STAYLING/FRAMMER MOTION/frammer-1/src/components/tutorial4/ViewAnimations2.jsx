import React from 'react'
import { motion } from 'framer-motion'

function ViewAnimations2() {
  return (
    <>
      <h2 className='m-3'>Simple Reusable Reveal Animation</h2>
        <div className="relative mx-auto grid h-32 w-96 place-content-center">
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show Me On Scroll
        </h1>
        <motion.div
          initial={{
            width: "384px",
            height: "128px",
          }}
          whileInView={{
            width: "40px",
            height: "40px",
            borderBottomRightRadius: "100%",
          }}
          viewport={{
            amount: "all",
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500"
        ></motion.div>
      </div>
      <div className="h-screen"></div>
    </>
  )
}

export default ViewAnimations2
