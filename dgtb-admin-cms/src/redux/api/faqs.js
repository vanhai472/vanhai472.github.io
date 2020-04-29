import { API } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllFaq: (token, page, quantity) =>
    API.get(
      `admin/get/faqs`,
      { params: { page, quantity } },
      headerAuth(token)
    ),

  createFaq: (token, formData) =>
    API.post(`admin/create/faq`, formData, headerAuth(token)),

  updateFaq: (token, formData) =>
    API.post(`admin/update/faq`, formData, headerAuth(token)),

  deleteFaq: (token, _id) =>
    API.delete(
      `admin/delete/faq`,
      {
        data: { _id }
      },
      headerAuth(token)
    ),
  getFaqWithID: (token, _id) =>
    API.get(`admin/get/faq`, { params: { _id } }, headerAuth(token))
};
