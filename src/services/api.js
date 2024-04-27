import axios from "axios";

export const api = axios.create({
  baseURL: "https://scribblesync-api-2a1209728629.herokuapp.com",
  // baseURL: "http://localhost:3333"
})