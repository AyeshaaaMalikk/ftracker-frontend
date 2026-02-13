import axios from "axios";

const API = axios.create({
  baseURL: "https://ftracker-backend.vercel.app/api",
});

export const getTransactions = () => API.get("/transactions");

export const addTransaction = (data) =>
  API.post("/transactions", data);

export const deleteTransaction = (id) =>
  API.delete(`/transactions/${id}`);
