import React from 'react'
import "./HeroSection.css"
import { Row, Col } from "reactstrap"
import me from "../../assets/me.png"
import Typed from 'react-typed';
import Container from "../Container"
import CV from "../../assets/CV.pdf"
const HeroSection = () => {

    return (
        <section className="hero_section" id="home" >
            <Container id="home">
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero_content">
                            <p className='mb-3'>Welcome to my world</p>
                            <h5 className='mb-4'>Hi</h5>
                            <h2 className="hero_title mb-4">I'm <span > <Typed strings={["Osama Megahed", " a Web Developer", " a Graphic Designer"]} typeSpeed={40} loop backSpeed={80} /> </span></h2>
                            <p>
                                I'm Osama Megahed, I am working as developer for over than a year, have developed
                                many friendly easy websites, would be an exellent addition to your organisation,
                                In addition to my knowledge base, I actively seek out new technologies and stay
                                up-to-date on industry trends and advancements.
                            </p>
                            <p>
                                I can be reached anytime
                            </p>
                            <div className=" mt-4 hero_btns d-flex align-items-center gap-4" id="contactBtns">
                                <button className="btn hire_btn"><a href="#contact">Hire Me</a></button>
                                <button className="btn "><a href={CV} download>CV</a></button>
                                
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="hero_img">
                            <img src={me} alt="me" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection
