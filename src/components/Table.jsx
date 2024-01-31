import { Table, Typography } from "antd";
import { pizzas } from "../data";
// import {Typography} from "antd/es/typography/Typography";

const columns = [
  {
    title: "Image",
    dataIndex: "img",
    render: (img) => (
      <img src={img} alt="Weather" style={{ width: "24px", height: "24px" }} />
    ),
  },
  {
    title: "Gradus",
    dataIndex: "gradus",
    sorter: (a, b) => a.gradus - b.gradus,
  },
  {
    title: "Weak Day",
    dataIndex: "weakDay",
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
  },
  {
    title: "Day",
    dataIndex: "day",
  },
  {
    title: "Navigation",
    dataIndex: "navigationImg",
    render: (navigationImg) => (
      <img
        src={navigationImg}
        alt="Navigation"
        style={{ width: "24px", height: "24px" }}
      />
    ),
  },
  {
    title: "Time",
    dataIndex: "time",
  },
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Shahriyor",
        value: "Shahriyor",
      },
      {
        text: "Farid",
        value: "Farid",
      },
      {
        text: "Ardasher",
        value: "Ardasher",
      },
    ],
    onFilter: (value, item) => item.name.includes(value),
  },
];

const dataSource = pizzas.map((item) => ({ ...item, key: item.id }));

export const _Table = ({ rows }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        pageSize: rows,
        // pageSize: 5,
        // pageSizeChanger: true,
        // pageSizeOptions: [5, 10, 15, 20],
      }}
    />
  );
};
