"use client"

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookingModal from '../BookingModal/BookingModal'
import ConfirmationModel from "../confirmation-model/ConfirmationModel";



const ServiceProductsPage = ({ service}: any) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData , setBookingData]= useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData]= useState(null)

  const showcartModel = ()=> {
    setIsCartModalOpen(true)
  }
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white drop-shadow-xl  rounded-lg" >
      <Link href={`/service/${service?.id}`} className=" no-underline">
        <div className="flex justify-center p-5">
        <Image className="rounded w-full" src={service?.imageUrl} alt="product" width={180} height={200} />
        </div>
      </Link>

      <div className="text-[15px] px-5 text-[#282828] ">
      <h4 className="mb-2 font-semibold text-black ">{service?.name}</h4>
      <p className="">Rating: {service?.price}</p>
      <p className="mt-1 ">
        Availability: {service?.availability ? "In stock" : "Out of stock"}
      </p> 
      <p className="mt-[6px] mb-3">Descritpion: {service?.description.slice(0,70)}<Link className="text-[13px]" href={`/service/${service?.id}`}> Read More...</Link></p>
      </div>
     <div className="flex px-3 py-2 justify-center items-center mb-2">
     <Button
      onClick={() => {
    setCartData(service);
    showcartModel();
  }}  className="bg-[#0C1A2D] flex justify-center items-center border-0 h-7 text-white text-[15px] w-28  transition ease-in-out delay-150  hover:scale-110 duration-500 mr-8">Add to cart</Button>

      <Button   onClick={() => {
    setBookingData(service);
    showModal();

  }} className=" bg-[#0C1A2D] border-0 h-7 flex justify-center items-center text-white text-[15px] w-28  transition ease-in-out delay-150  hover:scale-110 duration-500">
        Booking</Button>
     </div>

     <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} bookingData={bookingData} />

     <ConfirmationModel  isCartModalOpen={isCartModalOpen} setIsCartModalOpen={setIsCartModalOpen} cartData={cartData}/>
    </div>
  );
};

export default ServiceProductsPage;
