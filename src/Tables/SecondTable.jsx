import React, { useState } from "react";
import secondJson from "../json/secondIndexJson.json";
import { Form, Table, Tag } from "antd";

function SecondTable() {
  const { data } = secondJson;
  const personData = data[0]?.user;

  const [dataItem, setDataItem] = useState(data);
  const [personDataItem, setPersonDataItem] = useState(personData);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: 110,
      editable: true,
      align: "center",
    },
    {
      title: "name",
      dataIndex: "name",
      width: 150,
      editable: true,
      align: "center",
    },
  ];

  return (
    <Form component={false}>
      <Table
        bordered
        dataSource={dataItem}
        columns={columns}
        rowKey="id"
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
}

export { SecondTable };
