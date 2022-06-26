import React from 'react'
import {  Row, Col } from "reactstrap"
import Container from "../Container"
import "./Services.css"

const serviceData = [
    {
        icon: "ri-code-s-slash-line",
        title: "Web Development",
        desc: `Throughout my journey I can turn your ideas and imagination into real life website`,

    },
    {
        icon: "ri-layout-line",
        title: "Web Design",
        desc: `I have a good experience about the web design -UI/UX- `,

    },
    {
        icon: "ri-unsplash-line",
        title: "Graphic Design",
        desc: `Accordin to my experience in editing and creating photos I can make a nice photos for the website`,

    },

]
const Services = () => {
    return (
        <section id="services">
            <Container>
                <Row>
                    <Col lg="12" className="services_top mb-5" >
                        
                        <h2>what services I prvide</h2>
                    </Col>

                    {serviceData.map((item, index) => (
                        <Col lg="4" md="6" sm="6" key={index}>
                            <div className="single_service" >
                                <span className="service_icon">
                                    <i className={item.icon} />
                                </span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}


                </Row>
            </Container>
        </section>
    )
}

export default Services
