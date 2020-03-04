import React from "react";
import moment from "moment";
import { Tag } from "antd";
import "moment/locale/vi";
import { DATEFORMAT } from "../../constants";

moment().locale("vi");

export const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    width: "4%",
    align: "center",
    render: (text, record, index) => {
      return <span key={index}>{index + 1}</span>;
    }
  },
  {
    title: "Bảo hành",
    dataIndex: "is_warranty",
    key: "is_warranty",
    align: "center",
    render: (text, record, index) => {
      return (
        <span key={index}>
          {" "}
          <Tag color={record.is_warranty === 1 ? "gold" : "#f50"}>
            {record.is_warranty === 1 ? "Có" : "Không"}
          </Tag>
        </span>
      );
    }
  },
  {
    title: "Loại",
    dataIndex: "type",
    key: "type",
    align: "center"
  },

  {
    title: "User ID",
    dataIndex: "userid",
    key: "userid",
    align: "center"
  },
  {
    title: "Provider",
    dataIndex: "provider",
    key: "provider",
    align: "center",
    render: (text, record, index) => {
      return (
        <span key={index}>
          {" "}
          <a href={record.link} target={"_blank"}>
            <Tag
              color={record.provider === "instagram" ? "#87d068" : "#2db7f5"}
              style={{ cursor: "pointer" }}
            >
              {record.provider}
            </Tag>
          </a>
        </span>
      );
    }
  },
  {
    title: "Object ID",
    dataIndex: "object_id",
    key: "object_id",
    align: "center",
    render: (text, record, index) => {
      return (
        <span key={index}>
          <a href={record.link} target={"_blank"}>
            {record.object_id}
          </a>
        </span>
      );
    }
  },
  {
    title: "Khởi tạo",
    dataIndex: "created_at",
    key: "created_at",
    align: "center",
    render: (text, record, index) => {
      return <span key={index}>{moment(record.created_at).fromNow()}</span>;
    }
  },
  {
    title: "Hết hạn",
    dataIndex: "time_expired",
    key: "time_expired",
    align: "center",
    render: (text, record, index) => {
      return (
        <span key={index}>
          {moment(record.time_expired).format(DATEFORMAT)}
        </span>
      );
    }
  },
  {
    title: "Giá",
    dataIndex: "prices",
    key: "prices",
    align: "center"
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    key: "quantity",
    align: "center"
  },
  {
    title: "Trạng thái",
    dataIndex: "is_removed",
    key: "is_removed",
    align: "center",
    render: (text, record, index) => {
      return (
        <span key={index}>
          {" "}
          <Tag color={record.is_removed === 1 ? "red" : "#52c41a"}>
            {record.is_removed === 1 ? "Huỷ đơn" : "Đang chạy"}
          </Tag>
        </span>
      );
    }
  }
];
