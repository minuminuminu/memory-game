import {
  MenuContainer,
  HeaderContainer,
  H1,
  HighScore,
  PlayButton,
  SettingsButton,
  UI,
} from "../styles/MenuStyles";
import { SettingsModal } from "./SettingsModal";
import { useState } from "react";

export const Menu = () => {
  const [highScore, setHighScore] = useState(
    localStorage.getItem("high_score")
  );
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  let newHighScore = (highscore) => {
    setHighScore(localStorage.setItem("high_score", highscore));
  };

  return (
    <MenuContainer>
      <HeaderContainer>
        <H1>Memory Game</H1>
      </HeaderContainer>
      <UI>
        <HighScore>
          BEST TIME: {highScore == null ? "???" : highScore}
        </HighScore>
        <PlayButton>PLAY</PlayButton>
        <SettingsButton onClick={() => toggle()}>SETTINGS</SettingsButton>
      </UI>
      <SettingsModal modal={modal} close={toggle} />
    </MenuContainer>
  );
};
