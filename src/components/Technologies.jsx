import { RiReactjsLine } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion"

const iconVarients = (duration) =>({
  initial:{y:-10},
  animate: {
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse",

    }
  }
})

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-2">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div 
             variants={iconVarients(3)}
             initial="initial"
             animate="animate"
            className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <TbSql className="text-5xl text-orange-400" />
        </motion.div>
        <motion.div 
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div 
            variants={iconVarients(2)}
            initial="initial"
            animate="animate"
            className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-400" />
        </motion.div>
        <motion.div 
            variants={iconVarients(6)}
            initial="initial"
            animate="animate"
            className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-5xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
