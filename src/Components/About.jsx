import styled from "styled-components";
import TechStack from "./TechStack";
import Proficiencies from "./Proficiencies";

const Container = styled.div`
    margin-top: 100px;

    h1 {
        margin-bottom: 5px;
        color: #5c5b5b;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }

    p {
        margin: auto;
        width: 90%;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .top-section > img {
        width: 150px;
    }

    .about {
        padding-bottom: 30px;
        border-bottom: 1px solid #d8d2d2;
    }

    p {
        font-size: 1.1em;
        font-weight: 500;
        color: #5c5b5b;
    }
`;

export default function About() {
    return (
        <Container>
            <div className="about">
                <h1>About</h1>
                <div className="top-section">
                    <img src="photo.png" alt="" />
                    <p>
                        A Passionate aspiring Full Stack Developer skilled in
                        MERN stack and loves solving problems in the most
                        efficient way. <br /> A Polyglot who is adept at coding
                        in Javascript, Python 3 and Java. <br />
                        Looking forward to joining a company where I shall be
                        able to contribute towards individual and company
                        growth.
                    </p>
                </div>
            </div>
            <TechStack />
            <Proficiencies />
        </Container>
    );
}
