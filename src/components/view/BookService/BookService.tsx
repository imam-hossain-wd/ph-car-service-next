"use client"

import Image from "next/image";
import { useForm } from "react-hook-form";

const BookService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
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

      <h4 className="bg-gray-200 text-xl font-semibold my-5 w-80 rounded p-2 mx-auto">We Provide Best service</h4>

      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="bg-white p-5 drop-shadow-2xl">
          <div>
            <h3 className="text-2xl text-center md:text-center  font-bold -mt-2 mb-2">
              Get A <span className="text-red-700  ">Service Now!</span>
            </h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[450px] whiteInput"
          >
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="border w-full border-gray-400 focus:outline-none p-2 mt-3"
              placeholder="Enter Name"
            />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="border w-full border-gray-400 focus:outline-none mt-3 p-2"
              placeholder="Email"
            />
            <input
              type="tel"
              {...register("phone", { required: "Phone is required" })}
              className="border border-gray-400 focus:outline-none w-full mt-3 p-2"
              placeholder="Phone"
            />
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className="border border-gray-400 focus:outline-none w-full mt-3 p-2"
              placeholder="Address"
            />
            <br />

            <div className="flex flex-col md:flex-row lg:flex-row justify-between">
              <div className="w-full md:w-[48%] lg:w-[218px]">
                <select
                  {...register("brand", { required: "Brand is required" })}
                  className="select border w-full  border-gray-400 focus:outline-none p-2 mr-4 mt-3"
                >
                  <option
                    defaultValue=" Select Your vehicle model"
                    disabled
                    selected
                  >
                    Select Your vehicle model
                  </option>
                  <option>Toyota</option>
                  <option>Jeep</option>
                  <option>Audi</option>
                  <option>Truck</option>
                  <option>Land Rover</option>
                  <option>Land Lexus</option>
                  <option>Mazda</option>
                </select>
              </div>

              <div className="w-full md:w-[48%] lg:w-[218px]">
                <select
                  {...register("service_name", {
                    required: "Service Name is required",
                  })}
                  className="select border w-full  border-gray-400 focus:outline-none p-2 mr-4 mt-3"
                >
                  <option
                    defaultValue=" Select Your vehicle model"
                    disabled
                    selected
                  >
                    Select Your Service
                  </option>
                  <option>Bettery</option>
                  <option>washing</option>
                  <option>Oil Change</option>
                  <option>Body Repair</option>
                  <option>Engine Repair</option>
                  <option>Color Repair</option>
                  <option>Service</option>
                </select>
                <br />
              </div>
            </div>
            <input
              {...register("reservation_date", {
                required: "Reservation Date is required",
              })}
              type="date"
              className="border w-full border-gray-400 focus:outline-none mt-3 p-2"
              placeholder="Reservation Date"
            />

            <textarea
              {...register("service_description", {
                required: "Service Description is required",
              })}
              className="textarea textarea-bordered border border-gray-400 focus:outline-none w-full h-24 mt-3"
              placeholder="Describe service"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-neavyBlue py-2 rounded font-semibold text-white hover:bg-neavyBlueHover px-10 transition duration-500 w-48 mt-2 "
              >
                Submit
              </button>
            </div>
          </form>
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
