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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL1Q8-lN_h1R1OGxDzGl8vX8zQce3EDjc",
    authDomain: "portofolio-v6.firebaseapp.com",
    projectId: "portofolio-v6",
    storageBucket: "portofolio-v6.appspot.com",
    messagingSenderId: "765413961477",
    appId: "1:765413961477:web:099ffb8ecea19ba53e916c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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