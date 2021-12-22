import { Menu } from "./Components/Menu";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

const FullBody = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
