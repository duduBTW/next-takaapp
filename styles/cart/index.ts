import { animated } from "react-spring";
import styled from "styled-components";

export const Total = styled.div`
  background: black;
  position: sticky;
  top: 0px;
  color: white;
  min-width: 300px;
  height: 100vh;
  padding: 0px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 1.6rem;
    letter-spacing: 1.6px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .price {
    font-size: 4rem;
    font-weight: 500;
    padding: 15px 20px 60px 20px;
    letter-spacing: 5px;

    ::after {
      margin: 10px;
      text-transform: uppercase;
      font-weight: 400;
      content: "USD";
      font-size: 1.2rem;
    }
  }

  button {
    background: white;
    border: none;
    color: black;
    padding: 20px;
    width: 100%;
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

interface CardItemPops {
  lang: string;
  image: string;
}

export const CartItem = styled.div<CardItemPops>`
  margin: 0px;
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(0, 0, 0, 0.3)),
      color-stop(65%, rgba(0, 0, 0, 0.95)),
      color-stop(75%, rgba(0, 0, 0, 1))
    ),
    url(${({ image }: CardItemPops) => image}) no-repeat center center;

  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 40%;
  /* width: 400px; */
  height: 50%;
  color: white;

  padding: 30px 60px;
  position: relative;

  .icon {
    position: absolute;
    bottom: 25px;
    right: 10px;
  }

  .price {
    letter-spacing: 2px;
    font-size: 3.5rem;
    font-weight: 600;

    margin-top: 30px;

    ::before {

      margin: 10px;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1.2rem;
    }
  }

  .type {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2.08rem;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .description {
    font-size: 1.23rem;
  }
`;
