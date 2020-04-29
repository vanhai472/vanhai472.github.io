import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};
export default {
  getAllComplaints: (token, page, quantity) =>
    API.get(
      `admin/get/feedbacks`,
      { params: { page, quantity } },
      headerAuth(token)
    ),

  createComplaints: (token, formData) =>
    API.post(`admin/add/feedbacks`, formData, headerAuth(token)),

  updateComplaints: (token, formData) =>
    API.post(`admin/update/feedbacks`, formData, headerAuth(token)),

  deleteComplaints: (token, _id) =>
    API.delete(
      `admin/delete/feedback`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),

  getComplaintsWithID: (token, _id) =>
    API.get(`admin/get/feedback`, { params: { _id } }, headerAuth(token)),

  answerComplaintsUser: (token, formAnswer) =>
    API.post(`admin/answer/feedback`, formAnswer, headerAuth(token))
};
