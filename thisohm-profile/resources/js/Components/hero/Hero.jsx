import "./hero.scss"
import profile from "../../../../public/assets/profile.jpg"

import { motion } from "framer-motion"

const textvariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero position-relative overflow-hidden align-content-center">
            <div className="wrapper d-flex flex-wrap text-center gap-5 gap-sm-0 m-auto px-3">
                <motion.div className="col-12 col-sm-6 align-content-center" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>OHM VRIT</motion.h2>
                    <motion.h1 variants={textvariants}>WEB DEV.</motion.h1>
                </motion.div>

                <motion.div className="col-12 col-sm-6 align-content-center" variants={textvariants} initial="initial" animate="animate">
                    <motion.img variants={textvariants} src={profile} className="img-fluid h-100 rounded-4"/>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero