import { ADD_VIDEO, DISLIKE_VIDEO, LIKE_VIDEO, videoDispatchTypes, videoType } from "../actions/actionTypes";

const addVideo = (state:any, data:videoType) => state.concat([data]);

const vote = (state:any, id:string, vote:boolean) => {
  return state.map((post:any) => {
    if (post.id === id) {
      return {
        ...post,
        vote: vote,
      };
    } else return post;
  });
};

const videoReducer = (state = [], action:videoDispatchTypes) => {
  switch (action.type) {
    case ADD_VIDEO:
      return addVideo(state, action.payload);
    case LIKE_VIDEO:
      return vote(state, action.id.toString(), true);
    case DISLIKE_VIDEO:
      return vote(state, action.id.toString(), false);
    default:
      return state;
  }
};
export default videoReducer;
