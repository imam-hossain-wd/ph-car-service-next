"use client"
import {  Avatar, Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import Link from 'next/link';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button  type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <Layout className="layout">
    <Header className='flex justify-between items-center'>
      <div>
       <Link className='text-3xl text-white' href="/"> Car Service</Link>
      </div>
     <div  className='flex justify-center items-center'>
     <Menu
    
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']} 
      >
        <Menu.Item key="1">
          <Link href="/">Home</Link> 
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/about">About</Link> 
        </Menu.Item>
        <Menu.Item key="3">
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