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
          console.log(userData);
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
        <h2 className="text-center my-2 bg-gray-100 p-2 w-72 mt-5 mx-auto">Register Form</h2>
        <div className="w-[40%] mx-auto ">
          <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)}>
           <div className="grid grid-cols-2 gap-5">
           <div className="">
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </div>
            <div className="">
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
            <div className="">
              <FormInput
                name="contactNo"
                type="number"
                size="large"
                label="Contact No"
              />
            </div>
            {/* <div className="flex flex-col"> */}
          
            <div className="">
              <FormSelectField
                size="large"
                name="gender"
                options={genderOptions}
                label="Gender"
                placeholder="Select"
              />
            </div>
         
            {/* </div> */}
            <div className="">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <div className="">
              <UploadImage name="file" />
            </div>
           </div>
           <Button className="mt-5 w-60 mx-auto" type="primary" htmlType="submit">
              Sing up
            </Button>
          </Form>
        </div>
    </div>
  );
};

export default LoginPage;
