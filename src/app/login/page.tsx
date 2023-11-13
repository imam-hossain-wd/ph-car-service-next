/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Col, Input, Row, Space, message } from "antd";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/InputForm";
import { useRouter } from "next/navigation";
import { useUserLogInMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInto } from "@/services/auth.service";
import Link from "next/link";
import { GithubFilled, GoogleCircleFilled } from "@ant-design/icons";

type FormValues = {
  Email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [userLogIn] = useUserLogInMutation();

  //@ts-ignore
  const { role } = getUserInfo();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogIn({ ...data }).unwrap();

      if (res?.accessToken) {
        router.push(`${role}/profile`);
        message.success("Login Successful");
      }
      storeUserInto({ accessToken: res?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="bg-white shadow-2xl border-2 border-gray-200">
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <div>
            <img
              className="w-96 h-96"
              src="https://i.ibb.co/gMndB2j/loginpage.png"
              alt="login image"
            />
          </div>
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h3 className="text-center text-lg  py-1 rounded mx-auto mb-3 bg-gray-200">
            First login your account
          </h3>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="Email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button type="primary" className="w-full" htmlType="submit">
                Login
              </Button>
            </Form>

            <div className="flex justify-center items-center mt-4">
              <hr className="w-32 mr-2 text-[15px]" /> or Sing in with{" "}
              <hr className="ml-2 w-32" />
            </div>
            <div className="mt-5 flex justify-center ">
              <Link
                href="/facebook"
                className="text-4xl rounded-full 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mr-5 text-black"
              >
                <GithubFilled />
              </Link>

              <Link
                href="/facebook"
                className="text-4xl rounded-full 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black"
              >
                <GoogleCircleFilled />
              </Link>
            </div>
            <div className="mt-5 flex justify-center bg-gray-200">
              <p className="text-[14px]">
                New to CarDev?{" "}
                <Link href="/singup" className="text-red-400 underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
