// "use client"
import ServiceProductsPage from "../serviceProducts/ServiceProducts";
import Link from "next/link";
import { Button, Select, message } from "antd";
import SearchFiltering from "../searchFiltering/searchFiltering";
import { useAppSelector } from "@/redux/hooks";


const HomePage =() => {
  const data = useAppSelector((state) => state.cart.items);
  console.log(data, 'ss datarrrrr');

    return (
      <div>
        <SearchFiltering />
        <div>
      <h2 className="text-center my-5">Quality Car Care Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] mx-auto">
        {/* {serviceDatas && serviceDatas.map((service: any) => (
          <ServiceProductsPage
            key={service.id}
            service={service}
          ></ServiceProductsPage>
        ))} */}
        
     
      </div>
            <Link className="flex justify-center items-center my-8 w-full" href="/service"> <Button type="primary">Show All Service </Button></Link>
    </div>
    </div>
    );
};

export default HomePage;


