import React from "react";
import { Box, Typography } from "@mui/material";
import {
  EXAMPLE,
  INSTRUCTION_A,
  INSTRUCTION_B,
  INSTRUCTION_C,
  INSTRUCTION_D,
  INSTRUCTION_NOTE,
  INSTRUCTION_TITLE,
} from "../constants/lang";

const Instructions = () => {
  return (
    <Box className="instructionsBox">
      <Typography variant="h5" component="h5">
        {INSTRUCTION_TITLE}
      </Typography>
      <ol>
        <li> {INSTRUCTION_A}</li>
        <p className="sample">{EXAMPLE}</p>
        <li> {INSTRUCTION_B}</li>
        <p>{INSTRUCTION_NOTE}</p>
        <li> {INSTRUCTION_C}</li>
        <li> {INSTRUCTION_D}</li>
      </ol>
    </Box>
  );
};

export default Instructions;
