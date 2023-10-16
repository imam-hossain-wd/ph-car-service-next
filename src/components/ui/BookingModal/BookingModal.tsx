import React, { useState } from 'react';
import {  DatePicker,  Input, Modal} from 'antd';
import Image from 'next/image';
import { useAddBookingMutation } from '@/redux/api/bookingApi';
import moment from 'moment';
import { getUserInfo } from '@/services/auth.service';
import { IBookingData } from '@/types';



const App = ({isModalOpen,setIsModalOpen,bookingData}:any) => {
  const [myDate, setMyDate] = useState(null);

  const user = getUserInfo()

  const [addBooking]= useAddBookingMutation()

  const BookingData:IBookingData ={
    bookingName : bookingData?.name,
    //@ts-ignore
    userId : user?.id,
    serviceId : bookingData?.id,
    date: myDate ? moment(myDate).format('YYYY-MM-DDTHH:mm:ss[Z]') : ''
  }
  console.log(BookingData, 'bbdata');

  const handleDateChange = (date:any) => {
    setMyDate(date)
  };
  const handleOk = () => {
    addBooking(BookingData)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     
      <Modal title="Booking Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
        <div className='flex justify-center items-center'>
            <Image src={bookingData?.imageUrl} alt="booking_image" width={300} height={200}/>
        </div>
        </div>
        <div>
          <p>Name</p>
        <Input defaultValue={bookingData?.name} placeholder="Basic usage" />
        </div>
        <div>
          <p>Price</p>
        <Input defaultValue={bookingData?.price} placeholder="Basic usage" />
        </div>
        <div>
          <p>Description</p>
        <Input defaultValue={bookingData?.description} placeholder="Basic usage" />
        </div>
        <div>
          <p>Booking date</p>
        <DatePicker onChange={handleDateChange} className='w-full' />
        </div>
      </Modal>
    </>
  );
};

export default App;