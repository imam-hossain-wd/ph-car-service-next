/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Col, Input, Row, message } from "antd";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/InputForm";
import { useRouter } from "next/navigation";
import FormSelectField from "@/components/Forms/FormSelectField";
import { genderOptions } from "@/components/constatnts/global";
import { useCreateUserMutation } from "@/redux/api/userApi";
import UploadImage from "@/components/ui/uploadImage/UploadImage";

type FormValues = {
  Email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const imageHostKey = "e916bef22f10e9479c65eb72495de035";
  const onSubmit: SubmitHandler<FormValues> = (values: any) => {
    try {
      const obj = { ...values };
      const file = obj["file"];
      delete obj["file"];
      // const data = JSON.stringify(obj);

      message.loading("Creating User");
      const formData = new FormData();
      formData.append("image", file);

      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const userData = {
            ...obj,
            userImage: imgData.data.url,
          };
          createUser(userData);
          message.success("User create successfully");
          router.push("/login");
        });
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
      <Col sm={12} md={8} lg={8}>
        <h1 className="text-center my-4">Register Page</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </div>
            <div>
              <FormInput
                name="lastName"
                type="text"
                size="large"
                label="Last Name"
              />
            </div>
            <div>
              <FormInput name="email" type="text" size="large" label="Email" />
            </div>
            <div>
              <FormInput
                name="contactNo"
                type="number"
                size="large"
                label="Contact No"
              />
            </div>
            <div className="">
              <UploadImage name="file" />
            </div>
            <div>
              <FormSelectField
                size="large"
                name="gender"
                options={genderOptions}
                label="Gender"
                placeholder="Select"
              />
            </div>
            <div className="my-4">
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
