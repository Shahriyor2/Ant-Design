import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export const LogIn = ({ setAvtorizated }) => {
  const [loadings, setLoadings] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState();

  const navigate = useNavigate();

  const handleOnChange = () => {};

  const simulateLoginRequest = async (user, pass) => {
    try {
      const response = await axios.post(
        "https://65af1dde2f26c3f2139a2a29.mockapi.io/Temperature",
        { user, password: pass }
      );
      console.log(response);
      const { data } = response;

      if (data && data.user && data.password) {
        return new Promise((resolve) => {
          Promise.resolve().then(() => {
            if (user === data.user && pass === data.password) {
              resolve({ success: true });
            } else {
              resolve({ success: false });
            }
          });
        });
      } else {
        console.log("Error");
        return { succsess: false };
      }
    } catch (error) {
      console.log("Error during login request: ", error);
      return { success: false };
    }
  };

  const handleNavigate = () => {
    navigate("/user", { replace: false });
  };

  const handleLogin = async () => {
    try {
      setLoadings(true);

      const responce = await simulateLoginRequest(userName, password);
      if (responce.success) {
        setAvtorizated(true);
        handleNavigate();
      } else {
        alert("Неверные учетные данные");
      }
    } finally {
      setLoadings(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="userName">
        <h1 style={{ marginBottom: "5px" }}>Вход</h1>
        <Input
          value={userName}
          style={{ width: "220px", marginBottom: "35px" }}
          placeholder="Номер телефона/email"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="password">
        <h1 style={{ marginBottom: "5px" }}>Пароль</h1>
        <Input
          type="password"
          value={password}
          style={{ width: "220px", marginBottom: "20px" }}
          placeholder="Пароль..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        disabled={loadings}
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loadings}
        onClick={handleLogin}
      >
        {loadings ? "Login..." : "Зарегестрироваться "}
      </Button>
    </div>
  );
};
