"use client";

import Form from "@/components/Forms/Form";
import Image from "next/image";
import BookingServiceForm from "./BookingServiceForm";

const BookService = () => {

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
  };

  return (
    <div id="booking" className="p-5">
      <style jsx>
        {`
          .whiteInput input,
          select,
          textarea {
            background: white;
          }
        `}
      </style>

      <h4 className="bg-gray-200 text-lg text-center font-semibold my-3 w-80 rounded p-2 mx-auto">
        We Provide Best service
      </h4>
 

      <div className="flex flex-col lg:flex-row items-center justify-around">
    
        <div className="w-full lg:w-[500px] bg-white p-5   drop-shadow-2xl">
          <div>
            <h3 className="text-2xl text-center md:text-center  font-bold -mt-2 mb-2">
              Get A <span className="text-red-700  ">Service Now!</span>
            </h3>
          </div>
          <div className="w-full">
          <Form submitHandler={onSubmit}>
            <BookingServiceForm />
          </Form>
          </div>
        </div>
        <div className=" mt-8 lg:mt-0 bg-white drop-shadow-2xl  p-3 rounded">
          <Image
            className="w-full lg:w-[640px] rounded h-[400px] lg:h-[500px]"
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
