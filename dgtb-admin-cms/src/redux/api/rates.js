import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};
export default {
  getAllrates: (token, page, quantity, _id) =>
    API.get(
      `admin/get/rates`,
      { params: { page, quantity, _id } },
      headerAuth(token)
    ),
  createrates: (token, formData) =>
    API.post(`admin/add/rates`, formData, headerAuth(token)),

  updaterates: (token, formData) =>
    API.post(`admin/update/rates`, formData, headerAuth(token)),

  deleterates: (token, _id) =>
    API.delete(
      `admin/delete/rate`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),
  actGetCommentWithIdRate: (token, quantity, page, _id) =>
    API.get(
      `admin/get/rates`,
      { params: { _id, quantity, page } },
      headerAuth(token)
    )
};
