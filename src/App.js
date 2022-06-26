import React from 'react'
import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Experience from "./Components/Experience/Experience"
import Websites from "./Components/Portofolio/Websites/Websites"
import Designes from "./Components/Portofolio/Designes/Designes"
// import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
const App = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Experience />
            <Websites />
            <Designes />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default App