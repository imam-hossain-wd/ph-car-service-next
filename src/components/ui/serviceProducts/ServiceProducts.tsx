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
    <div className="bg-white drop-shadow-2xl mx-auto p-5 w-[350px] rounded-lg" >
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
      onClick={() => {
    setCartData(service);
    showcartModel();
  }}  className="bg-[#0C1A2D] border-0 h-9 text-white text-[15px] w-28 font-semibold transition ease-in-out delay-150  hover:scale-110 duration-500 mr-8">Add to cart</Button>

      <Button   onClick={() => {
    setBookingData(service);
    showModal();

  }} className=" bg-[#0C1A2D] border-0 h-9 text-white text-[15px] w-28 font-semibold transition ease-in-out delay-150  hover:scale-110 duration-500">
        Booking</Button>
     </div>

    

     <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} bookingData={bookingData} />

     <ConfirmationModel  isCartModalOpen={isCartModalOpen} setIsCartModalOpen={setIsCartModalOpen} cartData={cartData}/>
    </div>
  );
};

export default ServiceProductsPage;
