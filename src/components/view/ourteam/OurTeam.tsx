/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { InstagramFilled, LinkedinFilled, TwitterCircleFilled } from "@ant-design/icons";
import Image from "next/image";

const OurTeam = () => {
  const technicianData = [
    {
      name: "RICHARD WAGNER",
      image: "https://i.ibb.co/sH8z0R6/technician1.png",
      designation: "Technician",
    },
    {
      name: "JAMES STRASSER",
      image: "https://i.ibb.co/Tct240y/technician2.png",
      designation: "Technician",
    },
    {
      name: "SIMPSON MARTIN",
      image: "https://i.ibb.co/ssXKkPt/technician3.png",
      designation: "Technician",
    },
    {
      name: "TOM ALBERT",
      image: "https://i.ibb.co/NrkYgcV/technician4.png",
      designation: "Technician",
    },
  ];

  return (
    <div className="mb-5">
      <h2 className="text-center text-3xl font-bold mb-2 bg-gray-200 p-1 w-full lg:w-96 mx-auto">Our Team</h2>
      <p className="w-full lg:w-[70%] mx-auto text-[17px] mt-5 mb-10 ">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <div className=" grid place-items-center  mx-auto grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        {technicianData?.map((data, index) => (
          <div key={index} className="lg:w-[300px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 bg-white drop-shadow-2xl rounded p-5">
            <Image
              className="border-2 border-red-500 rounded-md"
              src={data?.image}
              width={260}
              height={250}
              alt="service"
            />
         <div className="flex justify-evenly -ml-10 mt-3">
         <div>
            <p className="text-xl hover:text-red-500 transation-all duration-700 "><TwitterCircleFilled /></p>
            <p className="text-xl hover:text-red-500 transation-all duration-700 "><InstagramFilled /></p>
            <p className="text-xl hover:text-red-500 transation-all duration-700 "><LinkedinFilled /></p>
            </div>
            <div className="mt-2">
           <p className=" font-semibold mb-2">{data?.name}</p>
            <p className=" font-semibold text-red-700">{data?.designation}</p>
           </div>
         </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
