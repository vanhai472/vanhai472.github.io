import { GET_ALL_NEWS } from "./constants";

export const getAllNews = (...args) => ({
	type: GET_ALL_NEWS,
	args,
});
