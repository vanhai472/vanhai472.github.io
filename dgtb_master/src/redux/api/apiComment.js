import axios from "axios";
import configs from "../constants/configs";

export default function call_api_comment(endpoint, method = "GET", body) {
  console.log(configs);
  return axios({
    method: method,
    url: `${configs.endPointComment}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log("err", err);
  });
}
