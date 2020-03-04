import axiosService from "../services/axiosService";
import { API_ENDPOINT } from "../constants";

// const url = "users";

export const login = data => {
  return axiosService.post(`${API_ENDPOINT}/login`, data);
};

export const Signup = data => {
  return axiosService.post(`${API_ENDPOINT}/signup`, data);
};
export const forgot = data => {
  return axiosService.post(`${API_ENDPOINT}/forgot`, data);
};
export const resetPassword = data => {
  return axiosService.post(`${API_ENDPOINT}/reset-password`, data);
};
export const changePassword = data => {
  return axiosService.post(`${API_ENDPOINT}/change-password`, data);
};
export const changeInfo = data => {
  return axiosService.post(`${API_ENDPOINT}/change-info`, data);
};
