import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllCategory: (token, page, quantity) =>
    API.get(
      `admin/get/categories`,
      { params: { page, quantity } },
      headerAuth(token)
    ),

  createCategory: (token, formData) =>
    API.post(`admin/create/category`, formData, headerAuth(token)),

  updateCategory: (token, formData) =>
    API.post(`admin/update/category`, formData, headerAuth(token)),

  deleteCategory: (token, _id) =>
    API.delete(
      `admin/delete/category`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),
  getCategoryWithID: (token, _id) =>
    API.get(`admin/get/category`, { params: { _id } }, headerAuth(token))
};
