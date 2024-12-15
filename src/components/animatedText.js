import React from 'react'
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren:0.08,
    },
  },
}
//stopped at 1:03:59***********************************************************************************************************

const singleword = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    },
  },
}


const AnimatedText = ({ text, className = "" }) => {
  return (

    <div className='w-full mx-auto mb-6 flex items-center justify-center text-center overflow-hidden
    sm:p-0 
    
    
    '>

      <motion.h1 className={` dark:text-light inline-block w-full text-dark font-bold capitalize text-6xl  ${ className}`}
        variants={quote}
        initial='initial'
        animate='animate'

      >

        {
          text.split(" ").map((word, index) =>
            <motion.span key={word + '-' + index} className="inline-block"
              variants={singleword}
             

            >
              {word}&nbsp;
            </motion.span>
          )
        }

      </motion.h1>

    </div>
  )

}
export default AnimatedText
