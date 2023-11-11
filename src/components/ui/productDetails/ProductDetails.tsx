"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { Button } from "antd";
import Image from "next/image";
import BookingModal from "../BookingModal/BookingModal";
import { useState } from "react";
import ConfirmationModel from "../confirmation-model/ConfirmationModel";

const ProductDetails = (data: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState(null);

  const { id, name, imageUrl, availability, price, description } = data?.data;
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const HandleAddToCart = (productDetails: any): any => {
    dispatch(addToCart(productDetails));
  };

  const showcartModel = () => {
    setIsCartModalOpen(true);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mt-4 mb-4">
        <Image
          className="w-full lg:w-[500px] rounded"
          src={imageUrl}
          alt="product"
          width={600}
          height={250}
        />
      </div>
      <div>
        <div className="ml-5 mt-2">
          <h4 className=" font-semibold text-black ">Name : {name}</h4>
          <p>
            <span className="font-semibold">Price:</span> {price}
          </p>
          <p className="text-md">
            <span className="font-semibold">Availability:</span>
            {availability ? "In stock" : "Out of stock"}
          </p>
          <p className="text-md">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>
        <div className="flex justify-center items-center my-5">
          <Button
            className=" w-28 mr-5"
            type="primary"
            onClick={() => {
              setCartData(data?.data);
              showcartModel();
            }}
          >
            Add To Cart
          </Button>

          <Button
            className=" w-28"
            type="primary"
            onClick={() => {
              setBookingData(data?.data);
              showModal();
            }}
          >
            Booking
          </Button>
        </div>
      </div>

      <BookingModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        bookingData={bookingData}
      />

      <ConfirmationModel
        isCartModalOpen={isCartModalOpen}
        setIsCartModalOpen={setIsCartModalOpen}
        cartData={cartData}
      />
    </div>
  );
};

export default ProductDetails;
