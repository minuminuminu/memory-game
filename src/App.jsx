import { Menu } from "./Components/Menu";
import styled, { keyframes } from "styled-components";

export const transitionIn = keyframes`
  from {
    opacity:0;
    transform: rotateY(-10deg);
  }

  to{
    opacity:1;
    transform:rotateY(0)
  }
`;

export const FullBody = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  animation: ${transitionIn} 1s;
  z-index: -1;
`;

function App() {
  return <Menu />;
}

export default App;
