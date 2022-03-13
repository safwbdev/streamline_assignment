import { LIKE_VIDEO, videoType } from "./actionTypes";
import { DISLIKE_VIDEO } from "./actionTypes";
import { ADD_VIDEO } from "./actionTypes";

export const addVideo = (data:videoType) => {
  return { type: ADD_VIDEO, payload: data };
};
export const likeVideo = (id:string) => {
  return { type: LIKE_VIDEO, id: id };
};
export const dislikeVideo = (id:string) => {
  return { type: DISLIKE_VIDEO, id: id };
};
