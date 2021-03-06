import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 60px;

  /* @media (max-width: 1300px) {
    display: none;
  } */

  background: black;
`;

export const Icons = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    background: white;
    color: white;
  }
`;
export const Title = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin: 30px 0px;
  color: white;

  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 60px;

  font-weight: bold;
`;

export const RoutesContainer = styled.div`
  margin-left: 14vw;

  @media (max-width: 1300px) {
    margin-left: 100px;
  }
`;
