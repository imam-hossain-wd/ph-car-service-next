"use client";

import Loading from "@/components/view/loading/Loading";
import { useSingleBookingQuery } from "@/redux/api/bookingApi";

import Image from "next/image";

const BookingDetails = ({ params }: any) => {
  const { data, isLoading } = useSingleBookingQuery(params?.id);

  if (isLoading) {
    return <Loading />;
  }

  const { bookingName, bookingImage,date, service, user } = data;
  const {
    contactNo,
    email,
    firstName,
    gender,
    lastName,
    password,
    role,
    userImage,
  } = user;

  return (
    <div>
      <h1>Booking Details Page</h1>
      <div className="w-full lg:w-[60%] mx-auto">
        <div>
          <Image
          className="rounded"
            src={bookingImage}
            width={500}
            height={300}
            alt={bookingName}
          />
        </div>
        <div className="text-md">
          <p>Booking Name: {bookingName}</p>
          <p>Booking Price: {service?.price}</p>
          <p>Booking Date: {date}</p>
          <p>User Name: {firstName} {lastName}</p>
          <p>Email: {email}</p>
          <p>Contact No: {contactNo}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
