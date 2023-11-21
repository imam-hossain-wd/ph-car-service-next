"use client";

import Loading from "@/app/loading";
import { useGetUserByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";

const UserProfile = () => {
  //@ts-ignore
  const { id } = getUserInfo();
  const { data, isLoading, isError } = useGetUserByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.error(isError);
  }
  // console.log(data, 'user image..')

  return (
    <div className="w-[60%] mx-auto mt-10">
      <div>
        <Image
          className="w-96 h-72 rounded"
          src={data?.userImage}
          width={200}
          height={200}
          alt="profile image"
        />
      </div>

      <div className="mt-3 text-md">
        <p>
          Name : {data?.firstName} {data?.lastName}
        </p>
        <p className="capitalize">Gender : {data?.gender}</p>
        <p>Contact No: {data?.contactNo}</p>
        <p>Email : {data?.email}</p>
        <p>Role : {data?.role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
