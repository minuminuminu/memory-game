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

const transitionOut = keyframes`
  from {
    opacity:1;
    transform:rotateY(0);
  }

  to{
    opacity:0;
    transform:rotateY(-10deg)
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

  animation: ${(props) => (props.loaded ? transitionIn : null)} 0.75s;
`;

const ModalContainer = styled.div`
  width: 60vw;
  height: 650px;
  margin-top: 15vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff4b;
`;

const Content = styled.div`
  width: 90%;
  height: 65%;
  background-color: #c7c7c761;
`;

const Buttons = styled.div`
  margin-top: 50px;
`;

const SaveButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  background-color: #34e35a;
  border: 0;
  font-size: 13px;
  font-weight: 400;
  margin-right: 10px;
  transition: background-color, font-size 0.1s;

  &:hover {
    background-color: #37c456;
    font-size: 14px;
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  background-color: #a3a8a4;
  border: 0;
  font-size: 13px;
  font-weight: 400;
  margin-left: 10px;
  transition: background-color, font-size 0.1s;

  &:hover {
    background-color: #838884;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const SettingsModal = (props) => {
  let cancel = () => {
    props.close();
  };

  return ReactDom.createPortal(
    <>
      {props.modal ? (
        <ModalBackground
          onClick={() => cancel()}
          loaded={props.modal ? true : false}
        >
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Content></Content>
            <Buttons>
              <SaveButton>Confirm Changes</SaveButton>
              <CancelButton onClick={() => cancel()}>Cancel</CancelButton>
            </Buttons>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};
