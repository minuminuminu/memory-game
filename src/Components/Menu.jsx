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
import Modal from "react-modal/lib/components/Modal";

Modal.setAppElement("#root");

export const Menu = () => {
  const [highScore, setHighScore] = useState(
    localStorage.getItem("high_score")
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <SettingsButton
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          SETTINGS
        </SettingsButton>
      </UI>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          CLOSE
        </button>
      </Modal>
    </MenuContainer>
  );
};
