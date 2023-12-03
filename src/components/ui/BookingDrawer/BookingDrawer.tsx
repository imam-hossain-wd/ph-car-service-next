import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Select, Space } from 'antd';
import Form from '@/components/Forms/Form';
import BookingServiceForm from '@/components/view/BookService/BookingServiceForm';

const { Option } = Select;

const BookingDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
    // window.open(url, "_blank").focus();;
  };


  return (
    <>
      <Button className='w-40 text-white text-[17px] hover:border-0 hover:bg-rose-500 border-white h-10 bg-transparent rounded-none'onClick={showDrawer}>
        Booked Now
      </Button>
      <Drawer
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space className='font-semibold -ml-[440px] bg-gray-200 p-2 rounded'>
            Book Best Service
          </Space>
        }
      >
         <Form submitHandler={onSubmit}>
            <BookingServiceForm />
          </Form>
      </Drawer>
    </>
  );
};

export default BookingDrawer;