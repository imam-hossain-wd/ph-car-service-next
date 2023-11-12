"use client";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
  Drawer,
} from "antd";
import Link from "next/link";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { IsUserLoggedIn, removeUserInfo } from "@/services/auth.service";
import Image from "next/image";
import { authKey } from "@/constants/storageKey";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const loggedUser = IsUserLoggedIn();
  const handleLogOut = () => {
    removeUserInfo(authKey);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          {loggedUser ? (
            <div className="flex flex-col">
              <Button type="text">
                <Link href="/profile"> Profile</Link>
              </Button>
              <Button onClick={handleLogOut} danger type="text">
                Log out
              </Button>
            </div>
          ) : (
            <Button type="text">
              <Link href="/login"> Login</Link>
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout className="layout ">
      <Header className="flex justify-between items-center bg-white text-black">
        <div className="-ml-16 lg:-ml-10">
          <Link className="flex justify-center items-center" href="/">
            <Image
              className="w-12 h-12 ml-16 "
              src="https://i.ibb.co/HxLD1kn/cardev-logo.jpg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <h1 className="text-black flex  ml-3">
              Car <span className="text-red-500">Dev</span>
            </h1>
          </Link>
        </div>
        <div className="-ml-[99999px] lg:ml-0 ">
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/service">Services</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Dropdown menu={{ items }}>
                <a>
                  <Space wrap size={20}>
                    <Avatar
                      className="text-[14px]"
                      size="large"
                      icon={<UserOutlined />}
                    />
                  </Space>
                </a>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
        <Button className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          title={
            <div className="ml-4">
              <Dropdown menu={{ items }}>
                <a>
                  <Space wrap size={16}>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </Space>
                </a>
              </Dropdown>
            </div>
          }
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/service">Services</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
