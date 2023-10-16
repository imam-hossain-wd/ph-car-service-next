"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { Button } from "antd";
import Image from "next/image";
import BookingModal from "../BookingModal/BookingModal";
import { useState } from "react";

const ProductDetails = (data: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData , setBookingData]= useState(null)
  const { id, name, imageUrl, availability, price, description } = data?.data;
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  console.log(bookingData);
  // console.log(cartItems, 'cartitems,,,,');
  const HandleAddToCart = (productDetails: any):any => {
    dispatch(addToCart(productDetails))
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <Image src={imageUrl} alt="product" width={460} height={300} />
        <h1 className="text-xl font-semibold text-black ">{name}</h1>
      </div>
      <div>
        <p>Rating: {price}</p>
        <p className="text-sm">
          Availability: {availability ? "In stock" : "Out of stock"}
        </p>
        <p className="text-sm">Price: {description}</p>
        <div className="flex justify-center items-center my-3">
          <Button
            onClick={() => HandleAddToCart(data?.data)}
            className="bg-sky-400 hover:text-white border-0 text-bold mr-5"
          >
            Add to cart
          </Button>
      <Button
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
      
      <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} bookingData={bookingData} />
    </div>
  );
};

export default ProductDetails;
