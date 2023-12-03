"use client"

import ServiceProductsPage from "../serviceProducts/ServiceProducts";
import Link from "next/link";
import { Button } from "antd";
import SearchFiltering from "../searchFiltering/SearchFiltering";
import { useAppSelector } from "@/redux/hooks";


const HomePage = () => {
  const { data:serviceDatas} = useAppSelector((state) => state.service);

  return (
    <div className="mt-5">
      <SearchFiltering />
      <div>
        <div className="w-full lg:w-96 mx-auto -mt-3">
          <h2 className="text-center bg-gray-300 p-1 rounded my-8">
            Quality Car Care Solutions
          </h2>
        </div>
        {
      serviceDatas?.length < 1 && <p className="text-3xl font-semibold text-center text-red-400">No Data Found In Search Result</p>
     }
        <div className="grid grid-cols-1 place-items-center mt-5 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {serviceDatas &&
            serviceDatas.slice(0,6).map((service: any) => (
              <ServiceProductsPage
                key={service.id}
                service={service}
              ></ServiceProductsPage>
            ))}
        </div>
        <Link
          className="flex justify-center items-center my-8 w-full"
          href="/service"
        >
          {" "}
          <Button className="bg-[#0C1A2D] border-0 h-9 text-white text-[15px] w-40 font-semibold transition ease-in-out delay-150  duration-500 mr-8" >
            Show All Service{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
