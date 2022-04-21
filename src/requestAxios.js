import axios from "axios";
import { API_URL } from "./consts";

export const publicRequest = axios.create({
  baseURL: API_URL,
});
