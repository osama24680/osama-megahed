import React from 'react'
import "./Testimonial.css"
import { Row, Col } from "reactstrap"
import Container from "../Container"
import Heading from "../Heading"
import Slider from "react-slick";
const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        swipeToSlide:true,
       
    };
    return (

        <section>
            <Container>
                <Row>
                   
                    <Heading title="What my clients say" className="text-center" />
                    <Col lg="6" className="m-auto">
                        <Slider {...settings}>
                            <div>
                                <div className="single_testi">
                                    <p>
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the
                                        visual form of a document or a typeface without
                                        relying on meaningful content. Lorem ipsum may be
                                        used as a placeholder before final copy is available
                                    </p>
                                    <h6>Matian Cooper</h6>
                                    <p className="title">Web Developer</p>
                                </div>
                            </div>
                            <div>
                                <div className="single_testi">
                                    <p>
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the
                                        visual form of a document or a typeface without
                                        relying on meaningful content. Lorem ipsum may be
                                        used as a placeholder before final copy is available
                                    </p>
                                    <h6>Matian Cooper</h6>
                                    <p className="title">Web Developer</p>
                                </div>
                            </div>
                            <div>
                                <div className="single_testi">
                                    <p>
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the
                                        visual form of a document or a typeface without
                                        relying on meaningful content. Lorem ipsum may be
                                        used as a placeholder before final copy is available
                                    </p>
                                    <h6>Matian Cooper</h6>
                                    <p className="title">Web Developer</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial
