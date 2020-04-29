const HomePage = [
	{
		key: "/",
		label: "Khám phá",
	},
	{
		key: "/incoming",
		label: "Danh sách đặt lịch",
	},
];

const UserPage = [
	{
		key: "/profile",
		label: "Trang cá nhân",
		children: [
			{
				key: "/photo",
			},
		],
	},

	{
		key: "/incoming",
		label: "Danh sách đặt lịch",
		children: [
			{
				key: "/incoming",
			},
			{
				key: "/payment",
			},
			{
				key: "/pending",
			},
			{
				key: "/history",
			},
			{
				key: "/denied",
			},
		],
	},

	{
		key: "/favourite",
		label: "Yêu thích",
	},
];

const MasterPage = [
	{
		key: "/master/incoming",
		label: "Danh sách đặt lịch",
		children: [
			{
				key: "/master/incoming",
			},
			{
				key: "/master/payment",
			},
			{
				key: "/master/pending",
			},
			{
				key: "/master/history",
			},
			{
				key: "/master/denied",
			},
		],
	},
	{
		key: "/favourite",
		label: "Nhận xét về bạn",
	},
	{
		key: "/master/dashboard",
		label: "Thống kê",
		children: [
			{
				key: "/master/dashboard/withdrawal",
			},
			{
				key: "/master/deposite",
			},
		],
	},
	{
		key: "/master/profile",
		label: "Trang cá nhân",
	},
];

export { HomePage, UserPage, MasterPage };
