"use client";
import React, { useState } from "react";
import { Modal, message } from "antd";
import { addToCart } from "@/redux/slice/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

const ConfirmationModel = ({
  isCartModalOpen,
  setIsCartModalOpen,
  cartData,
}: any) => {


  const dispatch = useAppDispatch();
  const handleOk = () => {
    message.success("Add To cart Successful");
   dispatch(addToCart(cartData))
    setIsCartModalOpen(false);
  };

  const handleCancel = () => {
    setIsCartModalOpen(false);
  };

  return (
    <Modal
      width={370}
      // title="Service cart Data"
      open={isCartModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="text-center font-semibold w-40 mx-auto px-2 py-1 rounded mb-2 text-[14px] bg-gray-200">Add To Cart</p>
      <div className="flex justify-center items-center">
        <Image className="rounded" src={cartData?.imageUrl} width={280} height={150} alt={cartData?.name} />
      </div>
      <p className="text-md font-semibold my-4">Do you want to add <span className="text-red-400">{cartData?.name}</span> service </p>
    </Modal>
  );
};

export default ConfirmationModel;
