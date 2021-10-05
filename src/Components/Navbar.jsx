import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%);
    position: fixed;
    background-color: #222831;
    color: #eeeeee;
    font-size: 20px;

    @media only screen and (max-width: 767px) {
        font-size: 12px;
        height: 40px;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    .cont {
        display: flex;
        width: 70%;
        height: 95%;
        margin: auto;
        justify-content: space-evenly;
        align-items: center;
        font-weight: 700;

        @media only screen and (max-width: 767px) {
            width: 100%;
        }
    }

    .cont > div {
        cursor: pointer;
    }

    .cont > div:hover {
        color: #00adb5;
    }

    .cont > div:nth-of-type(1) {
        color: ${(props) =>
            props.selected === "Home" ? "#00adb5" : "#eeeeee"};
        border-bottom: ${(props) =>
            props.selected === "Home" ? "2px solid #00adb5" : "none"};
    }

    .cont > div:nth-of-type(2) {
        color: ${(props) =>
            props.selected === "About" ? "#00adb5" : "#eeeeee"};
        border-bottom: ${(props) =>
            props.selected === "About" ? "2px solid #00adb5" : "none"};
    }

    .cont > div:nth-of-type(3) {
        color: ${(props) =>
            props.selected === "Projects" ? "#00adb5" : "#eeeeee"};
        border-bottom: ${(props) =>
            props.selected === "Projects" ? "2px solid #00adb5" : "none"};
    }

    .cont > div:nth-of-type(4) {
        color: ${(props) =>
            props.selected === "Contact Me" ? "#00adb5" : "#eeeeee"};
        border-bottom: ${(props) =>
            props.selected === "Contact Me" ? "2px solid #00adb5" : "none"};
    }
`;

export default function Navbar() {
    const [selected, setSelected] = useState("Home");
    return (
        <Nav selected={selected}>
            <div className="cont">
                <div onClick={() => setSelected("Home")}>
                    <Link to="/">Home</Link>
                </div>
                <div onClick={() => setSelected("About")}>
                    <Link to="/about">About</Link>
                </div>
                <div onClick={() => setSelected("Projects")}>
                    <Link to="/projects">Projects</Link>
                </div>
                <div onClick={() => setSelected("Contact Me")}>
                    <Link to="/contact-me">Contact Me</Link>
                </div>
                <div>
                    <a
                        href="https://drive.google.com/file/d/180vP_WHIMTdHKw18XYfntIXmqFUhgS6-/view"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </Nav>
    );
}
