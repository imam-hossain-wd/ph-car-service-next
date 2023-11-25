/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Modal, message } from "antd";
import { removeFromCart } from "@/redux/slice/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDeleteBookingMutation } from "@/redux/api/bookingApi";

const DeleteModal = ({
  isDeleteModalOpen,
  setDeleteModalOpen,
  deleteData,
}: any) => {
  const [deleteBooking] = useDeleteBookingMutation();
  const dispatch = useAppDispatch();

  const handleOk = () => {
    if (deleteData?.bookingName) {
      deleteBooking(deleteData?.id);
      message.loading("Deleting");
      message.success("Add To cart Successful");
    }
    dispatch(removeFromCart(deleteData?.id));
    message.loading("Deleting");
    message.success("Add To cart Successful");
    setDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setDeleteModalOpen(false);
  };

  return (
    <Modal
      width={370}
      open={isDeleteModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="w-48 mx-auto text-md mb-2 font-semibold text-center bg-gray-200">
        Delete Modal
      </p>

      {deleteData?.name ? (
        <p>
          Are you sure to delete <br />
          {deleteData?.name}
        </p>
      ) : (
        <p>
          Are you sure to delete <br />
          {deleteData?.bookingName}
        </p>
      )}
    </Modal>
  );
};

export default DeleteModal;
