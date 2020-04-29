import { API, convertObjectToQuery } from "./common";

export default {
  getAllRateOption: (page, quantity, type, filters) =>
    API.get(
      `pages/toprate?page=${page}&quantity=${quantity}&type=${type}&${convertObjectToQuery(
        filters
      )}`
    ),
};
