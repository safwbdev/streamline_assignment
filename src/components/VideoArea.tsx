import React, { FC } from "react";
import { Box } from "@mui/material";
import YouTube from "react-youtube";
import { VideoAreaType } from "../redux/actions/actionTypes";
import { Instructions, MobileModal } from ".";

const VideoArea: FC<VideoAreaType> = ({ videoId }) => {
  return (
    <div className="videoArea">
      {videoId ? (
        <YouTube videoId={videoId} />
      ) : (
        <Box className={"videoPlaceholder"}>
          <Instructions />
          <MobileModal />
        </Box>
      )}
    </div>
  );
};

export default VideoArea;
