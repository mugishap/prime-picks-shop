import axios from "axios";
import { getCookie } from "../utils/cookies";

// const BACKEND_URL: string = "https://primepicks.onrender.com/api/v1";
const BACKEND_URL: string = "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Authorization": getCookie("token")
  }
});

export default api;