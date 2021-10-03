import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).access_token}`;
  }

  return req;
});


export const register = (state) => API.post(`/auth/register`, {...state });

export const login = (state) => API.post(`/auth/login`, {...state });
export const search = (search) => API.post(`/auth/search-profile`, {search});


export const fetchPost = (id) => API.get(`/posts/${id}`);

//export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const comment = (id, message) => API.post(`/posts/${id}/commentPost`, { message });
export const updateUser = (id, user) => API.patch(`/user/update/${id}`, user);
