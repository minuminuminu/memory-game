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
`;

const Cards = styled.div`
  width: 90%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
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
    //add are u sure modal -> else return
    props.close();
  };

  //add timer and state (false) -> onclick on images -> if state == false -> start timer and state = true

  return ReactDom.createPortal(
    <>
      {props.modal ? (
        <ModalBackground
          onClick={() => exit()}
          loaded={props.modal ? true : false}
        >
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Timer>00:00:00</Timer>
            <Cards>
              {props.cardArray.map((e) => {
                return <Images src={e.img} alt={e.name} key={e.id} />;
              })}
            </Cards>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("game")
  );
};
