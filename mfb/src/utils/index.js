import { notification } from "antd";

export const stringMaxlength = (input, length) => {
  if (input && typeof input === "string" && input.length > length) {
    const str = "...";
    return input.substr(0, length) + str;
  }
  return input;
};

export const openNotification = (
  type,
  message,
  description,
  placement,
  style
) => {
  notification[type]({
    message,
    description,
    placement,
    style
  });
};

export const findPostsId = url => {
  if (url.indexOf("fbid") > 0) {
    let found;
    let str = url.substring(url.indexOf("?") + 1, url.length);
    str.split("&").forEach(function(item) {
      if ("fbid" === item.split("=")[0]) {
        found = item.split("=")[1];
      }
    });
    return found;
  }
  let findQ = url.indexOf("?");
  let str = url;
  if (findQ > 0) {
    str = str.substring(0, findQ);
    if (url.indexOf("/?") > 0) {
      str = str.substring(0, url.indexOf("/?"));
    }
  }
  let found;
  str.split("/").forEach(function(item) {
    if (!Number.isNaN(item)) {
      found = item;
    }
  });
  return found;
};

export const findInsPID = url => {
  let findQ = url.indexOf("?");
  let str = url;
  let found;
  if (findQ > 0) {
    str = str.substring(0, findQ);
  }
  if (str.indexOf("instagram.com/p/") >= 0) {
    let data = str.substring(str.indexOf("instagram.com/") + 16, str.length);
    found = data.split("/")[0];
  }
  return found;
};

export default null;
