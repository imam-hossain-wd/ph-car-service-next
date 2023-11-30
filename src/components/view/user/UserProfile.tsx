"use client";

import Loading from "@/app/loading";
import { useGetUserByIdQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Image from "next/image";
import gender from '../../../gender.png'
import { MailFilled, PhoneOutlined } from "@ant-design/icons";

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
  console.log(data, 'user image..')

  return (
    <div className="w-full lg:w-[40%] flex flex-col justify-center bg-white drop-shadow-2xl p-5 rounded mx-auto mt-10">
      <div className="flex justify-center">
        <Image
          className="w-80 h-60 rounded"
          src={data?.userImage}
          width={200}
          height={200}
          alt="profile image"
        />
      </div>

     <div className="flex flex-col lg:flex-row lg:items-center justify-between">
     <div className="lg:mt-5 lg:ml-8 text-[18px]">
        <p className="text-xl font-semibold">
          {data?.firstName} {data?.lastName}
        </p>
        <div className="flex -ml-1 mt-2">
        <Image className="w-7 h-6" src={gender} width={100} height={100} alt="gander"/>
        <p className="capitalize"> {data?.gender}</p>
        </div>

        <p className=""> <span className="text-lg "><PhoneOutlined /></span>  {data?.contactNo}</p>

        <p className=""> <span className="text-lg mr-2"><MailFilled /></span> {data?.email}</p>

      </div>
        <Button className="mt-4" type="primary">Change Password</Button>
     </div>
    </div>
  );
};

export default UserProfile;
