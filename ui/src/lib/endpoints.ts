const api = import.meta.env.VITE_BACKEND_URI;

export const SIGNUP_API = api + "/signup";
export const LOGIN_API = api + "/login";
export const LOGOUT_API = api + "/logout";
export const GET_USER_API = api + "/user";

export const SEND_OTP_API = api + "/otp/send";
export const VERIFY_OTP_API = api + "/otp/verify";
export const GET_VIDEOS_API = api + "/video/getVideos";

export const updateBlockChainData = api + "/video/updateBlockChainId";
export const uploadVideo = (id:number) => api + "/video/upload/" + id;
export const uploadThumbnail = (title:string, description:string) => api + "/video/uploadThumbnail/" + title + "/" + description; 
export const deleteVideo = (id:number) => api + "/video/delete/" + id;
export const FETCH_VIDEO_BY_ID = (id:number) => api + "/video/getVideoById/" + id;
export const LIKE_VIDEO = (id:number) => api + "/video/like/" + id;
