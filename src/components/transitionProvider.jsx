'use client'

import { AnimatePresence,easeOut,motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

function TransitionProvider({children}) {
    const pathName = usePathname()

    return (
        <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen min-h-screen bg-gradient-to-b from-blue-50 to-red-100 flex flex-col">

            {/* Animation */}
            <motion.div className="w-screen h-screen fixed  bg-stone-950 rounded-b-[100px] z-20"
            animate={{height:'0vh'}} exit={{height:'140vh'}} transition={{duration:0.5, ease: 'easeOut'}} />

            <motion.div className="text-4xl md:text-8xl fixed m-auto inset-0 w-fit h-fit bg-gradient-to-r from-blue-100 to-red-100 text-transparent bg-clip-text uppercase z-30"
            initial={{opacity: 1}}
            animate={{opacity:0}} transition={{duration:0.8, ease: 'easeOut'}} >
                {pathName === '/' ? 'Home' : pathName.slice(1,)}
            </motion.div>


            <motion.div className="w-screen h-screen fixed bg-stone-950 rounded-t-[100px] z-20 bottom-0"
            initial={{height:'140vh'}} animate={{height:'0vh', transition:{delay:0.5}}} />
            {/* Animation */}



          <div className="h-24">
            <Navbar />
          </div>

          <div className="grow">{children}</div>
        </div>
        </AnimatePresence>
    )
}

export default TransitionProvider;
