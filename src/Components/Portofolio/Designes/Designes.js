
import React, { useState } from 'react'
import "./Designes.css"
import { Row, Col } from "reactstrap"
import Container from "../../Container"
import DesignesData from "../../Store/DesignesData"

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
                    <Col lg="12" className="design_top mb-5">
                        <h6>Explore my work</h6>
                        <h2>Gallery</h2>
                    </Col>
                </Row>
                <div className='allImages'>
                    {DesignesData.map((item, index) => (
                        <div key={index} className={item.name}>
                            <img src={item.img} className={isShow ? "show" : item.class} alt={item.name} />
                        </div>
                    ))}
                </div>



                <div className="d-flex justify-content-center align-items-center  text-center w-100">
                    <button onClick={showHideSites} className="btn px-4 py-2 showBtn mt-3">{word}</button>
                </div>

                
                

            </Container>
        </section>
    )
}

export default Portofolio