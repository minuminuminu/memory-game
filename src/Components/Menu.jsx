import {
  MenuContainer,
  HeaderContainer,
  H1,
  HighScore,
  PlayButton,
  SettingsButton,
  UI,
} from "../styles/MenuStyles";
import { useState } from "react";

Modal.setAppElement("#root");

export const Menu = () => {
  const [highScore, setHighScore] = useState(
    localStorage.getItem("high_score")
  );

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
        <SettingsButton>SETTINGS</SettingsButton>
      </UI>
    </MenuContainer>
  );
};
