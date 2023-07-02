import React, { useState } from "react"
import '../../App.css';
import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Hamburger from "hamburger-react"

function Navigation() {

    const linkStyle = {
        color: "black", 
        fontSize: "1.25em",
        
    }; 

    const [btnState, setBtnState] = useState(false)
    const handleClick = () => {
        setBtnState((btnState) => !btnState)
    }

    let toggle = btnState ? (
    <div className="dropdown-content">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
    </div>
    ) : null

    return (
    <>
        <div className="sticky-top" style={{width: "100vw"}}>
        <NavbarBrand
                href="/"
                className="navbarbrand"
                style={{ fontSize: "2.5em" }}
            >
                Hannah Made Pottery
        </NavbarBrand>

        <Nav className="navigation" style={{justifyContent: "space-evenly", paddingBottom: "2vh"}} >

            <NavItem className="link">
                <NavLink href="/" style={linkStyle}>
                Home</NavLink>
            </NavItem>
            <NavItem className="link">
                <NavLink href="/portfolio" style={linkStyle}>
                Portfolio
                </NavLink>
            </NavItem>
            <NavItem className="link">
                <NavLink href="/about" style={linkStyle}>
                About
                </NavLink>
            </NavItem>
            <NavItem className="link">
                <NavLink href="/contact" style={linkStyle}>
                Contact
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink 
                    href='https://www.instagram.com/hannahmadepottery/' 
                    target="_blank"
                    rel="noopener noreferrer" 
                    style={{color: "#E4405F"}}
                    
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" /> 
                </NavLink >

            </NavItem>
            </Nav>
        </div>
        <div className="media">
                <NavbarBrand
                    href="/"
                    className="navbarbrandMedia"
                    style={{ fontSize: "1.5em" }}
                >
                    Hannah Made Pottery
                </NavbarBrand>

        <div className="dropDown">
            <i onClick={handleClick} className="dropbtn">
            <Hamburger />
            </i>
            <div>{toggle}</div>
            </div>
        </div>
    </>
    )
}

export default Navigation
