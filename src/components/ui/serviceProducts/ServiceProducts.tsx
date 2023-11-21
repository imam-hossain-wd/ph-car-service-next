"use client"

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingModal from '../BookingModal/BookingModal'
import ConfirmationModel from "../confirmation-model/ConfirmationModel";
import { useAppSelector } from "@/redux/hooks";


const ServiceProductsPage = ({ service}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData , setBookingData]= useState(null);

  // const cart = useAppSelector((state) => state.cart.items);
  // console.log(cart, 'cartitems....');

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData]= useState(null)


  const showcartModel = ()=> {
    setIsCartModalOpen(true)
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="shadow-2xl mx-auto p-5 w-[350px] rounded-lg" >
      <Link href={`/service/${service?.id}`} className=" no-underline">
        <div className="flex justify-center">
        <Image className="rounded" src={service?.imageUrl} alt="product" width={300} height={200} />
        </div>
        <h4 className=" my-2 font-semibold text-black ">{service?.name}</h4>
      </Link>
      <p>Rating: {service?.price}</p>
      <p className="mt-2 text-md">
        Availability: {service?.availability ? "In stock" : "Out of stock"}
      </p> 
      <p className="my-2 text-md">Descritpion: {service?.description.slice(0,120)}<Link href={`/service/${service?.id}`}> Read More...</Link></p>
     <div className="flex justify-center items-center my-3">
     <Button
     type="primary"  onClick={() => {
    setCartData(service);
    showcartModel();
  }}  className="text-[15px] mr-8 w-28 h-8 font-semibold">Add to cart</Button>
     {/* <Button  onClick={() => {
    setCartData(service);
    showcartModel();
  }}  className=" bg-gray-700 hover:bg-gray-800 font-semibold w-28 h-8 text-white border-0 text-bold mr-10 text-[15px]">Add to cart</Button> */}

      <Button type="primary"   onClick={() => {
    setBookingData(service);
    showModal();
  }} className=" text-[15px] w-28 h-8 font-semibold">
        Booking</Button>
      {/* <Button   onClick={() => {
    setBookingData(service);
    showModal();
  }} className="bg-gray-700 text-[15px] hover:bg-gray-800 font-semibold  w-28 h-8 text-white border-0 text-bold">
        Booking</Button> */}
     </div>

    

     <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} bookingData={bookingData} />

     <ConfirmationModel  isCartModalOpen={isCartModalOpen} setIsCartModalOpen={setIsCartModalOpen} cartData={cartData}/>
    </div>
  );
};

export default ServiceProductsPage;
