import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 20vh;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: black;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 55px;
  margin-top: 70px;
`;

export const UI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40vh;
`;

export const HighScore = styled.h2`
  font-weight: 400;
  font-size: 30px;
`;

export const PlayButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  background-color: #34e35a;
  border: 0;
  margin-top: 15px;
  font-weight: 500;
  transition: background-color 0.1s;

  &:hover {
    background-color: #37c456;
  }
`;

export const SettingsButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  background-color: #afb1b3;
  border: 0;
  margin: 10px;
  font-weight: 500;
  transition: background-color 0.1s;

  &:hover {
    background-color: #9da0a1;
  }
`;
