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
  width: 75vw;
  height: 85vh;
  margin-top: 5vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #ffffff4b;
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
          <ModalContainer onClick={(e) => e.stopPropagation()}></ModalContainer>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("game")
  );
};
