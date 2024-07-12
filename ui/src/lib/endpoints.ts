const api = import.meta.env.VITE_BACKEND_URI;

export const SIGNUP_API = api + "/signup";
export const LOGIN_API = api + "/login";
export const LOGOUT_API = api + "/logout";

export const SEND_OTP_API = api + "/otp/send";
export const VERIFY_OTP_API = api + "/otp/verify";

export const GET_VIDEOS_API = api + "/video/getVideos";