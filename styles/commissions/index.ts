import styled from "styled-components";
import { animated } from "react-spring";

export const SectionContainer = styled.div`
  width: 100%;

  h1 {
    color: black;
    font-size: 1.4rem;
    margin: 0px;

    letter-spacing: 5px;
    text-transform: uppercase;
    text-align: center;

    padding: 10px 0px;
    width: 100%;
    background: white;

    position: sticky;
    top: 0px;

    z-index: 2;
  }
`;

export const CardItem = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  position: relative;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 80vh;
  transition: all 0.5s ease;
  overflow: hidden;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1300px) {
    :hover {
      .img {
        transform: scale(1.21);
      }
    }
  }

  @media (max-width: 1300px) {
    :hover {
      .img {
        transform: translateX(-10%);
      }
    }
  }

  @media (max-width: 800px) {
    :hover {
      .img {
        transform: translateX(0%);
      }
    }
  }

  @media (max-width: 1300px) {
    .hide {
      display: none;
    }
  }

  .img {
    background-color: white;
    flex: 3;
    width: 40%;
    margin: 50px 0px;

    @media (max-width: 800px) {
      width: 100%;
      margin: 50px 0px 0px 0px;
      padding-top: 50px;
      border-top: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  }

  .left {
    @media (max-width: 1300px) {
      flex: 3;
    }
    border-top: 1px solid white;
    text-align: center;
    flex: 4;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
  .right {
    @media (max-width: 1300px) {
      display: none !important;
    }
    flex: 2;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .info {
    background: black;
    color: white;

    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* align-items: center; */
    .title {
      font-size: clamp(2.5rem, 3vw, 5rem);
      padding: 0px 20px;
      text-align: center;
      margin: 0px;
      text-transform: uppercase;
      letter-spacing: 16px;
      font-weight: bold;
    }

    .price {
      /* margin-top: 3vw; */
      font-size: clamp(2.5rem, 3.5vw, 3.6rem);

      font-weight: 600;
      letter-spacing: 3px;

      ::before {
        margin-left: 20px;
        text-transform: uppercase;
        font-weight: 400;
        content: "basic";
        font-size: 0.7rem;
        margin-right: 10px;
      }

      ::after {
        margin: 10px;
        text-transform: uppercase;
        font-weight: 400;
        content: "USD";
        font-size: 1.7rem;
      }

      color: white;
      /* margin-bottom: 4.5vw; */
    }

    ul {
      padding: 0px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        padding: 15px 0px;
        width: 80%;
        border-bottom: 1px solid #5a5a5a;
        list-style: none;
      }
    }
  }
`;

export const CardSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: -1;
  min-width: 600px;
  max-width: 80vw;

  @media (max-width: 800px) {
    align-items: flex-start;
  }

  ul {
    background: rgba(0, 0, 0, 0.75);
    max-height: 300px;
    padding: 0px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      padding: 15px 0px;
      width: 80%;
      border-bottom: 1px solid #5a5a5a;
      list-style: none;
    }
  }
`;

export const ImageCard = styled.div`
  background-image: ${({ image }: CardPorp) => `url("${image}");`};
  background-size: contain;
  background-position: center;
  /* background-color: white; */
  background-repeat: no-repeat;
  z-index: -1;
  transition: all 0.4s ease-in-out;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  /* border-bottom: 1px solid white; */
  background: #1f1f1f;
  padding: 5%;
  color: white;

  font-size: 10rem;

  width: 90%;

  outline: none;
  text-align: center;
`;

export const TextArea = styled.textarea`
  border: 1px solid white;
  background: none;
  color: white;

  font-size: 1.5rem;
  resize: vertical;
  padding: 5%;
  width: 90%;

  width: 100%;

  outline: none;
  text-align: start;
`;

export const Title = styled.div`
  max-width: 100px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  position: fixed;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    max-width: 60px;
    display: none;
    line-height: 40px;
  }

  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: clamp(1.5rem, 2vw, 3rem);

  font-weight: bold;

  background: black;
  width: 140px;

  color: white;
  line-height: 60px;

  z-index: 4;
`;

export const Content = styled.section`
  color: white;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .slide {
    height: 100%;
    width: 100%;

    height: 100%;
    @media (min-width: 1300px) {
      width: 85vw;
    }

    @media (max-width: 1300px) {
      width: 100vw;
    }

    display: flex;
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
    /* flex-direction: column; */
    /* margin-left: 10vw; */

    .body {
      @media (max-width: 800px) {
        padding: 30px;
        max-width: 70vw;
      }
      max-height: 100vh;
      flex-grow: 5;
      background: black;
      max-width: 70vw;

      padding: 5% 100px 0px 5vw;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .price {
        max-width: 100%;
        background: rgba(0, 0, 0, 0.75);
        /* margin-top: 3vw; */
        font-size: clamp(2.5rem, 3.5vw, 3.6rem);

        font-weight: 600;
        letter-spacing: 3px;

        ::before {
          margin-left: 20px;
          text-transform: uppercase;
          font-weight: 400;
          content: "basic";
          font-size: 0.7rem;
          margin-right: 10px;
        }

        ::after {
          margin: 10px;
          text-transform: uppercase;
          font-weight: 400;
          content: "USD";
          font-size: 1.7rem;
        }

        color: white;
        /* margin-bottom: 4.5vw; */
      }

      .button {
        @media (max-width: 800px) {
          max-width: 300px;
        }
      }

      .desc {
        padding: 10px;
        background: rgba(0, 0, 0, 0.75);
        font-size: clamp(0.9rem, 1vw, 1.2rem);
        color: white;
        max-height: 300px;
        overflow-y: hidden;
        margin: 1vw 0px;
        line-height: 33px;

        @media (max-width: 800px) {
          max-width: 50vw;
        }
      }
    }
  }
`;

interface ImagePorp {
  column: boolean;
}

export const Image = styled(animated.div)`
  margin: 20px 0px;
  flex-grow: 5;

  @media (max-width: 1300px) {
    z-index: -1;
    /* transform: translateX(-20%); */
  }

  @media (max-width: 800px) {
    margin: 0px;
  }

  /* min-width: 350px; */
  /* max-width: 570px; */
  width: 100%;
  /* margin-right: 90px; */

  div {
    background-repeat: no-repeat;
    background-size: ${({ column }: ImagePorp) =>
      column ? `auto 100%` : `100% auto`} !important;
    background-position: center;
  }

  .image {
    border: 1px solid red;
  }
`;

export const HeaderStyle = styled.header`
  /* background: blue; */
  /* width: 100vw; */
  height: 100vh;
  max-width: 100vw;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  .main {
    /* margin: 0px 4vw; */
    max-width: 100vw;
    flex-grow: 3;
    flex-grow: 1;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1300px) {
      transform: translateX(5vw);
    }

    @media (max-width: 850px) {
      transform: translateX(10vw);
    }
    z-index: 3;
    justify-content: space-evenly;
    /* padding: 4vw; */
    h1 {
      margin: 0px;
      padding: 0px;

      font-size: clamp(2rem, 3vw, 5rem);
      font-weight: 600;
      letter-spacing: 40px;
    }

    h2 {
      margin: 0px;
      padding: 0px;

      font-size: 1.4rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: 400;
      color: #515151;
      line-height: 35px;
    }

    .link {
      text-align: center;
      text-transform: uppercase;
      padding: 20px;
      color: white;
      text-decoration: none;
      background: black;
      margin: 20px 0px;
      border: none;
      width: 50%;

      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: 10px;
    }
  }
`;

interface CardPorp {
  image: string;
}

export const CardContainer = styled.div`
  @media (max-width: 850px) {
    display: none;
  }

  min-width: 10vw;
  flex-grow: 1;
  flex: 3;
  text-align: center;
  height: 100%;
  width: 100%;

  .item {
    height: 90vh;
  }

  .thmb {
    height: 10vh;
  }
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ image }: CardPorp) => `url("${image}");`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  position: relative;

  label {
    color: white;
    font-size: 1.6rem;
    letter-spacing: 5px;

    left: 20px;
    right: 20px;
    bottom: 10px;
    height: 60px;

    position: absolute;
    background: black;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface ThumbItemPorp {
  active: boolean;
}

export const ThumbItem = styled.div`
  padding: 10px 25px;
  margin: 20px 20px 20px 0px;
  color: white;

  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;

  letter-spacing: 2px;

  /* border-radius: 4px; */

  border: 1px solid black;

  /* box-shadow: 0 6px 6px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23); */

  transform: translateY(0px);
  transition: all 0.4s;
  :hover {
    transition: all 0.4s;
    transform: translateY(-3px);
    /* box-shadow: 0 10px 8px rgba(0, 0, 0, 0.19), 0 5px 5px rgba(0, 0, 0, 0.23); */
    /* background: grey; */
  }

  :active {
    transition: all 0.2s;
    transform: translateY(2px);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.19), 0 2px 2px rgba(0, 0, 0, 0.23);
  }

  background: ${({ active }: ThumbItemPorp) =>
    !active ? "transparent" : "black"};
  color: ${({ active }: ThumbItemPorp) => (!active ? "black" : "white")};
`;

export const Button = styled.button`
  text-transform: uppercase;
  padding: 20px 20px;
  color: black;
  background: none;
  border: 3px solid green;
  margin: 20px 0px;
  cursor: pointer;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;

  position: relative;

  transition: transform 0.4s;
  transform-style: preserve-3d;

  :hover {
    transition: all 0.4s;
    border-color: white;

    ::after {
      transform: translate3D(0px, 0px, 0px);
    }
  }

  ::after {
    position: absolute;
    z-index: -10;
    transition: transform 0.4s;
    content: "";
    background: white;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    transform: translate3D(6px, 6px, 0px) translateZ(-1px);
  }
`;

export const ButtonReverse = styled.button`
  text-transform: uppercase;
  padding: 20px 20px;
  color: white;
  background: none;
  border: 3px solid green;
  margin: 20px 0px;
  cursor: pointer;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;

  position: relative;

  transition: transform 0.4s;
  transform-style: preserve-3d;

  :hover {
    transition: all 0.4s;
    border-color: black;

    ::after {
      transform: translate3D(0px, 0px, 0px);
    }
  }

  ::after {
    position: absolute;
    z-index: -10;
    transition: transform 0.4s;
    content: "";
    background: black;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    transform: translate3D(6px, 6px, 0px) translateZ(-1px);
  }
`;

export const ButtonOutlined = styled.button`
  text-transform: uppercase;
  padding: 20px 20px;
  color: white;
  background: none;
  border: none;
  margin: 20px 0px;
  cursor: pointer;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;

  position: relative;
  outline: none;

  transition: transform 0.4s;
  transform-style: preserve-3d;

  :hover {
    transition: all 0.4s;
    /* border-color: white;

    ::after {
      transform: translate3D(0px, 0px, 0px);
    } */
  }

  /* ::after {
    position: absolute;
    z-index: -10;
    transition: transform 0.4s;
    content: "";
    background: white;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    transform: translate3D(6px, 6px, 0px) translateZ(-1px);
  } */
`;
