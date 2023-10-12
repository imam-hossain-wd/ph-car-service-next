"use client";
import { Layout, Row, Col, Divider, Space, Menu } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter
      style={{
        backgroundColor: "#001529",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <h3>Car Dev</h3>
        <p>Your Car our Pariority</p>
      </div>
      <Divider style={{ backgroundColor: "white" }} />
      <Row justify="center">
        <Col className="flex flex-col justify-center items-center" xs={24} sm={12} md={6}>
          <h4>Quick Links</h4>

         <div className="flex flex-col">
         <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Link className="text-white mr-2" href="/">Home</Link>

            <Link className="text-white mr-2" href="/about">About</Link>

            <Link className="text-white mr-2" href="/contact">Contact</Link>
          </Menu>
         </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>Connect With Us</h4>
          <Space size={16}>
            <a href="#">
              <FacebookOutlined />
            </a>
            <a href="#">
              <TwitterOutlined />
            </a>
            <a href="#">
              <InstagramOutlined />
            </a>
            <a href="#">
              <LinkedinOutlined />
            </a>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>Contact Information</h4>
          <p>
            Your Company Address
            <br />
            City, State, Zip Code
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@yourcompany.com
          </p>
        </Col>
      </Row>
      <Divider style={{ backgroundColor: "white" }} />
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </AntFooter>
  );
};

export default Footer;
