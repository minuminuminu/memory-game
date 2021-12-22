import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

const FullBody = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FullBody />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
