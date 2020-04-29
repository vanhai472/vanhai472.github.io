import { SAVE_ALL_RATE_OPTION } from "../actions/constants";
const init = {
	allRate: [],
	totalPage: 0,
	totalData: 0,
};
// for (let index = 0; index <= 11; index++) {
//   init.allRate.push({
//     user: [
//       {
//         infor: {
//           thumbnail: Faker.internet.avatar()
//         },
//         name: Faker.name.findName()
//       }
//     ],
//     master: [
//       {
//         infor: {
//           thumbnail: Faker.internet.avatar()
//         },
//         name: Faker.name.findName()
//       }
//     ],
//     booked: Math.round(Math.random()),
//     avgStar: Math.floor(Math.random() * 5) + 1,
//     content:
//       "Thằng thầy này đã ngu lại còn toàn bói sai xong lấy giá thì đặt. Mình khuyên các bạn không nên đi xem của thằng này tốn thời gian và bực mình",
//     createdAt: "02/04/2020"
//   });
// }

export default (state = init, { type, payload }) => {
	switch (type) {
		case SAVE_ALL_RATE_OPTION: {
			return {
				...state,
				allRate: payload.results,
				totalPage: payload.totalPage,
				totalData: payload.totalPage * payload.quantity,
			};
		}
		default:
			return state;
	}
};
