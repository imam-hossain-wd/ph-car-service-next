"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import FormInput from "@/components/Forms/InputForm";
import { genderOptions, selectServiceOptions, vehicleModelOptions } from "@/components/constatnts/global";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useForm } from "react-hook-form";

const BookService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const address = data.address;
    const brand = data.brand;
    const service_name = data.service_name;
    const reservation_date = data.reservation_date;
    const service_description = data.service_description;

    const number = "+971568703512";
    const message =
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Address: " +
      address +
      "\n" +
      "Brand: " +
      brand +
      "\n" +
      "Service Name: " +
      service_name +
      "\n" +
      "Reservation Date: " +
      reservation_date +
      "\n" +
      "Service Description: " +
      service_description;

    const url =
      "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    // window.open(url, "_blank").focus();

    reset();
  };

  return (
    <div id="booking" className="my-10">
      <style jsx>
        {`
          .whiteInput input,
          select,
          textarea {
            background: white;
          }
        `}
      </style>

      <h4 className="bg-gray-200 text-xl font-semibold my-5 w-80 rounded p-2 mx-auto">
        We Provide Best service
      </h4>

      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="bg-white p-5 drop-shadow-2xl">
          <div>
            <h3 className="text-2xl text-center md:text-center  font-bold -mt-2 mb-2">
              Get A <span className="text-red-700  ">Service Now!</span>
            </h3>
          </div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
              }}
            >
              <div className="">
               <div className="mb-1">
               <FormInput
                  type="text"
                  name="firstName"
                  size="large"
                  placeholder="Full Name"
                />
               </div>
               <div className="mb-1" >
               <FormInput
                  type="text"
                  name="email"
                  size="large"
                  placeholder="Email"
                />
               </div>
               <div className="mb-1" >
               <FormInput
                  type="text"
                  name="phone"
                  size="large"
                  placeholder="Phone"
                />
               </div>

               <div className="mb-1" >
               <FormInput
                  type="text"
                  name="address"
                  size="large"
                  placeholder="Address"
                />
               </div>
                
              
               
               <div className="flex justify-between -mb-1">
               <div className="w-full lg:w-48 mr-4">
               <FormSelectField
                  size="large"
                  name="vehicleModel"
                  options={vehicleModelOptions}
                  placeholder="Select your vehicle model"
                />
               </div>
                <div className="w-full lg:w-48">
                <FormSelectField
                  size="large"
                  name="serviceName"
                  options={selectServiceOptions}
                  placeholder="Select your Service"
                />
                </div>
               </div>

                <div className="mb-3">
                <FormDatePicker
                  name="dateOfBirth"
                  size="large"
                />
                </div>
                 <FormTextArea
                    name="presentAddress"
                    placeholder="Describe Service"
                    rows={4}
                  />
              </div>
            </div>
            <div className="flex justify-center">
            <Button htmlType="submit" className="bg-[#0C1A2D] border-0 h-9 text-white text-[15px] w-36 mx-auto font-semibold transition ease-in-out delay-150 duration-500">
              Book Now
            </Button>
            </div>
          </Form>
        </div>
        <div className=" mt-8 lg:mt-0 drop-shadow-2xl bg-white p-5 rounded">
          <Image
            className="w-[650px] h-[500px]"
            src="https://i.ibb.co/cyxmq4p/brake-disc-1749633-1920.jpg"
            width={500}
            height={500}
            alt="car repair and servicing"
          />
        </div>
      </div>
    </div>
  );
};

export default BookService;
