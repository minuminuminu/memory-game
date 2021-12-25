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
import { GameModal } from "./GameModal";

export const Menu = () => {
  const [highScore, setHighScore] = useState(
    localStorage.getItem("high_score")
  );
  const [modal, setModal] = useState(false);
  const [game, setGame] = useState(false);
  const [settings, setSettings] = useState({
    cardAmount: 12,
    time: 30000,
    tries: "3",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleGame = () => {
    setGame(!game);
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
        <PlayButton onClick={() => toggleGame()}>PLAY</PlayButton>
        <SettingsButton onClick={() => toggleModal()}>SETTINGS</SettingsButton>
      </UI>
      <GameModal modal={game} close={toggleGame} settings={settings} />
      <SettingsModal
        modal={modal}
        close={toggleModal}
        settings={settings}
        setSettings={setSettings}
      />
    </MenuContainer>
  );
};
