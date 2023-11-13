import React, { useState } from "react";
import { DatePicker, Input, Modal, message } from "antd";
import Image from "next/image";
import { useAddBookingMutation } from "@/redux/api/bookingApi";
import moment from "moment";
import { getUserInfo } from "@/services/auth.service";
import { IBookingData } from "@/types";

const App = ({ isModalOpen, setIsModalOpen, bookingData }: any) => {
  const [myDate, setMyDate] = useState(null);

  const user = getUserInfo();

  const [addBooking] = useAddBookingMutation();

  const BookingData: IBookingData = {
    bookingName: bookingData?.name,
    //@ts-ignore
    userId: user?.id,
    bookingImage: bookingData?.imageUrl,
    serviceId: bookingData?.id,
    date: myDate ? moment(myDate).format("YYYY-MM-DDTHH:mm:ss[Z]") : "",
  };
  
  const handleDateChange = (date: any) => {
    setMyDate(date);
  };
  const handleOk = () => {
    addBooking(BookingData);
    setIsModalOpen(false);
    message.success("Booking create successfully")
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
 
     <Modal
    width={500}
      title="Booking Data"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>
        <div className="flex justify-center items-center">
          <Image
            src={bookingData?.imageUrl}
            alt="booking_image"
            width={400}
            height={180}
          />
        </div>
      </div>
      <div className="mt-5">
        <p> <span className="text-[15px] mt-2 font-semibold"> Name : </span> <span className="text-[14px] font-semibold">{bookingData?.name}</span> </p>
      </div>
      <div>
           <p> <span className="text-[15px] mt-2 font-semibold"> Price : </span> <span className="text-[14px] font-semibold">{bookingData?.price}</span> </p>
      </div>
      <div>
           <p> <span className="text-[15px] mt-2 font-semibold"> Description : </span> <span className="">{bookingData?.description}</span> </p>
      </div>
      {/* <div>
        <p>Description</p>
        <Input
          defaultValue={bookingData?.description}
          placeholder="Basic usage"
        />
      </div> */}
      <div className="flex items-center mt-2">
        <p className="text-[15px] font-semibold mr-4">Booking date :</p>
        <DatePicker onChange={handleDateChange} className="h-6" />
      </div>
    </Modal>

  );
};

export default App;
