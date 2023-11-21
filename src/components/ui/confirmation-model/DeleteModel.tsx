"use client";

import { Modal, message } from "antd";
import {  removeFromCart } from "@/redux/slice/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


const DeleteModal = ({
  isCartModalOpen,setIsCartModalOpen, cartListData
}: any) => {


  const dispatch = useAppDispatch();
  
  const handleOk = () => {
    message.success("Add To cart Successful");
   dispatch(removeFromCart(cartListData?.id))
    setIsCartModalOpen(false);
  };

  const handleCancel = () => {
    setIsCartModalOpen(false);
  };

  return (
    <Modal
      width={370}
      open={isCartModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="w-48 mx-auto text-md mb-2 font-semibold text-center bg-gray-200">Delete Modal</p>
     <p>Are you sure to delete <br />
     {cartListData?.name}
     </p>
    </Modal>
  );
};

export default DeleteModal;
