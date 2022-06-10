import React, { useState } from "react";
import { Menu, Avatar, Space, Button, Dropdown } from "antd";
import {
  CaretDownOutlined,
  MailOutlined,
  SettingOutlined,
  SkinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.less";
import LoginModal from "../LoginModal";
const menu = (
  <Menu>
    <Menu.Item key="1">
      <SkinOutlined style={{ marginRight: 10 }} />
      换肤
    </Menu.Item>
    <Menu.Item key="2">
      <SettingOutlined style={{ marginRight: 10 }} />
      设置
    </Menu.Item>
    <Menu.Item key="3">
      <MailOutlined style={{ marginRight: 10 }} />
      消息
    </Menu.Item>
  </Menu>
);
export default function UserDropDown() {
  const [isLogin, setIsLogin] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <Space>
      <Dropdown overlay={menu} trigger={["click", "hover"]}>
        <>
          <Avatar
            style={{ marginRight: 10, fontSize: 20 }}
            icon={isLogin ? "" : <UserOutlined />}
            size={30}
          />
          <a onClick={() => setVisible(true)}>{isLogin ? "name" : "未登陆"}</a>
          <CaretDownOutlined style={{ marginLeft: 5, color: "#f8baba" }} />
          <LoginModal visible={visible} handleClose={() => setVisible(false)} />
        </>
      </Dropdown>
      <Button icon={<SkinOutlined />} type="link" />
      <Button icon={<SettingOutlined />} type="link" />
      <Button icon={<MailOutlined />} type="link" />
    </Space>
  );
}
