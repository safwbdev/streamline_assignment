import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { APP_TITLE } from "../constants/lang";

const Appbar = () => {
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
