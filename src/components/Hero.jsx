import {HERO_CONTENT} from "../constants"
import Profile from '../assets/Profile.jpg'; 

function Hero(){
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-32 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Shafeeq Ahmed
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Web Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full  lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <img  className=" rounded-2xl w-60 h-auto lg:w-80" src={Profile}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;