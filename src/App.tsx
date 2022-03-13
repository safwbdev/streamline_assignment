import React from "react";
import "./App.css";
import 'animate.css';
import { Container } from "@mui/material";
import { 
  HistoryArea, 
  Main } from "./components";
import Appbar from "./components/Appbar";


const App = () => {
  return (
    <>
    <Appbar/>
    <Container maxWidth="lg" className="content">
      <Main />
      <HistoryArea />
    </Container>
    </>
  );
}

export default App;
