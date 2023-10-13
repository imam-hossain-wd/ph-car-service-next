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
} from "antd";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { IsUserLoggedIn } from "@/services/auth.service";

const { Header } = Layout;

const Navbar = () => {

 const loggedUser = IsUserLoggedIn();

  const handleLogOut = () => {
    console.log("logout");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          { loggedUser ?  <div className="flex flex-col">
            <Button  type="text">
          <Link href="/profile"> Profile</Link>
        </Button>
        <Button onClick={handleLogOut} danger type="text">
          Log out
        </Button>
          </div>   : 
        <Button  danger type="text">
          Login
        </Button>
       
        }
        </div>
      ),
    },
   
  ];

  return (
    <Layout className="layout ">
      <Header className="flex justify-between items-center bg-white text-black">
        <div>
          <Link className="text-3xl text-black font-bold" href="/">
            {" "}
            Car Service
          </Link>
        </div>
        <div className="flex justify-center items-center">
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
          </Menu>
          <Dropdown menu={{ items }}>
            <a>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
