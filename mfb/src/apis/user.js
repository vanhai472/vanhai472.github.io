import axiosService from "../services/axiosService";
import { API_ENDPOINT } from "../constants";

export const getUserActivity = params => {
  const { token, type, provider, pageSize, currentpage } = params;
  let paramurl = "";
  if (token) {
    paramurl += `?api_token=${token}&`;
  }
  if (type) {
    paramurl += `type=${type}&`;
  }
  if (provider) {
    paramurl += `provider=${provider}&`;
  }
  if (currentpage) {
    paramurl += `page=${currentpage}&`;
  }
  if (pageSize) {
    paramurl += `page_size=${pageSize}`;
  }
  return axiosService.get(`${API_ENDPOINT}/get-order-history${paramurl}`);
};

export const getTypeServices = params => {
  const { token } = params;
  let paramurl = "";
  if (token) {
    paramurl += `?api_token=${token}&`;
  }
  return axiosService.get(`${API_ENDPOINT}/get-type-services${paramurl}`);
};

export const getInfo = params => {
  const { token } = params;
  let paramurl = "";
  if (token) {
    paramurl += `?api_token=${token}&`;
  }
  return axiosService.get(`${API_ENDPOINT}/get-info${paramurl}`);
};

export const getBalance = params => {
  const { token } = params;
  let paramurl = "";
  if (token) {
    paramurl += `?api_token=${token}&`;
  }
  return axiosService.get(`${API_ENDPOINT}/get-balance${paramurl}`);
};

export const advertisingCreateFacebook = data => {
  return axiosService.post(`${API_ENDPOINT}/advertising/create`, data);
};

export const advertisingCreateInstagram = data => {
  return axiosService.post(
    `${API_ENDPOINT}/advertising/create-buff-instagram`,
    data
  );
};
