import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { VideoArea, FormArea, VoteArea } from ".";
import { Box } from "@mui/system";
import { RootState } from "../redux/reducers/rootReducer";

const Main = () => {
  const [videoId, setVideoId] = useState("");

  const getVideo = useSelector((state:RootState) => state.videos);

  let currentId = getVideo.length ? getVideo[getVideo.length - 1].id : null;
  let currentVideoId = getVideo.length ? getVideo[getVideo.length - 1].videoId : null;
  let currentVote = getVideo.length ? getVideo[getVideo.length - 1].vote : null;

  useEffect(() => {
    if(currentVideoId){
    setVideoId(currentVideoId);}
  }, [currentVideoId]);

  return (
    <Card style={{ padding: "0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <VideoArea videoId={videoId} />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          justifyContent={"end"}
          flexDirection={"column"}
        >
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            <VoteArea id={currentId} currentVote={currentVote} />
            <FormArea />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Main;
