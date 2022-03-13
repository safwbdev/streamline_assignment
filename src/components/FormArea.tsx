import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../redux/actions/videoActions";
import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { Box } from "@mui/system";
import { FORM_SUBMIT_TEXT, FORM_TEXT_PLACEHOLDER } from "../constants/lang";

const FormArea = () => {
  const [newId, setNewId] = useState("");
  const handleVidId = (event:ChangeEvent<HTMLInputElement>):void => setNewId(event.target.value);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addVideo({ id:uuidv4(), videoId: newId, vote: null, createdAt: Date.now() }));
    setNewId("")
  };

  return (
    <Box margin={"2em 0"}>
      <TextField
        id="outlined-basic"
        placeholder={FORM_TEXT_PLACEHOLDER}
        variant="outlined"
        fullWidth
        value={newId}
        onChange={handleVidId}
        style={{ marginBottom: "1em" }}
      />
      <Button
        fullWidth
        onClick={handleSubmit}
        variant="contained"
        disabled={newId.length < 11}
      >
        {FORM_SUBMIT_TEXT}
      </Button>
    </Box>
  );
};

export default FormArea;
