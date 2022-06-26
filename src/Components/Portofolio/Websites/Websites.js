import React, { useState } from 'react'
import "./Websites.css"
import { Row, Col } from "reactstrap"
import Container from "../../Container"
import websitesData from "../../Store/WebsitesData"
import CountDonw from '../../CountDonw/CountDonw'


const Portofolio = () => {
    const [isShow, setIsShow] = useState(false)
    const [word, setWord] = useState("show")
    const showHideSites = () => {

        if (word === "show") {
            setIsShow(true)
            setWord("hide")
        } else if (word === "hide") {
            setIsShow(false)
            setWord("show")
        }
    }
    return (
        <section id="portofolio">
            <Container>
                <Row>
                    <Col lg="12" className="porto_top mb-5">
                        <h6>Explore my work</h6>
                        <h2>Portofolio</h2>
                    </Col>

                    {websitesData.map((item, index) => (
                        <Col lg="4" md="6" sm="6" key={index} className={isShow ? "show" : item.class}>
                            <div className="porto_card mb-4" >
                                <div className="porto_img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="porto_content">
                                    <h5>{item.title}</h5>
                                    {item.uncompleted ? <CountDonw /> :
                                        <div className="d-flex justify-content-evenly w-100 mt-4">
                                            <a href={item.live} target="_blank" rel="noreferrer">Live Demo</a>
                                            <a href={item.code} rel="noreferrer" target="_blank">Source Code</a>
                                        </div>
                                    }

                                </div>
                            </div>
                        </Col>
                    ))}
                    <div className="d-flex justify-content-center align-items-center  text-center w-100">
                        <button onClick={showHideSites} className="btn px-4 py-2 showBtn">{word}</button>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Portofolio