import React, { useState } from 'react'
import "./About.css"
import { Row, Col } from "reactstrap"
import Container from "../Container"
import Heading from "../Heading"
import Education from './Education/Education'
import SubAbout from './SubAbout'
import Skills from './Skills/Skills'
import Certificates from './Certificates/Certificates'



const About = () => {
    const [aboutFilter, setAboutFilter] = useState("about")
    return (
        <Container id="about">
            <Row >
                <Heading title="About Me" />
                <Col lg="4" md="3" className='mb-5'>
                    <div className='about_btns d-flex align-items-center flex-column'>
                        <button onClick={() => setAboutFilter("about")} className={`about_btn ${aboutFilter === "about" && "about_btn_active "}`}>About Me</button>
                        <button onClick={() => setAboutFilter("education")} className={`about_btn ${aboutFilter === "education" && "about_btn_active "}`}>Educatio</button>
                        <button onClick={() => setAboutFilter("skills")} className={`about_btn ${aboutFilter === "skills" && "about_btn_active "}`}>Skills</button>
                        <button onClick={() => setAboutFilter("certificates")} className={`about_btn ${aboutFilter === "certificates" && "about_btn_active "}`}>Certificates</button>
                    </div>
                </Col>
                <Col lg="8" md="9" className='about_content_wrapper d-flex gap-5 '>
                    {aboutFilter === "about" && <SubAbout />}
                    {aboutFilter === "education" && <Education />}
                    {aboutFilter === "skills" && <Skills />}
                    {aboutFilter === "certificates" && <Certificates />}
                </Col>
            </Row>
        </Container>
    )
}

export default About
