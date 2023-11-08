"use client";
import React, { useState } from "react";
import { Modal, message } from "antd";

const ConfirmationModel = ({
  isCartModalOpen,
  setIsCartModalOpen,
  cartData,
}: any) => {
  const [myDate, setMyDate] = useState(null);

  const handleDateChange = (date: any) => {
    setMyDate(date);
  };
  const handleOk = () => {
    message.success("Add To cart Successful");
    setIsCartModalOpen(false);
  };

  const handleCancel = () => {
    setIsCartModalOpen(false);
  };

  return (
    <Modal
      width={370}
      title="Service cart Data"
      open={isCartModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h3>Do You want To Add To cart {cartData?.name} service </h3>
    </Modal>
  );
};

export default ConfirmationModel;
