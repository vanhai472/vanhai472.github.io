import { API, convertObjectToQuery } from "./common";

export default {
	getAllNews: (page, quantity) =>
		API.get(`pages/news?page=${page}&quantity=${quantity}`),
};
