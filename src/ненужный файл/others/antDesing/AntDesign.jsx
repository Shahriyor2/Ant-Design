import { Flex, Layout } from "antd";
import { SelfsBlock } from "../components/SelfsBlock";
import classes from "./antDesign/antDesign.module.scss";
const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//   textAlign: "center",
//   color: "#fff",
//   height: 64,
//   paddingInline: 48,
//   lineHeight: "64px",
//   backgroundColor: "#4096ff",
// };
const contentStyle = {
  //   textAlign: "center",
  //   minHeight: 120,
  //   lineHeight: "120px",
  //   color: "#fff",
  //   backgroundColor: "#0958d9",
  minHeight: "77.7vh",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
// const layoutStyle = {
// //   borderRadius: 8,
// //   overflow: "hidden",
// //   width: "calc(50% - 8px)",
// //   maxWidth: "calc(50% - 8px)",
// minHeight: '100vh'
// };

export const AntDesign = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout
      //   style={layoutStyle}
      >
        <Header className={classes["headerStyle"]}>Header</Header>
        <Content style={contentStyle}>
          <SelfsBlock />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  );
};
