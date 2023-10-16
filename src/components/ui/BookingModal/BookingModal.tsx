import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';

const App: React.FC = ({isModalOpen,setIsModalOpen,bookingData}:any) => {
 
console.log(bookingData, 'bookingdata.....');

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
     
      <Modal title="Booking Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex justify-center items-center'>
            <Image src={bookingData?.imageUrl} alt="booking_image" width={200} height={100}/>
        </div>
        <div>
            <p>{bookingData?.name}</p>
            <p>{bookingData?.price}</p>
            <p>{bookingData?.description}</p>
        </div>
      </Modal>
    </>
  );
};

export default App;