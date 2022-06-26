import React from 'react'
import "./Experience.css"
import { Col, Row } from "reactstrap"
import Container from "../Container"
import Heading from "../Heading"
const Experience = () => {
    return (
        <section>
            <Container>
                <Row>
                  
                    <Heading title="Experience" />
                    <Col lg="6" className="mb-5">
                        <div className="single_experience_container">
                            <div className="single_experience">
                                <span className="experience_icon"><i className="ri-briefcase-line"></i></span>
                                <h6>2021 - 2022</h6>
                                <h5>Jr. Front-end Developer</h5>
                                <p>more than a year of develope and create projects</p>
                            </div>

                            {/* <div className="single_experience">
                                <span className="experience_icon"><i className="ri-briefcase-line"></i></span>
                                <h6>2020 - 2021</h6>
                                <h5>Sr. Front-end Developer</h5>
                                <p>relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div> */}

                            {/* <div className="single_experience">
                                <span className="experience_icon"><i className="ri-briefcase-line"></i></span>
                                <h6>2020 - 2021</h6>
                                <h5>Sr. Front-end Developer</h5>
                                <p>relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div> */}
                        </div>
                    </Col>
                    {/* <Col lg="6" className="mb-5">
                        <div className="single_experience_container">
                            <div className="single_experience">
                                <span className="experience_icon"><i className="ri-briefcase-line"></i></span>
                                <h6>2020 - 2021</h6>
                                <h5>Sr. Front-end Developer</h5>
                                <p>relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div>

                            <div className="single_experience">
                                <span className="experience_icon"><i className="ri-briefcase-line"></i></span>
                                <h6>2020 - 2021</h6>
                                <h5>Sr. Front-end Developer</h5>
                                <p>relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div>

                            <div className="single_experience">
                                <span className="experience_icon"><i className="ri-briefcase-line"></i></span>
                                <h6>2020 - 2021</h6>
                                <h5>Sr. Front-end Developer</h5>
                                <p>relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Experience
