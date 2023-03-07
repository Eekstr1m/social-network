import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f",
  },
});

export const API = {
  async getUsers(activePage, pageSize) {
    const response = await instance.get(
      `/users?page=${activePage}&count=${pageSize}`
    );
    return response.data;
  },
  async getAuthMe() {
    const response = await instance.get(`/auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe) {
    const response = await instance.post(`/auth/login`, {
      email,
      password,
      rememberMe,
    });
    return response.data;
  },
  async logout() {
    const response = await instance.delete(`/auth/login`);
    return response.data;
  },
  async getProfile(id) {
    const response = await instance.get(`/profile/${id}`);
    return response.data;
  },
  async deleteFollow(id) {
    const response = await instance.delete(`/follow/${id}`);
    return response.data;
  },
  async postFollow(id) {
    const response = await instance.post(`/follow/${id}`);
    return response.data;
  },
  async getStatus(id) {
    const response = await instance.get(`/profile/status/${id}`);
    return response.data;
  },
  async setStatus(obj) {
    const response = await instance.put(`/profile/status`, { status: obj });
    return response.data;
  },
  async savePhoto(img) {
    let formData = new FormData();
    formData.append("image", img);

    const response = await instance.put(`/profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};
