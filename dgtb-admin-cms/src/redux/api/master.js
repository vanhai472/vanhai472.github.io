import { API, convertObjectToQuery } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllMaster: (token, page, quantity) =>
    API.get(
      `admin/get/masters`,
      { params: { page, quantity } },
      headerAuth(token)
    ),
  searchMaster: (token, page, quantity, filters) =>
    API.get(
      `admin/search/masters?page=${page}&quantity=${quantity}&${convertObjectToQuery(
        filters
      )}`
    ),

  activeStatusMaster: (token, _id) =>
    API.post(`admin/active/master`, { _id }, headerAuth(token)),

  InactiveStatusMaster: (token, _id) =>
    API.post(`admin/inactive/master`, { _id }, headerAuth(token)),

  deleteMaster: (token, _id) =>
    API.delete(
      `admin/delete/master`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),
  getMasterWithID: (token, _id) =>
    API.get(`admin/get/master`, { params: { _id } }, headerAuth(token)),

  createMaster: (token, formData) =>
    API.post(`admin/create/master`, formData, headerAuth(token)),

  updateMaster: (token, formData) =>
    API.post(`admin/update/master/infor`, formData, headerAuth(token)),

  changePasswordMaster: (token, newPass) =>
    API.post(`admin/update/password/master`, newPass, headerAuth(token)),

  contactMaster: (token, formData) =>
    API.post(`admin/update/master/contact`, formData, headerAuth(token)),

  uploadImageUser: (token, file) =>
    API.post(`uploads/master/image/avatar`, file, headerAuth(token)),

  confirmUploadImageUser: (token, confirmUpdateAvatar) =>
    API.post(
      `uploads/master/image/avatar/confirm`,
      confirmUpdateAvatar,
      headerAuth(token)
    ),

  createServiceMaster: (token, formData) =>
    API.post(`admin/create/master/fees`, formData, headerAuth(token)),

  updateServiceMaster: (token, formData) =>
    API.post(`admin/update/master/fees`, formData, headerAuth(token)),

  deleteServiceMaster: (token, formData) =>
    API.delete(
      `admin/delete/master/fees`,
      {
        data: formData
      },
      headerAuth(token)
    )
};
