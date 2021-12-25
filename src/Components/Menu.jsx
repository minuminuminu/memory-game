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
  const [cardArray, setCardArray] = useState([
    { name: "tobi", img: "/tobi.png", id: 1 },
    { name: "lucas", img: "/lucas.png", id: 2 },
    { name: "luis", img: "/luis.png", id: 3 },
    { name: "isi", img: "/isi.png", id: 4 },
    { name: "minis", img: "/minis.png", id: 5 },
    { name: "nico", img: "/nico.png", id: 6 },
    { name: "tobi", img: "/tobi.png", id: 7 },
    { name: "lucas", img: "/lucas.png", id: 8 },
    { name: "luis", img: "/luis.png", id: 9 },
    { name: "isi", img: "/isi.png", id: 10 },
    { name: "minis", img: "/minis.png", id: 11 },
    { name: "nico", img: "/nico.png", id: 12 },
  ]);

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    setCardArray(array);
  };

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
    shuffleArr(cardArray);
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
      <GameModal
        modal={game}
        close={toggleGame}
        settings={settings}
        cardArray={cardArray}
      />
      <SettingsModal
        modal={modal}
        close={toggleModal}
        settings={settings}
        setSettings={setSettings}
      />
    </MenuContainer>
  );
};
