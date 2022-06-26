import React, { useRef, useEffect } from 'react'
import Container from "../Container"
import "./Header.css"
import { Link } from 'react-scroll'





const navLink = [
    {
        display: "Home",
        url: "home"
    },
    {
        display: "About",
        url: "about"
    },
    {
        display: "Services",
        url: "services"
    },
    {
        display: "Portofolio",
        url: "portofolio"
    },
    {
        display: "Contact",
        url: "contact"
    },

]


const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("header_shrink")
            } else {
                headerRef.current.classList.remove("header_shrink")

            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [])


    const menuToggle = () => {
        menuRef.current.classList.toggle("menu_active")
    }
    return (
        <div className="header" ref={headerRef} id="header">
            <Container>
                <div className="navigation d-flex align-items-center  justify-content-between w-100">
                    <div className="logo"><h5>Osama</h5></div>
                    <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                        <ul className="nav_list">
                            {navLink.map((item, index) => {
                                return (
                                    <li className="nav_item" key={index} >
                                        
                                        <Link activeClass="active" to={`${item.url}`} spy={true} smooth={true} delay={0}>
                                            <a href={`${item.url}`}>{item.display}</a>
                                        </Link>
                                    </li>
                                )

                            })}


                        </ul>
                    </div>
                    <div className="nav_right d-flex  align-items-center gap-4">
                        <button className="btn"><a href="#contact">Let's talk</a></button>
                        <span className="mobile_menu" onClick={menuToggle}>
                            <i className="ri-menu-5-line"></i>
                        </span>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Header
