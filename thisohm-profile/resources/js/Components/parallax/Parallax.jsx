import "./parallax.scss"
import planets from "../../../../public/assets/planets.png"
import sun from "../../../../public/assets/sun.png"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {
    
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const scrollBg = useTransform(scrollYProgress, [0,1], ["-100%","100%"])
    const scrollText = useTransform(scrollYProgress, [0,1], ["-500%","500%"])

    return (
        <div
            ref={ref} 
            className="w-100 h-100 position-relative d-flex align-items-center justify-content-center overflow-hidden" 
            style={{
                background: 
                    type === "AboutMe" 
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132,#505064)"
            }}
        >
            {/* <motion.h1 style={{ y: scrollText }}>{type === "AboutMe" ? "About Me" : "Portfolio"}</motion.h1> */}
            <motion.div className="mountains w-100 h-100 position-absolute z-3"></motion.div>
            <motion.div className="planets w-100 h-100 position-absolute z-2" 
                style={{
                    y: scrollBg,
                    backgroundImage: `url(${type === "AboutMe" 
                        ? planets
                        : sun
                    
                    })`
                }}
            >
            </motion.div>
            <motion.div 
                className="stars w-100 h-100 position-absolute z-1" 
                style={{x: scrollBg}}>
            </motion.div>
        </div>
    )
}

export default Parallax