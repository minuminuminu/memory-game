import ReactDom from "react-dom";
import {
  ModalBackground,
  ModalContainer,
  Timer,
  Cards,
  Images,
} from "../styles/GameModalStyles";
import { useState, useEffect } from "react";

export const GameModal = (props) => {
  const [firstClick, setFirstClick] = useState(true);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  useEffect(() => {
    if (firstChoice === null || secondChoice === null) {
      return;
    }

    if (firstChoice === secondChoice) {
      console.log("valid");
      // do stuff when valid
    } else {
      console.log("invalid");
      // do stuff when invalid
    }

    // change this
    setFirstClick(true);
    setFirstChoice(null);
    setSecondChoice(null);
  }, [secondChoice]);

  const click = (name) => {
    if (firstClick) {
      setFirstChoice(name);
    } else {
      setSecondChoice(name);
    }

    setFirstClick(!firstClick);
  };

  const exit = () => {
    // TODO: add are u sure modal -> else return
    props.close();
  };

  // TODO: add timer and state (false) -> onclick on images -> if state == false -> start timer and state = true

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
                return (
                  <Images
                    src={e.img}
                    alt={e.name}
                    key={e.id}
                    onClick={() => click(e.name)}
                  />
                );
              })}
            </Cards>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("game")
  );
};
