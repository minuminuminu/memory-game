import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactDom from "react-dom";

const transitionIn = keyframes`
  from {
    opacity:0;
    transform: rotateY(-10deg);
  }

  to{
    opacity:1;
    transform:rotateY(0)
  }
`;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0000001c;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(3px);

  animation: ${(props) => (props.loaded ? transitionIn : null)} 0.75s;
`;

const ModalContainer = styled.div`
  width: 80vw;
  height: 90vh;
  margin-top: 5vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  flex-direction: column;
  background-color: #ffffff4b;

  & > * {
    margin: auto;
  }
`;

const Timer = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  font-weight: 500;
  /* background-color: #f3cccc; */
`;

const PictureRow = styled.div`
  width: 90%;
  height: 22%;
  display: flex;
  flex-direction: row;
  /* background-color: #cfcccc; */

  & > * {
    margin: auto;
  }
`;

const Images = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const GameModal = (props) => {
  let exit = () => {
    props.close();
  };

  return ReactDom.createPortal(
    <>
      {props.modal ? (
        <ModalBackground
          onClick={() => exit()}
          loaded={props.modal ? true : false}
        >
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Timer>00:00:00</Timer>
            <PictureRow>
              <Images src="/isi.png" alt="" />
              <Images src="/lucas.png" alt="" />
              <Images src="/luis.png" alt="" />
              <Images src="/tobi.png" alt="" />
            </PictureRow>
            <PictureRow>
              <Images src="/isi.png" alt="" />
              <Images src="/lucas.png" alt="" />
              <Images src="/luis.png" alt="" />
              <Images src="/tobi.png" alt="" />
            </PictureRow>
            <PictureRow>
              <Images src="/isi.png" alt="" />
              <Images src="/lucas.png" alt="" />
              <Images src="/luis.png" alt="" />
              <Images src="/tobi.png" alt="" />
            </PictureRow>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("game")
  );
};
