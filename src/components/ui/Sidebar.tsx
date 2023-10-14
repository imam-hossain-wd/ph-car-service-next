"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "../constatnts/sidebarItems";
import Image from "next/image";
import { getUserInfo } from "@/services/auth.service";


const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {role} = getUserInfo() as any;
  console.log(role, 'user role');
 
  return (
    <Sider
    className="bg-white text-black"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
      className=" flex justify-center font-bold mb-2 py-3"
      >
       <Image src="https://i.ibb.co/x1QL0zX/dashboard-logo.jpg" width={60} height={55} alt="dashboard logo" />
      </div>
      <Menu
        // theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;