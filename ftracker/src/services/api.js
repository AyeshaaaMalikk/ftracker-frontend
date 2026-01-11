import axios from "axios";

const API = axios.create({
  baseURL: "https://ftracker-ecru.vercel.app/api",
});

export const getTransactions = () => API.get("/transactions");
export const addTransaction = (data) => API.post("/transactions", data);
