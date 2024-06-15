import { EditFilled } from "@ant-design/icons";
import { Button, Form, Table, Tag, Tooltip, message } from "antd";
import React, { useState } from "react";
import firstJson from "../json/firstIndexJson.json";
import { formatDate } from "../utils/formatDate";
import Title from "antd/es/typography/Title";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

function FirstTable() {
  const [form] = Form.useForm();

  const { data } = firstJson;

  const [dataState, setDataState] = useState(data);

  // useEffect(() => {
  //   const { data } = axios.get("твой url");
  //   setDataState(data);
  // }, []);

  const hadleStatusOnChange = (dataObj) => {
    const newData = [...dataState];
    const findIdData = newData.findIndex((item) => item.id === dataObj.id);
    if (findIdData > -1) {
      newData[findIdData] = {
        ...newData[findIdData],
        active: !newData[findIdData].active,
      };
      message.success("Статус успешно изменён!");

      setTimeout(() => {
        setDataState(newData);
      }, 550);
    }
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: 110,
      editable: true,
      align: "center",
    },
    {
      title: "Активный",
      dataIndex: "active",
      width: 110,
      editable: true,
      align: "center",
      render: (active) => (
        <Tag color={active ? "success" : "error"}>{active.toString()}</Tag>
      ),
    },
    {
      title: "name",
      dataIndex: "name",
      width: 150,
      editable: true,
      align: "center",
    },
    {
      title: "Описание",
      dataIndex: "description",
      width: "25%",
      editable: true,
      align: "center",
    },
    {
      title: "image",
      dataIndex: "image",
      width: 110,
      editable: true,
      align: "center",
      render: (image) => {
        return (
          <Link href={image} target="_blank">
            Сылка
          </Link>
        );
      },
    },
    {
      title: "price",
      dataIndex: "price",
      width: 130,
      editable: true,
      align: "center",
    },
    {
      title: "Дата создания",
      dataIndex: "created_at",
      width: 250,
      editable: true,
      align: "center",
      render: (created_at) => formatDate(created_at),
    },
    {
      title: "Дата изменения",
      dataIndex: "updated_at",
      width: 250,
      editable: true,
      align: "center",
      render: (updated_at) => formatDate(updated_at),
    },
    {
      title: "operation",
      align: "center",
      render: (obj) => {
        return (
          <Tooltip title="Сменить статус">
            <Button
              icon={<EditFilled />}
              onClick={() => hadleStatusOnChange(obj)}
            />
          </Tooltip>
        );
      },
    },
  ];

  return (
    <Form form={form} component={false}>
      <Title align="center" style={{ marginBottom: "20px" }}>
        Можешь вставить текст на свое усмотрение
      </Title>
      <Table
        bordered
        dataSource={dataState}
        columns={columns}
        rowKey="id"
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
}
export { FirstTable };
