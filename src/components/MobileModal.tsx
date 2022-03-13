import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { Instructions } from ".";
import HelpIcon from "@mui/icons-material/Help";
import { INSTRUCTION_BUTTON, INSTRUCTION_CONFIRM } from "../constants/lang";

const MobileModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "0.5em",
    boxShadow: 24,
    width: "60%",
    p: 4,
  };
  return (
    <div className="mobileModal">
      <Button
        variant={"outlined"}
        onClick={handleOpen}
        startIcon={<HelpIcon />}
      >
        {INSTRUCTION_BUTTON}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Instructions />
          <Button fullWidth variant="contained" onClick={handleClose}>
            {INSTRUCTION_CONFIRM}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MobileModal;
