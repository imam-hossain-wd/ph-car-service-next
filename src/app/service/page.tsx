import SearchFiltering from "@/components/ui/searchFiltering/searchFiltering";
import ServiceProductsPage from "@/components/ui/serviceProducts/ServiceProducts";
import { useAppSelector } from "@/redux/hooks";
import { IService } from "@/types";

const ServicePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/service", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const services = await res.json();
  const datas = services?.data?.data;

  return (
    <div>
      <SearchFiltering />
      <h2 className="text-center my-5">Quality Car Care Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {datas && datas.map((service: any) => (
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
