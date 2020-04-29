import { API, convertObjectToQuery } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllUser: (token, page, quantity) =>
    API.get(
      `admin/get/users`,
      { params: { page, quantity } },
      headerAuth(token)
    ),

  searchUser: (token, page, quantity, filters) =>
    API.get(
      `admin/search/users?page=${page}&quantity=${quantity}&${convertObjectToQuery(
        filters
      )}`
    ),

  activeStatus: (token, _id) =>
    API.post(`admin/active/user`, { _id }, headerAuth(token)),

  InactiveStatus: (token, _id) =>
    API.post(`admin/inactive/user`, { _id }, headerAuth(token)),

  deleteUser: (token, _id) =>
    API.delete(
      `admin/delete/user`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),
  getUserWithID: (token, _id) =>
    API.get(`admin/get/user`, { params: { _id } }, headerAuth(token)),

  createUser: (token, formData) =>
    API.post(`admin/create/user`, formData, headerAuth(token)),

  updateUser: (token, formData) =>
    API.post(`admin/update/user`, formData, headerAuth(token)),

  dellImgUser: (token, _id, role) =>
    API.post(
      `uploads/admin/remove/image/avatar`,
      { _id, role },
      headerAuth(token)
    ),

  changePasswordUser: (token, newPass) =>
    API.post(`admin/update/password/user`, newPass, headerAuth(token)),

  uploadImageUser: (token, file) =>
    API.post(`uploads/user/image/avatar`, file, headerAuth(token)),

  confirmUploadImageUser: (token, confirmUpdateAvatar) =>
    API.post(
      `uploads/user/image/avatar/confirm`,
      confirmUpdateAvatar,
      headerAuth(token)
    )
};
