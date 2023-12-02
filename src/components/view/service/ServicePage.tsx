"use client";

import SearchFiltering from "@/components/ui/searchFiltering/SearchFiltering";
import ServiceProductsPage from "@/components/ui/serviceProducts/ServiceProducts";
import { useAppSelector } from "@/redux/hooks";

const ServicePage = () => {
  const { data: serviceDatas } = useAppSelector((state) => state.service);

  return (
    <div>
      <div className="mt-5">
        <SearchFiltering />
      </div>
      <div className="w-96 mx-auto  mt-7">
        <h2 className="text-center bg-gray-300 p-1 rounded my-8">
          Quality Car Care Solutions
        </h2>
      </div>
      {serviceDatas?.length < 1 && (
        <p className="text-3xl mb-20 font-semibold text-center text-red-400">
          No Data Found In Search Result
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
