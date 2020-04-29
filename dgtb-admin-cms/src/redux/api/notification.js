import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllNotification: (token, page, quantity) =>
    API.get(
      `notis/admin/get/notifications`,
      { params: { page, quantity } },
      headerAuth(token)
    ),

  createNotification: (token, formData) =>
    API.post(`notis/create/notification`, formData, headerAuth(token)),

  updateNotification: (token, formData) =>
    API.post(`notis/update/notification`, formData, headerAuth(token)),

  deleteNotification: (token, _id) =>
    API.delete(
      `notis/delete/notification`,
      { data: { _id } },
      headerAuth(token)
    )
};
