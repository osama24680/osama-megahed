import React from 'react'
import "./Certificates.css"
const Certificates = () => {
    return (
        <div className="awrd_container d-flex align-items-center gap-4 flex-wrap">
            <div className="single_award ">
                <div className="award_year">2021</div>
                <h6 className="award_title"><a href="https://www.youtube.com/c/ElzeroInfo">Elzero web school</a> - <span>HTML, CSS, JavaScipt   </span></h6>
            </div>
            <div className="single_award ">
                <div className="award_year">2021</div>
                <h6 className="award_title"><a href="https://www.youtube.com/results?search_query=front+end+course">Youtube</a> - <span>HTML, CSS, JavaScipt, Bootstrap</span></h6>
            </div>
            <div className="single_award ">
                <div className="award_year">2021</div>
                <h6 className="award_title"><a href="https://www.facebook.com/Routelearning/">Route</a> - <span>HTML, CSS, JavaScipt, Bootstrap, JS, Dom, OOP, jQuery, React.js</span></h6>
            </div>
            <div className="single_award ">
                <div className="award_year">2021</div>
                <h6 className="award_title"><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Maximilian Schwarzmüller</a> - <span>React.js</span></h6>
            </div>
        </div>
    )
}

export default Certificates
