import { Layout, Menu } from "antd";
import React, { useMemo, useState } from "react";
import { FirstTable } from "./Tables/FirstTable";
import { SecondTable } from "./Tables/SecondTable";
const { Header, Content, Footer } = Layout;

function App() {
  const items = [
    {
      key: "1",
      label: "Первая таблица",
    },
    {
      key: "2",
      label: "Вторая таблица",
    },
  ];

  const [content, setContent] = useState("1");

  const component = useMemo(() => {
    switch (content) {
      case "1":
        return <FirstTable />;
      case "2":
        return <SecondTable />;
      default:
        return;
    }
  }, [content]);

  const handleOnChange = (e) => {
    const { key } = e;
    setContent(key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          height: "64px",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          onClick={handleOnChange}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {component}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Вставишь текст ©{new Date().getFullYear()}, если считаешь нужным
      </Footer>
    </Layout>
  );
}

export { App };
