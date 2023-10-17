/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Col, Input, Row, message } from "antd";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/InputForm";
import { useRouter } from "next/navigation";
import { useUserLogInMutation } from "@/redux/api/authApi";
import { storeUserInto } from "@/services/auth.service";


type FormValues = {
  Email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
const [userLogIn]= useUserLogInMutation()


  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res =await userLogIn({...data}).unwrap()
      
      if (res?.accessToken) {
        router.push("/profile");
        message.success("Login Successful")
      }
      storeUserInto({accessToken:res?.accessToken })
      // console.log(res?.accessToken, 'tkn');
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
     <div >
     <img className="w-96 h-96" src="https://i.ibb.co/gMndB2j/loginpage.png" alt="login image"/>
     </div>
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="email" type="text" size="large" label="Email" />
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
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;