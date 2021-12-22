import { Menu } from "./Components/Menu";
import GlobalStyle from "./styles/GlobalStyle";
import styled, { keyframes } from "styled-components";

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

const FullBody = styled.div`
  height: 100vh;
  width: 100vw;
  animation: ${transitionIn} 0.75s;
`;

function App() {
  return (
    <FullBody>
      <Menu />
      <GlobalStyle />
    </FullBody>
  );
}

export default App;
