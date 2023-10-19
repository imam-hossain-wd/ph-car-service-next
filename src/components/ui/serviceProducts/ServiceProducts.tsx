import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const ServiceProductsPage = ({ service}: any) => {
  return (
    <div className="shadow-2xl w-[90%] mx-auto p-5" >
      <Link href={`/service/${service?.id}`} className="w-full no-underline">
        <Image src={service?.imageUrl} alt="product" width={360} height={200} />
        <h1 className="text-xl font-semibold text-black ">{service?.name}</h1>
      </Link>
      <p>Rating: {service?.price}</p>
      <p className="text-sm">
        Availability: {service?.availability ? "In stock" : "Out of stock"}
      </p>
      <p className="text-sm">Price: {service?.description.slice(0,150)}<Link href={`/service/${service?.id}`}> Read More...</Link></p>
     <div className="flex justify-center items-center my-3">
     <Button className="bg-sky-400 hover:text-white border-0 text-bold mr-5">Add to cart</Button>
      <Button className="bg-sky-400 hover:text-white border-0 text-bold">Booking</Button>
     </div>
    </div>
  );
};

export default ServiceProductsPage;
