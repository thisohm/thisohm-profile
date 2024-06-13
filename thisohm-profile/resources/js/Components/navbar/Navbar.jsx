import "./navbar.scss"

import { Icon } from "@iconify/react"
import { motion, spring } from "framer-motion"

const Navbar = () => {
    return (
        <>
            <div className="navbars align-content-center">
                <div className="wrapper d-flex justify-content-between m-auto px-3">
                    <div className="d-flex align-items-center">
                        <motion.button whileHover={{scale:1.5}} className="navbar-toggler bg-white rounded-circle p-2 position-fixed" style={{zIndex:"99"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <i className="bi bi-list" style={{color:"black"}}></i>
                        </motion.button>

                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <span className="ps-3">Thisohm</span>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 text-start">
                                    <li className="nav-item ps-3">
                                        <motion.a whileHover={{ scale:1.2, originX:0 }} className="nav-link active" aria-current="page" href="/"
                                            onClick={e => {
                                                let home = document.getElementById("Home");
                                                e.preventDefault();
                                                home &&
                                                  home.scrollIntoView({ behavior: "smooth", block: "start" });
                                                window.history.pushState("home", "home", "/home");
                                            }}
                                        >
                                            Home
                                        </motion.a>
                                    </li>
                                    <li className="nav-item ps-3">
                                        <motion.a whileHover={{ scale:1.2, originX:0 }} className="nav-link active" aria-current="page" href="/"
                                            onClick={e => {
                                                let aboutme = document.getElementById("AboutMe");
                                                e.preventDefault();
                                                aboutme &&
                                                aboutme.scrollIntoView({ behavior: "smooth", block: "start" });
                                                window.history.pushState("aboutme", "aboutme", "/aboutme");
                                             }}
                                        >
                                            About Me
                                        </motion.a>
                                    </li>
                                    <li className="nav-item ps-3">
                                        <motion.a whileHover={{ scale:1.2, originX:0 }} className="nav-link active" aria-current="page" href="/"
                                            onClick={e => {
                                                let portfolio = document.getElementById("Portfolio");
                                                e.preventDefault();
                                                portfolio &&
                                                portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
                                                window.history.pushState("portfolio", "portfolio", "/portfolio");
                                             }}
                                        >
                                            Portfolio
                                        </motion.a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <span className="ps-5">Thisohm</span>
                    </div>

                    <div className="d-flex gap-2">
                        <motion.a whileHover={{ scale:1.5 }} href="https://www.facebook.com/vrit.pipapratuang.5/"><Icon icon="devicon:facebook" style={{fontSize:"20px"}}/></motion.a>
                        <motion.a whileHover={{ scale:1.5 }} href="https://www.instagram.com/this.ohm/"><Icon icon="skill-icons:instagram" style={{fontSize:"20px"}}/></motion.a>
                        <motion.a whileHover={{ scale:1.5 }} href="https://github.com/thisohm"><Icon icon="skill-icons:github-dark" style={{fontSize:"20px"}}/></motion.a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar