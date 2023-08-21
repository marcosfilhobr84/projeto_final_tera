import axios from "axios";

const api = axios.create({
  baseURL: "https://apitera-lealmax.vercel.app/api/",
});

export default api;
