import { API } from "./common";

export default {
  verifyToken: (token) =>
    API.get("auths/token/verify", {}, { headers: { Authorization: token } }),
  login: (formData) => API.post("auths/client/loginEmail", formData),
};
