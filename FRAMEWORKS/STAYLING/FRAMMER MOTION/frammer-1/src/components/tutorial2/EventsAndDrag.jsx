import React from 'react'
import { motion } from 'framer-motion'
function EventsAndDrag() {
  return (
    <div>
      <h2>Event and Drag</h2>
      <motion.div
      className="w-[150px] h-[150px] bg-black rounded-2xl shadow-2xl shadow-blue-900 m-3 cursor-pointer"
      whileHover={{
        scale:1.1,
      }}
      whileTap={{
        scale:0.9,
      }}
      drag
    //   dragConstraints={{
    //     right:150,
    //     left:-20,
    //     top:100,
    //     bottom:100,
    //   }}
      >

      </motion.div>

    </div>
  )
}

export default EventsAndDrag
