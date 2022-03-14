import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { APP_TITLE } from "../constants/lang";
import Fullscreen from "@mui/icons-material/Fullscreen";
import CloseFullscreen from "@mui/icons-material/CloseFullscreen";

const Appbar = (props: any) => {

  const handleGoFull = ()=> props.handleScreen.enter()
  const handleExitFull = ()=> props.handleScreen.exit()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="mainBar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <OndemandVideoIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {APP_TITLE}
          </Typography>
          {props.handleScreen.active ? (
            <IconButton
              className="fullScreenButton"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleExitFull}
            >
              <CloseFullscreen />
            </IconButton>
          ) : (
            <IconButton
              className="fullScreenButton"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleGoFull}
            >
              <Fullscreen />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
