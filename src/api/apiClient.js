import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchProducts = async (page = 1, limit = 10) => {
  const response = await apiClient.get(`/products?limit=${limit}&page=${page}`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};
