import { API, convertObjectToQuery } from "./common";

const headerAuth = token => {
  return { headers: { Authorization: token } };
};

export default {
  getAllImageLocation: (token, page, quantity) =>
    API.get(
      `admin/get/locations`,
      { params: { page, quantity } },
      headerAuth(token)
    )
};
