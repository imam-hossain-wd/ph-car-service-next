"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Avatar, Button, Drawer, Dropdown, MenuProps, Space } from "antd";
import {
  IsUserLoggedIn,
  getUserInfo,
  removeUserInfo,
} from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";




const Navbar = () => {

  const [loggedUser, setLoggedUser] = useState(false);
  const [role, setRole] = useState(null);
  
  useEffect(() => {
    const loggedUserInfo = IsUserLoggedIn();
    const user: any = getUserInfo();
    if (loggedUserInfo) {
      setLoggedUser(true);
    }
    if (user) {
      setRole(user.role);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedUser, role]);
  // console.log(loggedUser);
  // console.log(role);

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
                <Link href={`/${role && role}/profile`}> Profile</Link>
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


  const navMenuItems = (
    <li className="list-none text-[16px] text-gray-200 flex flex-col justify-center items-center lg:flex-row">
      <Link
        className="text-gray-800 mt-2 lg:mt-0 lg:mr-3 no-underline "
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-800 mt-2 lg:mt-0 lg:mr-3 no-underline "
        href="/service"
      >
        Service
      </Link>
      <Link
        className="text-gray-800 no-underline  mt-2 lg:mt-0 lg:mr-3    "
        href="/contact"
      >
        Contact{" "}
      </Link>
      <Link
        className="text-gray-800 no-underline mt-2 lg:mt-0 lg:mr-3"
        href="/about"
      >
        About
      </Link>
      <Link
        className="text-gray-800 no-underline mt-2 lg:mt-0 lg:mr-3  "
        href="/booking"
      >
        Booking
      </Link>
    </li>
  );

  return (
    <section className="relative z-50 mb-32 w-full">
      <header className="fixed top-0 left-0 right-0  bg-white shadow-md mb-2">
        <nav className="flex justify-between p-3 w-[90%] mx-auto">
          <div className="flex items-center">
            <Button className="lg:hidden mr-3 -ml-4 " onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Image
              className="w-10 h-10 rounded-full"
              src="https://i.ibb.co/863c3CY/car-service-logo.jpg'"
              width={500}
              height={500}
              alt="car service logo"
            />
            <h3 className="text-3xl font-bold text-black p-1">
              Car<span className="text-[#f93e76]">Dev</span>
            </h3>
          </div>
          <div className="flex items-center">
            <ul className="hidden lg:flex">{navMenuItems}</ul>
            <Dropdown menu={{ items }} className="">
              <a className="-ml-10 lg:ml-2">
                <Space wrap size={24}>
                  <Avatar
                    className="text-[20px] "
                    size="large"
                    icon={<UserOutlined />}
                  />
                </Space>
              </a>
            </Dropdown>
          </div>
        </nav>
        <nav>
          <Drawer
            placement="left"
            title={
              <CloseOutlined
                className="ml-72 ml-5 hover:text-red-500 text-lg transition-all delay-300"
                onClick={() => setOpen(!open)}
              />
            }
            open={open}
            closable={false}
          >
            {navMenuItems}
          </Drawer>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
