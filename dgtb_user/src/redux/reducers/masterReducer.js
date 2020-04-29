import { GET_ALL_MASTER_OPTION } from "../actions/constants";
import Faker from "faker";
Faker.locale = "vi";

const init = {
	masterAll: [],
	totalPagination: 0,
	contentCardMaster: [],
};
for (let html = 0; html < 10; html++) {
	init.masterAll.push({
		tellerFloat: [
			{
				name: Faker.name.findName(),
				src: "/icon/Service/3.png",
				star: Math.floor(Math.random() * 5),
				newMaster: Math.random(),
				range: Math.floor(Math.random() * 10),
				adress: Faker.address.streetAddress("###/###"),
				rate: Math.random() * 5,
			},
		],
	});
}

init.contentCardMaster.push({
	master: {
		name: Faker.name.findName(),
		thumbnail: Faker.internet.avatar(),
		averageStar: 3.5,
	},
});

export default (state = init, { type, payload }) => {
	switch (type) {
		case GET_ALL_MASTER_OPTION: {
			console.log("payload", payload);
			return {
				...state,
			};
		}
		default:
			return { ...state };
	}
};
