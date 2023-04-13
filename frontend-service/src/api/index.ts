import axios from "axios";
import { getCookie } from "../utils/cookies";
import { apiUrl } from "./url";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Authorization": "Bearer " + getCookie("token")
  }
});

export default api;