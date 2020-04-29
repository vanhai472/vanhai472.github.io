import { API, convertObjectToQuery } from "./common";

export default {
	getAllMasterOption: (page, quantity, type, filters) =>
		API.get(
			`pages/masters?page=${page}&quantity=${quantity}&type=${type}&${convertObjectToQuery(
				filters
			)}`
		),
	getAllMasterCategory: () => API.get(`pages/masters/statistic/category`),
	getAllMasterService: (page, quantity) =>
		API.get(`pages/services`, { params: { page, quantity } }),
	getAllMasterLocation: () => API.get(`pages/masters/statistic/location`),
};
