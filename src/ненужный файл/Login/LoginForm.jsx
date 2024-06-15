import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "./loginform.module.scss";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const LoginForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(`Input name: ${name}, Input value: ${value}`);
    setUserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const responce = await axios.post(
        "https://fakestoreapi.com/auth/login",
        {
          username: userData.username,
          password: userData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = responce.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("authenticated", false);
      if (token) {
        navigate("/user");
        localStorage.setItem("authenticated", true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Form
      className={classes.form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className={classes.formFragment}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
