import axios from "axios";

const BASE_URL = "https://iron-bike.herokuapp.com/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWM1NTFhNzk5MmFjOTkzMzdmNGNkOSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3QiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjUwMjE4Mjg1LCJleHAiOjE2NTAyMjE4ODV9.5gSCnkOw2BqIapZnghnj6ygPFmNkIfckU3d8rjdv8IU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});