import {HERO_CONTENT} from "../constants"
import Profile from '../assets/Profile.jpg'; 
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {
        x: -100,  
        opacity: 0, 
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,   
        },
    }
});

function Hero(){
    return (
        <div className="border-b border-neutral-900 pb-10 lg:mb-28 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center  lg:items-start">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            whileInView="whileInView"
                            className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Shafeeq Ahmed
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            whileInView="whileInView"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Web Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            whileInView="whileInView"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full  lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <motion.img
                            initial={{x:100 ,opacity: 0}}
                            whileInView={{opacity:1,x:0}} 
                            transition={{duration:1 ,delay:1.2}}
                            className=" rounded-2xl w-60 h-auto lg:w-80" src={Profile}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;