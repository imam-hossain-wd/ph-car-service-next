import type { MenuProps } from "antd";
import {
  TableOutlined,
  ScheduleOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/profile`}>Profile</Link>,
      key: `/${role}/profile`,
      icon: <UserOutlined />
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-users`}>Manage Users</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-bookings`}>Manage Booking</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-booking`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
   
    ...commonAdminSidebarItems,

  ];

 

  const UsersSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/booking`}>Booking</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/booking`,
    },
    {
      label: <Link href={`/${role}/cartlist`}>Cart List</Link>,
      icon: <ShoppingCartOutlined />,
      key: `/${role}/cartlist`,
    }
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return UsersSidebarItems;
  else {
    return defaultSidebarItems;
  }
};