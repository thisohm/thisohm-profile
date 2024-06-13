import { Head } from "@inertiajs/react"

import Navbar from "@/Components/navbar/Navbar"
import Hero from "@/Components/hero/Hero"
import Parallax from "@/Components/parallax/Parallax"

const Index = () => {
  return (
    <>
        <Head title="Home" />
        <section id="Home">
          <Navbar/>
          <Hero/>
        </section>
        
        <section id="AboutMe">
          <Parallax type="AboutMe" />
        </section>

        <section id="">
         
        </section>

        <section id="Portfolio">
          <Parallax type="Portfolio" />
        </section>

        <section id="">
         
         </section>
    </>
  )
}

export default Index