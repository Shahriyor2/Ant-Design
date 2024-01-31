import { useState } from "react";
import { _Table } from "../components/Table";
import { Row, Col, Table, Slider, Typography } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

export const Osnova = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [rows, setRows] = useState(5);
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                  <Link to="/nav1">
                    <UserOutlined />
                  </Link>
                ),
                label: "nav 1",
              },
              {
                key: "2",
                icon: (
                  <Link to="/nav2">
                    <VideoCameraOutlined />{" "}
                  </Link>
                ),
                label: "nav 2",
              },
              {
                key: "3",
                icon: (
                  <Link to="/nav3">
                    <UploadOutlined />
                  </Link>
                ),
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Header style={{ padding: 0, background: "none" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <Typography.Title level={2}>
                Количество погоды на старинцу:
              </Typography.Title>
              <Slider min={1} max={12} defaultValue={rows} onChange={setRows} />
              <_Table rows={rows} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};
