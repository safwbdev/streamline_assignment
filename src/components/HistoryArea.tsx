import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { RootState } from "../redux/reducers/rootReducer";
import { HISTORY_HIDE, HISTORY_SHOW } from "../constants/lang";


const HistoryArea = () => {
  const [show, setShow] = useState(false);
  const getList = useSelector((state: RootState) => state.videos);
  
  const likedColor = { bgcolor: green[500] };
  const dislikedColor = { bgcolor: red[500] };

  const HideHeader = () => {
    if (getList.length && getList[0].vote !== null && getList[0].vote !== "") {
      return(
      <Grid container spacing={3} marginTop={0} justifyContent="center">
        <Grid item>
          <Divider className="test">
          <Button variant="contained" onClick={() => setShow(!show)}>
            {show ? HISTORY_SHOW : HISTORY_HIDE} 
          </Button>
          </Divider>
        </Grid>
      </Grid>);
    }else{
      return null;
    }
  };
  const HistoryList = () => (
    <Grid
      container
      spacing={3}
      marginTop={0.5}
      display={show ? "none" : "flex"}
    >
      {getList &&
        getList.map((data: any) => {
          if (data.vote !== null && data.vote !== "")
            return (
              <Grid item xs={12} sm={6} md={3} key={data.id}>
                <Card>
                  <CardMedia
                    image={`https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg`}
                    style={{
                      height: 0,
                      paddingTop: "56.25%",
                    }}
                  />
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={data.vote ? likedColor : dislikedColor}
                        aria-label="video"
                      >
                        {data.vote ? <ThumbUpIcon /> : <ThumbDownIcon />}
                      </Avatar>
                    }
                    title={data.videoId}
                  />
                </Card>
              </Grid>
            );
          return null;
        })}
    </Grid>
  );

  return (
    <>
      <HideHeader />
      <HistoryList />
    </>
  );
};

export default HistoryArea;
