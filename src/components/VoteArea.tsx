import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { VoteAreaType } from "../redux/actions/actionTypes"
import { dislikeVideo, likeVideo } from "../redux/actions/videoActions";
import { Stack, Fab } from "@mui/material";
import { Box } from "@mui/system";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";




const VoteArea:FC<VoteAreaType> = ({id,currentVote}) => {

  let voteClass =
    currentVote !== null && currentVote !== ""
      ? "animate__animated animate__fadeOutUp"
      : "";

  const dispatch = useDispatch();

  const handleLike = () => dispatch(likeVideo(id));
  const handleDislike = () => dispatch(dislikeVideo(id));

  return (
    <Box 
      display={"flex" } 
      flexDirection={"row"}>
      <Stack direction="row" spacing={2}>
        <Fab
          color="success"
          aria-label="like"
          className={voteClass}
          onClick={handleLike}
          disabled={id ? false:true}
        >
          <ThumbUpIcon />
        </Fab>
        <Fab
          color="error"
          aria-label="dislike"
          className={voteClass}
          onClick={handleDislike}
          disabled={id ? false:true}
        >
          <ThumbDownIcon />
        </Fab>
      </Stack>
    </Box>
  );
};

export default VoteArea;
