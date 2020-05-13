const MasterPage = [
  {
    key: "/",
    label: "Danh sách đặt lịch",
    children: [
      {
        key: "/",
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
    label: "Nhận xét về bạn",
  },
  {
    key: "/dashboard",
    label: "Thống kê",
    children: [
      {
        key: "/dashboard/withdrawal",
      },
      {
        key: "/deposite",
      },
    ],
  },
  {
    key: "/profile",
    label: "Trang cá nhân",
    children: [
      {
        key: "/profile",
      },
      {
        key: "/photo-library",
      },
      {
        key: "/meeting-scheduling",
      },
    ],
  },
];

export { MasterPage };
