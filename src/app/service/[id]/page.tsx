
import ProductDetails from "@/components/ui/productDetails/ProductDetails";

const getServiceDetailsData =async ({params}:any)=> {
    const res = await fetch(`http://localhost:5000/api/v1/service/${params.id}`);
    const data = await res.json();
    return data
}
const ServiceDetailsPage = async ({ params }: any) => {
    const data = await getServiceDetailsData({ params });
  
    return (
      <div className="shadow-2xl w-[60%] mx-auto p-5 flex flex-col justify-center items-center] mx-auto">
        <ProductDetails data = {data?.data} />
      </div>
    );
  };
  
  export default ServiceDetailsPage;

