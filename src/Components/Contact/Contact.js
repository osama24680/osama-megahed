import React from 'react'
import "./Contact.css"
import Heading from "../Heading"
import Form from "./Form/Form"
import { Row, Col } from "reactstrap"
import Container from "../Container"
const Contact = () => {


    return (
        <section id="contact">
            <Container >
                <Row>
                    <Heading title="Get In Touch" />
                    <Col lg="6" md="6" >
                        <div className="contactAll">
                            <div className="contact_info_container  ">
                                <div className="contact_info_box ">
                                    <h6>Address</h6>
                                    <p>Egypt, Alexandria</p>
                                </div>
                                <div className="contact_info_box ">
                                    <a href="https://wa.me/1127796848" target="_blank" rel="noreferrer">
                                        <h6>Phone</h6>
                                        <p>01127796848</p>
                                    </a>

                                </div>
                            </div>

                            <div className="contact_info_container  ">
                                <div className="contact_info_box ">
                                    <h6>Email</h6>
                                    <p>osamamegahed2468@gmail.com</p>
                                </div>
                                <div className="contact_info_box ">
                                    <a href="https://goo.gl/maps/G3ktDj7Yxtips5rG7" target="_blank" rel="noreferrer">
                                        <h6>Location</h6>
                                        <p>Alex, Alhadara</p>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6"><Form /></Col>


                </Row>
            </Container>
        </section>
    )
}

export default Contact
