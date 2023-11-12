"use client";
import { useGetUserByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";

const ProfilePage = () => {
  const user = getUserInfo() as any;
  const { data: userData, error } = useGetUserByIdQuery(user.id);
  console.log(userData, "userdata...");

  return (
    <div>
      <h1 className="font-bold">{user?.role} Profile page</h1>
      <div className="flex flex-col justify-center items-center ">

       <Image
          src={userData?.userImage}
          width={300}
          height={250}
          alt="user image"
        />

      <div className="text-md ">
      <p>Name : {userData?.firstName && userData?.firstName}</p>
        <p>Email : {userData?.email}</p>
        <p>Contact No : {userData?.contactNo}</p>
        <p>Gender{userData?.gender}</p>
        <p>User Role:{userData?.role}</p>
      </div>
      </div>
    </div>
  );
};

export default ProfilePage;

