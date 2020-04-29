import axios from "axios";
import * as config from "../constants/apiCommentMaster";

export default function call_api_comment(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${config.api_comment}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log("err", err);
  });
}
