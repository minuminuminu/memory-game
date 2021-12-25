import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactDom from "react-dom";
import { useForm } from "react-hook-form";

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
  border-radius: 15px;
  background-color: #ffffff4b;
`;

const Content = styled.div`
  width: 54vw;
  height: 422.5px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: #c7c7c761;
`;

const Option = styled.div`
  width: 90%;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;

  & > * {
    margin: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.setSettings({
      cardAmount: parseInt(data.cardAmount),
      time: parseInt(data.time),
      tries: data.tries,
    });

    props.close();
  };

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Content>
                <Option>
                  Cards:
                  <select {...register("cardAmount")}>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                  </select>
                </Option>
                <Option>
                  Allowed Tries:
                  <select {...register("tries")}>
                    <option value={3}>3</option>
                    <option value={2}>2</option>
                    <option value={1}>1</option>
                  </select>
                </Option>
                <Option>
                  Time:
                  <select {...register("time")}>
                    <option value={30000}>30 sec</option>
                    <option value={60000}>1 min</option>
                    <option value={null}>Endless</option>
                  </select>
                </Option>
              </Content>
              <Buttons>
                <SaveButton type="submit">CONFIRM CHANGES</SaveButton>
                <CancelButton onClick={() => cancel()}>CANCEL</CancelButton>
              </Buttons>
            </Form>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};
