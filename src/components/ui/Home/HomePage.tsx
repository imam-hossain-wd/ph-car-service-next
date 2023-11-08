// "use client"
import ServiceProductsPage from "../serviceProducts/ServiceProducts";
import Link from "next/link";
import { Button } from "antd";
import SearchFiltering from "../searchFiltering/searchFiltering";



const HomePage =async () => {

  const res = await fetch(`http://localhost:5000/api/v1/service/?size=6`, {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const services = await res.json();
  const serviceDatas = services?.data?.data;
;
    return (
      <div>
        <SearchFiltering />
        <div>
     <div className="w-96 mx-auto  mt-7">
     <h2 className="text-center bg-gray-300 p-1 rounded my-8">Quality Car Care Solutions</h2>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {serviceDatas && serviceDatas.map((service: any) => (
          <ServiceProductsPage
            key={service.id}
            service={service}
          ></ServiceProductsPage>
        ))}
        
     
      </div>
            <Link className="flex justify-center items-center my-8 w-full" href="/service"> <Button className="bg-primary w-36 h-9" type="primary">Show All Service </Button></Link>
    </div>
    </div>
    );
};

export default HomePage;


