import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const getPosts = () =>
  axios.get(`${API_BASE}/posts`).then((res) => res.data);
export const getPostById = (id) =>
  axios.get(`${API_BASE}/posts/${id}`).then((res) => res.data);
