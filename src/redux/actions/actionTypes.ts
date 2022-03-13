export const ADD_VIDEO = "ADD_VIDEO";
export const LIKE_VIDEO = "LIKE_VIDEO";
export const DISLIKE_VIDEO = "DISLIKE_VIDEO";

export type VoteAreaType ={
    id:string
    currentVote:any,
}

export type VideoAreaType ={
    videoId:string
}

export type videoType = {
    id:string,
    videoId:string,
    vote:any,
    createdAt:number,
}

export interface add_video {
    type:typeof ADD_VIDEO,
    payload: videoType
}
export interface like_video {
    type:typeof LIKE_VIDEO
    id: string
}

export interface dislike_video {
    type:typeof DISLIKE_VIDEO,
    id: string
}
export type videoDispatchTypes = add_video | like_video | dislike_video