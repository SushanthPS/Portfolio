import styled from "styled-components";

const Tech = styled.div`
    padding: 10px 0 30px;
    background-color: #fff;
    border-bottom: 1px solid #d8d2d2;

    .stacks {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        align-items: center;
        justify-content: center;
    }

    .stack-item {
        width: 90px;
        height: 90px;
        margin: 30px 85px;
    }

    .logo {
        width: 100%;
        height: 100%;
    }

    .stack-item > h5 {
        margin-top: 3px;
        color: #494848;
    }
`;

export default function TechStack() {
    return (
        <Tech>
            <h1>Tech Stack</h1>
            <div className="stacks">
                <div className="stack-item">
                    <img className="logo" src="/html.png" alt="" />
                    <h5>HTML 5</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/css.png" alt="" />
                    <h5>CSS 3</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/javascript.png" alt="" />
                    <h5>JAVASCRIPT</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/nodejs.png" alt="" />
                    <h5>NODE JS</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/mongodb.png" alt="" />
                    <h5>MONGO DB</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/mysql.svg" alt="" />
                    <h5>MySQL</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/express.png" alt="" />
                    <h5>EXPRESS</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/reactjs.png" alt="" />
                    <h5>REACT JS</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/redux.png" alt="" />
                    <h5>REDUX</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/java.png" alt="" />
                    <h5>JAVA</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/python.png" alt="" />
                    <h5>PYTHON 3</h5>
                </div>
            </div>
        </Tech>
    );
}
