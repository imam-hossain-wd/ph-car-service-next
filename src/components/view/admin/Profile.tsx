"use client";

import Loading from "@/app/loading";
import { useGetAdminByIdQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";

const AdminProfile = () => {
  const user:any = getUserInfo();
  const id = user.id;
  const { data, isLoading } = useGetAdminByIdQuery(id);

  const {
    bloodGroup,
    contactNo,
    designation,
    email,
    emergencyContactNo,
    firstName,
    gender,
    lastName,
    middleName,
    permanentAddress,
    presentAddress,
    userImage,
  } = data && data;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <Image src={userImage} width={400} height={250} alt="admin profile" />
      </div>
      <div className="text-md">
        <p>Name : {`${firstName} ${middleName} ${lastName}`}</p>
        <p>Email : {email}</p>
        <p>Contact No : {contactNo}</p>
        <p>Emergancy Contact No : {emergencyContactNo}</p>
        <p>BloodGroup : {bloodGroup}</p>
        <p>Gender : {gender}</p>
        <p>Designation : {designation}</p>
        <p>PresentAddress : {presentAddress}</p>
        <p>PermanentAddress : {permanentAddress}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
