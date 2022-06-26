import React from 'react'
import "./Skills.css"
const Skills = () => {
    const frontendSkills = [
        { title: "HTML", width: "95%", percentage: "95%" },
        { title: "CSS", width: "90%", percentage: "90%" },
        { title: "Bootstrap", width: "90%", percentage: "90%" },
        { title: "SASS", width: "70%", percentage: "70%" },
        { title: "JavaScipt", width: "80%", percentage: "80%" },
        { title: "OOP", width: "60%", percentage: "60%" },
        { title: "jQuery", width: "65%", percentage: "65%" },
        { title: "React.js", width: "70%", percentage: "70%" },
        { title: "Material UI", width: "80%", percentage: "80%" },
        { title: "ContextAPI", width: "70%", percentage: "70%" },
        { title: "Redux", width: "60%", percentage: "60%" },
    ]

    return (
        <div className="skills_wrapper w-100  gap-5">
            <div className="d-flex">
                <div className="frontend_skills w-100">
                    {
                        frontendSkills.map((item, index) => (
                            <SkillItem
                                key={index}
                                title={item.title}
                                percentage={item.percentage}

                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}




const SkillItem = ({ title, percentage }) => {
    return (
        <div className="skill_data mb-3" >
            <div className="skill_title d-flex align-items-ceter justify-content-between">
                <h6>{title}</h6>
                <span>{percentage}</span>
            </div>
            <div className="skill_bar">
                <span className="skill_bar_percentage" style={{ width: `${percentage}` }}></span>
            </div>
        </div>
    )
}
export default Skills
