import styled from "styled-components";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Foot = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #222831;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 10px 5px 10px 10px;
    height: 60px;

    @media only screen and (max-width: 767px) {
        height: 40px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    svg {
        font-size: 30px;
        cursor: pointer;
        margin: 0px 20px;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
        }
    }

    .linkedin:hover {
        color: #0866c2;
    }

    .github:hover {
        color: yellow;
    }

    .instagram:hover {
        color: #d6249f;
    }
`;

export default function Footer() {
    return (
        <Foot>
            <div>
                <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/sushanthps/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="github"
                    href="https://github.com/SushanthPS"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
                <a
                    className="instagram"
                    href="https://www.instagram.com/shadowps_/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsInstagram />
                </a>
            </div>
        </Foot>
    );
}
