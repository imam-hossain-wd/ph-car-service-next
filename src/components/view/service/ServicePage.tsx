"use client";

import SearchFiltering from "@/components/ui/searchFiltering/SearchFiltering";
import ServiceProductsPage from "@/components/ui/serviceProducts/ServiceProducts";
import { useAppSelector } from "@/redux/hooks";

const ServicePage = () => {
  const { data: serviceDatas } = useAppSelector((state) => state.service);
  return (
    <div className="mb-10">
      <div className="w-80 -mt-2 mx-auto">
        <h3 className="text-center bg-gray-300 p-1 rounded mb-5 -mt-5">
          Quality Car Care Solutions
        </h3>
      </div>
      <div className="my-5">
        <SearchFiltering />
      </div>

      {serviceDatas?.length < 1 && (
        <p className="text-3xl mb-20 font-semibold text-center text-red-400">
          No Data Found In Search Result
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto">
        {serviceDatas &&
          serviceDatas.map((service: any) => (
            <ServiceProductsPage
              key={service.id}
              service={service}
            ></ServiceProductsPage>
          ))}
      </div>
    </div>
  );
};

export default ServicePage;
