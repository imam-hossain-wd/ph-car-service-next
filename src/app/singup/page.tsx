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
import { userSchema } from "@/schemas/singup";
import { yupResolver } from "@hookform/resolvers/yup";

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
      const data = JSON.stringify(obj);

      message.loading("Creating User");
      const formData = new FormData();
      formData.append("image", file);

      console.log(obj);

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
          console.log(userData)
          createUser(userData);
          message.success("User create successfully");
          router.push("/login");
        });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="shadow-2xl">

  
    <Row className=" flex justify-center items-center "
    >
      <Col sm={12} md={8} lg={8}>
        <h1 className="text-center my-2">Register Form</h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)}>
            <div className="my-2">
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </div>
            <div className="my-2">
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
            <div className="my-2">
              <FormInput
                name="contactNo"
                type="number"
                size="large"
                label="Contact No"
              />
            </div>
           {/* <div className="flex flex-col"> */}
           <div className="my-2 mr-5">
              <UploadImage name="file" />
            </div>
            <div className="my-2">
              <FormSelectField
                size="large"
                name="gender"
                options={genderOptions}
                label="Gender"
                placeholder="Select"
              />
            </div>
           {/* </div> */}
            <div className="my-2">
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
    </div>
  );
};

export default LoginPage;
