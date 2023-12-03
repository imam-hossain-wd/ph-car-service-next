/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, message } from "antd";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/InputForm";
import { useRouter } from "next/navigation";
import { useCreateUserMutation } from "@/redux/api/userApi";
import UploadImage from "@/components/ui/uploadImage/UploadImage";
import { userSchema } from "@/schemas/singup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import FormRadio from "@/components/Forms/InputRadio";

type FormValues = {
  Email: string;
  password: string;
};

const SingUpPage = () => {


  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const imageHostKey = "e916bef22f10e9479c65eb72495de035";

  const onSubmit: SubmitHandler<FormValues> = (values: any) => {
    try {
      const obj = { ...values };
      const file = obj["file"];
      delete obj["file"];

      if (obj.gender) {
        obj.gender = obj.gender.toLowerCase();
      }

      const data = JSON.stringify(obj);
      if (!file) {
        message.error("Image is Required");
        return;
      }
      message.loading("Creating User");
      const formData = new FormData();
      formData.append("image", file);
      // console.log(obj , 'obj');

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
          console.log(userData, "userData");
          createUser(userData);
          message.success("User create successfully");
          router.push("/login");
        });
  

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" p-5 ">
      <div
        className="w-full lg:w-[40%] -mt-12 bg-white drop-shadow-2xl mx-auto  p-5 rounded-lg"
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <div>
          <h2 className="text-center  p-2 w-full lg:w-72 mx-auto">Create An Account</h2>
          <p className="text-sm text-center w-full lg:w-72 mx-auto mb-2">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </div>
        <Form submitHandler={onSubmit}  resolver={yupResolver(userSchema)}>
          <div className="grid grid-cols-1 gap-1">
            <div className="">
              <FormInput
                name="firstName"
                type="text"
                size="large"
                placeholder="First Name"
              />
            </div>
            <div className="">
              <FormInput
                name="lastName"
                type="text"
                placeholder="Last Name"
                size="large"
              />
            </div>

            <div className="">
              <FormInput
                name="email"
                type="text"
                size="large"
                placeholder="Email"
              />
            </div>
            <div className="">
              <FormInput
                name="contactNo"
                type="number"
                size="large"
                placeholder="Contact No"
              />
            </div>

            <div className="">
              <FormInput
                name="password"
                type="password"
                size="large"
                placeholder="Strong Password"
              />
            </div>
            <div className="flex  mt-2 items-center">
              <div className="">
                <UploadImage name="file" />
              </div>
              <div className="ml-10">
                 <FormRadio name="gender" options={['Male', 'Female', 'Other']} label="Gender" defaultValue="Male" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="mt-4 bg-[#0C1A2D] w-60 h-9" type="primary" htmlType="submit">
              Create Account
            </Button>
          </div>
          <p className="text-sm text-center mt-3 font-semibold">
            Already Have An Account?{" "}
            <Link className="text-red-500" href="/login">
              Log In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SingUpPage;
