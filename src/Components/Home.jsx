import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    justify-content: center;

    div {
        font-size: 40px;
        font-weight: 700;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
        }
    }

    span {
        color: greenyellow;
    }

    img {
        width: 200px;
        margin-bottom: 10px;
        border: 2px solid white;
        border-radius: 50%;

        @media only screen and (max-width: 767px) {
            width: 80px;
        }
    }
`;

export default function Home() {
    return (
        <Container className="body">
            <img src="/photo.png" alt="" />
            <div>
                Hey, I am <span> Sushanth PS</span>. <br /> I am a Full-Stack
                Web Developer from Bangalore, India.
            </div>
        </Container>
    );
}
