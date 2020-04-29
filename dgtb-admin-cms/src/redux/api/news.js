import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllNew: (token, page, quantity) =>
    API.get(
      `admin/get/news`,
      { params: { page, quantity } },
      headerAuth(token)
    ),

  createNew: (token, formData) =>
    API.post(`admin/create/news`, formData, headerAuth(token)),

  updateNew: (token, formData) =>
    API.post(`admin/update/news`, formData, headerAuth(token)),

  deleteNew: (token, _id) =>
    API.delete(
      `admin/delete/news`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),

  getNewWithID: (token, _id) =>
    API.get(`admin/get/news/detail`, { params: { _id } }, headerAuth(token)),

  uploadImageNew: (token, file) =>
    API.post(`uploads/admin/image/banner`, file, headerAuth(token)),

  confirmUploadImageBannerNew: (token, confirmUploadImageBannerNew) =>
    API.post(
      `admin/update/banner`,
      confirmUploadImageBannerNew,
      headerAuth(token)
    )
};
