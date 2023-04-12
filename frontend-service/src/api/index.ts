import axios from "axios";

const BACKEND_URL: string = "https://primepicks.onrender.com";

const api = axios.create({
  baseURL: BACKEND_URL
});

export default api;