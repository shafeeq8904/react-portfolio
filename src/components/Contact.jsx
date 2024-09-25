import { CONTACT } from "../constants";
import { motion } from "framer-motion"


function Contact(){
    return (
        <div className="border-b border-neutral-800 pb-20">
            <motion.h1 
                whileInView={{opacity:1,y:0}}
                initial={{y:-100,opacity:0}}
                transition={{duration:0.5}}
                className="my-10 text-center text-4xl">Get in Touch</motion.h1>
            <motion.div  
                whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:1}}
                className="text-center tracking-tighter text-neutral-400">
                <p className="my-4">{CONTACT.description}</p>
                <a href="#" className="border-b">{CONTACT.email}</a>
               
                
            </motion.div>
        </div>

    )
}

export default Contact;