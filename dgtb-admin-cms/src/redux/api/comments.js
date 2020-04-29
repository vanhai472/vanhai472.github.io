import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllComments: (token, page, quantity, _id) =>
    API.get(
      `admin/get/comments`,
      { params: { page, quantity, _id } },
      headerAuth(token)
    ),
  createcomments: (token, formData) =>
    API.post(`admin/add/comments`, formData, headerAuth(token)),

  updatecomments: (token, formData) =>
    API.post(`admin/update/comments`, formData, headerAuth(token)),

  deletecomments: (token, _id) =>
    API.delete(
      `admin/delete/comment`,
      {
        data: { _id }
      },
      headerAuth(token)
    )
};
