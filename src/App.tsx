import React from "react";
import "./App.css";
import "animate.css";
import { Container } from "@mui/material";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Appbar, Main, HistoryArea } from "./components";

const App = () => {

  const handleScreen = useFullScreenHandle();

  return (
    <FullScreen handle={handleScreen}>
      <Appbar handleScreen={handleScreen} />
      <Container maxWidth="lg" className="content">
        <Main />
        <HistoryArea />
      </Container>
    </FullScreen>
  );
};

export default App;
